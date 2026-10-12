export default function ShopifyCaseStudyPage() {
  const details = [
    ["Store concept", "An online fashion store focused on clothing for women."],
    ["Platform", "Shopify, used to build and manage the online storefront."],
    ["Shopping experience", "A store structure intended to help customers explore women's clothing and navigate product offerings."],
    ["My role", "Hands-on experience building the store. Specific features and implementation details can be added as they are verified."],
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6 sm:py-7">
        <a href="/" className="text-lg font-semibold tracking-tight">
          LAHOUCINE<span className="text-neutral-400">.</span>
        </a>
        <a href="/#work" className="text-sm text-neutral-500 transition hover:text-black">
          ← Back to work
        </a>
      </nav>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
          Shopify · E-commerce · Fashion
        </p>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-7xl">
          Building an online store for women's fashion.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-500">
          I built a Shopify store focused on women's clothing, gaining practical
          experience with an e-commerce platform and the structure of an online
          retail storefront.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {["Shopify", "E-commerce", "Women's fashion", "Online storefront"].map((item) => (
            <span key={item} className="rounded-full bg-neutral-100 px-3 py-1.5 text-sm text-neutral-600">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[1fr_2fr]">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            Project overview
          </p>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              A storefront for a fashion-focused audience.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-500">
              The project centered on building an online store for women's
              clothing. The goal of this case study is to document the Shopify
              experience and the work involved in creating the storefront.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            Project details
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {details.map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
                <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-500">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[1fr_2fr]">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            Evidence and next steps
          </p>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Documenting the real implementation.
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-500">
              The store's screenshots, exact features, and outcomes have not yet
              been documented here. No sales or performance claims are made.
              This page can be strengthened with original screenshots or a
              clearly labeled reconstruction and a more detailed account of my work.
            </p>
            <div className="mt-8 rounded-2xl border border-dashed border-neutral-300 p-8 text-sm leading-6 text-neutral-400">
              Store screenshots and verified implementation details to be added.
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-7 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <a href="/#work" className="transition hover:text-black">← Back to projects</a>
          <span>© 2026 Lahoucine</span>
        </div>
      </footer>
    </main>
  );
}
