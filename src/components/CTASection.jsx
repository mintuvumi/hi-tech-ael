export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#8b0000] via-[#d71920] to-[#ff6b6b] py-24 text-white">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1100px] px-6 text-center">
        <p className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 font-medium backdrop-blur">
          Let’s Build Reliable Power Together
        </p>

        <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
          Need Switchgear, Transformer or Automation Solution?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
          Contact Hi-Tech Automation & Engineering Ltd. for industrial,
          commercial and substation electrical engineering support.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+8801XXXXXXXXX"
            className="rounded-full bg-white px-7 py-4 font-bold text-red-600 shadow-xl transition hover:scale-105"
          >
            Call Now
          </a>

          <a
            href="mailto:info@hitechbd.com"
            className="rounded-full border border-white/40 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}