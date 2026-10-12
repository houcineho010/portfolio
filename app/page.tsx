"use client";

import { useState } from "react";

const projects = [
  {
    title: "Shorts Engine",
    type: "AI · Video · Automation",
    description:
      "A system that analyzes long-form videos, identifies meaningful moments, and turns them into short-form content.",
    href: "/work/shorts-engine",
  },
  {
    title: "WordPress Website",
    type: "WordPress · Elementor · SEO",
    description:
      "A multilingual digital marketing website built with WordPress and Elementor, with SEO, Mailchimp, and WhatsApp contact paths.",
    href: "/work/wordpress",
  },
  {
    title: "WooCommerce Store",
    type: "WordPress · E-commerce · Automation",
    description:
      "A digital-products store using WooCommerce, including a configured automatic-delivery workflow.",
    href: "/work/woocommerce",
  },
  {
    title: "Shopify Store",
    type: "Shopify · E-commerce",
    description:
      "A real Shopify store project, documenting store-building experience and implementation as evidence is assembled.",
    href: "/work/shopify",
  },
  {
    title: "Marketing Systems",
    type: "Marketing · Content · Growth",
    description:
      "Experiments combining content, audience research, SEO, automation and digital acquisition.",
    href: "#",
  },
  {
    title: "AI Automation",
    type: "AI · Automation · Operations",
    description:
      "Practical workflows designed to remove repetitive work and connect different tools into useful systems.",
    href: "#",
  },
];

const skills = [
  {
    title: "AI & Automation",
    items: ["OpenAI", "AI workflows", "n8n", "APIs", "Process automation"],
  },
  {
    title: "Web & Software",
    items: ["Next.js", "React", "TypeScript", "Python", "WordPress", "Elementor", "WooCommerce", "Shopify"],
  },
  {
    title: "Marketing",
    items: [
      "SEO",
      "Content strategy",
      "Affiliate marketing",
      "Growth",
      "Conversion",
    ],
  },
  {
    title: "Content",
    items: [
      "Short-form video",
      "Video automation",
      "Canva",
      "CapCut",
      "AI content",
    ],
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"projects" | "skills">("projects");

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6 sm:py-7">
        <div className="text-lg font-semibold tracking-tight">
          LAHOUCINE<span className="text-neutral-400">.</span>
        </div>

        <div className="hidden gap-8 text-sm text-neutral-500 sm:flex">
          <a href="#work" className="transition hover:text-black">
            Work
          </a>
          <a href="/about" className="transition hover:text-black">
            About
          </a>
          <a href="#contact" className="transition hover:text-black">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-36">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            AI · Automation · Web · Marketing
          </p>

          <h1 className="max-w-full break-words text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            I build
            <br />
            <span className="group relative inline-block cursor-default">
              <span className="transition-colors duration-300 group-hover:text-neutral-400">
                digital systems
              </span>
            </span>
            <br />
            <span className="text-neutral-400">that solve problems.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-500">
            I combine AI, automation, software, web and marketing to turn
            practical ideas into working systems.
          </p>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="#work"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02] hover:bg-neutral-800"
            >
              See my work
            </a>

            <a
              href="/about"
              className="text-sm font-medium text-neutral-500 transition hover:text-black"
            >
              About me →
            </a>
          </div>
        </div>
      </section>

      {/* Work / Skills */}
      <section id="work" className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          {/* Tabs */}
          <div className="mb-14 flex items-center gap-2">
            <button
              onClick={() => setActiveTab("projects")}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeTab === "projects"
                  ? "bg-black text-white"
                  : "text-neutral-500 hover:bg-neutral-100 hover:text-black"
              }`}
            >
              Projects
            </button>

            <button
              onClick={() => setActiveTab("skills")}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeTab === "skills"
                  ? "bg-black text-white"
                  : "text-neutral-500 hover:bg-neutral-100 hover:text-black"
              }`}
            >
              Skills
            </button>
          </div>

          {/* Projects */}
          {activeTab === "projects" && (
            <div className="grid min-w-0 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 md:grid-cols-2">
              {projects.map((project, index) => (
                <a
                  href={project.href}
                  key={project.title}
                  className="group block min-w-0 min-h-[260px] bg-[#fafafa] p-6 transition hover:bg-white sm:p-8"
                >
                  <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
                    <span className="text-sm text-neutral-400">
                      0{index + 1}
                    </span>

                    <span className="text-xs text-neutral-400">
                      {project.type}
                    </span>
                  </div>

                  <div className="mt-16">
                    <h2 className="text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                      {project.title}
                    </h2>

                    <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500">
                      {project.description}
                    </p>

                    <span className="mt-6 inline-block text-sm font-medium opacity-0 transition group-hover:opacity-100">
                      View project →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Skills */}
          {activeTab === "skills" && (
            <div className="grid gap-8 md:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-8"
                >
                  <h2 className="text-xl font-semibold tracking-tight">
                    {skill.title}
                  </h2>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-neutral-100 px-3 py-1.5 text-sm text-neutral-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              About
            </p>

            <div>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                I like taking unclear problems and turning them into working
                systems.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-500">
                My background started in digital marketing, but building real
                projects gradually pulled me toward automation, AI, software and
                product development.
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-500">
                My approach is simple: build a V1, collect evidence, understand
                what actually works, and improve the parts that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            Contact
          </p>

          <div className="mt-8 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Let&apos;s build
              <br />
              something useful.
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
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-7 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© 2026 Lahoucine</span>
          <span>Build V1 → collect evidence → improve.</span>
        </div>
      </footer>
    </main>
  );
}
