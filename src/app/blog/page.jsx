import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const posts = [
  {
    title: "Modern Electrical Engineering Solutions",
    date: "Company Update",
    excerpt:
      "Explore how Hi-Tech Automation & Engineering Ltd delivers reliable power, automation and switchgear solutions.",
  },
  {
    title: "Why Industrial Automation Matters",
    date: "Automation",
    excerpt:
      "Automation improves safety, efficiency and productivity for modern industries and commercial buildings.",
  },
  {
    title: "Premium Property Update from Hi-Tech Valley",
    date: "Property",
    excerpt:
      "Hi-Tech Valley focuses on flats, apartments, location, booking support and modern property service.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f7f7f7] pt-36">
        <section className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">
            Blog & News
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight text-neutral-950 md:text-7xl">
            Latest Updates from Hi-Tech Automation & Engineering Ltd.
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-neutral-600">
            Company news, engineering updates, automation insights, product
            knowledge and property updates from the Hi-Tech group.
          </p>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(0,0,0,0.14)]"
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                  {post.date}
                </p>

                <h2 className="mt-4 text-2xl font-black leading-tight text-neutral-950">
                  {post.title}
                </h2>

                <p className="mt-4 text-sm font-semibold leading-7 text-neutral-500">
                  {post.excerpt}
                </p>

                <button className="mt-7 rounded-full bg-red-600 px-6 py-3 text-sm font-black text-white transition hover:bg-neutral-950">
                  Read More
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}