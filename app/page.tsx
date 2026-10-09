import { TemplateSwitcher } from "@/components/template-switcher"
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
              Email templates
            </h1>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Warm, trustworthy email templates in the Nederlands de Baas brand
              style: a verification code email for staff and external users,
              and an invitation email for students. Ready to export as
              email-safe HTML. The email copy itself is in Dutch for the
              recipients.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-8 sm:px-6 sm:py-12">
        <TemplateSwitcher />

        <section>
          <h2 className="font-serif text-xl font-semibold text-primary">
            Design system
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            The building blocks behind the template.
          </p>
          <div className="mt-5">
            <DesignSpec />
          </div>
        </section>

        {/* Email-safe conversion notes */}
        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-serif text-xl font-semibold text-primary">
            Exporting to email-safe HTML
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                The template is built with a{" "}
                <strong className="text-primary">table-based layout</strong> and{" "}
                <strong className="text-primary">inline CSS</strong> — the
                standard for email clients like Gmail, Outlook and Apple Mail.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                Fonts fall back automatically to{" "}
                <strong className="text-primary">Arial / Helvetica</strong>.
                Poppins and Inter are optional and break nothing if they fail
                to load.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                The logo has{" "}
                <strong className="text-primary">alt text</strong> and the
                header/footer show the brand name even without images, so the
                template still works when images are blocked.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                Replace the placeholders{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-primary">
                  {"{{code}}"}
                </code>
                ,{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-primary">
                  {"{{first_name}}"}
                </code>{" "}
                and{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-primary">
                  {"{{invite_url}}"}
                </code>{" "}
                in your mail program or ESP with real values. The invitation
                CTA is a bulletproof table button, so it renders without
                images or CSS support.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                No JavaScript, no interactive components — use the{" "}
                <strong className="text-primary">Copy HTML</strong> button and
                paste straight into your template editor.
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
