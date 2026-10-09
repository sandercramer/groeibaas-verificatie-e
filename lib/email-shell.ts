import { brand, logoUrl, productUrl } from "@/lib/verification-email"

export const headingFont = "'Poppins', Arial, Helvetica, sans-serif"
export const bodyFont = "'Inter', Arial, Helvetica, sans-serif"

export const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")

export function paragraph(
  text: string,
  { muted = false, bold = false, size = 16, bottom = 16 } = {},
) {
  return `<p style="margin:0 0 ${bottom}px 0; font-family:${bodyFont}; font-size:${size}px; line-height:1.6; font-weight:${bold ? 600 : 400}; color:${muted ? brand.mutedForeground : brand.navy};">${text}</p>`
}

/** Bulletproof table button: renders without images and with limited CSS support. */
export function ctaButton(href: string, label: string, variant: "primary" | "accent" = "primary") {
  const bg = variant === "primary" ? brand.navy : brand.teal
  const fg = variant === "primary" ? brand.primaryForeground : brand.navy
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" class="gb-cta-wrap" style="margin:0 0 12px 0;">
                <tr>
                  <td align="center" bgcolor="${bg}" style="background-color:${bg}; border-radius:10px;">
                    <a href="${href}" target="_blank" class="gb-cta" style="display:inline-block; min-width:220px; padding:16px 28px; font-family:${headingFont}; font-size:17px; font-weight:700; line-height:1.2; color:${fg}; text-decoration:none; border-radius:10px; text-align:center;">${label}</a>
                  </td>
                </tr>
              </table>`
}

export function stepsBlock(title: string, steps: readonly string[]) {
  const rows = steps
    .map(
      (step, index) => `
                <tr>
                  <td width="40" style="width:40px; padding:6px 12px 6px 0; vertical-align:top;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td align="center" width="28" height="28" style="width:28px; height:28px; background-color:${brand.teal}; border-radius:14px; font-family:${headingFont}; font-size:14px; font-weight:700; line-height:28px; color:${brand.navy};">${index + 1}</td>
                      </tr>
                    </table>
                  </td>
                  <td style="padding:8px 0 6px 0; vertical-align:top; font-family:${bodyFont}; font-size:16px; line-height:1.5; color:${brand.navy};">${step}</td>
                </tr>`,
    )
    .join("")
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${brand.mint}; border-radius:12px;">
                <tr>
                  <td style="padding:20px 20px 14px 20px;">
                    <p style="margin:0 0 8px 0; font-family:${headingFont}; font-size:15px; font-weight:700; color:${brand.navy};">${title}</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${rows}
                    </table>
                  </td>
                </tr>
              </table>`
}

export function noticeBlock(label: string, text: string) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${brand.muted}; border-left:4px solid ${brand.teal}; border-radius:10px;">
                <tr>
                  <td style="padding:16px 20px; font-family:${bodyFont}; font-size:15px; line-height:1.6; color:${brand.navy};">
                    <strong style="color:${brand.navy};">${label}</strong> ${text}
                  </td>
                </tr>
              </table>`
}

/** Wraps rows of body content in the shared Groeibaas header, card and footer. */
export function buildEmailShell({
  subject,
  preheader,
  title,
  sections,
  footerTagline,
}: {
  subject: string
  preheader: string
  title: string
  sections: string[]
  footerTagline: string
}) {
  const sectionRows = sections
    .map(
      (html, index) => `
          <tr>
            <td class="gb-pad" style="padding:${index === 0 ? 20 : 0}px 32px ${index === sections.length - 1 ? 40 : 24}px 32px;">
              ${html}
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
  <title>${subject}</title>
  <style>
    @media only screen and (max-width: 480px) {
      .gb-container { width: 100% !important; border-radius: 0 !important; border-left: 0 !important; border-right: 0 !important; }
      .gb-pad { padding-left: 20px !important; padding-right: 20px !important; }
      .gb-heading { font-size: 24px !important; }
      .gb-brandmark { display: none !important; }
      .gb-cta-wrap { width: 100% !important; }
      .gb-cta { display: block !important; min-width: 0 !important; box-sizing: border-box !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; width:100%; background-color:${brand.background};">
  <div style="display:none; max-height:0; overflow:hidden; opacity:0; font-size:1px; line-height:1px; color:${brand.background};">
    ${preheader}
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
          <!-- Title -->
          <tr>
            <td class="gb-pad" style="padding:40px 32px 0 32px;">
              <h1 class="gb-heading" style="margin:0; font-family:${headingFont}; font-size:28px; line-height:1.25; font-weight:700; color:${brand.navy};">${title}</h1>
            </td>
          </tr>${sectionRows}
          <!-- Footer -->
          <tr>
            <td class="gb-pad" style="background-color:${brand.navy}; padding:28px 32px;">
              <p style="margin:0 0 4px 0; font-family:${headingFont}; font-size:15px; font-weight:600; color:${brand.primaryForeground};">Nederlands de Baas</p>
              <p style="margin:0 0 12px 0; font-family:${bodyFont}; font-size:13px; line-height:1.5; color:${brand.secondary};">${footerTagline}</p>
              <a href="${productUrl}" style="font-family:${bodyFont}; font-size:13px; font-weight:600; color:${brand.teal}; text-decoration:none;">${productUrl}</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}
