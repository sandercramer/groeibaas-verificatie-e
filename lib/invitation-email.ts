import { brand, logoUrl, productUrl } from "@/lib/verification-email"

export const invitationContent = {
  label: "Student invitation",
  audience:
    "Students (adult learners) who get access to Groeibaas. Simple, informal Dutch (je/jij) for readers with Dutch as a second language and limited digital skills.",
  subject: "Je uitnodiging voor Groeibaas",
  preheader: "Bekijk je voortgang bij Nederlands de Baas.",
  title: "Welkom bij Groeibaas",
  intro: "Je krijgt toegang tot Groeibaas van Nederlands de Baas.",
  explanation:
    "In Groeibaas kun je je voortgang bekijken. Bijvoorbeeld je taalontwikkeling, je traject en belangrijke informatie over je lessen of begeleiding.",
  ctaIntro: "Klik op de knop hieronder om te starten:",
  ctaLabel: "Start met Groeibaas",
  steps: [
    "Klik op Start met Groeibaas.",
    "Log in of maak je wachtwoord aan.",
    "Bekijk je voortgang in Groeibaas.",
  ],
  privacy:
    "Groeibaas is een beveiligde omgeving van Nederlands de Baas. De informatie in Groeibaas is persoonlijk. Deel je inloggegevens daarom niet met anderen.",
  fallback: "Werkt de knop niet? Kopieer deze link en plak hem in je browser:",
  help: "Lukt het niet om in te loggen? Vraag hulp aan je docent, trajectbegeleider of Nederlands de Baas.",
  footerTagline: "Groeibaas – jouw voortgang in taal en participatie",
} as const

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")

/**
 * Builds an email-safe HTML document for the Groeibaas student invitation.
 * Table-based layout, inline styles, bulletproof CTA button and fallback fonts.
 */
