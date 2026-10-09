import { brand } from "@/lib/verification-email"
import {
  bodyFont,
  buildEmailShell,
  ctaButton,
  escapeHtml,
  noticeBlock,
  paragraph,
  startSide,
  stepsBlock,
} from "@/lib/email-shell"
import { commonStrings } from "@/lib/i18n/common"
import { passwordResetStrings } from "@/lib/i18n/password-reset"
import { defaultLocale, getLocale, type Locale } from "@/lib/i18n/locales"

export const passwordResetPlaceholders = ["{{first_name}}", "{{reset_url}}"] as const

export const passwordResetMeta = {
  label: "New password",
  description: "Link to create a new password in the app.",
  audience:
    "Students (adult learners). Simple, informal language (je/jij) for readers with limited Dutch and limited digital skills. Send in the student's preferred language; Dutch is the default.",
} as const

export const getPasswordResetContent = (locale: Locale) => passwordResetStrings[locale]

export function buildPasswordResetHtml({
  locale = defaultLocale,
  firstName = "{{first_name}}",
  resetUrl = "{{reset_url}}",
}: { locale?: Locale; firstName?: string; resetUrl?: string } = {}): string {
  const c = passwordResetStrings[locale]
  const common = commonStrings[locale]
  const info = getLocale(locale)
  const { dir } = info
  const url = escapeHtml(resetUrl)
  const arrow = dir === "rtl" ? "&larr;" : "&rarr;"

  return buildEmailShell({
    locale: info,
    subject: c.subject,
    preheader: c.preheader,
    title: c.title,
    footerTagline: common.footerTagline,
    sections: [
      paragraph(common.greeting(escapeHtml(firstName)), { bold: true, size: 17 }) +
        paragraph(c.intro, { size: 17 }) +
        paragraph(c.ctaIntro, { bottom: 0 }),
      ctaButton(url, `${c.ctaLabel} ${arrow}`),
      stepsBlock(common.stepsTitle, c.steps, dir),
      noticeBlock(common.noticeLabel, `${c.expiry} ${c.notRequested}`, dir),
      paragraph(c.fallback, { muted: true, size: 14, bottom: 6 }) +
        `<p dir="ltr" style="margin:0 0 20px 0; font-family:${bodyFont}; font-size:14px; line-height:1.6; word-break:break-all; text-align:${startSide(dir)};"><a href="${url}" target="_blank" style="color:${brand.navy}; font-weight:600; text-decoration:underline;">${url}</a></p>` +
        `<p style="margin:0; padding-top:16px; border-top:1px solid ${brand.border}; font-family:${bodyFont}; font-size:14px; line-height:1.6; color:${brand.mutedForeground};">${common.help}</p>`,
    ],
  })
}
