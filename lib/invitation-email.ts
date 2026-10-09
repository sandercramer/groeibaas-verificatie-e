import { brand, productUrl } from "@/lib/verification-email"
import {
  bodyFont,
  buildEmailShell,
  escapeHtml,
  headingFont,
  noticeBlock,
  paragraph,
  startSide,
  stepsBlock,
  type TextDirection,
} from "@/lib/email-shell"
import { commonStrings } from "@/lib/i18n/common"
import { invitationStrings } from "@/lib/i18n/invitation"
import { defaultLocale, getLocale, type Locale } from "@/lib/i18n/locales"

export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=tools.sapient.progressdebaas&pcampaignid=web_share"

export const APP_STORE_URL = "https://apps.apple.com/nl/app/groeibaas/id6784656724"

export const invitationPlaceholders = [
  "{{first_name}}",
  "{{username}}",
  "{{temporary_password}}",
] as const

export const invitationMeta = {
  label: "App invitation",
  description: "Download the app and log in with a temporary password.",
  audience:
    "Students (adult learners). Simple, informal language (je/jij) for readers with limited Dutch and limited digital skills. Send in the student's preferred language; Dutch is the default.",
} as const

export const getInvitationContent = (locale: Locale) => invitationStrings[locale]

function credentialRow(label: string, value: string, isLast: boolean, dir: TextDirection) {
  return `<tr>
                  <td style="padding:14px 20px; ${isLast ? "" : `border-bottom:1px solid ${brand.border};`}">
                    <p style="margin:0 0 4px 0; font-family:${bodyFont}; font-size:13px; font-weight:600; letter-spacing:0.5px; text-transform:uppercase; color:${brand.mutedForeground};">${label}</p>
                    <p dir="ltr" style="margin:0; font-family:'Courier New', Courier, monospace; font-size:20px; font-weight:700; line-height:1.4; color:${brand.navy}; word-break:break-all; text-align:${startSide(dir)};">${value}</p>
                  </td>
                </tr>`
}

function featureList(title: string, items: readonly string[]) {
  const rows = items
    .map(
      (item) => `<tr>
                  <td width="20" style="width:20px; padding:4px 0; vertical-align:top; font-family:${bodyFont}; font-size:16px; line-height:1.5; color:${brand.teal}; font-weight:700;">&#8226;</td>
                  <td style="padding:4px 0; vertical-align:top; font-family:${bodyFont}; font-size:16px; line-height:1.5; color:${brand.navy};">${item}</td>
                </tr>`,
    )
    .join("")
  return `<p style="margin:0 0 4px 0; font-family:${bodyFont}; font-size:16px; line-height:1.6; font-weight:600; color:${brand.navy};">${title}</p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">${rows}
              </table>`
}

/**
 * Official store badges as PNG (SVG is not supported in Gmail/Outlook).
 * The Google Play PNG contains built-in transparent padding, hence its larger box.
 */
function storeBadges(assetBaseUrl: string, appStoreUrl: string, labels: { googlePlay: string; appStore: string }) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:0 4px; vertical-align:middle;">
                    <a href="${GOOGLE_PLAY_URL}" target="_blank" style="display:inline-block; text-decoration:none;">
                      <img src="${assetBaseUrl}/images/badges/google-play-nl.png" width="134" height="52" alt="${labels.googlePlay}" style="display:block; border:0; width:134px; height:52px;" />
                    </a>
                  </td>
                  <td style="padding:0 4px; vertical-align:middle;">
                    <a href="${appStoreUrl}" target="_blank" style="display:inline-block; text-decoration:none;">
                      <img src="${assetBaseUrl}/images/badges/app-store.png" width="135" height="40" alt="${labels.appStore}" style="display:block; border:0; width:135px; height:40px;" />
                    </a>
                  </td>
                </tr>
              </table>`
}

export function buildInvitationHtml({
  locale = defaultLocale,
  firstName = "{{first_name}}",
  username = "{{username}}",
  temporaryPassword = "{{temporary_password}}",
  appStoreUrl = APP_STORE_URL,
  assetBaseUrl = productUrl.replace(/\/$/, ""),
}: {
  locale?: Locale
  firstName?: string
  username?: string
  temporaryPassword?: string
  appStoreUrl?: string
  assetBaseUrl?: string
} = {}): string {
  const c = invitationStrings[locale]
  const common = commonStrings[locale]
  const info = getLocale(locale)
  const { dir } = info

  const credentials = `<p style="margin:0 0 12px 0; font-family:${headingFont}; font-size:16px; font-weight:700; color:${brand.navy};">${c.credentialsTitle}</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${brand.mint}; border:2px solid ${brand.teal}; border-radius:12px;">
                ${credentialRow(c.usernameLabel, escapeHtml(username), false, dir)}
                ${credentialRow(c.passwordLabel, escapeHtml(temporaryPassword), true, dir)}
              </table>`

  return buildEmailShell({
    locale: info,
    subject: c.subject,
    preheader: c.preheader,
    title: c.title,
    footerTagline: common.footerTagline,
    sections: [
      paragraph(common.greeting(escapeHtml(firstName)), { bold: true, size: 17 }) +
        paragraph(c.intro, { size: 17 }) +
        featureList(c.explanationTitle, c.features),
      `<p style="margin:0 0 12px 0; font-family:${headingFont}; font-size:16px; font-weight:700; color:${brand.navy};">${c.downloadIntro}</p>` +
        storeBadges(assetBaseUrl, escapeHtml(appStoreUrl), {
          googlePlay: c.googlePlayLabel,
          appStore: c.appStoreLabel,
        }),
      credentials,
      stepsBlock(common.stepsTitle, c.steps, dir),
      noticeBlock(common.noticeLabel, c.privacy, dir),
      `<p style="margin:0; padding-top:16px; border-top:1px solid ${brand.border}; font-family:${bodyFont}; font-size:14px; line-height:1.6; color:${brand.mutedForeground};">${common.help}</p>`,
    ],
  })
}
