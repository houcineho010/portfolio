export default function ShortsEnginePage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <a href="/" className="text-lg font-semibold tracking-tight">
          LAHOUCINE<span className="text-neutral-400">.</span>
        </a>

        <a href="/" className="text-sm text-neutral-500 hover:text-black">
          ← Back
        </a>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-24">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
          AI · Video · Automation
        </p>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
          Shorts Engine
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-neutral-500">
          A system for finding meaningful moments inside long-form videos and
          turning them into short-form content.
        </p>
      </section>

      {/* Problem */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_2fr]">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            The problem
          </p>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Finding good moments manually takes time.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-500">
              Long-form videos contain many potentially useful moments. The goal
              of Shorts Engine is to analyze that content and identify segments
              that could become strong short-form videos.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            The system
          </p>

          <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            From long-form video to short-form candidates.
          </h2>

          <div className="mt-14 grid gap-4 md:grid-cols-5">
            {[
              ["01", "Download"],
              ["02", "Transcribe"],
              ["03", "Segment"],
              ["04", "Select"],
              ["05", "Render"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <span className="text-sm text-neutral-400">{number}</span>

                <h3 className="mt-10 font-semibold">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            Architecture
          </p>

          <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-8">
            <div className="font-mono text-sm leading-10 text-neutral-600">
              <div>source / download</div>
              <div>↓</div>
              <div>transcription</div>
              <div>↓</div>
              <div>segmentation</div>
              <div>↓</div>
              <div>candidate generation</div>
              <div>↓</div>
              <div>scoring / selection</div>
              <div>↓</div>
              <div>crop / reframe</div>
              <div>↓</div>
              <div>render</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            Built with
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Python",
              "Whisper",
              "FFmpeg",
              "yt-dlp",
              "AI / LLMs",
              "Video Processing",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            Evidence
          </p>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
            Real output will go here.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-500">
            Screenshots, generated clips and test results will be added as the
            system reaches its working V1.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-neutral-300 text-sm text-neutral-400">
              Screenshot
            </div>

            <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-neutral-300 text-sm text-neutral-400">
              Generated video
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            Approach
          </p>

          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Build V1 → collect evidence → improve.
          </h2>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl justify-between px-6 py-7 text-sm text-neutral-400">
          <a href="/" className="hover:text-black">
            ← Back to portfolio
          </a>

          <span>© 2026 Lahoucine</span>
        </div>
      </footer>
    </main>
  );
}
