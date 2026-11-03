"use client";

import { useState } from "react";

const demos = [
  {
    name: "Fashion",
    label: "Fashion 2",
    description:
      "Campaign-led apparel storefront with category navigation and seasonal collections.",
    href: "https://woodmart.xtemos.com/fashion-2/",
  },
  {
    name: "Electronics",
    label: "Electronics 3",
    description:
      "Large-catalog storefront organized around product departments and categories.",
    href: "https://woodmart.xtemos.com/electronics-3/",
  },
  {
    name: "Accessories",
    label: "Accessories",
    description:
      "Product-led accessory shop with category browsing and featured items.",
    href: "https://woodmart.xtemos.com/accessories/",
  },
  {
    name: "Beauty",
    label: "Makeup",
    description:
      "Beauty storefront with product collections, promotional content, and editorial sections.",
    href: "https://woodmart.xtemos.com/makeup/",
  },
];

export default function WoodMartDemoTabs() {
  const [activeDemo, setActiveDemo] = useState(0);
  const demo = demos[activeDemo];

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="WoodMart theme demo examples">
        {demos.map((item, index) => (
          <button
            key={item.name}
            id={`woodmart-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={activeDemo === index}
            aria-controls="woodmart-demo-panel"
            onClick={() => setActiveDemo(index)}
            className={`rounded-full border px-4 py-2 text-sm transition ${activeDemo === index ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400"}`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <section
        id="woodmart-demo-panel"
        role="tabpanel"
        aria-labelledby={`woodmart-tab-${activeDemo}`}
        className="mt-5 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
      >
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
          WoodMart starter demo · {demo.label}
        </p>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight">
          {demo.name} storefront
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500">
          {demo.description}
        </p>
        <a
          className="mt-6 inline-flex text-sm font-medium underline underline-offset-4"
          href={demo.href}
          target="_blank"
          rel="noreferrer"
        >
          View the theme developer’s demo ↗
        </a>
      </section>
      <p className="mt-4 text-xs leading-5 text-neutral-500">
        These are prebuilt examples from the WoodMart theme package. They are
        shown as theme references, not as websites I designed or built.
      </p>
    </div>
  );
}
