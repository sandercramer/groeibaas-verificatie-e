import { brand } from "@/lib/verification-email"

const swatches: { name: string; token: string; hex: string; use: string }[] = [
  { name: "Navy", token: "--primary", hex: brand.navy, use: "Titels, header & footer" },
  { name: "Teal", token: "--accent", hex: brand.teal, use: "Accent, codebox-rand, links" },
  { name: "Indigo", token: "--indigo", hex: brand.indigo, use: "Diepe paarse accent" },
  { name: "Lavender", token: "--lavender", hex: brand.lavender, use: "Ondersteunende nuance" },
  { name: "Mint", token: "--mint", hex: brand.mint, use: "Achtergrond codebox" },
  { name: "Background", token: "--background", hex: brand.background, use: "Buitenachtergrond" },
  { name: "Card", token: "--card", hex: brand.card, use: "Centrale kaart" },
  { name: "Muted", token: "--muted", hex: brand.muted, use: "Veiligheidsblok" },
]

const typography = [
  { role: "Titel", font: "Poppins 700 · fallback Arial", size: "24px / 1.3" },
  { role: "Body", font: "Inter 400 · fallback Arial", size: "16px / 1.6" },
  { role: "Verificatiecode", font: "Courier New (monospace)", size: "40px · letter-spacing 10px" },
  { role: "Footer", font: "Inter · Poppins 600", size: "13–15px" },
]

const spacing = [
  { label: "Kaartbreedte", value: "max 600px" },
  { label: "Karacthoeken", value: "16px radius" },
  { label: "Sectiepadding", value: "32px horizontaal" },
  { label: "Codebox-rand", value: "2px teal + 12px radius" },
]

export function DesignSpec() {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      {/* Colors */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="font-serif text-lg font-semibold text-primary">Kleuren</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Navy als hoofdkleur, teal als accent. Spaarzaam gebruik van paars.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {swatches.map((s) => (
            <li key={s.name} className="flex items-center gap-3">
              <span
                className="size-10 shrink-0 rounded-lg border border-border"
                style={{ backgroundColor: s.hex }}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="text-sm font-medium text-primary">
                  {s.name}{" "}
                  <span className="font-mono text-xs text-muted-foreground">
                    {s.hex}
                  </span>
                </p>
                <p className="truncate text-xs text-muted-foreground">{s.use}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        {/* Typography */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-serif text-lg font-semibold text-primary">Typografie</h2>
          <ul className="mt-4 divide-y divide-border">
            {typography.map((t) => (
              <li key={t.role} className="flex items-baseline justify-between gap-4 py-2.5">
                <span className="text-sm font-medium text-primary">{t.role}</span>
                <span className="text-right text-xs text-muted-foreground">
                  {t.font}
                  <br />
                  {t.size}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Spacing */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-serif text-lg font-semibold text-primary">
            Layout &amp; spacing
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-3">
            {spacing.map((s) => (
              <li key={s.label} className="rounded-lg bg-muted px-3 py-2.5">
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="text-sm font-medium text-primary">{s.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
