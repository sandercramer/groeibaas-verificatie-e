"use client"

import { useMemo, useState } from "react"
import { Check, Copy, Mail, Monitor, Smartphone } from "lucide-react"
import { copyToClipboard } from "@/lib/copy-to-clipboard"
import { LanguageTabs } from "@/components/language-tabs"
import { defaultLocale, getLocale, type Locale } from "@/lib/i18n/locales"

type TemplatePreviewProps = {
  label: string
  audience: string
  placeholders: readonly string[]
  getContent: (locale: Locale) => { subject: string; preheader: string }
  buildHtml: (locale: Locale, withSampleData: boolean, forExport?: boolean) => string
  note?: string
}

export function TemplatePreview({
  label,
  audience,
  placeholders,
  getContent,
  buildHtml,
  note,
}: TemplatePreviewProps) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop")
  const [useSample, setUseSample] = useState(true)
  const [copied, setCopied] = useState(false)

  const info = getLocale(locale)
  const content = getContent(locale)
  const previewHtml = useMemo(() => buildHtml(locale, useSample), [buildHtml, locale, useSample])

  async function handleCopy() {
    if (await copyToClipboard(buildHtml(locale, false, true))) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <LanguageTabs value={locale} onChange={setLocale} />

      <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span>Placeholders:</span>
          {placeholders.map((placeholder) => (
            <code
              key={placeholder}
              className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-primary"
            >
              {placeholder}
            </code>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setUseSample((v) => !v)}
            className="rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {useSample ? "Show placeholders" : "Show sample data"}
          </button>

          <div className="inline-flex rounded-lg bg-muted p-1">
            {(["desktop", "mobile"] as const).map((option) => {
              const Icon = option === "desktop" ? Monitor : Smartphone
              return (
                <button
                  key={option}
                  aria-label={option === "desktop" ? "Desktop view" : "Mobile view"}
                  aria-pressed={device === option}
                  onClick={() => setDevice(option)}
                  className={`rounded-md p-2 transition-colors ${
                    device === option
                      ? "bg-card text-primary shadow-sm"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <Icon className="size-4" />
                </button>
              )
            })}
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? "Copied" : `Copy HTML (${info.name})`}
          </button>
        </div>
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Mail className="size-4" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Subject · {info.name} ({info.lang}, {info.dir.toUpperCase()})
          </p>
          <p lang={info.lang} dir={info.dir} className="truncate font-serif text-base font-semibold text-primary">
            {content.subject}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Preheader:{" "}
            <span lang={info.lang} dir={info.dir}>
              {content.preheader}
            </span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Audience: {audience}</p>
          {locale !== defaultLocale ? (
            <p className="mt-2 rounded-md bg-accent/15 px-3 py-2 text-sm text-primary">
              Draft translation — have a native {info.name} speaker review it before sending.
            </p>
          ) : null}
          {note ? (
            <p className="mt-2 rounded-md bg-muted px-3 py-2 text-sm text-primary">{note}</p>
          ) : null}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-secondary/40 p-3 sm:p-8">
        <div
          className="mx-auto w-full transition-all duration-300"
          style={{ maxWidth: device === "mobile" ? 360 : 640 }}
        >
          <iframe
            key={`${locale}-${device}-${useSample}`}
            title={`Preview: ${label} (${info.name})`}
            srcDoc={previewHtml}
            className="h-[1650px] w-full rounded-lg border border-border bg-white shadow-sm sm:h-[1500px]"
          />
        </div>
      </div>
    </div>
  )
}
