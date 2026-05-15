"use client";

import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Building2,
  ShieldCheck,
  Factory,
  Send,
  Navigation,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const companyEmail = "info@hitechbd.com";
const companyPhone = "+8801700000000";

const officeMap =
  "https://www.google.com/maps/search/?api=1&query=Hi-Tech+Automation+Engineering+Ltd+Dhaka+Bangladesh";

const factoryMap =
  "https://www.google.com/maps/search/?api=1&query=Hi-Tech+Automation+Engineering+Factory+Bangladesh";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Company", href: "/#about" },
  { name: "Owners & Management", href: "/#owners" },
  { name: "Products", href: "/#products" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/#contact" },
];

const solutions = [
  "Electrical Panel",
  "Switchgear Solution",
  "Transformer",
  "Substation",
  "Automation System",
  "Industrial Service",
];

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook", color: "hover:bg-[#3b5998]" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn", color: "hover:bg-[#0077b5]" },
  { icon: FaInstagram, href: "#", label: "Instagram", color: "hover:bg-[#c32aa3]" },
  { icon: FaYoutube, href: "#", label: "YouTube", color: "hover:bg-[#ff0000]" },
];

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    const subject = encodeURIComponent("New Website Newsletter Subscription");
    const body = encodeURIComponent(
      `Hello Hi-Tech Automation & Engineering Ltd,\n\nA new customer wants to subscribe.\n\nCustomer Email: ${email}\n\nPlease contact this customer for company updates, offers, and engineering solutions.\n\nThank you.`
    );

    window.location.href = `mailto:${companyEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#eef0f3] pt-20 text-neutral-800"
    >
      <div className="absolute left-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-red-200/60 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-140px] h-[380px] w-[380px] rounded-full bg-slate-300/70 blur-3xl" />

      <div className="relative mx-auto max-w-[1320px] px-6">
        <div className="mb-14 overflow-hidden rounded-[38px] bg-neutral-950 p-8 text-white shadow-[0_30px_90px_rgba(0,0,0,0.22)] md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr] md:items-center">
            <div>
              <p className="mb-3 font-bold uppercase tracking-[0.25em] text-red-400">
                Professional Engineering Support
              </p>

              <h2 className="text-3xl font-black md:text-5xl">
                Need electrical, switchgear or automation solution?
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-white/65">
                Our expert team is ready to support industrial and commercial
                projects with reliable engineering, supply, installation,
                testing and maintenance service.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <a
                href={`tel:${companyPhone}`}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-white hover:text-neutral-950"
              >
                <Phone size={20} />
                Call Now
              </a>

              <a
                href={`mailto:${companyEmail}?subject=Project Inquiry from Website&body=Hello Hi-Tech Automation & Engineering Ltd,%0D%0A%0D%0AI want to know more about your engineering solutions.%0D%0A%0D%0AName:%0D%0APhone:%0D%0AProject Details:%0D%0A`}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-neutral-950 shadow-lg transition hover:-translate-y-1 hover:bg-red-600 hover:text-white"
              >
                <Mail size={20} />
                Send Email
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 rounded-[38px] border border-white bg-white/90 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.10)] backdrop-blur-xl md:grid-cols-[1.4fr_0.8fr_0.9fr_1fr] md:p-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-lg font-black text-white">
                HT
              </div>

              <div>
                <h3 className="text-xl font-black text-neutral-950">
                  Hi-Tech AEL
                </h3>
                <p className="text-sm font-semibold text-red-600">
                  Automation & Engineering
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-xl leading-8 text-neutral-600">
              Hi-Tech Automation & Engineering Ltd. provides professional
              electrical engineering, switchgear, transformer, substation and
              automation solutions for industrial and commercial sectors.
            </p>

            <div className="mt-6 grid gap-3">
              <FooterFeature icon={ShieldCheck} text="Trusted engineering support" />
              <FooterFeature icon={Factory} text="Industrial & commercial solutions" />
              <FooterFeature icon={Building2} text="Professional project execution" />
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-black text-neutral-950">
              Quick Links
            </h4>

            <div className="grid gap-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group inline-flex items-center gap-2 font-semibold text-neutral-600 transition hover:text-red-600"
                >
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-black text-neutral-950">
              Solutions
            </h4>

            <div className="grid gap-3">
              {solutions.map((item) => (
                <Link
                  key={item}
                  href="/#services"
                  className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-bold text-neutral-600 transition hover:bg-red-50 hover:text-red-600"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-black text-neutral-950">
              Contact Us
            </h4>

            <div className="space-y-4">
              <a
                href={`tel:${companyPhone}`}
                className="flex items-start gap-3 rounded-2xl bg-neutral-100 p-4 transition hover:bg-red-50"
              >
                <Phone size={19} className="mt-1 text-red-600" />
                <span>
                  <strong className="block text-neutral-950">Phone</strong>
                  <span className="text-neutral-600">{companyPhone}</span>
                </span>
              </a>

              <a
                href={`mailto:${companyEmail}`}
                className="flex items-start gap-3 rounded-2xl bg-neutral-100 p-4 transition hover:bg-red-50"
              >
                <Mail size={19} className="mt-1 text-red-600" />
                <span>
                  <strong className="block text-neutral-950">Email</strong>
                  <span className="text-neutral-600">{companyEmail}</span>
                </span>
              </a>

              <a
                href={officeMap}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 rounded-2xl bg-neutral-100 p-4 transition hover:bg-red-50"
              >
                <MapPin size={19} className="mt-1 text-red-600" />
                <span>
                  <strong className="block text-neutral-950">Office Location</strong>
                  <span className="text-neutral-600">Open in Google Maps</span>
                </span>
              </a>

              <a
                href={factoryMap}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 rounded-2xl bg-neutral-100 p-4 transition hover:bg-red-50"
              >
                <Navigation size={19} className="mt-1 text-red-600" />
                <span>
                  <strong className="block text-neutral-950">Factory Location</strong>
                  <span className="text-neutral-600">Open in Google Maps</span>
                </span>
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`group relative flex h-11 w-11 items-center justify-center rounded-full bg-neutral-950 text-white shadow-lg transition hover:-translate-y-2 ${color}`}
                >
                  <Icon size={17} />

                  <span className="pointer-events-none absolute -top-10 scale-0 rounded-full bg-neutral-950 px-3 py-1 text-xs font-bold text-white opacity-0 transition group-hover:scale-100 group-hover:opacity-100">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 rounded-[32px] bg-white p-7 shadow-lg md:grid-cols-[1fr_1.1fr] md:items-center">
          <div>
            <h4 className="text-2xl font-black text-neutral-950">
              Stay connected with us
            </h4>
            <p className="mt-2 text-neutral-600">
              Customer email will be sent directly to company mail.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row">
            <input
              name="email"
              type="email"
              placeholder="Enter customer email address"
              required
              className="min-h-[54px] flex-1 rounded-full bg-neutral-100 px-6 font-semibold outline-none transition focus:ring-2 focus:ring-red-500"
            />

            <button
              type="submit"
              className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-red-600 px-7 font-bold text-white transition hover:bg-neutral-950"
            >
              Subscribe
              <Send size={18} />
            </button>
          </form>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-neutral-300 py-7 text-sm font-semibold text-neutral-500 md:flex-row md:items-center">
          <p>
            © 2026 Hi-Tech Automation & Engineering Ltd. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link href="#" className="transition hover:text-red-600">
              Privacy Policy
            </Link>
            <Link href="#" className="transition hover:text-red-600">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterFeature({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 text-sm font-bold text-neutral-600">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-600">
        <Icon size={17} />
      </span>
      {text}
    </div>
  );
}