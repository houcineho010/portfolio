"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    title: "Shorts Engine",
    type: "AI · Video · Automation",
    description:
      "An AI video workflow in progress: exploring transcription, clip selection, reframing, and rendering in one pipeline.",
    href: "/work/shorts-engine",
  },
  {
    title: "WordPress Website",
    type: "WordPress · Elementor · SEO",
    description:
      "An independently built, Arabic-first WordPress site with French and English support, email marketing, and WhatsApp contact paths.",
    href: "/work/wordpress",
  },
  {
    title: "WooCommerce Store",
    type: "E-commerce · WordPress",
    description:
      "A WooCommerce implementation covering digital-product listings and post-purchase delivery; the original store is offline.",
    href: "/work/woocommerce",
  },
  {
    title: "Shopify Store",
    type: "E-commerce · Shopify",
    description:
      "A Shopify fashion-store project; implementation details and original screenshots still need documentation.",
    href: "/work/shopify",
  },
  {
    title: "Marketing Systems",
    type: "Content · Marketing · Growth",
    description:
      "A process framework for content, SEO, audience research, and digital acquisition—not a campaign case study.",
    href: "/work/marketing-systems",
  },
  {
    title: "AI Automation",
    type: "AI · Workflows · Operations",
    description:
      "An overview of my automation principles. A concrete workflow demo would make this work easier to assess.",
    href: "/work/ai-automation",
  },
];

const skills = [
  {
    title: "AI & Automation",
    items: ["OpenAI", "AI workflows", "n8n", "APIs", "Process automation"],
  },
  {
    title: "Web & Software",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "WordPress",
      "Elementor",
      "WooCommerce",
      "Shopify",
    ],
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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      elements.forEach((element) => observer.observe(element));
      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", updateProgress);
        window.removeEventListener("resize", updateProgress);
      };
    }

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [activeTab]);

  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[#fafafa] text-[#111]"
    >
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden="true"
      />

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-7">
        <a href="#top" className="text-lg font-bold tracking-tight">
          LAHOUCINE<span className="text-neutral-400">.</span>
        </a>
        <div className="flex gap-5 text-sm text-neutral-500 sm:gap-8">
          <a className="nav-link" href="#work">
            Work
          </a>
          <a className="nav-link hidden sm:block" href="/about">
            About
          </a>
          <a className="nav-link" href="#contact">
            Contact ↗
          </a>
        </div>
      </nav>

      <section className="hero-section relative mx-auto max-w-6xl px-5 pb-28 pt-20 sm:pb-36 sm:pt-32">
        <div className="hero-orb" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl">
          <p className="eyebrow" data-reveal>
            AI AUTOMATION · E-COMMERCE · WEB DEVELOPMENT
          </p>
          <h1 className="hero-title mt-8" data-reveal>
            AI automation &
            <br />
            <span className="hero-highlight">e-commerce specialist.</span>
          </h1>
          <p
            className="mt-8 max-w-xl text-lg leading-8 text-neutral-500"
            data-reveal
          >
            Freelance AI and e-commerce specialist since 2019, building and
            improving Shopify and WordPress stores, SEO, and workflow
            automation.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6" data-reveal>
            <a href="#work" className="button-primary">
              Explore my work <span>↓</span>
            </a>
            <a
              href="/about"
              className="text-sm text-neutral-500 transition hover:text-black"
            >
              About me ↗
            </a>
          </div>
          <p
            className="mt-14 text-xs tracking-[.16em] text-neutral-400"
            data-reveal
          >
            OPEN TO AI AUTOMATION & E-COMMERCE ROLES
          </p>
        </div>
        <a href="#work" className="scroll-cue" aria-label="Scroll to projects">
          ↓ <span>Scroll to explore</span>
        </a>
      </section>

      <section id="work" className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div
            className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
            data-reveal
          >
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Ideas, made tangible<span className="text-neutral-400">.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-neutral-500">
              Shopify · WooCommerce · WordPress · AI workflows
            </p>
          </div>

          <div
            className="mb-6 flex gap-2"
            role="tablist"
            aria-label="Portfolio content"
          >
            <button
              role="tab"
              aria-selected={activeTab === "projects"}
              onClick={() => setActiveTab("projects")}
              className={`tab-button ${activeTab === "projects" ? "active" : ""}`}
            >
              Projects <span>06</span>
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "skills"}
              onClick={() => setActiveTab("skills")}
              className={`tab-button ${activeTab === "skills" ? "active" : ""}`}
            >
              Skills <span>04</span>
            </button>
          </div>

          {activeTab === "projects" ? (
            <div className="project-grid" role="tabpanel">
              {projects.map((project, index) => (
                <a
                  key={project.title}
                  href={project.href}
                  className="project-card"
                  data-reveal
                  style={{ transitionDelay: `${(index % 3) * 70}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-400">
                      0{index + 1}
                    </span>
                    <span className="project-arrow">↗</span>
                  </div>
                  <div className="mt-14">
                    <p className="text-xs text-neutral-400">{project.type}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500">
                      {project.description}
                    </p>
                    <p className="mt-6 text-sm font-medium">
                      Explore project <span className="inline-arrow">→</span>
                    </p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="skills-grid" role="tabpanel">
              {skills.map((skill, index) => (
                <div className="skill-card" key={skill.title} data-reveal>
                  <p className="text-xs text-neutral-400">0{index + 1}</p>
                  <h3 className="mt-5 text-xl font-semibold">{skill.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span className="skill-pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          <p className="mt-6 text-xs leading-5 text-neutral-500">
            Project pages explain what I worked on and flag unavailable demos,
            screenshots, or verified results.
          </p>
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div
          className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:grid-cols-[1fr_2fr] sm:py-28"
          data-reveal
        >
          <p className="eyebrow">HOW I WORK</p>
          <div>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Build a first version.
              <br />
              <span className="text-neutral-400">Learn from reality.</span>
              <br />
              Improve what matters.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-neutral-500">
              My background started in digital marketing, then real projects
              pulled me toward automation, AI, software and product development.
              I value useful outcomes and honest evidence over
              impressive-sounding claims.
            </p>
            <a
              href="/about"
              className="mt-6 inline-block text-sm font-medium underline underline-offset-4"
            >
              More about my approach ↗
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <div className="contact-panel" data-reveal>
            <p className="eyebrow">LET&apos;S CONNECT</p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:items-end">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                Let&apos;s make
                <br />
                <span className="text-neutral-400">something useful.</span>
              </h2>
              <div>
                <p className="mb-5 max-w-sm text-sm leading-7 text-neutral-500">
                  I’m applying for AI automation and e-commerce roles. If my
                  experience fits what you need, email me or connect on LinkedIn.
                </p>
                <a
                  className="contact-email"
                  href="mailto:lahoucineamarir5@gmail.com"
                  aria-label="Email Lahoucine at lahoucineamarir5@gmail.com"
                >
                  Email me ↗
                </a>
                <a
                  className="mt-4 block w-fit text-sm font-medium underline underline-offset-4"
                  href="https://www.linkedin.com/in/lahoucine-amarir-38618631a"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect on LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Lahoucine</span>
          <a href="#top" className="hover:text-black">
            Back to top ↑
          </a>
          <span>Build V1 → collect evidence → improve.</span>
        </div>
      </footer>
    </main>
  );
}
