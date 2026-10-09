import { brand, productUrl } from "@/lib/verification-email"
import {
  bodyFont,
  buildEmailShell,
  escapeHtml,
  headingFont,
  noticeBlock,
  paragraph,
  stepsBlock,
} from "@/lib/email-shell"

export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=tools.sapient.progressdebaas&pcampaignid=web_share"

export const APP_STORE_URL = "https://apps.apple.com/nl/app/groeibaas/id6784656724"

export const invitationPlaceholders = [
  "{{first_name}}",
  "{{username}}",
  "{{temporary_password}}",
] as const

export const invitationContent = {
  label: "App invitation",
  description: "Download the app and log in with a temporary password.",
  audience:
    "Students (adult learners). Simple, informal Dutch (je/jij) for readers with Dutch as a second language and limited digital skills.",
  subject: "Download de Groeibaas app",
  preheader: "Download de app en log in met je gebruikersnaam en wachtwoord.",
  title: "Welkom bij Groeibaas",
  intro: "Je krijgt toegang tot de Groeibaas app van Nederlands de Baas.",
  explanationTitle: "Met de Groeibaas app:",
  features: [
    "vind je je rooster;",
    "vind je je QR-code;",
    "zie je je voortgang, zoals je taal en je traject.",
  ],
  downloadIntro: "Stap 1. Download de app op je telefoon:",
  googlePlayLabel: "Ontdek het op Google Play",
  appStoreLabel: "Download in de App Store",
  credentialsTitle: "Stap 2. Log in met deze gegevens:",
  usernameLabel: "Gebruikersnaam",
  passwordLabel: "Tijdelijk wachtwoord",
  steps: [
    "Download de Groeibaas app.",
    "Open de app.",
    "Vul je gebruikersnaam en tijdelijk wachtwoord in.",
    "Maak een nieuw wachtwoord. Kies een wachtwoord dat alleen jij weet.",
  ],
  privacy:
    "Je tijdelijk wachtwoord werkt maar 1 keer. Deel je gegevens niet met anderen.",
  help: "Lukt het niet? Vraag hulp aan je docent, trajectbegeleider of Nederlands de Baas.",
  footerTagline: "Groeibaas – jouw voortgang in taal en participatie",
} as const

function credentialRow(label: string, value: string, isLast: boolean) {
  return `<tr>
                  <td style="padding:14px 20px; ${isLast ? "" : `border-bottom:1px solid ${brand.border};`}">
                    <p style="margin:0 0 4px 0; font-family:${bodyFont}; font-size:13px; font-weight:600; letter-spacing:0.5px; text-transform:uppercase; color:${brand.mutedForeground};">${label}</p>
                    <p style="margin:0; font-family:'Courier New', Courier, monospace; font-size:20px; font-weight:700; line-height:1.4; color:${brand.navy}; word-break:break-all;">${value}</p>
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
                  <td style="padding:0 4px 0 0; vertical-align:middle;">
                    <a href="${GOOGLE_PLAY_URL}" target="_blank" style="display:inline-block; text-decoration:none;">
                      <img src="${assetBaseUrl}/images/badges/google-play-nl.png" width="134" height="52" alt="${labels.googlePlay}" style="display:block; border:0; width:134px; height:52px;" />
                    </a>
                  </td>
                  <td style="padding:0 0 0 4px; vertical-align:middle;">
                    <a href="${appStoreUrl}" target="_blank" style="display:inline-block; text-decoration:none;">
                      <img src="${assetBaseUrl}/images/badges/app-store.png" width="135" height="40" alt="${labels.appStore}" style="display:block; border:0; width:135px; height:40px;" />
                    </a>
                  </td>
                </tr>
              </table>`
}

export function buildInvitationHtml({
  firstName = "{{first_name}}",
  username = "{{username}}",
  temporaryPassword = "{{temporary_password}}",
  appStoreUrl = APP_STORE_URL,
  assetBaseUrl = productUrl.replace(/\/$/, ""),
}: {
  firstName?: string
  username?: string
  temporaryPassword?: string
  appStoreUrl?: string
  assetBaseUrl?: string
} = {}): string {
  const c = invitationContent

  const credentials = `<p style="margin:0 0 12px 0; font-family:${headingFont}; font-size:16px; font-weight:700; color:${brand.navy};">${c.credentialsTitle}</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${brand.mint}; border:2px solid ${brand.teal}; border-radius:12px;">
                ${credentialRow(c.usernameLabel, escapeHtml(username), false)}
                ${credentialRow(c.passwordLabel, escapeHtml(temporaryPassword), true)}
              </table>`

  return buildEmailShell({
    subject: c.subject,
    preheader: c.preheader,
    title: c.title,
    footerTagline: c.footerTagline,
    sections: [
      paragraph(`Hallo ${escapeHtml(firstName)},`, { bold: true, size: 17 }) +
        paragraph(c.intro, { size: 17 }) +
        featureList(c.explanationTitle, c.features),
      `<p style="margin:0 0 12px 0; font-family:${headingFont}; font-size:16px; font-weight:700; color:${brand.navy};">${c.downloadIntro}</p>` +
        storeBadges(assetBaseUrl, escapeHtml(appStoreUrl), {
          googlePlay: c.googlePlayLabel,
          appStore: c.appStoreLabel,
        }),
      credentials,
      stepsBlock("Zo werkt het", c.steps),
      noticeBlock("Let op.", c.privacy),
      `<p style="margin:0; padding-top:16px; border-top:1px solid ${brand.border}; font-family:${bodyFont}; font-size:14px; line-height:1.6; color:${brand.mutedForeground};">${c.help}</p>`,
    ],
  })
}
