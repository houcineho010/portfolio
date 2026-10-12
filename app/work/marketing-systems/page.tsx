import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Systems",
  description:
    "An evidence-led approach to content, SEO, audience research, and digital acquisition.",
};

const steps = [
  {
    number: "01",
    title: "Understand the audience",
    description:
      "Start with audience questions, intent, and the problem the content should help solve.",
  },
  {
    number: "02",
    title: "Create useful content",
    description:
      "Choose a clear format and message, then produce content that serves a specific purpose.",
  },
  {
    number: "03",
    title: "Distribute and measure",
    description:
      "Publish consistently, review available signals, and distinguish observed results from assumptions.",
  },
  {
    number: "04",
    title: "Improve the system",
    description:
      "Keep what shows promise, change what does not, and document learnings for the next iteration.",
  },
];

export default function MarketingSystemsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111]">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-7">
        <a href="/" className="text-sm font-semibold tracking-tight">
          ← LAHOUCINE
        </a>
        <a
          href="/#contact"
          className="text-sm text-neutral-500 hover:text-black"
        >
          Contact ↗
        </a>
      </nav>

      <article className="mx-auto max-w-5xl px-5 pb-24 pt-16 sm:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-neutral-400">
          Marketing · Content · Growth
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-.065em] sm:text-7xl">
          Marketing is a system, not a collection of posts.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-500">
          This page describes a practical framework for thinking about content
          and digital acquisition. It is a process overview, not a claim of
          campaign results or client performance.
        </p>

        <div className="mt-14 grid gap-3 sm:grid-cols-2">
          {steps.map((step) => (
            <section
              key={step.number}
              className="rounded-2xl border border-neutral-200 bg-white p-7 sm:p-8"
            >
              <span className="text-xs text-neutral-400">{step.number}</span>
              <h2 className="mt-7 text-2xl font-semibold tracking-tight">
                {step.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-neutral-500">
                {step.description}
              </p>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-2xl bg-neutral-100 p-7 sm:p-9">
          <h2 className="text-xl font-semibold tracking-tight">
            Evidence before claims
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">
            I aim to evaluate work using available evidence and avoid inventing
            performance metrics. Detailed examples can be added as publishable
            assets and documented results become available.
          </p>
        </section>

        <a
          href="/#work"
          className="mt-10 inline-flex text-sm font-medium underline underline-offset-4"
        >
          ← Back to all projects
        </a>
      </article>
    </main>
  );
}
