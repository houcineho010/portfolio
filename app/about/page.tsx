export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <a href="/" className="text-lg font-semibold tracking-tight">
          LAHOUCINE<span className="text-neutral-400">.</span>
        </a>

        <a
          href="/"
          className="text-sm text-neutral-500 transition hover:text-black"
        >
          ← Back
        </a>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-24 sm:pt-32">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
          About
        </p>

        <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-7xl">
          I like turning
          <br />
          unclear problems
          <br />
          <span className="text-neutral-400">into working systems.</span>
        </h1>

        <p className="mt-10 max-w-2xl text-xl leading-8 text-neutral-500">
          My background started in digital marketing, but building real projects
          gradually pulled me toward AI, automation, software, content and
          product development.
        </p>
      </section>

      {/* How I work */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              How I work
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              I learn by building.
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-8 text-neutral-500">
              <p>
                When I encounter something I don't understand, I usually want to
                figure out how it works rather than stay at the surface.
              </p>

              <p>
                I experiment, build a first version, test it against reality,
                see what breaks, and then improve the parts that actually
                matter.
              </p>

              <p>
                That approach has taken me from websites and digital marketing
                into automation, AI workflows, software and video systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principle */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            My approach
          </p>

          <div className="mt-10 max-w-4xl">
            <p className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Build V1
              <span className="text-neutral-300"> → </span>
              collect evidence
              <span className="text-neutral-300"> → </span>
              improve.
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-500">
              I try not to optimize something before I have experienced it. The
              first version doesn't need to be perfect. It needs to work well
              enough to teach me something.
            </p>
          </div>
        </div>
      </section>

      {/* What I work across */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            What I work across
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "AI & Automation",
                text: "AI workflows, APIs, automation and systems that reduce repetitive work.",
              },
              {
                number: "02",
                title: "Web & Software",
                text: "Websites, interfaces and software built around practical problems.",
              },
              {
                number: "03",
                title: "Marketing",
                text: "SEO, content, audience research, acquisition and conversion.",
              },
              {
                number: "04",
                title: "Content Systems",
                text: "Short-form video, content workflows and systems for producing at scale.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="bg-[#fafafa] p-8 transition hover:bg-white"
              >
                <span className="text-sm text-neutral-400">{item.number}</span>

                <h2 className="mt-12 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h2>

                <p className="mt-4 max-w-md text-sm leading-6 text-neutral-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current focus */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              Current focus
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Building useful things and getting better at the systems behind
              them.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-500">
              Right now I'm focused on building AI-powered systems, improving my
              software skills, and turning projects into things that can
              actually be used in the real world.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            Get in touch
          </p>

          <div className="mt-8 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Have a problem
              <br />
              worth building around?
            </h2>

            <a
              href="mailto:lahoucineamarir5@gmail.com"
              className="text-lg font-medium underline underline-offset-4 transition hover:text-neutral-500"
            >
              lahoucineamarir5@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 text-sm text-neutral-400">
          <a href="/" className="transition hover:text-black">
            ← Back to portfolio
          </a>

          <span>Build V1 → collect evidence → improve.</span>
        </div>
      </footer>
    </main>
  );
}
