import { EmailPreview } from "@/components/email-preview"
import { DesignSpec } from "@/components/design-spec"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:px-6 sm:py-10">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
              G
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-accent">
                Nederlands de Baas
              </p>
              <p className="font-serif text-lg font-semibold text-primary">
                Groeibaas
              </p>
            </div>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-balance font-serif text-3xl font-bold leading-tight text-primary sm:text-4xl">
              Verificatiecode e-mail
            </h1>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Een warme, betrouwbare e-mailtemplate in de huisstijl van
              Nederlands de Baas. Eén basisontwerp met twee inhoudsvarianten:
              medewerkers en externen. Klaar om te vertalen naar e-mail-safe
              HTML.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-8 sm:px-6 sm:py-12">
        <EmailPreview />

        <section>
          <h2 className="font-serif text-xl font-semibold text-primary">
            Design-systeem
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            De bouwstenen achter de template.
          </p>
          <div className="mt-5">
            <DesignSpec />
          </div>
        </section>

        {/* Email-safe conversion notes */}
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-serif text-xl font-semibold text-primary">
            Omzetten naar e-mail-safe HTML
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                De template is al opgebouwd met een{" "}
                <strong className="text-primary">table-based layout</strong> en{" "}
                <strong className="text-primary">inline CSS</strong> — de
                standaard voor e-mailclients zoals Gmail, Outlook en Apple Mail.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                Fonts vallen automatisch terug op{" "}
                <strong className="text-primary">Arial / Helvetica</strong>.
                Poppins en Inter zijn optioneel en breken niets als ze niet
                laden.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                Het logo heeft een{" "}
                <strong className="text-primary">alt-tekst</strong> en de
                header/footer tonen ook zonder afbeeldingen de merknaam. De
                template werkt dus met geblokkeerde afbeeldingen.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                Vervang de placeholder{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-primary">
                  {"{{code}}"}
                </code>{" "}
                in je mailprogramma of ESP met de echte verificatiecode.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                Geen JavaScript, geen interactieve componenten — gebruik de{" "}
                <strong className="text-primary">Kopieer HTML</strong>-knop en
                plak direct in je template-editor.
              </span>
            </li>
          </ul>
        </section>
      </div>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
          <p className="text-sm text-muted-foreground">
            Nederlands de Baas · Groeibaas – voortgang in taal en participatie
          </p>
        </div>
      </footer>
    </main>
  )
}
