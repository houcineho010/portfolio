import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation",
  description:
    "A practical approach to designing AI-assisted workflows and reducing repetitive work.",
};

const principles = [
  {
    title: "Find the repeatable task",
    description:
      "Map the current steps first. Automation is most useful when the task and its failure points are understood.",
  },
  {
    title: "Connect tools carefully",
    description:
      "Use APIs, clear inputs and outputs, and explicit rules so each step has a defined responsibility.",
  },
  {
    title: "Keep a human in the loop",
    description:
      "For uncertain or consequential outcomes, include review, exception handling, and a way to correct mistakes.",
  },
  {
    title: "Test before relying on it",
    description:
      "Start with a small version, test edge cases, and improve based on actual behavior rather than assumptions.",
  },
];

export default function AIAutomationPage() {
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
          AI · Automation · Operations
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-.065em] sm:text-7xl">
          Make repetitive work simpler.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-500">
          My approach to automation is practical: understand a workflow, build a
          small version, test it, and improve it. These principles describe my
          approach; they do not claim that every example is already deployed for
          a client.
        </p>

        <div className="mt-14 space-y-3">
          {principles.map((principle, index) => (
            <section
              key={principle.title}
              className="grid gap-4 rounded-2xl border border-neutral-200 bg-white p-6 sm:grid-cols-[70px_1fr] sm:p-8"
            >
              <span className="text-xs text-neutral-400">0{index + 1}</span>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">
                  {principle.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-500">
                  {principle.description}
                </p>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-2xl bg-neutral-100 p-7 sm:p-9">
          <h2 className="text-xl font-semibold tracking-tight">
            A sensible first version
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">
            A useful workflow should be understandable, testable, and easy to
            recover when something goes wrong. I prefer a small reliable system
            over complexity that has not proved its value.
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
