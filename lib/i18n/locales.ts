export const localeCodes = ["nl", "ar", "fa", "ti", "tr", "en", "es", "zh", "fr", "ku"] as const

export type Locale = (typeof localeCodes)[number]

export type LocaleInfo = {
  code: Locale
  /** Value for the HTML lang attribute. */
  lang: string
  /** English name, shown to developers. */
  name: string
  /** Name in the language itself, shown on the language tab. */
  nativeName: string
  dir: "ltr" | "rtl"
  /**
   * Replaces the Poppins/Inter stacks for scripts those fonts do not cover,
   * so mail clients pick a font that has the right glyphs.
   */
  fontStack?: string
}

const arabicScriptFonts = "Tahoma, 'Segoe UI', Arial, sans-serif"

export const locales: readonly LocaleInfo[] = [
  { code: "nl", lang: "nl", name: "Dutch", nativeName: "Nederlands", dir: "ltr" },
  { code: "ar", lang: "ar", name: "Arabic", nativeName: "العربية", dir: "rtl", fontStack: arabicScriptFonts },
  { code: "fa", lang: "fa", name: "Farsi", nativeName: "فارسی", dir: "rtl", fontStack: arabicScriptFonts },
  {
    code: "ti",
    lang: "ti",
    name: "Tigrinya",
    nativeName: "ትግርኛ",
    dir: "ltr",
    fontStack: "'Noto Sans Ethiopic', Nyala, Ebrima, 'Kefa', Arial, sans-serif",
  },
  { code: "tr", lang: "tr", name: "Turkish", nativeName: "Türkçe", dir: "ltr" },
  { code: "en", lang: "en", name: "English", nativeName: "English", dir: "ltr" },
  { code: "es", lang: "es", name: "Spanish", nativeName: "Español", dir: "ltr" },
  {
    code: "zh",
    lang: "zh-Hans",
    name: "Chinese (Simplified)",
    nativeName: "简体中文",
    dir: "ltr",
    fontStack: "'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', 'Hiragino Sans GB', Arial, sans-serif",
  },
  { code: "fr", lang: "fr", name: "French", nativeName: "Français", dir: "ltr" },
  { code: "ku", lang: "ku", name: "Kurdish (Kurmanji)", nativeName: "Kurmancî", dir: "ltr" },
]

export const defaultLocale: Locale = "nl"

export function getLocale(code: Locale): LocaleInfo {
  return locales.find((locale) => locale.code === code) ?? locales[0]
}
