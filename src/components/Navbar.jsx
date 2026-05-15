"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Zap,
} from "lucide-react";

const menuGroups = [
  {
    title: "About Us",
    href: "/#about",
    items: [
      { name: "Company Overview", href: "/#about" },
      { name: "Owners & Management", href: "/#owners" },
      { name: "Mission & Vision", href: "/#about" },
      { name: "Certificates", href: "/#certificates" },
      { name: "Why Choose Us", href: "/#why-us" },
    ],
  },
  {
    title: "Products",
    href: "/#products",
    items: [
      { name: "Lighting Arrester 16-36kV", href: "/#products" },
      { name: "Load Break Switch", href: "/#products" },
      { name: "Vacuum Load Break Switch", href: "/#products" },
      { name: "Cast Resin Transformer", href: "/#products" },
      { name: "Oil Immersed Transformers", href: "/#products" },
      { name: "HT Switchgear VCB", href: "/#products" },
    ],
  },
  {
    title: "Services",
    href: "/#services",
    items: [
      { name: "Substation Design & Installation", href: "/#services" },
      { name: "HV/MV/LV Switchgear Solution", href: "/#services" },
      { name: "Industrial Automation", href: "/#services" },
      { name: "Building Automation & Control", href: "/#services" },
      { name: "Testing & Commissioning", href: "/#services" },
    ],
  },
  {
    title: "Projects",
    href: "/#projects",
    items: [
      { name: "Completed Projects", href: "/#projects" },
      { name: "Ongoing Projects", href: "/#projects" },
      { name: "Industrial Clients", href: "/#clients" },
      { name: "Project Gallery", href: "/#gallery" },
    ],
  },
];

