"use client"

import { useState } from "react"
import { KeyRound, UserPlus } from "lucide-react"
import { EmailPreview } from "@/components/email-preview"
import { InvitationPreview } from "@/components/invitation-preview"

const templates = [
  {
    id: "verification",
    label: "Verification code",
    description: "Login code for staff and external users.",
    icon: KeyRound,
  },
  {
    id: "invitation",
    label: "Student invitation",
    description: "Access invite for students, in simple Dutch.",
    icon: UserPlus,
  },
] as const

type TemplateId = (typeof templates)[number]["id"]

export function TemplateSwitcher() {
  const [active, setActive] = useState<TemplateId>("verification")

  return (
    <div className="flex flex-col gap-6">
      <div
        role="tablist"
        aria-label="Email template"
        className="grid gap-3 sm:grid-cols-2"
      >
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
                  selected
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <Icon className="size-4" />
              </span>
              <span>
                <span className="block font-serif font-semibold text-primary">
                  {label}
                </span>
                <span className="mt-0.5 block text-sm text-muted-foreground">
                  {description}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      {active === "verification" ? <EmailPreview /> : <InvitationPreview />}
    </div>
  )
}
