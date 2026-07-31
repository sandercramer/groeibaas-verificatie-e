export type EmailVariant = "medewerkers" | "externen"

type VariantContent = {
  label: string
  audience: string
  subject: string
  preheader: string
  title: string
  intro: string
  instruction: string
  validity: string
  security: string
  ignore: string
  contact: string
  footerTagline: string
}

export const brand = {
  navy: "#211B55",
  teal: "#54BBD2",
  indigo: "#33157E",
  lavender: "#685C95",
  mint: "#E7E6F2",
  background: "#F6F6FB",
  card: "#FDFDFF",
  primaryForeground: "#F8F8FC",
  secondary: "#DDDCEC",
  muted: "#E7E7F0",
  mutedForeground: "#59567B",
  accentForeground: "#001B2E",
  border: "#D7D6E1",
  destructive: "#E40014",
} as const

export const productUrl = "https://voortgang.nldb.nl/"
export const logoUrl = "https://concept.nederlandsdebaas.nl/logo-nldb.png"

export const variants: Record<EmailVariant, VariantContent> = {
  medewerkers: {
    label: "Medewerkers",
    audience: "Docenten, coördinatoren, administratie, participatiecollega's, jobcoaches en beheerders.",
    subject: "Je verificatiecode voor Groeibaas",
    preheader: "Gebruik deze code om je login bij Groeibaas te bevestigen.",
    title: "Je verificatiecode voor Groeibaas",
    intro:
      "Je probeert in te loggen bij Groeibaas, de voortgangstool van Nederlands de Baas. Gebruik onderstaande code om je login te bevestigen.",
    instruction: "Vul deze code in op het inlogscherm van Groeibaas.",
    validity: "Deze code is tijdelijk geldig.",
    security:
      "Deel deze code nooit met iemand anders. Nederlands de Baas vraagt nooit om je verificatiecode via telefoon, WhatsApp of e-mail.",
    ignore:
      "Heb je niet geprobeerd in te loggen? Dan kun je deze e-mail negeren of contact opnemen met de beheerder.",
    contact: "Neem contact op met Nederlands de Baas als je dit niet herkent.",
    footerTagline: "Groeibaas – voortgang in taal en participatie",
  },
  externen: {
    label: "Externen",
    audience: "Gemeenten, werkgevers, praktijkbegeleiders en andere externe betrokkenen.",
    subject: "Uw verificatiecode voor Groeibaas",
    preheader: "Gebruik deze code om uw login bij Groeibaas te bevestigen.",
    title: "Uw verificatiecode voor Groeibaas",
    intro:
      "U probeert in te loggen bij Groeibaas, de beveiligde voortgangsomgeving van Nederlands de Baas. Gebruik onderstaande code om uw login te bevestigen.",
    instruction: "Vul deze code in op het inlogscherm van Groeibaas.",
    validity: "Deze code is tijdelijk geldig.",
    security:
      "Deel deze code nooit met iemand anders. Nederlands de Baas vraagt nooit om uw verificatiecode via telefoon, WhatsApp of e-mail.",
    ignore:
      "Heeft u niet geprobeerd in te loggen? Dan kunt u deze e-mail negeren of contact opnemen met Nederlands de Baas.",
    contact: "Neem contact op met Nederlands de Baas als u dit niet herkent.",
    footerTagline: "Groeibaas – voortgang in taal en participatie",
  },
}

/**
 * Builds an e-mail-safe HTML document for the Groeibaas verification code e-mail.
 * Table-based layout, inline styles, fallback fonts — ready to drop into any ESP.
 */
export function buildEmailHtml(variant: EmailVariant, code = "{{code}}"): string {
  const c = variants[variant]
  const fontStack = "'Poppins', Arial, Helvetica, sans-serif"
  const bodyFont = "'Inter', Arial, Helvetica, sans-serif"

  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <title>${c.subject}</title>
</head>
<body style="margin:0; padding:0; width:100%; background-color:${brand.background};">
  <div style="display:none; max-height:0; overflow:hidden; opacity:0; font-size:1px; line-height:1px; color:${brand.background};">
    ${c.preheader}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${brand.background};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px; max-width:600px; background-color:${brand.card}; border:1px solid ${brand.border}; border-radius:16px; overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background-color:${brand.card}; padding:24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" style="vertical-align:middle;">
                    <img src="${logoUrl}" width="150" alt="Nederlands de Baas" style="display:block; border:0; height:auto; max-width:150px;" />
                  </td>
                  <td align="right" style="vertical-align:middle; font-family:${fontStack}; font-size:13px; font-weight:700; letter-spacing:1px; color:${brand.navy}; text-transform:uppercase;">
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
            <td style="padding:40px 32px 8px 32px;">
              <h1 style="margin:0 0 16px 0; font-family:${fontStack}; font-size:24px; line-height:1.3; font-weight:700; color:${brand.navy};">
                ${c.title}
              </h1>
              <p style="margin:0 0 24px 0; font-family:${bodyFont}; font-size:16px; line-height:1.6; color:${brand.mutedForeground};">
                ${c.intro}
              </p>
            </td>
          </tr>
          <!-- Code box -->
          <tr>
            <td style="padding:0 32px 8px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${brand.mint}; border:2px solid ${brand.teal}; border-radius:12px;">
                <tr>
                  <td align="center" style="padding:24px 16px;">
                    <p style="margin:0 0 8px 0; font-family:${bodyFont}; font-size:12px; font-weight:600; letter-spacing:1px; text-transform:uppercase; color:${brand.mutedForeground};">
                      Verificatiecode
                    </p>
                    <p style="margin:0; font-family:'Courier New', Courier, monospace; font-size:40px; line-height:1.1; font-weight:700; letter-spacing:10px; color:${brand.navy};">
                      ${code}
                    </p>
                  </td>
                </tr>
              </table>
              <p style="margin:16px 0 24px 0; font-family:${bodyFont}; font-size:15px; line-height:1.6; text-align:center; color:${brand.mutedForeground};">
                ${c.instruction} ${c.validity}
              </p>
            </td>
          </tr>
          <!-- Security box -->
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${brand.muted}; border-radius:10px;">
                <tr>
                  <td style="padding:16px 20px; font-family:${bodyFont}; font-size:14px; line-height:1.6; color:${brand.navy};">
                    <strong style="color:${brand.navy};">Veiligheid.</strong> ${c.security}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Ignore note -->
          <tr>
            <td style="padding:0 32px 40px 32px;">
              <p style="margin:0; font-family:${bodyFont}; font-size:14px; line-height:1.6; color:${brand.mutedForeground};">
                ${c.ignore}
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:${brand.navy}; padding:28px 32px;">
              <p style="margin:0 0 4px 0; font-family:${fontStack}; font-size:15px; font-weight:600; color:${brand.primaryForeground};">
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
        <p style="margin:16px 0 0 0; font-family:${bodyFont}; font-size:12px; line-height:1.5; color:${brand.mutedForeground}; max-width:600px;">
          ${c.contact}
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`
}