const searchItems = [
  { name: "About Company", href: "/#about", type: "Section" },
  { name: "Products", href: "/#products", type: "Section" },
  { name: "Services", href: "/#services", type: "Section" },
  { name: "Owners & Management", href: "/#owners", type: "Section" },
  { name: "Projects", href: "/#projects", type: "Section" },
  { name: "Contact", href: "/#contact", type: "Section" },
  { name: "Electrical Panel", href: "/#products", type: "Product" },
  { name: "Switchgear Solution", href: "/#products", type: "Product" },
  { name: "Transformer", href: "/#products", type: "Product" },
  { name: "Substation", href: "/#services", type: "Service" },
  { name: "Automation System", href: "/#services", type: "Service" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState(menuGroups[0]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const navWrapRef = useRef(null);
  const searchBoxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 70);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleClickOutside = (e) => {
      if (
        navWrapRef.current &&
        !navWrapRef.current.contains(e.target)
      ) {
        setMegaOpen(false);
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return searchItems;

    const filtered = searchItems.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length) return filtered;

    return [
      {
        name: `Search for "${query}"`,
        href: "/#contact",
        type: "AI Suggestion",
      },
    ];
  }, [query]);

  const goToResult = (href) => {
    setSearchOpen(false);
    setQuery("");
    window.location.href = href;
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (results[0]) goToResult(results[0].href);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
        <div
          ref={navWrapRef}
          onMouseEnter={() => {}}
          className={`mx-auto transition-all duration-500 ${
            isScrolled ? "max-w-[980px]" : "max-w-[calc(100%-32px)]"
          }`}
        >
          <div
            className={`relative flex items-center justify-between rounded-full border backdrop-blur-2xl transition-all duration-500 ${
              isScrolled
                ? "min-h-[76px] border-white/70 bg-white/35 px-6 shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
                : "min-h-[86px] border-white bg-white/95 px-7 shadow-[0_20px_70px_rgba(0,0,0,0.14)]"
            }`}
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white shadow-lg">
                <img
                  src="/images/logo-hi-tech.jpeg"
                  alt="Hi-Tech AEL"
                  className="h-[50px] w-[50px] rounded-full object-cover"
                />
              </div>

              <div className={`${isScrolled ? "hidden" : "block"}`}>
                <h2 className="text-xl font-black text-neutral-950">
                  Hi-Tech AEL
                </h2>
                <p className="text-xs font-bold text-neutral-500">
                  Automation & Engineering Ltd.
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-2 lg:flex">
              {menuGroups.slice(0, isScrolled ? 3 : 4).map((group) => (
                <button
                  key={group.title}
                  onMouseEnter={() => {
                    setActiveGroup(group);
                    setMegaOpen(true);
                  }}
                  className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black text-neutral-950 transition hover:bg-red-600 hover:text-white"
                >
                  {group.title}
                  <ChevronDown
                    size={16}
                    className={`transition ${
                      megaOpen && activeGroup.title === group.title
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>
              ))}

              {!isScrolled && (
                <Link
                  href="/#contact"
                  className="rounded-full px-5 py-3 text-sm font-black text-neutral-950 transition hover:bg-red-600 hover:text-white"
                >
                  Contact
                </Link>
              )}
            </nav>


            <div className="flex items-center gap-3">

         
<form
  ref={searchBoxRef}
  onSubmit={handleSearchSubmit}
  onMouseEnter={() => setSearchOpen(true)}
  className={`group/search relative hidden items-center overflow-visible rounded-full bg-white transition-all duration-500 md:flex ${
    isScrolled
      ? "h-[50px] w-[56px] justify-center shadow-[0_14px_40px_rgba(0,0,0,0.14)] hover:w-[310px] hover:justify-start hover:px-4 hover:shadow-[0_-18px_55px_rgba(239,68,68,0.22)]"
      : "h-[54px] w-[340px] px-4 shadow-[0_18px_45px_rgba(0,0,0,0.10)]"
  }`}
>
  {/* SEARCH ICON */}
  <button
    type="button"
    onClick={() => setSearchOpen(true)}
    className={`flex shrink-0 items-center justify-center transition-all duration-300 ${
      isScrolled
        ? "h-[50px] w-[50px]"
        : "h-[44px] w-[44px]"
    }`}
  >
    <Search
      size={21}
      className="relative top-[0.5px] text-neutral-800 transition duration-300 group-hover/search:text-red-600"
    />
  </button>

  {/* INPUT */}
  <input
    value={query}
    onFocus={() => setSearchOpen(true)}
    onChange={(e) => {
      setQuery(e.target.value);
      setSearchOpen(true);
    }}
    placeholder="AI Smart Search..."
    className={`bg-transparent text-sm font-bold text-neutral-800 placeholder:text-neutral-400 outline-none transition-all duration-500 ${
      isScrolled
        ? "ml-0 w-0 opacity-0 group-hover/search:ml-2 group-hover/search:w-full group-hover/search:opacity-100 focus:ml-2 focus:w-full focus:opacity-100"
        : "ml-2 w-full opacity-100"
    }`}
  />

  {/* SEARCH RESULTS */}
  {searchOpen && (
    <div className="absolute right-0 top-[118%] z-[999] w-[390px] overflow-hidden rounded-[30px] bg-white shadow-[0_-22px_60px_rgba(239,68,68,0.18),0_30px_90px_rgba(0,0,0,0.18)]">
      {/* TOP */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 px-5 py-4 text-white">
        <p className="text-xs font-black uppercase tracking-[0.24em]">
          AI Smart Search
        </p>

        <h3 className="mt-1 text-lg font-black">
          Find Products, Services & More
        </h3>
      </div>

      {/* RESULTS */}
      <div className="max-h-[380px] overflow-y-auto p-3">
        {results.map((item) => (
          <button
            type="button"
            key={item.name}
            onClick={() => goToResult(item.href)}
            className="group flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left transition hover:bg-red-50"
          >
            {/* ICON */}
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-red-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
              <Zap size={18} />
            </span>

            {/* TEXT */}
            <span className="flex-1">
              <strong className="block text-sm font-black text-neutral-900 transition group-hover:text-red-600">
                {item.name}
              </strong>

              <small className="mt-1 block font-semibold text-neutral-500">
                {item.type}
              </small>
            </span>

            {/* ARROW */}
            <ArrowRight
              size={18}
              className="text-neutral-300 transition group-hover:translate-x-1 group-hover:text-red-600"
            />
          </button>
        ))}

        {/* EMPTY */}
        {!results.length && (
          <div className="px-5 py-10 text-center">
            <p className="font-bold text-neutral-500">
              No matching result found
            </p>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="border-t border-neutral-100 bg-neutral-50 px-5 py-3">
        <p className="text-xs font-bold text-neutral-400">
          Smart AI Search • Hi-Tech Automation & Engineering Ltd.
        </p>
      </div>
    </div>
  )}
</form>





              <Link
                href="/#contact"
                className="hidden rounded-full bg-red-600 px-6 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-neutral-950 md:inline-flex"
              >
                Get Quote
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-950 shadow-lg lg:hidden"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {megaOpen && (
            <div
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
              className={`absolute left-1/2 top-[105px] hidden -translate-x-1/2 rounded-[36px] border border-white bg-white/96 p-8 shadow-[0_35px_100px_rgba(0,0,0,0.22)] backdrop-blur-2xl lg:block ${
                isScrolled
                  ? "w-[960px]"
                  : "w-[calc(100%-32px)] max-w-[1360px]"
              }`}
            >
              <div className="grid gap-10 lg:grid-cols-[0.75fr_1.35fr_0.85fr]">
                <div className="max-h-[390px] space-y-3 overflow-y-auto pr-2">
                  {menuGroups.map((group) => (
                    <button
                      key={group.title}
                      onMouseEnter={() => setActiveGroup(group)}
                      onClick={() => (window.location.href = group.href)}
                      className={`flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left text-lg font-black transition ${
                        activeGroup.title === group.title
                          ? "bg-neutral-100 text-red-600"
                          : "text-neutral-800 hover:bg-neutral-100"
                      }`}
                    >
                      {group.title}
                      <ArrowRight size={18} />
                    </button>
                  ))}
                </div>

                <div>
                  <p className="font-black uppercase tracking-[0.22em] text-neutral-300">
                    {activeGroup.title}
                  </p>

                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {activeGroup.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMegaOpen(false)}
                        className="group rounded-2xl p-4 transition hover:bg-red-50"
                      >
                        <h4 className="font-black text-neutral-900 transition group-hover:text-red-600">
                          {item.name}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-neutral-500">
                          Click to explore this section.
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-[26px] border border-neutral-200 bg-white p-6">
                  <h3 className="text-xl font-black text-neutral-950">
                    Need Help?
                  </h3>

                  <div className="mt-5 space-y-4">
                    <a
                      href="tel:+8801700000000"
                      className="flex items-center gap-3 font-black text-red-600"
                    >
                      <Phone size={18} />
                      +880 1700-000000
                    </a>

                    <a
                      href="mailto:info@hitechbd.com"
                      className="flex items-center gap-3 font-bold text-neutral-600 hover:text-red-600"
                    >
                      <Mail size={18} />
                      info@hitechbd.com
                    </a>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Hi-Tech+Automation+Engineering+Ltd+Dhaka+Bangladesh"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 font-bold text-neutral-600 hover:text-red-600"
                    >
                      <MapPin size={18} />
                      Find Us
                    </a>
                  </div>

                  <Link
                    href="/#contact"
                    onClick={() => setMegaOpen(false)}
                    className="mt-7 inline-flex rounded-full bg-red-600 px-6 py-3 font-black text-white transition hover:bg-neutral-950"
                  >
                    Contact Now
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {mobileOpen && (
          <div className="mx-auto mt-4 max-w-[calc(100%-32px)] rounded-[30px] bg-white p-5 shadow-2xl lg:hidden">
            <div className="grid gap-2">
              {[...menuGroups, { title: "Contact", href: "/#contact" }].map(
                (item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl px-5 py-4 font-black text-neutral-800 hover:bg-red-50 hover:text-red-600"
                  >
                    {item.title}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}