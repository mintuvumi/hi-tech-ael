"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  MessageCircle,
  Award,
  Globe,
  Star,
  CheckCircle2,
  Users,
  ShieldCheck,
  Send,
  X,
} from "lucide-react";

export default function TeamDetailsClient({ member }) {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7f7f7] px-6 py-16">
      <div className="mx-auto max-w-[1200px]">
        <Link
          href="/#products"
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold shadow-lg hover:text-red-600"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[40px] bg-white shadow-2xl">
            <img
              src={member.image}
              alt={member.name}
              className="h-[520px] w-full object-cover"
            />

            <div className="p-8">
              <h1 className="text-4xl font-black text-neutral-950">
                {member.name}
              </h1>

              <p className="mt-2 text-xl font-bold text-red-600">
                {member.designation}
              </p>

              <p className="mt-6 leading-8 text-neutral-600">
                {member.details ||
                  "Professional engineering specialist with experience in electrical systems, automation, project support and client service."}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <InfoCard icon={Phone} title="Phone" value={member.phone} href={`tel:${member.phone}`} />
            <InfoCard icon={Mail} title="Email" value={member.email} href={`mailto:${member.email}`} />
            <InfoCard icon={MapPin} title="Location" value="Dhaka, Bangladesh" href="https://www.google.com/maps" />

            <button
              onClick={() => setBookingOpen(true)}
              className="w-full rounded-full bg-red-600 px-7 py-4 font-black text-white transition hover:bg-neutral-950"
            >
              <CalendarDays className="mr-2 inline" size={20} />
              Book Meeting
            </button>

            <a
              href={`https://wa.me/${member.phone?.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-7 py-4 font-black text-white transition hover:bg-green-700"
            >
              <MessageCircle size={20} />
              WhatsApp Now
            </a>

            <div className="rounded-[30px] bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-black text-neutral-950">
                Certifications & Achievements
              </h3>

              <div className="mt-6 space-y-3">
                {[
                  "Industrial Electrical Engineering",
                  "Automation System Support",
                  "Testing & Commissioning",
                  "Project Supervision",
                ].map((item) => (
                  <p key={item} className="flex items-center gap-3 font-bold text-neutral-700">
                    <CheckCircle2 className="text-red-600" size={20} />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {bookingOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-5">
          <div className="w-full max-w-[600px] rounded-[34px] bg-white p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black">Book Meeting</h3>
              <button onClick={() => setBookingOpen(false)}>
                <X />
              </button>
            </div>

            <form
              className="mt-6 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Meeting request sent to ${member.name}`);
                setBookingOpen(false);
              }}
            >
              <input required placeholder="Your Name" className="rounded-2xl bg-neutral-100 px-5 py-4 outline-none" />
              <input required type="email" placeholder="Your Email" className="rounded-2xl bg-neutral-100 px-5 py-4 outline-none" />
              <input required placeholder="Phone Number" className="rounded-2xl bg-neutral-100 px-5 py-4 outline-none" />
              <textarea required placeholder="Message" className="min-h-[130px] rounded-2xl bg-neutral-100 p-5 outline-none" />

              <button className="rounded-full bg-red-600 px-7 py-4 font-black text-white">
                <Send className="mr-2 inline" size={18} />
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

function InfoCard({ icon: Icon, title, value, href }) {
  return (
    <a
      href={href}
      target={title === "Location" ? "_blank" : undefined}
      rel={title === "Location" ? "noreferrer" : undefined}
      className="flex items-center gap-4 rounded-[28px] bg-white p-6 shadow-xl transition hover:-translate-y-1 hover:bg-red-50"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
        <Icon size={22} />
      </div>

      <div>
        <p className="font-black text-neutral-950">{title}</p>
        <p className="mt-1 text-neutral-600">{value}</p>
      </div>
    </a>
  );
}