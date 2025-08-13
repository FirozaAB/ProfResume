import { useEffect, useMemo, useState } from "react";
import { resume as r } from "./resume";

// ---------- tiny UI atoms ----------
function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium
      border-black/10 bg-black/5 text-black/80
      dark:border-white/15 dark:bg-white/10 dark:text-white/90">
      {children}
    </span>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-10">
      <h2 className="text-xl font-semibold tracking-tight mb-3">{title}</h2>
      <div className="prose prose-sm max-w-none dark:prose-invert">{children}</div>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-4 shadow-sm
                    dark:border-white/15 dark:bg-white/5">
      {children}
    </div>
  );
}

// ---------- dark mode hook ----------
function useTheme() {
  const [dark, setDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return { dark, setDark };
}

// ---------- page ----------
export default function App() {
  const { dark, setDark } = useTheme();
  const emailHref = useMemo(() => `mailto:${r.email}`, []);

  return (
    <div className="min-h-dvh bg-gradient-to-b from-indigo-50 via-white to-white
                    dark:from-indigo-950 dark:via-neutral-900 dark:to-neutral-950 text-neutral-900 dark:text-neutral-100">
      {/* Header / hero */}
      <header className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.25),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.3),transparent_60%)]" />
        <div className="mx-auto max-w-3xl px-6 pt-10 pb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{r.name}</h1>
              <p className="mt-1 text-base sm:text-lg opacity-80">{r.title}</p>
              <p className="mt-1 text-sm opacity-70">{r.location}</p>
            </div>
            <div className="no-print flex items-center gap-2">
              <button
                aria-label="Toggle dark mode"
                onClick={() => setDark(!dark)}
                className="inline-flex items-center rounded-xl border px-3 py-2 text-xs font-medium
                           border-black/10 bg-white/70 shadow-sm backdrop-blur hover:bg-white
                           dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/15">
                {dark ? "Light" : "Dark"}
              </button>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center rounded-xl border px-3 py-2 text-xs font-medium
                           border-indigo-200 bg-indigo-600 text-white shadow-sm hover:bg-indigo-500
                           dark:border-indigo-400/20"
              >
                Download PDF
              </button>
            </div>
          </div>

          {/* quick links */}
          <div className="no-print mt-4 flex flex-wrap gap-3 text-sm">
            {r.email && (
              <a href={emailHref} className="link">Email</a>
            )}
            {r.links?.map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="link">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 pb-16">
        <Section id="summary" title="Summary">
          <p>{r.summary}</p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="flex flex-wrap gap-2">
            {r.skills.map((s) => <Badge key={s}>{s}</Badge>)}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="grid gap-4">
            {r.experience.map((job) => (
              <Card key={`${job.company}-${job.role}-${job.start}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="font-medium">
                    {job.role} — <span className="opacity-80">{job.company}</span>
                  </div>
                  <div className="text-xs opacity-70">
                    {job.start} — {job.end ?? "Present"}
                  </div>
                </div>
                {job.tech && job.tech.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {job.tech.map((t) => <Badge key={t}>{t}</Badge>)}
                  </div>
                )}
                {job.bullets?.length ? (
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                ) : null}
              </Card>
            ))}
          </div>
        </Section>

        {r.projects && r.projects.length > 0 && (
          <Section id="projects" title="Selected Projects & Research">
            <div className="grid gap-4">
              {r.projects.map((p) => (
                <Card key={p.name}>
                  <div className="font-medium">{p.name}</div>
                  <p className="mt-1">{p.summary}</p>
                  {p.tech && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => <Badge key={t}>{t}</Badge>)}
                    </div>
                  )}
                  {p.links && p.links.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-3 text-sm">
                      {p.links.map((l) => (
                        <a key={l.label} className="link" href={l.url} target="_blank" rel="noreferrer">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </Section>
        )}

        {r.education && r.education.length > 0 && (
          <Section id="education" title="Education">
            <div className="grid gap-3">
              {r.education.map((e) => (
                <div key={`${e.school}-${e.program}`} className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="font-medium">{e.program}</div>
                  <div className="text-xs opacity-70">{e.start} — {e.end}</div>
                  <div className="w-full opacity-80">{e.school}</div>
                </div>
              ))}
            </div>
          </Section>
        )}
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-3xl px-6 pb-10 text-xs opacity-60">
        © {new Date().getFullYear()} {r.name}
      </footer>
    </div>
  );
}
