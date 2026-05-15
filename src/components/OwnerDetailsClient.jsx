"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  MessageCircle,
  Download,
  Award,
  Users,
  Globe,
  Briefcase,
  Languages,
  Clock,
  Target,
  ShieldCheck,
  Building2,
  X,
  Send,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const socialIcons = [
  { key: "facebook", label: "Facebook", icon: FaFacebookF, color: "hover:bg-[#3b5998]" },
  { key: "linkedin", label: "LinkedIn", icon: FaLinkedinIn, color: "hover:bg-[#0077b5]" },
  { key: "instagram", label: "Instagram", icon: FaInstagram, color: "hover:bg-[#c32aa3]" },
  { key: "youtube", label: "YouTube", icon: FaYoutube, color: "hover:bg-[#ff0000]" },
];

export default function OwnerDetailsClient({ owner }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const whatsappNumber = owner.whatsapp || owner.phone?.replace(/\D/g, "");

  const detailCards = [
    { icon: Target, title: "Company Vision", text: owner.vision, details: owner.visionDetails || owner.vision },
    { icon: ShieldCheck, title: "Mission Statement", text: owner.mission, details: owner.missionDetails || owner.mission },
    { icon: Briefcase, title: "Founder Message", text: owner.founderMessage, details: owner.founderMessageDetails || owner.founderMessage },
    { icon: Award, title: "Leadership Philosophy", text: owner.philosophy, details: owner.philosophyDetails || owner.philosophy },
    { icon: ShieldCheck, title: "Core Values", text: owner.values, details: owner.valuesDetails || owner.values },
    { icon: Target, title: "Business Goals", text: owner.goals, details: owner.goalsDetails || owner.goals },
  ];

  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      <nav className="sticky top-4 z-50 mx-auto mt-4 max-w-[1320px] rounded-full border border-white/80 bg-white/80 px-6 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.14)] backdrop-blur-2xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-950 text-lg font-black text-white">
              HT
            </div>

            <span className="text-xl font-black text-neutral-950">
              Hi-Tech <span className="text-red-600">AEL</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 font-bold text-neutral-700 md:flex">
            {[
              { name: "Home", href: "/" },
              { name: "Leadership", href: "/#owners" },
              { name: "Services", href: "/#services" },
              { name: "Contact", href: "/#contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative transition hover:text-red-600 after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-0 after:rounded-full after:bg-red-600 after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setBookingOpen(true)}
            className="rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-neutral-950"
          >
            Book Meeting
          </button>
        </div>
      </nav>

      <section className="px-5 py-12 md:px-8">
        <div className="mx-auto max-w-[1320px]">
          <Link
            href="/#owners"
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold shadow-md transition hover:-translate-x-1 hover:text-red-600"
          >
            <ArrowLeft size={18} />
            Back to Leadership
          </Link>

          <section className="overflow-hidden rounded-[44px] bg-white shadow-[0_35px_100px_rgba(0,0,0,0.12)]">
            <div className="grid gap-12 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-12">
              <div>
                <OwnerPhotoSlider owner={owner} />

                <div className="mt-8 rounded-[30px] bg-neutral-950 p-7 text-white">
                  <h3 className="text-xl font-black">Contact Information</h3>

                  <div className="mt-5 space-y-4 text-sm">
                    <a href={`tel:${owner.phone}`} className="flex items-center gap-3 hover:text-red-400">
                      <Phone size={18} className="text-red-500" />
                      {owner.phone}
                    </a>

                    <a href={`mailto:${owner.email}`} className="flex items-center gap-3 hover:text-red-400">
                      <Mail size={18} className="text-red-500" />
                      {owner.email}
                    </a>

                    <p className="flex items-center gap-3">
                      <MapPin size={18} className="text-red-500" />
                      {owner.location}
                    </p>
                  </div>

                  <div className="mt-6 flex gap-3">
                    {socialIcons.map(({ key, label, icon: Icon, color }) => (
                      <a
                        key={key}
                        href={owner.socials?.[key] || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className={`group relative flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-2 ${color}`}
                      >
                        <Icon size={17} />
                        <span className="absolute -top-10 scale-0 rounded-full bg-white px-3 py-1 text-xs font-bold text-neutral-950 opacity-0 transition group-hover:scale-100 group-hover:opacity-100">
                          {label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <p className="font-bold uppercase tracking-[0.3em] text-red-600">
                  {owner.experience}
                </p>

                <AnimatedName name={owner.name} />

                <h2 className="mt-3 text-2xl font-bold text-red-600">
                  {owner.designation}
                </h2>

                <p className="mt-6 text-lg leading-9 text-neutral-600">
                  {owner.details}
                </p>

                <div className="mt-8 rounded-3xl border-l-4 border-[#d4af37] bg-[#fff9e6] p-6">
                  <p className="text-lg font-semibold italic leading-8 text-neutral-800">
                    “{owner.quote}”
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-green-600 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-700"
                  >
                    <MessageCircle size={20} />
                    WhatsApp
                  </a>

                  <button
                    onClick={() => setBookingOpen(true)}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-neutral-950 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-red-600"
                  >
                    <CalendarDays size={20} />
                    Book Meeting
                  </button>

                  <a
                    href={owner.cv || "#"}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-neutral-950 sm:col-span-2"
                  >
                    <Download size={20} />
                    Download CV / Company Profile
                  </a>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                  <InfoBox icon={Briefcase} title="Experience" value={owner.experience} />
                  <InfoBox icon={Languages} title="Languages" value={owner.languages} />
                  <InfoBox icon={Clock} title="Availability" value={owner.availability} />
                  <InfoBox icon={MapPin} title="Location" value={owner.location} />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-6 md:grid-cols-4">
            <StatBox icon={Users} number="500+" text="Clients Worked With" />
            <StatBox icon={Award} number="12+" text="Years Experience" />
            <StatBox icon={Building2} number="50+" text="Team Members" />
            <StatBox icon={Globe} number="20+" text="Countries Served" />
          </section>

          <section className="mt-10 grid gap-6 md:grid-cols-2">
            {detailCards.map((card, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(card)}
                className="group rounded-[30px] bg-white p-8 text-left shadow-xl transition hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(212,175,55,0.25)]"
              >
                <card.icon size={34} className="text-[#d4af37] transition group-hover:scale-110" />
                <h3 className="mt-4 text-2xl font-black text-neutral-950">{card.title}</h3>
                <p className="mt-4 line-clamp-3 leading-8 text-neutral-600">{card.text}</p>
                <span className="mt-5 inline-block font-bold text-red-600">Click to view details →</span>
              </button>
            ))}
          </section>
        </div>
      </section>

      <footer className="bg-neutral-950 px-6 py-10 text-white">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-black">
              Hi-Tech Automation & Engineering Ltd.
            </h3>
            <p className="mt-2 text-neutral-400">
              Trusted engineering, automation and electrical solutions.
            </p>
          </div>
        </div>
      </footer>

      {bookingOpen && (
        <BookingModal owner={owner} onClose={() => setBookingOpen(false)} />
      )}

      {activeCard && (
        <DetailsModal card={activeCard} onClose={() => setActiveCard(null)} />
      )}
    </main>
  );
}

// continuous typing + deleting loop with glow trail Start

function AnimatedName({ name }) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [ghostLetters, setGhostLetters] = useState([]);

  useEffect(() => {
    const speed = isDeleting ? 280 : 220;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < name.length) {
          setDisplayText(name.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (displayText.length > 0) {
          const removedLetter = displayText[displayText.length - 1];

          setGhostLetters((prev) => [
            ...prev.slice(-28),
            {
              id: Date.now() + Math.random(),
              letter: removedLetter === " " ? "\u00A0" : removedLetter,
              left: `${displayText.length * 0.62}em`,
            },
          ]);

          setDisplayText(displayText.slice(0, -1));
        } else {
          setTimeout(() => {
            setGhostLetters([]);
            setIsDeleting(false);
          }, 1800);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, name]);

  return (
    <div className="relative mt-4 min-h-[95px] overflow-visible">
      <h1 className="relative z-10 text-4xl font-black text-neutral-950 md:text-6xl">
        {displayText}
        <span className="ml-1 inline-block h-11 w-[4px] animate-pulse rounded-full bg-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,1)] align-middle md:h-16" />
      </h1>

      <div className="pointer-events-none absolute left-0 top-0 text-4xl font-black md:text-6xl">
        {ghostLetters.map((item) => (
          <span
            key={item.id}
            className="absolute animate-[letterGhost_3200ms_ease-out_forwards] font-black text-[#d4af37]"
            style={{
              left: item.left,
              opacity: 0.75,
              textShadow:
                "0 0 3px rgba(212,175,55,1), 0 0 12px rgba(212,175,55,0.95), 0 0 25px rgba(6,182,212,0.7), 0 0 42px rgba(15,23,42,0.45)",
            }}
          >
            {item.letter}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes letterGhost {
          0% {
            opacity: 0.9;
            transform: translateX(0) scale(1.08);
            filter: blur(0px);
          }
          45% {
            opacity: 0.75;
            transform: translateX(-18px) scale(1.02);
            filter: blur(0.5px);
          }
          75% {
            opacity: 0.45;
            transform: translateX(-35px) scale(1);
            filter: blur(1.2px);
          }
          100% {
            opacity: 0;
            transform: translateX(-55px) scale(0.98);
            filter: blur(3px);
          }
        }
      `}</style>
    </div>
  );
}

// continuous typing + deleting loop with glow trail End

function OwnerPhotoSlider({ owner }) {
  const images = owner.images?.length ? owner.images : [owner.image];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 20000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="group relative mx-auto h-[340px] w-[340px] rounded-full p-[9px] md:h-[430px] md:w-[430px]">
      <div className="absolute inset-0 animate-[spin_7s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,#111827,#d4af37,#f8e08e,#ffffff,#06b6d4,#111827)] shadow-[0_0_35px_rgba(212,175,55,0.55),0_0_75px_rgba(6,182,212,0.35)]" />

      <div className="absolute -inset-3 animate-pulse rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_65%)] blur-xl" />

      <div className="relative z-10 h-full w-full overflow-hidden rounded-full bg-white p-4 shadow-[inset_0_0_25px_rgba(0,0,0,0.12)]">
        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={owner.name}
            className={`absolute inset-4 h-[calc(100%-32px)] w-[calc(100%-32px)] rounded-full object-cover transition-all duration-1000 ease-out group-hover:scale-110 ${
              index === active
                ? "opacity-100 scale-100 blur-0"
                : "opacity-0 scale-95 blur-sm"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 rounded-full ring-2 ring-white/80" />
    </div>
  );
}

function BookingModal({ owner, onClose }) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-5 backdrop-blur-sm">
      <div className="w-full max-w-[650px] rounded-[34px] bg-white p-7 shadow-2xl">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-black text-neutral-950">
            Book Meeting with {owner.name}
          </h3>

          <button
            onClick={onClose}
            className="rounded-full bg-neutral-100 p-3 hover:bg-red-600 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <form
          className="mt-6 grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Booking request submitted successfully!");
            onClose();
          }}
        >
          <input className="rounded-2xl bg-neutral-100 px-5 py-4 outline-none focus:ring-2 focus:ring-red-500" placeholder="Your Name" required />
          <input type="email" className="rounded-2xl bg-neutral-100 px-5 py-4 outline-none focus:ring-2 focus:ring-red-500" placeholder="Your Email" required />
          <input className="rounded-2xl bg-neutral-100 px-5 py-4 outline-none focus:ring-2 focus:ring-red-500" placeholder="Phone Number" required />
          <input type="datetime-local" className="rounded-2xl bg-neutral-100 px-5 py-4 outline-none focus:ring-2 focus:ring-red-500" required />
          <textarea className="min-h-[130px] rounded-2xl bg-neutral-100 px-5 py-4 outline-none focus:ring-2 focus:ring-red-500" placeholder="Write your meeting purpose / message..." required />

          <button className="inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-7 py-4 font-bold text-white transition hover:bg-neutral-950">
            <Send size={18} />
            Send Booking Request
          </button>
        </form>
      </div>
    </div>
  );
}

function DetailsModal({ card, onClose }) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-5 backdrop-blur-sm">
      <div className="w-full max-w-[720px] rounded-[34px] bg-white p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="ml-auto flex rounded-full bg-neutral-100 p-3 hover:bg-red-600 hover:text-white"
        >
          <X size={20} />
        </button>

        <card.icon size={42} className="text-[#d4af37]" />
        <h3 className="mt-4 text-3xl font-black text-neutral-950">
          {card.title}
        </h3>
        <p className="mt-5 text-lg leading-9 text-neutral-600">
          {card.details}
        </p>
      </div>
    </div>
  );
}

function InfoBox({ icon: Icon, title, value }) {
  return (
    <div className="rounded-2xl bg-neutral-100 p-4 transition hover:-translate-y-1 hover:bg-[#fff9e6]">
      <Icon size={22} className="text-[#d4af37]" />
      <p className="mt-3 text-xs font-bold uppercase text-neutral-500">
        {title}
      </p>
      <h4 className="mt-1 text-sm font-black text-neutral-950">{value}</h4>
    </div>
  );
}

function StatBox({ icon: Icon, number, text }) {
  return (
    <div className="rounded-[28px] bg-white p-7 text-center shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
      <Icon className="mx-auto text-[#d4af37]" size={34} />
      <h3 className="mt-4 text-4xl font-black text-neutral-950">{number}</h3>
      <p className="mt-2 font-bold text-neutral-500">{text}</p>
    </div>
  );
}