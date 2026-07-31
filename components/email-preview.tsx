"use client"

import { useMemo, useState } from "react"
import { Check, Copy, Mail, Monitor, Smartphone } from "lucide-react"
import {
  buildEmailHtml,
  variants,
  type EmailVariant,
} from "@/lib/verification-email"

const SAMPLE_CODE = "606219"

export function EmailPreview() {
  const [variant, setVariant] = useState<EmailVariant>("medewerkers")
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop")
  const [useSample, setUseSample] = useState(true)
  const [copied, setCopied] = useState(false)

  const active = variants[variant]

  const previewHtml = useMemo(
    () => buildEmailHtml(variant, useSample ? SAMPLE_CODE : "{{code}}"),
    [variant, useSample],
  )

  async function handleCopy() {
    // Always copy the template with the {{code}} placeholder for real use.
    const html = buildEmailHtml(variant, "{{code}}")

    try {
      // Modern API — may be blocked by permissions policy inside iframes.
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(html)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        return
      }
      throw new Error("Clipboard API unavailable")
    } catch {
      // Fallback: hidden textarea + execCommand for restricted contexts.
      try {
        const textarea = document.createElement("textarea")
        textarea.value = html
        textarea.setAttribute("readonly", "")
        textarea.style.position = "fixed"
        textarea.style.top = "-9999px"
        textarea.style.opacity = "0"
        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        const ok = document.execCommand("copy")
        document.body.removeChild(textarea)
        if (!ok) throw new Error("execCommand copy failed")
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch {
        console.log("[v0] Copy failed in this environment")
      }
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Controls */}
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Variant tabs */}
        <div
          role="tablist"
          aria-label="Email variant"
          className="inline-flex rounded-lg bg-muted p-1"
        >
          {(Object.keys(variants) as EmailVariant[]).map((key) => {
            const selected = key === variant
            return (
              <button
                key={key}
                role="tab"
                aria-selected={selected}
                onClick={() => setVariant(key)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  selected
                    ? "bg-card text-primary shadow-sm"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {variants[key].label}
              </button>
            )
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Placeholder toggle */}
          <button
            onClick={() => setUseSample((v) => !v)}
            className="rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {useSample ? "Show {{code}}" : "Show sample 606219"}
          </button>

          {/* Device toggle */}
          <div className="inline-flex rounded-lg bg-muted p-1">
            <button
              aria-label="Desktop view"
              aria-pressed={device === "desktop"}
              onClick={() => setDevice("desktop")}
              className={`rounded-md p-2 transition-colors ${
                device === "desktop"
                  ? "bg-card text-primary shadow-sm"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <Monitor className="size-4" />
            </button>
            <button
              aria-label="Mobile view"
              aria-pressed={device === "mobile"}
              onClick={() => setDevice("mobile")}
              className={`rounded-md p-2 transition-colors ${
                device === "mobile"
                  ? "bg-card text-primary shadow-sm"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <Smartphone className="size-4" />
            </button>
          </div>

          {/* Copy HTML */}
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {copied ? (
              <Check className="size-4" />
            ) : (
              <Copy className="size-4" />
            )}
            {copied ? "Copied" : "Copy HTML"}
          </button>
        </div>
      </div>

      {/* Subject line */}
      <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Mail className="size-4" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Subject
          </p>
          <p className="truncate font-serif text-base font-semibold text-primary">
            {active.subject}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Audience: {active.audience}
          </p>
        </div>
      </div>

      {/* Email preview */}
      <div className="rounded-xl border border-border bg-secondary/40 p-3 sm:p-8">
        <div
          className="mx-auto w-full transition-all duration-300"
          style={{ maxWidth: device === "mobile" ? 360 : 640 }}
        >
          <iframe
            key={`${variant}-${device}-${useSample}`}
            title={`Preview: ${active.label}`}
            srcDoc={previewHtml}
            className="h-[720px] w-full rounded-lg border border-border bg-white shadow-sm sm:h-[820px]"
          />
        </div>
      </div>
    </div>
  )
}
