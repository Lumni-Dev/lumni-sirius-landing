/* Orb 3D do Sirius (Three.js, global THREE). Monocromático (branco/cinza sobre
 * preto). Estrela de 4 pontas de partículas bem vivas (wander rápido), e uma
 * pequena estrela satélite orbitando perto, com um rastro sutil de partículas
 * atrás. Em volta: raios de difração
 * em cruz no núcleo (assinatura de Sirius, a estrela mais brilhante do céu),
 * uma fita de luz em lemniscata (∞) que precessa em 3D com pulsos correndo ao
 * longo dela, estrelas cadentes raras ao fundo, brasas lançadas nos picos da
 * fala que caem de volta, um céu profundo de estrelinhas e uma câmera que
 * flutua de leve (paralaxe). Centro elevado para o texto "Sirius" ficar
 * abaixo. Render só quando o quadro está visível. */
(function () {
  "use strict";
  if (!window.THREE) return;
  const THREE = window.THREE;

  let renderer, scene, camera, clock, canvas, stage;
  let mainGroup, mainMat, satStar, satMat, satTrail, satTrailGeo;
  let raf = null;
  let running = false;

  const CENTER = new THREE.Vector3(0, 0.12, 0);

  // Órbita do satélite: plano DIAGONAL (eixo maior de baixo-esq. a cima-dir.),
  // inclinado no z para dar profundidade — fica mais bonito.
  const orbU = new THREE.Vector3(0.8, 0.62, 0).normalize();
  const orbV = new THREE.Vector3(-0.4, 0.5, 0.78).normalize();
  const ORBIT_R = 1.05;
  const ORBIT_SPEED = 0.75;
  const TRAIL_N = 90;
  const TRAIL_STEP = 0.02;
  const _tmp = new THREE.Vector3();
  const _axis = new THREE.Vector3();
  const _dq = new THREE.Quaternion();

  const shared = {
    uTime: { value: 0 },
    uEnergy: { value: 0 }, // 0 = calmo, 1 = agitado (pensando/falando)
    uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) },
    uTex: { value: null },
  };
  let thinking = false;
  let audioProvider = null;
  let energy = 0;
  let lastT = 0;
  let mainRotY = 0;
  let waveRings = [];
  let glow = null;
  let satGlow = null;
  let audioSmooth = 0; // envelope suave da fala (ataque rápido, cauda lenta)
  let waveMaxR = 12; // recalculado no resize p/ atravessar a largura do site
  const WAVE_COUNT = 2;
  const WAVE_SPEED = 0.048;
  const CANVAS_PAD = 24; // folga além da viewport
  const BASE_CAM_Z = 7.6;
  const BASE_FOV = 40;
  /** < 1 aproxima a câmera no recorte do stage (estrela um pouco maior). */
  const ORB_FRAME = 0.72;

  // Camadas "mágicas" extras: céu profundo, fita de luz, raios de difração,
  // estrelas cadentes e brasas de fala.
  let starfield = null;
  let ribbon = null; // fita de estrelas fluindo numa lemniscata (∞) 3D
  let ribbonFlow = 0;
  let raysA = null,
    raysB = null,
    coreGlow = null;
  let meteors = [];
  let meteorGeo = null;
  let embers = null; // fagulhas lançadas nos picos da fala
  let lastBurst = -10;
  let lookX = 0;
  let lookY = 0;
  let canvasHalfW = 0;
  let canvasHalfH = 0;
  let lastResizeKey = "";
  let resizeTimers = [];
  const LARGE_MQ =
    typeof window.matchMedia === "function"
      ? window.matchMedia("(min-width: 960px)")
      : null;
  const REDUCE_MQ =
    typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : null;
  const RIBBON_N = 360;
  const RIBBON_A = 1.85; // "raio" da lemniscata (maior que a estrela)
  const METEOR_N = 2;
  const METEOR_TRAIL = 24;
  const EMBER_N = 140;
  const _rE = new THREE.Euler();
  const _rQ = new THREE.Quaternion();
  const _rU = new THREE.Vector3();
  const _rV = new THREE.Vector3();
  const _rW = new THREE.Vector3();

  function starVertices(outer, inner, spikes) {
    const v = [];
    const step = Math.PI / spikes;
    for (let i = 0; i < spikes * 2; i += 1) {
      const r = i % 2 === 0 ? outer : inner;
      const a = i * step - Math.PI / 2;
      v.push([Math.cos(a) * r, Math.sin(a) * r]);
    }
    return v;
  }

  function gaussian() {
    let u = 0,
      w = 0;
    while (u === 0) u = Math.random();
    while (w === 0) w = Math.random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * w);
  }

  function softDotTexture() {
    const c = document.createElement("canvas");
    c.width = 64;
    c.height = 64;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0.0, "rgba(255,255,255,1)");
    g.addColorStop(0.3, "rgba(255,255,255,0.75)");
    g.addColorStop(0.6, "rgba(255,255,255,0.25)");
    g.addColorStop(1.0, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  }

  // Anel suave e borrado (para as ondas de fala).
  function ringTexture() {
    const c = document.createElement("canvas");
    c.width = 256;
    c.height = 256;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0.0, "rgba(255,255,255,0)");
    g.addColorStop(0.58, "rgba(255,255,255,0)");
    g.addColorStop(0.8, "rgba(255,255,255,0.8)");
    g.addColorStop(0.9, "rgba(255,255,255,0.3)");
    g.addColorStop(1.0, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  }

  // Aura suave: glow central que respira com a fala (efeito tipo Patronus).
  function glowTexture() {
    const c = document.createElement("canvas");
    c.width = 256;
    c.height = 256;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0.0, "rgba(255,255,255,1)");
    g.addColorStop(0.12, "rgba(255,255,255,0.65)");
    g.addColorStop(0.28, "rgba(255,255,255,0.3)");
    g.addColorStop(0.6, "rgba(255,255,255,0.09)");
    g.addColorStop(1.0, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  }

  // Raios de difração em cruz — spike afiado com bloom bem leve.
  function rayTexture() {
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 512;
    const ctx = c.getContext("2d");
    const ray = (angle, len, width, alpha) => {
      ctx.save();
      ctx.translate(256, 256);
      ctx.rotate(angle);
      ctx.scale(len, width);
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 256);
      g.addColorStop(0.0, "rgba(255,255,255," + alpha + ")");
      g.addColorStop(0.3, "rgba(255,255,255," + alpha * 0.4 + ")");
      g.addColorStop(1.0, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(-256, -256, 512, 512);
      ctx.restore();
    };
    ray(0, 1.0, 0.07, 0.18);
    ray(Math.PI / 2, 1.0, 0.07, 0.18);
    ray(0, 1.0, 0.04, 0.78);
    ray(Math.PI / 2, 1.0, 0.04, 0.78);
    return new THREE.CanvasTexture(c);
  }

  function makeStarGeometry(outer, inner, nOutline, nCore, nDust, jit) {
    const verts = starVertices(outer, inner, 4);
    const total = nOutline + nCore + nDust;
    const pos = new Float32Array(total * 3);
    const col = new Float32Array(total * 3);
    const scale = new Float32Array(total);
    const seed = new Float32Array(total * 3);

    const white = new THREE.Color(0xffffff);
    const gray = new THREE.Color(0x8a8a8a);
    const dim = new THREE.Color(0x555555);

    let p = 0;
    const set = (x, y, z, color, s) => {
      pos[p * 3] = x;
      pos[p * 3 + 1] = y;
      pos[p * 3 + 2] = z;
      col[p * 3] = color.r;
      col[p * 3 + 1] = color.g;
      col[p * 3 + 2] = color.b;
      scale[p] = s;
      seed[p * 3] = Math.random();
      seed[p * 3 + 1] = Math.random();
      seed[p * 3 + 2] = Math.random();
      p += 1;
    };

    for (let i = 0; i < nOutline; i += 1) {
      const edge = Math.floor(Math.random() * verts.length);
      const a = verts[edge];
      const b = verts[(edge + 1) % verts.length];
      const t = Math.random();
      let x = a[0] + (b[0] - a[0]) * t;
      let y = a[1] + (b[1] - a[1]) * t;
      const j = jit * (0.6 + 0.6 * Math.random());
      x += gaussian() * j;
      y += gaussian() * j;
      const rr = Math.min(1, Math.hypot(x, y) / outer);
      set(x, y, gaussian() * jit, gray.clone().lerp(white, rr), 0.55 + Math.random() * 0.8);
    }
    for (let i = 0; i < nCore; i += 1) {
      const r = Math.abs(gaussian()) * inner * 0.5;
      const a = Math.random() * Math.PI * 2;
      set(Math.cos(a) * r, Math.sin(a) * r, gaussian() * 0.06, white.clone(), 0.7 + Math.random());
    }
    for (let i = 0; i < nDust; i += 1) {
      const r = outer * (1.2 + Math.random() * 1.4);
      const a = Math.random() * Math.PI * 2;
      const el = (Math.random() - 0.5) * Math.PI;
      set(
        Math.cos(a) * Math.cos(el) * r,
        Math.sin(el) * r * 0.6,
        Math.sin(a) * Math.cos(el) * r * 0.5,
        (Math.random() < 0.5 ? gray : dim).clone(),
        0.3 + Math.random() * 0.4,
      );
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aColor", new THREE.BufferAttribute(col, 3));
    geo.setAttribute("aScale", new THREE.BufferAttribute(scale, 1));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 3));
    return geo;
  }

  function makeStarMaterial(uSize, uWander) {
    return new THREE.ShaderMaterial({
      uniforms: Object.assign({}, shared, {
        uSize: { value: uSize },
        uWander: { value: uWander },
      }),
      vertexShader: [
        "uniform float uTime;",
        "uniform float uSize;",
        "uniform float uWander;",
        "uniform float uEnergy;",
        "uniform float uPixelRatio;",
        "attribute float aScale;",
        "attribute vec3 aSeed;",
        "attribute vec3 aColor;",
        "varying vec3 vColor;",
        "varying float vTw;",
        "void main() {",
        "  float tp = aSeed.x * 6.2831853;",
        // Movimento próprio de cada partícula; mais agitado com energia (pensando/falando).
        "  float wa = uWander * (1.0 + uEnergy * 2.4);",
        "  float sp = 1.1 + uEnergy * 2.5;",
        "  vec3 wp = position;",
        "  wp.x += sin(uTime * (sp + aSeed.x * 1.6) + aSeed.y * 6.2831) * wa;",
        "  wp.y += sin(uTime * (sp + aSeed.y * 1.6) + aSeed.z * 6.2831) * wa;",
        "  wp.z += sin(uTime * (sp + aSeed.z * 1.6) + aSeed.x * 6.2831) * wa;",
        "  vec4 mv = modelViewMatrix * vec4(wp, 1.0);",
        "  float tw = 0.4 + 0.6 * sin(uTime * 3.6 + tp);",
        "  vTw = tw;",
        "  vColor = aColor;",
        "  gl_PointSize = aScale * uSize * uPixelRatio * (0.6 + 0.6 * tw) * (1.0 + uEnergy * 0.55) * (1.0 / -mv.z);",
        "  gl_Position = projectionMatrix * mv;",
        "}",
      ].join("\n"),
      fragmentShader: [
        "uniform sampler2D uTex;",
        "uniform float uEnergy;",
        "varying vec3 vColor;",
        "varying float vTw;",
        "void main() {",
        "  float a = texture2D(uTex, gl_PointCoord).a;",
        "  if (a < 0.01) discard;",
        "  vec3 c = vColor * (0.75 + 0.5 * vTw + uEnergy * 0.4);",
        "  gl_FragColor = vec4(c, a * (0.5 + 0.5 * vTw));",
        "}",
      ].join("\n"),
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });
  }

  function orbitPos(out, angle) {
    out
      .copy(CENTER)
      .addScaledVector(orbU, Math.cos(angle) * ORBIT_R)
      .addScaledVector(orbV, Math.sin(angle) * ORBIT_R);
    return out;
  }

  // Céu profundo: estrelinhas tênues ao fundo, cintilando (reusa o shader das
  // partículas, então também ganham vida com energia).
  function buildStarfield() {
    const N = 180;
    const pos = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);
    const scale = new Float32Array(N);
    const seed = new Float32Array(N * 3);
    for (let i = 0; i < N; i += 1) {
      const a = Math.random() * Math.PI * 2;
      const el = (Math.random() - 0.5) * Math.PI;
      const r = 4.5 + Math.random() * 4;
      pos[i * 3] = Math.cos(a) * Math.cos(el) * r * 1.3;
      pos[i * 3 + 1] = Math.sin(el) * r;
      pos[i * 3 + 2] = -1.5 - Math.abs(Math.sin(a)) * r * 0.6 - Math.random() * 2;
      const b = 0.16 + Math.random() * 0.3 + (Math.random() < 0.06 ? 0.3 : 0);
      col[i * 3] = b;
      col[i * 3 + 1] = b;
      col[i * 3 + 2] = b;
      scale[i] = 0.35 + Math.random() * 0.6;
      seed[i * 3] = Math.random();
      seed[i * 3 + 1] = Math.random();
      seed[i * 3 + 2] = Math.random();
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aColor", new THREE.BufferAttribute(col, 3));
    geo.setAttribute("aScale", new THREE.BufferAttribute(scale, 1));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 3));
    starfield = new THREE.Points(geo, makeStarMaterial(7.0, 0.02));
    scene.add(starfield);
  }

  // Fita de luz: corrente de estrelas fluindo numa lemniscata (∞) que
  // precessa lentamente em 3D ao redor da estrela — um véu de seda cósmico.
  // As posições são recalculadas por frame; o brilho de cada partícula é a
  // base própria + pulsos que viajam ao longo da fita.
  function buildRibbon() {
    const pos = new Float32Array(RIBBON_N * 3);
    const col = new Float32Array(RIBBON_N * 3);
    const scale = new Float32Array(RIBBON_N);
    const seed = new Float32Array(RIBBON_N * 3);
    const phase = new Float32Array(RIBBON_N);
    const jit = new Float32Array(RIBBON_N * 3);
    const base = new Float32Array(RIBBON_N);
    for (let i = 0; i < RIBBON_N; i += 1) {
      phase[i] = Math.random();
      jit[i * 3] = gaussian() * 0.055;
      jit[i * 3 + 1] = gaussian() * 0.055;
      jit[i * 3 + 2] = gaussian() * 0.1;
      base[i] = 0.18 + Math.random() * 0.4 + (Math.random() < 0.05 ? 0.55 : 0);
      scale[i] = 0.45 + Math.random() * 0.85;
      seed[i * 3] = Math.random();
      seed[i * 3 + 1] = Math.random();
      seed[i * 3 + 2] = Math.random();
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aColor", new THREE.BufferAttribute(col, 3));
    geo.setAttribute("aScale", new THREE.BufferAttribute(scale, 1));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 3));
    ribbon = { geo, phase, jit, base };
    scene.add(new THREE.Points(geo, makeStarMaterial(10.0, 0.045)));
  }

  // Estrelas cadentes: riscos de luz raros cruzando o céu ao fundo, cada uma
  // com cabeça brilhante (sprite) e rastro reto que esmaece.
  function buildMeteors() {
    const total = METEOR_N * METEOR_TRAIL;
    meteorGeo = new THREE.BufferGeometry();
    meteorGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(total * 3), 3));
    meteorGeo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(total * 3), 3));
    scene.add(
      new THREE.Points(
        meteorGeo,
        new THREE.PointsMaterial({
          size: 0.05,
          map: shared.uTex.value,
          vertexColors: true,
          transparent: true,
          depthWrite: false,
          depthTest: false,
          sizeAttenuation: true,
          blending: THREE.AdditiveBlending,
        }),
      ),
    );
    meteors = [];
    const gtex = glowTexture();
    for (let i = 0; i < METEOR_N; i += 1) {
      const head = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: gtex,
          color: 0xffffff,
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          depthTest: false,
        }),
      );
      head.scale.set(0.26, 0.26, 1);
      head.visible = false;
      scene.add(head);
      meteors.push({
        pos: new THREE.Vector3(),
        vel: new THREE.Vector3(),
        life: 0,
        max: 0,
        active: false,
        next: 3 + Math.random() * 8,
        head,
      });
    }
  }

  // Brasas de luz: fagulhas lançadas nos picos da fala que desaceleram e
  // caem de volta para a estrela — fogos de artifício em câmera lenta.
  function buildEmbers() {
    const pos = new Float32Array(EMBER_N * 3);
    const col = new Float32Array(EMBER_N * 3);
    const scale = new Float32Array(EMBER_N);
    const seed = new Float32Array(EMBER_N * 3);
    for (let i = 0; i < EMBER_N; i += 1) {
      pos[i * 3 + 2] = 50; // estacionadas fora de cena até nascerem
      scale[i] = 0.5 + Math.random() * 0.9;
      seed[i * 3] = Math.random();
      seed[i * 3 + 1] = Math.random();
      seed[i * 3 + 2] = Math.random();
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aColor", new THREE.BufferAttribute(col, 3));
    geo.setAttribute("aScale", new THREE.BufferAttribute(scale, 1));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 3));
    embers = {
      geo,
      vel: new Float32Array(EMBER_N * 3),
      life: new Float32Array(EMBER_N),
      max: new Float32Array(EMBER_N),
    };
    scene.add(new THREE.Points(geo, makeStarMaterial(13.0, 0.03)));
  }

  function buildScene() {
    mainMat = makeStarMaterial(20.0, 0.0);
    const mainGeo = makeStarGeometry(0.92, 0.34, 2600, 800, 500, 0.035);
    mainGroup = new THREE.Group();
    mainGroup.position.copy(CENTER);
    mainGroup.add(new THREE.Points(mainGeo, mainMat));
    scene.add(mainGroup);

    satMat = makeStarMaterial(9.0, 0.08);
    // Núcleo bem mais denso para parecer uma estrela (não poeira).
    const satGeo = makeStarGeometry(0.16, 0.055, 300, 280, 0, 0.02);
    satStar = new THREE.Points(satGeo, satMat);
    satStar.rotation.set(0.9, 0.4, 0.6);
    scene.add(satStar);

    // Glow brilhante no centro do satélite.
    satGlow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture(),
        color: 0xffffff,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
      }),
    );
    satGlow.scale.set(0.75, 0.75, 1);
    scene.add(satGlow);

    const tpos = new Float32Array(TRAIL_N * 3);
    const tcol = new Float32Array(TRAIL_N * 3);
    for (let i = 0; i < TRAIL_N; i += 1) {
      const k = i / (TRAIL_N - 1);
      const b = k * k * 0.4;
      tcol[i * 3] = b;
      tcol[i * 3 + 1] = b;
      tcol[i * 3 + 2] = b;
    }
    satTrailGeo = new THREE.BufferGeometry();
    satTrailGeo.setAttribute("position", new THREE.BufferAttribute(tpos, 3));
    satTrailGeo.setAttribute("color", new THREE.BufferAttribute(tcol, 3));
    satTrail = new THREE.Points(
      satTrailGeo,
      new THREE.PointsMaterial({
        size: 0.03,
        map: shared.uTex.value,
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        depthTest: false,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
      }),
    );
    scene.add(satTrail);

    // Ondas de luz suaves/borradas que se propagam do orb enquanto ele fala.
    waveRings = [];
    const ringTex = ringTexture();
    for (let i = 0; i < WAVE_COUNT; i += 1) {
      const mat = new THREE.SpriteMaterial({
        map: ringTex,
        color: 0xffffff,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
      });
      const spr = new THREE.Sprite(mat);
      spr.position.copy(CENTER);
      spr.visible = false;
      scene.add(spr);
      waveRings.push({ mesh: spr, life: i / WAVE_COUNT });
    }

    // Aura central que respira suavemente com a fala.
    glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture(),
        color: 0xffffff,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
      }),
    );
    glow.position.copy(CENTER);
    glow.scale.set(3, 3, 1);
    glow.visible = false;
    scene.add(glow);

    // Núcleo incandescente: um brilho pequeno e intenso no coração da estrela.
    coreGlow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture(),
        color: 0xffffff,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
      }),
    );
    coreGlow.position.copy(CENTER);
    coreGlow.scale.set(1.05, 1.05, 1);
    scene.add(coreGlow);

    // Raios de difração: cruz principal + cruz diagonal menor, cada uma
    // oscilando devagar — como o cintilar de Sirius no céu noturno.
    const rayTex = rayTexture();
    raysA = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: rayTex,
        color: 0xffffff,
        transparent: true,
        opacity: 0.26,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
      }),
    );
    raysA.position.copy(CENTER);
    scene.add(raysA);
    raysB = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: rayTex,
        color: 0xffffff,
        transparent: true,
        opacity: 0.12,
        rotation: Math.PI / 4,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
      }),
    );
    raysB.position.copy(CENTER);
    scene.add(raysB);

    buildStarfield();
    buildRibbon();
    buildMeteors();
    buildEmbers();
  }

  function build() {
    canvas = document.getElementById("orb-canvas");
    stage = document.getElementById("stage");
    if (!canvas || !stage) return false;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch (err) {
      console.warn("[SiriusOrb] WebGL unavailable", err);
      renderer = null;
      return false;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(BASE_FOV, 1, 0.1, 200);
    camera.position.set(0, 0, BASE_CAM_Z);
    clock = new THREE.Clock();
    shared.uTex.value = softDotTexture();
    // Reset layered refs so a remount never double-adds into a stale scene.
    mainGroup = null;
    mainMat = null;
    satStar = null;
    satMat = null;
    satTrail = null;
    satTrailGeo = null;
    waveRings = [];
    glow = null;
    satGlow = null;
    starfield = null;
    ribbon = null;
    raysA = null;
    raysB = null;
    coreGlow = null;
    meteors = [];
    meteorGeo = null;
    embers = null;
    buildScene();
    return true;
  }

  function placeCanvas() {
    if (!canvas || !stage || !canvasHalfW || !canvasHalfH) return;
    const rect = stage.getBoundingClientRect();
    const rw = Math.max(1, Math.ceil(canvasHalfW * 2));
    const rh = Math.max(1, Math.ceil(canvasHalfH * 2));
    // Fixed: overscan no longer expands document scrollHeight.
    // Hero uses opacity-only animation, so fixed is safe again.
    const left = rect.left + rect.width / 2 - rw / 2;
    const top = rect.top + rect.height / 2 - rh / 2;
    canvas.style.position = "fixed";
    canvas.style.left = `${left}px`;
    canvas.style.top = `${top}px`;
  }

  function resize() {
    if (!renderer || !stage || !canvas || !camera) return;
    const w = Math.max(1, stage.clientWidth || 1);
    const h = Math.max(1, stage.clientHeight || 1);
    const vw = window.innerWidth || w;
    const vh = window.innerHeight || h;

    // Cover one viewport centered on the orb. Do NOT use the stage's
    // getBoundingClientRect offset — that grew/shrank overscan while
    // scrolling and made the star look like it was zooming.
    const halfW = Math.max(vw / 2, w / 2) + CANVAS_PAD;
    const halfH = Math.max(vh / 2, h / 2) + CANVAS_PAD;
    const rw = Math.max(1, Math.ceil(halfW * 2));
    const rh = Math.max(1, Math.ceil(halfH * 2));
    const key = `${rw}x${rh}@${w}x${h}`;
    if (key === lastResizeKey) {
      placeCanvas();
      return;
    }
    lastResizeKey = key;

    canvasHalfW = halfW;
    canvasHalfH = halfH;
    renderer.setSize(rw, rh, false);
    canvas.style.width = `${rw}px`;
    canvas.style.height = `${rh}px`;
    placeCanvas();

    // Afastar a câmera na proporção do overscan (mantém enquadramento do stage)
    // e ORB_FRAME aproxima um pouco para a estrela ficar maior.
    const overscan = Math.max(rw / w, rh / h, 1);
    camera.fov = BASE_FOV;
    camera.position.z = BASE_CAM_Z * overscan * ORB_FRAME;
    camera.aspect = rw / rh;
    camera.updateProjectionMatrix();
    shared.uPixelRatio.value = Math.min(window.devicePixelRatio || 1, 1.75);

    const dist = Math.abs(camera.position.z - CENTER.z) || BASE_CAM_Z;
    const vFov = (camera.fov * Math.PI) / 180;
    const visibleH = 2 * Math.tan(vFov / 2) * dist;
    const visibleW = visibleH * camera.aspect;
    waveMaxR = Math.max(8, visibleW * 1.04, visibleH * 1.04);
  }

  function frame() {
    if (!running) return;
    if (typeof document !== "undefined" && document.hidden) {
      raf = null;
      return;
    }
    placeCanvas();
    const t = clock.getElapsedTime();
    const dt = Math.min(0.05, Math.max(0, t - lastT));
    lastT = t;
    shared.uTime.value = t;

    // Respiração bem lenta; ondas propagam no mesmo ritmo.
    const breath = 0.5 + 0.5 * Math.sin(t * 0.35);
    const audio = audioProvider ? audioProvider() || 0 : 0;
    const ambient = 0.12 + breath * 0.18; // ~0.12 → 0.30
    const audioTarget = audioProvider ? audio : ambient;
    audioSmooth += (audioTarget - audioSmooth) * (audioTarget > audioSmooth ? 0.14 : 0.05);
    const energyTarget = thinking ? Math.max(0.85, audioSmooth) : audioSmooth;
    energy += (energyTarget - energy) * 0.1;
    shared.uEnergy.value = energy;

    // Sync tipográfico: o wordmark SIRIUS pulsa com a mesma fase da estrela.
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty("--sirius-pulse", breath.toFixed(4));
      document.documentElement.style.setProperty("--sirius-energy", energy.toFixed(4));
    }

    if (mainGroup) {
      // Eixo de rotação deriva devagar e aleatoriamente, mas sempre no MESMO
      // sentido (velocidade angular positiva) — sem ângulo fixo.
      _axis
        .set(
          Math.sin(t * 0.13) * 0.6 + 0.25,
          Math.cos(t * 0.11) * 0.7 + 0.5,
          Math.sin(t * 0.09 + 1.0) * 0.5 + 0.2,
        )
        .normalize();
      _dq.setFromAxisAngle(_axis, (0.35 + energy * 1.5) * dt);
      mainGroup.quaternion.multiply(_dq);
      // Respiração sutil em repouso + inchaço com a fala/pensamento.
      mainGroup.scale.setScalar(
        1.0 + audioSmooth * 0.1 + (thinking ? 0.04 : 0.0) + Math.sin(t * 0.35) * 0.012,
      );
    }

    // Câmera flutua de leve + segue o mouse (paralaxe do céu em telas grandes).
    let targetX = 0;
    let targetY = 0;
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      const px = parseFloat(root.style.getPropertyValue("--sky-px") || "0");
      const py = parseFloat(root.style.getPropertyValue("--sky-py") || "0");
      if (LARGE_MQ && LARGE_MQ.matches && Number.isFinite(px) && Number.isFinite(py)) {
        targetX = px;
        targetY = py;
      }
    }
    lookX += (targetX - lookX) * 0.16;
    lookY += (targetY - lookY) * 0.16;
    camera.position.x = Math.sin(t * 0.05) * 0.22 + lookX * 0.95;
    camera.position.y = Math.cos(t * 0.041) * 0.16 - lookY * 0.72;
    camera.lookAt(CENTER);
    if (starfield) starfield.rotation.y = t * 0.006 + lookX * 0.1;

    // Aura central: brilho base sempre presente (respiração lenta) que se
    // intensifica com a fala — mesmos valores do sirius-app.
    if (glow) {
      const gs = 2.8 + audioSmooth * 3.6;
      glow.scale.set(gs, gs, 1);
      const shine = 0.5 + 0.5 * Math.sin(t * 1.3);
      const gop = 0.22 + shine * 0.08 + audioSmooth * 0.55;
      glow.material.opacity = gop;
      glow.visible = gop > 0.002;
    }

    // Núcleo + raios de difração: cintilam rápido e sutil (como uma estrela
    // de verdade tremula no céu) e se abrem quando o Sirius fala.
    if (raysA) {
      const flick = 0.82 + 0.1 * Math.sin(t * 6.7) + 0.08 * Math.sin(t * 11.3 + 1.7);
      const rs = 3.5 + audioSmooth * 2.4 + Math.sin(t * 1.3) * 0.16;
      raysA.scale.set(rs, rs, 1);
      raysA.material.rotation = Math.sin(t * 0.21) * 0.16;
      raysA.material.opacity = (0.26 + audioSmooth * 0.45) * flick;
      const rs2 = rs * 0.6;
      raysB.scale.set(rs2, rs2, 1);
      raysB.material.rotation = Math.PI / 4 - Math.sin(t * 0.17 + 2.0) * 0.22;
      raysB.material.opacity = (0.12 + audioSmooth * 0.32) * flick;
      const cs = 1.0 + audioSmooth * 0.65;
      coreGlow.scale.set(cs, cs, 1);
      coreGlow.material.opacity = 0.45 + 0.18 * Math.sin(t * 1.3) + audioSmooth * 0.3;
    }

    const a = t * ORBIT_SPEED;
    if (satStar) {
      orbitPos(satStar.position, a);
      satStar.rotation.y += 0.04;
      satStar.rotation.x = 0.9 + Math.sin(t * 0.6) * 0.25;
      if (satGlow) satGlow.position.copy(satStar.position);
    }
    if (satTrailGeo) {
      const arr = satTrailGeo.attributes.position.array;
      for (let i = 0; i < TRAIL_N; i += 1) {
        orbitPos(_tmp, a - (TRAIL_N - 1 - i) * TRAIL_STEP);
        arr[i * 3] = _tmp.x;
        arr[i * 3 + 1] = _tmp.y;
        arr[i * 3 + 2] = _tmp.z;
      }
      satTrailGeo.attributes.position.needsUpdate = true;
    }

    // Ondas de luz: expandem até a largura do site e somem na borda.
    for (let i = 0; i < waveRings.length; i += 1) {
      const w = waveRings[i];
      w.life += dt * WAVE_SPEED;
      if (w.life >= 1) w.life -= 1;
      const life = w.life;
      const activeSpan = 0.92;
      if (life > activeSpan) {
        w.mesh.visible = false;
        w.mesh.material.opacity = 0;
        continue;
      }
      const local = life / activeSpan;
      const s = 0.55 + local * waveMaxR;
      w.mesh.scale.set(s, s, 1);
      const waveAmp = 0.05 + audioSmooth * 0.14;
      const edgeFade = local < 0.82 ? 1 : Math.max(0, (1 - local) / 0.18);
      const op =
        Math.sin(local * Math.PI) *
        waveAmp *
        (0.45 + breath * 0.4) *
        edgeFade;
      w.mesh.material.opacity = op;
      w.mesh.visible = op > 0.0015;
    }

    // Fita de luz: flui pela lemniscata (∞), que precessa devagar em 3D.
    // Dois pulsos de brilho correm ao longo da fita, mais fortes com energia.
    if (ribbon) {
      ribbonFlow += dt * (0.05 + energy * 0.1);
      _rE.set(0.5 + Math.sin(t * 0.11) * 0.45, t * 0.12, Math.sin(t * 0.07) * 0.35);
      _rQ.setFromEuler(_rE);
      _rU.set(1, 0, 0).applyQuaternion(_rQ);
      _rV.set(0, 1, 0).applyQuaternion(_rQ);
      _rW.set(0, 0, 1).applyQuaternion(_rQ);
      const parr = ribbon.geo.attributes.position.array;
      const carr = ribbon.geo.attributes.aColor.array;
      const p1 = (ribbonFlow * 2.1) % 1;
      const p2 = (p1 + 0.5) % 1;
      for (let i = 0; i < RIBBON_N; i += 1) {
        const u = (ribbon.phase[i] + ribbonFlow) % 1;
        const th = u * Math.PI * 2;
        const sth = Math.sin(th);
        const cth = Math.cos(th);
        const den = 1 + sth * sth;
        const lx = (RIBBON_A * cth) / den + ribbon.jit[i * 3];
        const ly = (RIBBON_A * 1.4 * sth * cth) / den + ribbon.jit[i * 3 + 1];
        const lz = ribbon.jit[i * 3 + 2];
        parr[i * 3] = CENTER.x + _rU.x * lx + _rV.x * ly + _rW.x * lz;
        parr[i * 3 + 1] = CENTER.y + _rU.y * lx + _rV.y * ly + _rW.y * lz;
        parr[i * 3 + 2] = CENTER.z + _rU.z * lx + _rV.z * ly + _rW.z * lz;
        let d1 = Math.abs(u - p1);
        if (d1 > 0.5) d1 = 1 - d1;
        let d2 = Math.abs(u - p2);
        if (d2 > 0.5) d2 = 1 - d2;
        const pw1 = Math.max(0, 1 - d1 / 0.09);
        const pw2 = Math.max(0, 1 - d2 / 0.09);
        const b = ribbon.base[i] + (pw1 * pw1 + pw2 * pw2) * (0.35 + energy * 0.9);
        carr[i * 3] = b;
        carr[i * 3 + 1] = b;
        carr[i * 3 + 2] = b;
      }
      ribbon.geo.attributes.position.needsUpdate = true;
      ribbon.geo.attributes.aColor.needsUpdate = true;
    }

    // Estrelas cadentes: nascem num intervalo aleatório, cruzam o céu ao
    // fundo com fade de entrada/saída e rastro reto que esmaece.
    if (meteorGeo) {
      const mp = meteorGeo.attributes.position.array;
      const mc = meteorGeo.attributes.color.array;
      for (let i = 0; i < meteors.length; i += 1) {
        const m = meteors[i];
        if (!m.active) {
          m.next -= dt;
          if (m.next <= 0) {
            const side = Math.random() < 0.5 ? -1 : 1;
            m.vel.set(side * (2.2 + Math.random() * 2.2), -(0.7 + Math.random() * 1.6), 0);
            m.vel.normalize().multiplyScalar(3.6 + Math.random() * 2.6);
            m.pos.set(
              -side * (3.4 + Math.random() * 1.4),
              0.4 + Math.random() * 2.8,
              -2.2 - Math.random() * 2,
            );
            m.max = 1.5 + Math.random() * 0.9;
            m.life = 0;
            m.active = true;
          }
        } else {
          m.life += dt;
          m.pos.addScaledVector(m.vel, dt);
          if (m.life >= m.max) {
            m.active = false;
            m.next = 5 + Math.random() * 11;
          }
        }
        const env = m.active ? Math.sin(Math.min(1, m.life / m.max) * Math.PI) : 0;
        const inv = 1 / (m.vel.length() || 1);
        for (let j = 0; j < METEOR_TRAIL; j += 1) {
          const o = (i * METEOR_TRAIL + j) * 3;
          const back = j * 0.085;
          mp[o] = m.pos.x - m.vel.x * inv * back;
          mp[o + 1] = m.pos.y - m.vel.y * inv * back;
          mp[o + 2] = m.pos.z - m.vel.z * inv * back;
          const f = 1 - j / METEOR_TRAIL;
          const b = env * f * f * 0.85;
          mc[o] = b;
          mc[o + 1] = b;
          mc[o + 2] = b;
        }
        m.head.position.copy(m.pos);
        m.head.material.opacity = env * 0.8;
        m.head.visible = env > 0.01;
      }
      meteorGeo.attributes.position.needsUpdate = true;
      meteorGeo.attributes.color.needsUpdate = true;
    }

    // Brasas: num pico de fala, fagulhas explodem da estrela, desaceleram e
    // são puxadas de volta ao centro enquanto esmaecem.
    if (embers) {
      if (audioSmooth > 0.5 && t - lastBurst > 1.5) {
        lastBurst = t;
        let n = 70;
        const parr = embers.geo.attributes.position.array;
        for (let i = 0; i < EMBER_N && n > 0; i += 1) {
          if (embers.life[i] > 0) continue;
          n -= 1;
          const dx = gaussian(),
            dy = gaussian(),
            dz = gaussian() * 0.6;
          const len = Math.hypot(dx, dy, dz) || 1;
          const sp = 1.4 + Math.random() * 2.0;
          embers.vel[i * 3] = (dx / len) * sp;
          embers.vel[i * 3 + 1] = (dy / len) * sp;
          embers.vel[i * 3 + 2] = (dz / len) * sp;
          parr[i * 3] = CENTER.x + (dx / len) * 0.2;
          parr[i * 3 + 1] = CENTER.y + (dy / len) * 0.2;
          parr[i * 3 + 2] = CENTER.z + (dz / len) * 0.2;
          embers.max[i] = 1.1 + Math.random();
          embers.life[i] = embers.max[i];
        }
      }
      const parr = embers.geo.attributes.position.array;
      const carr = embers.geo.attributes.aColor.array;
      const drag = Math.max(0, 1 - 1.7 * dt);
      for (let i = 0; i < EMBER_N; i += 1) {
        const o = i * 3;
        if (embers.life[i] <= 0) {
          carr[o] = 0;
          carr[o + 1] = 0;
          carr[o + 2] = 0;
          continue;
        }
        embers.life[i] -= dt;
        embers.vel[o] = embers.vel[o] * drag + (CENTER.x - parr[o]) * 0.55 * dt;
        embers.vel[o + 1] = embers.vel[o + 1] * drag + (CENTER.y - parr[o + 1]) * 0.55 * dt;
        embers.vel[o + 2] = embers.vel[o + 2] * drag + (CENTER.z - parr[o + 2]) * 0.55 * dt;
        parr[o] += embers.vel[o] * dt;
        parr[o + 1] += embers.vel[o + 1] * dt;
        parr[o + 2] += embers.vel[o + 2] * dt;
        const b = Math.max(0, embers.life[i] / embers.max[i]);
        const v = b * b;
        carr[o] = v;
        carr[o + 1] = v;
        carr[o + 2] = v;
      }
      embers.geo.attributes.position.needsUpdate = true;
      embers.geo.attributes.aColor.needsUpdate = true;
    }

    renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  }

  function clearResizeTimers() {
    for (let i = 0; i < resizeTimers.length; i += 1) {
      clearTimeout(resizeTimers[i]);
    }
    resizeTimers = [];
  }

  function start() {
    if (REDUCE_MQ && REDUCE_MQ.matches) return;
    const nextCanvas = document.getElementById("orb-canvas");
    const nextStage = document.getElementById("stage");
    if (!nextCanvas || !nextStage) return;
    // React Strict Mode remounts replace the canvas node; rebuild if detached.
    if (renderer && renderer.domElement !== nextCanvas) {
      stop();
      try {
        renderer.dispose();
      } catch (_) {}
      renderer = null;
      scene = null;
      lastResizeKey = "";
    }
    if (!renderer && !build()) return;
    resize();
    if (!running) {
      running = true;
      clock.start();
      lastT = 0;
      frame();
    }
    clearResizeTimers();
    resizeTimers.push(setTimeout(resize, 120));
    resizeTimers.push(setTimeout(resize, 350));
    resizeTimers.push(setTimeout(resize, 700));
  }

  function stop() {
    running = false;
    clearResizeTimers();
    if (raf) {
      cancelAnimationFrame(raf);
      raf = null;
    }
  }

  window.addEventListener("resize", () => {
    if (running) resize();
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && running && !raf) {
      lastT = clock ? clock.getElapsedTime() : 0;
      frame();
    }
  });

  window.SiriusOrb = {
    start,
    stop,
    resize,
    setThinking(b) {
      thinking = !!b;
    },
    setAudioProvider(fn) {
      audioProvider = typeof fn === "function" ? fn : null;
    },
  };
})();
