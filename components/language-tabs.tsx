"use client"

import { Languages } from "lucide-react"
import { defaultLocale, locales, type Locale } from "@/lib/i18n/locales"

type LanguageTabsProps = {
  value: Locale
  onChange: (locale: Locale) => void
}

export function LanguageTabs({ value, onChange }: LanguageTabsProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-sm font-medium text-primary">
        <Languages className="size-4 text-accent" aria-hidden="true" />
        Language
      </div>
      <div role="tablist" aria-label="Email language" className="flex flex-wrap gap-2">
        {locales.map((locale) => {
          const selected = locale.code === value
          return (
            <button
              key={locale.code}
              role="tab"
              aria-selected={selected}
              onClick={() => onChange(locale.code)}
              className={`flex flex-col items-start rounded-lg border px-3 py-2 text-left transition-colors ${
                selected
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-primary hover:border-accent"
              }`}
            >
              <span lang={locale.lang} dir={locale.dir} className="text-sm font-semibold leading-tight">
                {locale.nativeName}
              </span>
              <span
                className={`mt-0.5 text-xs leading-tight ${
                  selected ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {locale.name}
                {locale.code === defaultLocale ? " · default" : ""}
                {locale.dir === "rtl" ? " · RTL" : ""}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
