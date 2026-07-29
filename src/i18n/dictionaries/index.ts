import type { LocaleCode } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import ar from "./ar";
import de from "./de";
import en from "./en";
import es from "./es";
import fr from "./fr";
import it from "./it";
import ja from "./ja";
import ko from "./ko";
import nl from "./nl";
import pt from "./pt";
import ru from "./ru";
import zh from "./zh";

const DICTIONARIES: Record<LocaleCode, Dictionary> = {
  pt, en, es, fr, de, it, nl, ru, ja, ko, zh, ar,
};

export function getDictionary(locale: LocaleCode): Dictionary {
  return DICTIONARIES[locale];
}
