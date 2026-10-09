"use client"

import { useMemo, useState } from "react"
import { Check, Copy, Mail, Monitor, Smartphone } from "lucide-react"
import { buildInvitationHtml, invitationContent } from "@/lib/invitation-email"
import { copyToClipboard } from "@/lib/copy-to-clipboard"

const SAMPLE_NAME = "Amina"
const SAMPLE_URL = "https://voortgang.nldb.nl/uitnodiging/8f3k2a"

export function InvitationPreview() {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop")
  const [useSample, setUseSample] = useState(true)
  const [copied, setCopied] = useState(false)

  const previewHtml = useMemo(
    () =>
      useSample
        ? buildInvitationHtml(SAMPLE_NAME, SAMPLE_URL)
        : buildInvitationHtml(),
    [useSample],
  )

  async function handleCopy() {
    if (await copyToClipboard(buildInvitationHtml())) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span>Placeholders:</span>
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-primary">
            {"{{first_name}}"}
          </code>
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-primary">
            {"{{invite_url}}"}
          </code>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setUseSample((v) => !v)}
            className="rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {useSample ? "Show placeholders" : "Show sample data"}
          </button>

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

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? "Copied" : "Copy HTML"}
          </button>
        </div>
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Mail className="size-4" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Subject
          </p>
          <p className="truncate font-serif text-base font-semibold text-primary">
            {invitationContent.subject}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Preheader: {invitationContent.preheader}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Audience: {invitationContent.audience}
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-secondary/40 p-3 sm:p-8">
        <div
          className="mx-auto w-full transition-all duration-300"
          style={{ maxWidth: device === "mobile" ? 360 : 640 }}
        >
          <iframe
            key={`${device}-${useSample}`}
            title={`Preview: ${invitationContent.label}`}
            srcDoc={previewHtml}
            className="h-[1300px] w-full rounded-lg border border-border bg-white shadow-sm sm:h-[1200px]"
          />
        </div>
      </div>
    </div>
  )
}
