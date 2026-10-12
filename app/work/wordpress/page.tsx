export default function WordPressCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6 sm:py-7">
        <a href="/" className="text-lg font-semibold tracking-tight">LAHOUCINE<span className="text-neutral-400">.</span></a>
        <a href="/#work" className="text-sm text-neutral-500 transition hover:text-black">← Back to work</a>
      </nav>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">WordPress · Elementor · Digital Marketing</p>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-7xl">A multilingual website for digital services.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-500">I independently built an Arabic-first website promoting website development and social media management services, with French and English language support.</p>
        <div className="mt-8 flex flex-wrap gap-2">{["WordPress", "WoodMart", "Elementor", "SEO", "Mailchimp", "WhatsApp CTA", "Arabic · French · English"].map((item) => <span key={item} className="rounded-full bg-neutral-100 px-3 py-1.5 text-sm text-neutral-600">{item}</span>)}</div>
      </section>
      <section className="border-t border-neutral-200">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[1fr_2fr]">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">The project</p>
          <div><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">One website, several parts of the customer journey.</h2>
            <p className="mt-6 text-lg leading-8 text-neutral-500">The website presented website-building and social media management services, showed examples of websites I could build, and gave prospective customers a direct way to get in touch.</p>
          </div>
        </div>
      </section>
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">My contribution</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">{[
            ["Website design and build", "Handled the website independently using WordPress, the WoodMart theme, and Elementor for page editing and layout."],
            ["Multilingual presentation", "Built an Arabic-first experience with French and English language support."],
            ["SEO", "Worked on search-engine optimization as part of the website setup."],
            ["Marketing integrations", "Integrated Mailchimp for email marketing and WhatsApp calls to action to make contacting the business straightforward."]
          ].map(([title, description]) => <article key={title} className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"><h3 className="text-xl font-semibold tracking-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-neutral-500">{description}</p></article>)}</div>
        </div>
      </section>
      <section className="border-t border-neutral-200">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[1fr_2fr]">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">Evidence and outcome</p>
          <div><h2 className="text-3xl font-semibold tracking-tight">A retrospective case study.</h2>
            <p className="mt-5 text-lg leading-8 text-neutral-500">The original website is no longer online, so this page documents the work from my recollection. I do not have verified traffic, ranking, lead, or sales figures to report. Original screenshots may be added if recovered; any new visual reconstruction will be labeled as a recreation.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            Visual concept · Not original screenshots
          </p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Illustrative reconstruction
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-500">
            These newly created mockups illustrate a possible visual direction for the project.
            They are not screenshots of the original website and do not verify its historical appearance.
          </p>
          <figure className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            <img
              src="/images/case-studies/website-reconstruction-concepts.png"
              alt="Illustrative mockups of a multilingual digital-services website and a digital-products storefront, created for portfolio concept visualization"
              className="h-auto w-full"
              loading="lazy"
            />
            <figcaption className="border-t border-neutral-200 px-4 py-3 text-xs leading-5 text-neutral-500 sm:px-6">
              Concept visualization only. The original websites are offline; this image is not evidence of their original appearance.
            </figcaption>
          </figure>
        </div>
      </section>

      <footer className="border-t border-neutral-200"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-7 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between sm:px-6"><a href="/#work" className="transition hover:text-black">← Back to projects</a><span>© 2026 Lahoucine</span></div></footer>
    </main>
  );
}
