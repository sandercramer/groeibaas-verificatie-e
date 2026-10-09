"use client"

import { useState } from "react"
import { KeyRound, LockKeyhole, Smartphone } from "lucide-react"
import { EmailPreview } from "@/components/email-preview"
import { TemplatePreview } from "@/components/template-preview"
import {
  buildInvitationHtml,
  invitationContent,
  invitationPlaceholders,
} from "@/lib/invitation-email"
import {
  buildPasswordResetHtml,
  passwordResetContent,
  passwordResetPlaceholders,
} from "@/lib/password-reset-email"

const SAMPLE_NAME = "Amina"

// Preview iframes (srcdoc) resolve relative URLs against this app, so the badges load
// from /public here; exported HTML points at the production host instead.
const buildInvitationPreview = (withSample: boolean, forExport = false) => {
  const assetBaseUrl = forExport ? undefined : ""
  return withSample
    ? buildInvitationHtml({
        firstName: SAMPLE_NAME,
        username: "amina.yusuf",
        temporaryPassword: "Groei-4827",
        assetBaseUrl,
      })
    : buildInvitationHtml({ assetBaseUrl })
}

const buildPasswordResetPreview = (withSample: boolean) =>
  withSample
    ? buildPasswordResetHtml({
        firstName: SAMPLE_NAME,
        resetUrl: "https://groeibaas.nldb.nl/wachtwoord/8f3k2a",
      })
    : buildPasswordResetHtml()

const templates = [
  {
    id: "verification",
    label: "Verification code",
    description: "Login code for staff and external users.",
    icon: KeyRound,
  },
  {
    id: "invitation",
    label: `Student · ${invitationContent.label}`,
    description: invitationContent.description,
    icon: Smartphone,
  },
  {
    id: "password-reset",
    label: `Student · ${passwordResetContent.label}`,
    description: passwordResetContent.description,
    icon: LockKeyhole,
  },
] as const

type TemplateId = (typeof templates)[number]["id"]

export function TemplateSwitcher() {
  const [active, setActive] = useState<TemplateId>("invitation")

  return (
    <div className="flex flex-col gap-6">
      <div role="tablist" aria-label="Email template" className="grid gap-3 md:grid-cols-3">
        {templates.map(({ id, label, description, icon: Icon }) => {
          const selected = id === active
          return (
            <button
              key={id}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(id)}
              className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-colors ${
                selected
                  ? "border-primary bg-card shadow-sm"
                  : "border-border bg-card/60 hover:border-accent"
              }`}
            >
              <span
                className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${
                  selected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                <Icon className="size-4" />
              </span>
              <span>
                <span className="block font-serif font-semibold text-primary">{label}</span>
                <span className="mt-0.5 block text-sm text-muted-foreground">{description}</span>
              </span>
            </button>
          )
        })}
      </div>

      {active === "verification" && <EmailPreview />}
      {active === "invitation" && (
        <TemplatePreview
          label={invitationContent.label}
          subject={invitationContent.subject}
          preheader={invitationContent.preheader}
          audience={invitationContent.audience}
          placeholders={invitationPlaceholders}
          buildHtml={buildInvitationPreview}
          note="The Google Play and App Store links are fixed in the template. The exported HTML loads the store badges from https://groeibaas.nldb.nl/images/badges/ — host google-play-nl.png and app-store.png (in /public/images/badges) there."
        />
      )}
      {active === "password-reset" && (
        <TemplatePreview
          label={passwordResetContent.label}
          subject={passwordResetContent.subject}
          preheader={passwordResetContent.preheader}
          audience={passwordResetContent.audience}
          placeholders={passwordResetPlaceholders}
          buildHtml={buildPasswordResetPreview}
        />
      )}
    </div>
  )
}
