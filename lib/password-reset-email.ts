import { brand } from "@/lib/verification-email"
import {
  bodyFont,
  buildEmailShell,
  ctaButton,
  escapeHtml,
  noticeBlock,
  paragraph,
  stepsBlock,
} from "@/lib/email-shell"

export const passwordResetPlaceholders = ["{{first_name}}", "{{reset_url}}"] as const

export const passwordResetContent = {
  label: "New password",
  description: "Link to create a new password in the app.",
  audience:
    "Students (adult learners). Simple, informal Dutch (je/jij) for readers with Dutch as a second language and limited digital skills.",
  subject: "Maak een nieuw wachtwoord voor Groeibaas",
  preheader: "Klik op de knop om een nieuw wachtwoord te maken.",
  title: "Nieuw wachtwoord maken",
  intro: "Je wilt een nieuw wachtwoord voor de Groeibaas app.",
  ctaIntro: "Klik op de knop. Dan kun je een nieuw wachtwoord maken.",
  ctaLabel: "Maak nieuw wachtwoord",
  steps: [
    "Klik op Maak nieuw wachtwoord.",
    "Kies een nieuw wachtwoord. Kies een wachtwoord dat alleen jij weet.",
    "Open de Groeibaas app en log in met je nieuwe wachtwoord.",
  ],
  expiry: "De link werkt maar 1 keer en is maar kort geldig.",
  notRequested:
    "Heb je dit niet gevraagd? Dan hoef je niets te doen. Je wachtwoord blijft hetzelfde.",
  fallback: "Werkt de knop niet? Kopieer deze link en plak hem in je browser:",
  help: "Lukt het niet? Vraag hulp aan je docent, trajectbegeleider of Nederlands de Baas.",
  footerTagline: "Groeibaas – jouw voortgang in taal en participatie",
} as const

export function buildPasswordResetHtml({
  firstName = "{{first_name}}",
  resetUrl = "{{reset_url}}",
}: { firstName?: string; resetUrl?: string } = {}): string {
  const c = passwordResetContent
  const url = escapeHtml(resetUrl)

  return buildEmailShell({
    subject: c.subject,
    preheader: c.preheader,
    title: c.title,
    footerTagline: c.footerTagline,
    sections: [
      paragraph(`Hallo ${escapeHtml(firstName)},`, { bold: true, size: 17 }) +
        paragraph(c.intro, { size: 17 }) +
        paragraph(c.ctaIntro, { bottom: 0 }),
      ctaButton(url, `${c.ctaLabel} &rarr;`),
      stepsBlock("Zo werkt het", c.steps),
      noticeBlock("Let op.", `${c.expiry} ${c.notRequested}`),
      paragraph(c.fallback, { muted: true, size: 14, bottom: 6 }) +
        `<p style="margin:0 0 20px 0; font-family:${bodyFont}; font-size:14px; line-height:1.6; word-break:break-all;"><a href="${url}" target="_blank" style="color:${brand.navy}; font-weight:600; text-decoration:underline;">${url}</a></p>` +
        `<p style="margin:0; padding-top:16px; border-top:1px solid ${brand.border}; font-family:${bodyFont}; font-size:14px; line-height:1.6; color:${brand.mutedForeground};">${c.help}</p>`,
    ],
  })
}
