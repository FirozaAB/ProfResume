import Section from "./components/Section";
import { resume } from "./resume";

export default function App() {
  const r = resume;
  return (
    <main className="mx-auto max-w-3xl p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{r.name}</h1>
        <p className="opacity-80">{r.title}</p>
        <nav className="mt-3 flex flex-wrap gap-4 text-sm underline">
          {r.links?.map(l => (
            <a key={l.label} href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
          ))}
        </nav>
      </header>

      <Section id="summary" title="Summary">
        <p>{r.summary}</p>
      </Section>

      <Section id="skills" title="Skills">
        <ul className="list-disc pl-6 grid grid-cols-2 gap-x-6">
          {r.skills.map(s => <li key={s}>{s}</li>)}
        </ul>
      </Section>

      <Section id="experience" title="Experience">
        <ul className="space-y-4">
          {r.experience.map((job) => (
            <li key={job.company + job.role}>
              <div className="font-medium">{job.role} — {job.company}</div>
              <div className="text-sm opacity-70">{job.start} — {job.end ?? "Present"}</div>
              <ul className="list-disc pl-6 mt-1">
                {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      {r.projects && (
        <Section id="projects" title="Projects">
          <ul className="space-y-4">
            {r.projects.map(p => (
              <li key={p.name}>
                <div className="font-medium">{p.name}</div>
                <p>{p.summary}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </main>
  );
}
