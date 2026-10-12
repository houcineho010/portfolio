export default function WooCommerceCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6 sm:py-7">
        <a href="/" className="text-lg font-semibold tracking-tight">LAHOUCINE<span className="text-neutral-400">.</span></a>
        <a href="/#work" className="text-sm text-neutral-500 transition hover:text-black">← Back to work</a>
      </nav>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">WordPress · WooCommerce · E-commerce</p>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-7xl">A store for digital products.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-500">I built a WordPress store using WooCommerce to list digital products and configured automatic delivery after purchase.</p>
        <div className="mt-8 flex flex-wrap gap-2">{["WordPress", "WooCommerce", "Digital products", "Automatic delivery"].map((item) => <span key={item} className="rounded-full bg-neutral-100 px-3 py-1.5 text-sm text-neutral-600">{item}</span>)}</div>
      </section>
      <section className="border-t border-neutral-200"><div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[1fr_2fr]"><p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">The project</p><div><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">From product listing to digital access.</h2><p className="mt-6 text-lg leading-8 text-neutral-500">The store included ebooks, templates, and software keys. Because some original products were not legally authorized, this case study focuses on the technical experience rather than promoting those products or presenting the original store as a legitimate current business.</p></div></div></section>
      <section className="border-t border-neutral-200"><div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"><p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">What I implemented</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{[
        ["Store setup", "Built the website with WordPress and WooCommerce."],
        ["Digital product catalog", "Configured a store for presenting digital products."],
        ["Automatic delivery", "Configured delivery of digital access after purchase."],
        ["E-commerce workflow", "Worked with the flow from product selection through ordering and digital delivery."]
      ].map(([title, description]) => <article key={title} className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"><h3 className="text-xl font-semibold tracking-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-neutral-500">{description}</p></article>)}</div></div></section>
      <section className="border-t border-neutral-200"><div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[1fr_2fr]"><p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">Evidence and next steps</p><div><h2 className="text-3xl font-semibold tracking-tight">Experience documented honestly.</h2><p className="mt-5 text-lg leading-8 text-neutral-500">The original store is offline. No revenue, order-volume, or conversion claims are made because verified figures are unavailable. A future live demonstration should use products I own or am authorized to distribute.</p></div></div></section>

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