export function buildInvitationHtml(
  firstName = "{{first_name}}",
  inviteUrl = "{{invite_url}}",
): string {
  const c = invitationContent
  const name = escapeHtml(firstName)
  const url = escapeHtml(inviteUrl)
  const headingFont = "'Poppins', Arial, Helvetica, sans-serif"
  const bodyFont = "'Inter', Arial, Helvetica, sans-serif"

  const stepRows = c.steps
    .map(
      (step, index) => `
                <tr>
                  <td width="32" style="width:32px; padding:6px 12px 6px 0; vertical-align:top;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td align="center" width="28" height="28" style="width:28px; height:28px; background-color:${brand.teal}; border-radius:14px; font-family:${headingFont}; font-size:14px; font-weight:700; line-height:28px; color:${brand.navy};">
                          ${index + 1}
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td style="padding:6px 0; vertical-align:middle; font-family:${bodyFont}; font-size:16px; line-height:1.5; color:${brand.navy};">
                    ${step}
                  </td>
                </tr>`,
    )
    .join("")

  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <title>${c.subject}</title>
  <style>
    @media only screen and (max-width: 480px) {
      .gb-container { width: 100% !important; border-radius: 0 !important; border-left: 0 !important; border-right: 0 !important; }
      .gb-pad { padding-left: 20px !important; padding-right: 20px !important; }
      .gb-heading { font-size: 24px !important; }
      .gb-brandmark { display: none !important; }
      .gb-cta { display: block !important; width: 100% !important; box-sizing: border-box !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; width:100%; background-color:${brand.background};">
  <div style="display:none; max-height:0; overflow:hidden; opacity:0; font-size:1px; line-height:1px; color:${brand.background};">
    ${c.preheader}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${brand.background};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="gb-container" style="width:100%; max-width:600px; background-color:${brand.card}; border:1px solid ${brand.border}; border-radius:16px; overflow:hidden;">
          <!-- Header -->
          <tr>
            <td class="gb-pad" style="background-color:${brand.card}; padding:24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" style="vertical-align:middle; font-family:${headingFont}; font-size:18px; font-weight:700; color:${brand.navy};">
                    <img src="${logoUrl}" width="150" alt="Nederlands de Baas" style="display:block; border:0; height:auto; max-width:150px;" />
                  </td>
                  <td align="right" class="gb-brandmark" style="vertical-align:middle; font-family:${headingFont}; font-size:13px; font-weight:700; letter-spacing:1px; color:${brand.navy}; text-transform:uppercase;">
                    Groeibaas
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Accent divider -->
          <tr><td style="height:4px; background-color:${brand.teal}; line-height:4px; font-size:0;">&nbsp;</td></tr>
          <!-- Body -->
          <tr>
            <td class="gb-pad" style="padding:40px 32px 8px 32px;">
              <h1 class="gb-heading" style="margin:0 0 20px 0; font-family:${headingFont}; font-size:28px; line-height:1.25; font-weight:700; color:${brand.navy};">
                ${c.title}
              </h1>
              <p style="margin:0 0 16px 0; font-family:${bodyFont}; font-size:17px; line-height:1.6; font-weight:600; color:${brand.navy};">
                Hallo ${name},
              </p>
              <p style="margin:0 0 16px 0; font-family:${bodyFont}; font-size:17px; line-height:1.6; color:${brand.navy};">
                ${c.intro}
              </p>
              <p style="margin:0 0 24px 0; font-family:${bodyFont}; font-size:16px; line-height:1.6; color:${brand.mutedForeground};">
                ${c.explanation}
              </p>
              <p style="margin:0 0 16px 0; font-family:${bodyFont}; font-size:16px; line-height:1.6; color:${brand.navy};">
                ${c.ctaIntro}
              </p>
            </td>
          </tr>
          <!-- CTA button -->
          <tr>
            <td class="gb-pad" align="left" style="padding:0 32px 32px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" bgcolor="${brand.navy}" style="background-color:${brand.navy}; border-radius:10px;">
                    <a href="${url}" target="_blank" class="gb-cta" style="display:inline-block; padding:16px 32px; font-family:${headingFont}; font-size:17px; font-weight:700; line-height:1.2; color:${brand.primaryForeground}; text-decoration:none; border-radius:10px;">
                      ${c.ctaLabel} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Steps -->
          <tr>
            <td class="gb-pad" style="padding:0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${brand.mint}; border-radius:12px;">
                <tr>
                  <td style="padding:20px 20px 14px 20px;">
                    <p style="margin:0 0 8px 0; font-family:${headingFont}; font-size:15px; font-weight:700; color:${brand.navy};">
                      Zo werkt het
                    </p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${stepRows}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Privacy -->
          <tr>
            <td class="gb-pad" style="padding:0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${brand.muted}; border-left:4px solid ${brand.teal}; border-radius:10px;">
                <tr>
                  <td style="padding:16px 20px; font-family:${bodyFont}; font-size:15px; line-height:1.6; color:${brand.navy};">
                    <strong style="color:${brand.navy};">Privacy.</strong> ${c.privacy}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Fallback link + help -->
          <tr>
            <td class="gb-pad" style="padding:0 32px 40px 32px;">
              <p style="margin:0 0 6px 0; font-family:${bodyFont}; font-size:14px; line-height:1.6; color:${brand.mutedForeground};">
                ${c.fallback}
              </p>
              <p style="margin:0 0 20px 0; font-family:${bodyFont}; font-size:14px; line-height:1.6; word-break:break-all;">
                <a href="${url}" target="_blank" style="color:${brand.navy}; font-weight:600; text-decoration:underline;">${url}</a>
              </p>
              <p style="margin:0; padding-top:16px; border-top:1px solid ${brand.border}; font-family:${bodyFont}; font-size:14px; line-height:1.6; color:${brand.mutedForeground};">
                ${c.help}
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td class="gb-pad" style="background-color:${brand.navy}; padding:28px 32px;">
              <p style="margin:0 0 4px 0; font-family:${headingFont}; font-size:15px; font-weight:600; color:${brand.primaryForeground};">
                Nederlands de Baas
              </p>
              <p style="margin:0 0 12px 0; font-family:${bodyFont}; font-size:13px; line-height:1.5; color:${brand.secondary};">
                ${c.footerTagline}
              </p>
              <a href="${productUrl}" style="font-family:${bodyFont}; font-size:13px; font-weight:600; color:${brand.teal}; text-decoration:none;">
                ${productUrl}
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}
