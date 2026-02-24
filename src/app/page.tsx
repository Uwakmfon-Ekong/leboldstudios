"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Camera, Aperture, Frame, Mic2, Wind, Radio, Menu, X, ArrowUpRight, Send, CheckCircle } from "lucide-react";
import logo from "../../public/logo.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export default function LeBoldStudiosHomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const bookingRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const navLinks = ["HOME", "WHO WE ARE", "OUR SERVICES", "PRICING"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    bookingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      
      await emailjs.sendForm(
        "service_p43eeuy",      // e.g. "service_abc123"
        "template_njjthw8",     // e.g. "template_xyz789"
        formRef.current!,
        "NseL7kQUC6oD0_3c-"       // e.g. "AbCdEfGhIjKlMnOp"
      );
      setFormStatus("sent");
      setFormData({ name: "", email: "", phone: "", service: "", date: "", message: "" });
    } catch (err) {
      console.error(err);
      setFormStatus("error");
    }
  };

  // Gallery images — only 4 per section
  const weddingImages = ["/wedding6.jpeg", "/wedding17.jpeg", "/wedding19.jpeg", "/wedding16.jpeg"];
  const studioImages = ["/studio1.jpeg", "/studio4.jpeg", "/studio3.jpeg", "/studio5.jpeg"];
  const frameImages = ["/frame6.jpeg", "/frame2.jpeg", "/frame10.jpeg", "/frame4.jpeg"];
  const babyImages = ["/baby1.jpeg", "/baby2.jpeg", "/baby3.jpeg", "/baby4.jpeg"];
  const audioImages = ["/audio1.jpeg", "/audio2.jpeg", "/audio3.jpeg", "/audio4.jpeg"];

  const inputClass =
    "w-full bg-transparent border-b border-[#2C2416]/30 focus:border-[#8B7355] outline-none py-3 text-[#2C2416] placeholder-[#2C2416]/40 transition-colors duration-300 text-sm tracking-wide";

  return (
    <div className="bg-[#F5F1E8] text-[#2C2416]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Tenor+Sans&family=Gilda+Display&display=swap");
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F5F1E8]/95 backdrop-blur-md border-b border-[#2C2416]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-8 md:px-16 py-6 flex items-center justify-between">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Image src={logo} alt="LeBold Studios" className="w-20 h-20" />
          </motion.div>

          <div className="hidden md:flex items-center gap-12" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                className="text-sm tracking-[0.15em] hover:text-[#8B7355] transition-colors"
              >
                {link}
              </a>
            ))}
            <button
              onClick={scrollToBooking}
              className="border border-[#2C2416] px-8 py-3 text-sm tracking-[0.15em] hover:bg-[#2C2416] hover:text-[#F5F1E8] transition-all duration-300"
            >
              BOOKING
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
            >
              <motion.button
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="absolute top-8 right-8"
              >
                <X size={32} className="text-[#2C2416]" />
              </motion.button>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="text-2xl font-semibold tracking-[0.15em] text-[#2C2416] hover:text-[#8B7355] mb-6"
                >
                  {link}
                </motion.a>
              ))}
              <motion.button
                onClick={(e) => { setMobileMenuOpen(false); scrollToBooking(e as any); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-4 px-10 py-4 border border-[#2C2416] text-[#2C2416] hover:bg-[#2C2416] hover:text-white transition-all duration-300 text-lg tracking-[0.15em]"
              >
                BOOKING
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 300]) }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{
              backgroundImage: 'url("/leboldbg.jpeg")',
              filter: "blur(1px) brightness(0.8) contrast(0.95)",
            }}
          />
          <div className="absolute inset-0 bg-[#D4C4A8]/20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F1E8]/85 via-[#F5F1E8]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5F1E8]/90" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(44, 36, 22, 0.15) 100%)" }} />
        </motion.div>

        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 md:px-16 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-8">
              <span className="text-xs tracking-[0.3em] text-[#8B7355]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                LEBOLD STUDIOS SINCE 2013
              </span>
            </motion.div>

            <h1 className="text-7xl md:text-8xl lg:text-9xl mb-8 leading-[0.95] font-light" style={{ fontFamily: "'Cormorant', serif" }}>
              How Will You
              <br />
              <span className="italic">Remember</span>
              <br />
              Your Wedding?
            </h1>

            <div className="w-20 h-[1px] bg-[#8B7355] mb-8" />

            <p className="text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl text-[#4A3F2E]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              Let the world's best wedding photographers tell your story.
            </p>

            <div className="flex flex-wrap gap-6">
              <button
                onClick={scrollToBooking}
                className="group inline-flex items-center gap-3 bg-[#2C2416] text-[#F5F1E8] px-10 py-5 hover:bg-[#3D3022] transition-all duration-300"
                style={{ fontFamily: "'Tenor Sans', sans-serif" }}
              >
                <span className="text-sm tracking-[0.15em]">BOOK SESSION</span>
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </button>
              <a
                href="#our-services"
                className="group inline-flex items-center gap-3 border border-[#2C2416] px-10 py-5 hover:bg-[#2C2416] hover:text-[#F5F1E8] transition-all duration-300"
                style={{ fontFamily: "'Tenor Sans', sans-serif" }}
              >
                <span className="text-sm tracking-[0.15em]">EXPLORE SERVICES</span>
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section id="our-services" className="py-32 px-8 md:px-16 bg-[#F5F1E8]">
        <div className="max-w-[1800px] mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <span className="text-xs tracking-[0.3em] text-[#8B7355]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              WHAT WE DO
            </span>
            <div className="flex items-end justify-between mt-4 flex-wrap gap-6">
              <h2 className="text-5xl md:text-7xl font-light leading-none" style={{ fontFamily: "'Cormorant', serif" }}>
                Our <span className="italic">Services</span>
              </h2>
              <div className="w-40 h-[1px] bg-[#8B7355]/40" />
            </div>
          </motion.div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2C2416]/10">
            {[
              {
                icon: <Camera size={28} />,
                number: "01",
                title: "Wedding Photography",
                description:
                  "A decade of telling love stories through light and composition. From intimate elopements to grand celebrations, we capture every sacred moment with editorial precision and emotional depth.",
                href: "/wedding-gallery",
                bg: "bg-[#F5F1E8]",
              },
              {
                icon: <Aperture size={28} />,
                number: "02",
                title: "Studio Shoot",
                description:
                  "Controlled light. Deliberate craft. Whether you're a model, professional, or brand—our studio sessions produce portraits that command attention and reveal character.",
                href: "/studio-gallery",
                bg: "bg-[#EAE4D7]",
              },
              {
                icon: <Frame size={28} />,
                number: "03",
                title: "Frames & Prints",
                description:
                  "Archival-quality printing on premium substrates, finished with handcrafted frames. We believe photographs deserve to live beyond screens—on walls, in hands, across generations.",
                href: "/frames-gallery",
                bg: "bg-[#F5F1E8]",
              },
              {
                icon: <Aperture size={28} />,
                number: "04",
                title: "Photography Training",
                description:
                  "Learn from professionals who shoot real work every day. Our training covers technical fundamentals, lighting mastery, posing, and the business of building a photography career.",
                href: "/#booking",
                bg: "bg-[#EAE4D7]",
              },
              {
                icon: <Wind size={28} />,
                number: "05",
                title: "Drone Services",
                description:
                  "Cinematic aerial photography and videography that transforms how events, properties, and landscapes are seen. FAA-compliant operators. Breathtaking perspectives.",
                href: "/#booking",
                bg: "bg-[#F5F1E8]",
              },
              {
                icon: <Mic2 size={28} />,
                number: "06",
                title: "Recording Studio",
                description:
                  "Professional-grade sound in a space designed for artists. From vocal recording and mixing to full music production, our studio delivers the sonic quality your art deserves.",
                href: "/audio-gallery",
                bg: "bg-[#EAE4D7]",
              },
            ].map((service, i) => (
              <motion.a
                key={i}
                href={service.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                className={`group ${service.bg} p-10 flex flex-col justify-between min-h-[320px] hover:bg-[#2C2416] transition-colors duration-500 cursor-pointer`}
              >
                <div>
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-[#8B7355] group-hover:text-[#C4A882] transition-colors duration-500">
                      {service.icon}
                    </span>
                    <span
                      className="text-xs tracking-[0.2em] text-[#2C2416]/30 group-hover:text-[#F5F1E8]/30 transition-colors duration-500"
                      style={{ fontFamily: "'Tenor Sans', sans-serif" }}
                    >
                      {service.number}
                    </span>
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-light mb-4 text-[#2C2416] group-hover:text-[#F5F1E8] transition-colors duration-500"
                    style={{ fontFamily: "'Cormorant', serif" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed text-[#4A3F2E]/80 group-hover:text-[#F5F1E8]/60 transition-colors duration-500"
                    style={{ fontFamily: "'Tenor Sans', sans-serif" }}
                  >
                    {service.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-8">
                  <span
                    className="text-xs tracking-[0.2em] text-[#8B7355] group-hover:text-[#C4A882] transition-colors duration-500"
                    style={{ fontFamily: "'Tenor Sans', sans-serif" }}
                  >
                    LEARN MORE
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-[#8B7355] group-hover:text-[#C4A882] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* WEDDING PHOTOS */}
      <section className="py-20 px-8 md:px-16 bg-[#EAE4D7]">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {weddingImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-[3/4] overflow-hidden rounded-lg cursor-pointer"
                onClick={() => (window.location.href = "/wedding-gallery")}
              >
                <img src={src} alt={`Wedding photo ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
          <a href="/wedding-gallery" className="inline-block mt-8 px-8 py-3 border border-[#2C2416] hover:bg-[#2C2416] hover:text-[#F5F1E8] transition-all duration-300" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            See More
          </a>
        </div>
      </section>

      {/* STUDIO SECTION */}
      <section className="py-32 px-8 md:px-16 bg-[#F5F1E8]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-6">
                <Camera className="text-[#8B7355]" size={24} />
                <span className="text-xs tracking-[0.3em] text-[#8B7355]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>STUDIO SHOOTS</span>
              </div>
              <h2 className="text-5xl md:text-6xl mb-8 leading-tight font-light" style={{ fontFamily: "'Cormorant', serif" }}>
                Pictures That<br /><span className="italic">Raise Eyebrows</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#8B7355] mb-8" />
              <p className="text-lg leading-relaxed text-[#4A3F2E]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                If you need pictures that will raise eyebrows, give you confidence and make you remember how wonderfully created you are—you are in the right place.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="aspect-[4/5]">
              <Image src="/studio2.jpeg" alt="Studio Shoot" width={600} height={800} className="hidden lg:block w-full h-auto object-cover" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {studioImages.map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer" onClick={() => (window.location.href = "/studio-gallery")}>
                <img src={src} alt={`Studio photo ${i + 1}`} className="h-[60vh] object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
          <a href="/studio-gallery" className="inline-block mt-8 px-8 py-3 border border-[#2C2416] hover:bg-[#2C2416] hover:text-[#F5F1E8] transition-all duration-300" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            See More
          </a>
        </div>
      </section>

      {/* FRAMES & PRINTS */}
      <section className="py-32 px-8 md:px-16 bg-[#EAE4D7]">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="aspect-[4/5] border border-[#8B7355]/20 overflow-hidden rounded-2xl order-2 lg:order-1">
              <img src="/frame11.jpeg" alt="Frames & Prints Hero" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#8B7355] text-2xl">🖼️</span>
                <span className="text-xs tracking-[0.3em] text-[#8B7355]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>FRAMES & PRINT</span>
              </div>
              <h2 className="text-5xl md:text-6xl mb-8 leading-tight font-light" style={{ fontFamily: "'Cormorant', serif" }}>
                Quality Meets<br /><span className="italic">Speed</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#8B7355] mb-8" />
              <p className="text-lg leading-relaxed text-[#4A3F2E]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                When quality and speed are the words, no one does it better than us. Our clients just keep coming back.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {frameImages.map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer" onClick={() => (window.location.href = "/frames-gallery")}>
                <img src={src} alt={`Frame photo ${i + 1}`} className="h-[60vh] object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
          <a href="/frames-gallery" className="inline-block mt-8 px-8 py-3 border border-[#2C2416] hover:bg-[#2C2416] hover:text-[#F5F1E8] transition-all duration-300" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            See More
          </a>
        </div>
      </section>

      {/* BABY PHOTOS */}
      <section className="py-20 px-8 md:px-16 bg-[#F5F1E8]">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {babyImages.map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="aspect-[3/4] overflow-hidden rounded-lg cursor-pointer" onClick={() => (window.location.href = "/baby-gallery")}>
                <img src={src} alt={`Baby photo ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
          <a href="/baby-gallery" className="inline-block mt-8 px-8 py-3 border border-[#2C2416] hover:bg-[#2C2416] hover:text-[#F5F1E8] transition-all duration-300" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            See More
          </a>
        </div>
      </section>

      {/* AUDIO */}
      <section className="py-20 px-8 md:px-16 bg-[#EAE4D7]">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {audioImages.map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer" onClick={() => (window.location.href = "/audio-gallery")}>
                <img src={src} alt={`Audio cover ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
          <a href="/audio-gallery" className="inline-block mt-8 px-8 py-3 border border-[#2C2416] hover:bg-[#2C2416] hover:text-[#F5F1E8] transition-all duration-300" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            See More
          </a>
        </div>
      </section>

      {/* BOOKING / CONTACT SECTION */}
      <section ref={bookingRef} id="booking" className="py-32 px-8 md:px-16 bg-[#2C2416]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left — copy */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-xs tracking-[0.3em] text-[#8B7355]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                BOOK A SESSION
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl mt-6 mb-8 leading-tight font-light text-[#F5F1E8]" style={{ fontFamily: "'Cormorant', serif" }}>
                Let's Create
                <br />
                <span className="italic">Something</span>
                <br />
                Timeless
              </h2>
              <div className="w-16 h-[1px] bg-[#8B7355] mb-8" />
              <p className="text-[#F5F1E8]/70 leading-relaxed text-lg mb-10" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                Every great story deserves to be told beautifully. Reach out and let's begin crafting yours — from intimate portraits to grand wedding celebrations.
              </p>
              <div className="space-y-4 text-[#F5F1E8]/60 text-sm tracking-wider mb-10" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                <p>📍 Udobio Street, Uyo, Akwa Ibom, Nigeria</p>
                <p>📞 +234 706 487 6480</p>
                <p>✉️ Leboldafrica@gmail.com</p>
              </div>

              {/* Social links */}
             
            </motion.div>

            {/* Right — form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              {formStatus === "sent" ? (
                <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                  <CheckCircle size={56} className="text-[#8B7355] mb-6" />
                  <h3 className="text-3xl font-light text-[#F5F1E8] mb-4" style={{ fontFamily: "'Cormorant', serif" }}>
                    Message Received
                  </h3>
                  <p className="text-[#F5F1E8]/60" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                    We'll be in touch within 24 hours.
                  </p>
                  <button onClick={() => setFormStatus("idle")} className="mt-8 text-xs tracking-[0.2em] text-[#8B7355] underline underline-offset-4">
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="text-[#F5F1E8]/40 text-xs tracking-[0.2em] block mb-2">FULL NAME *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`${inputClass} border-white/20 text-[#F5F1E8] placeholder-white/20 focus:border-[#8B7355]`}
                        style={{ background: "transparent" }}
                      />
                    </div>
                    <div>
                      <label className="text-[#F5F1E8]/40 text-xs tracking-[0.2em] block mb-2">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`${inputClass} border-white/20 text-[#F5F1E8] placeholder-white/20 focus:border-[#8B7355]`}
                        style={{ background: "transparent" }}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="text-[#F5F1E8]/40 text-xs tracking-[0.2em] block mb-2">PHONE NUMBER</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 706 487 6480"
                        className={`${inputClass} border-white/20 text-[#F5F1E8] placeholder-white/20 focus:border-[#8B7355]`}
                        style={{ background: "transparent" }}
                      />
                    </div>
                    <div>
                      <label className="text-[#F5F1E8]/40 text-xs tracking-[0.2em] block mb-2">SERVICE *</label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className={`${inputClass} border-white/20 text-[#F5F1E8] focus:border-[#8B7355]`}
                        style={{ background: "#2C2416" }}
                      >
                        <option value="" disabled style={{ background: "#2C2416" }}>Select a service</option>
                        <option value="Wedding Photography" style={{ background: "#2C2416" }}>Wedding Photography</option>
                        <option value="Studio Shoot" style={{ background: "#2C2416" }}>Studio Shoot</option>
                        <option value="Frames & Prints" style={{ background: "#2C2416" }}>Frames & Prints</option>
                        <option value="Photography Training" style={{ background: "#2C2416" }}>Photography Training</option>
                        <option value="Drone Services" style={{ background: "#2C2416" }}>Drone Services</option>
                        <option value="Recording Studio" style={{ background: "#2C2416" }}>Recording Studio</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[#F5F1E8]/40 text-xs tracking-[0.2em] block mb-2">PREFERRED DATE</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`${inputClass} border-white/20 text-[#F5F1E8] focus:border-[#8B7355]`}
                      style={{ background: "transparent", colorScheme: "dark" }}
                    />
                  </div>

                  <div>
                    <label className="text-[#F5F1E8]/40 text-xs tracking-[0.2em] block mb-2">YOUR MESSAGE *</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your vision..."
                      className={`${inputClass} border-white/20 text-[#F5F1E8] placeholder-white/20 focus:border-[#8B7355] resize-none`}
                      style={{ background: "transparent" }}
                    />
                  </div>

                  {formStatus === "error" && (
                    <p className="text-red-400 text-sm tracking-wide">Something went wrong. Please try again or email us at <a href="mailto:Leboldafrica@gmail.com" className="underline">Leboldafrica@gmail.com</a></p>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="group w-full flex items-center justify-center gap-3 bg-[#8B7355] text-[#F5F1E8] py-5 hover:bg-[#9E855F] transition-all duration-300 disabled:opacity-50"
                  >
                    {formStatus === "sending" ? (
                      <span className="text-sm tracking-[0.2em]">SENDING...</span>
                    ) : (
                      <>
                        <span className="text-sm tracking-[0.2em]">SEND MESSAGE</span>
                        <Send className="group-hover:translate-x-1 transition-transform" size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-[#1A150D] px-8 md:px-16 pt-20 pb-10">
        <div className="max-w-[1800px] mx-auto">
          {/* Top row */}
          <div className="grid md:grid-cols-3 gap-12 pb-16 border-b border-white/10">
            {/* Brand */}
            <div>
              <h3 className="text-3xl font-light text-[#F5F1E8] mb-4" style={{ fontFamily: "'Cormorant', serif" }}>
                LeBold <span className="italic">Studios</span>
              </h3>
              <p className="text-[#F5F1E8]/40 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                Crafting timeless imagery since 2013. Based in Uyo, serving Nigeria and beyond.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-4 flex-wrap">
                {[
                  { label: "Instagram", handle: "@leboldstudios", href: "https://instagram.com/leboldstudios", abbr: "IG" },
                  { label: "Facebook", handle: "LeBold Studios", href: "https://facebook.com/leboldstudios", abbr: "FB" },
                  { label: "TikTok", handle: "@leboldstudios", href: "https://tiktok.com/@leboldstudios", abbr: "TK" },
                  { label: "YouTube", handle: "@leboldstudios", href: "https://youtube.com/@leboldstudios", abbr: "YT" },
                  { label: "WhatsApp", handle: "+234 000 000 000", href: "https://wa.me/234000000000", abbr: "WA" },
                ].map((s) => (
                  <a
                    key={s.abbr}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 border border-white/10 flex items-center justify-center text-[10px] tracking-widest text-[#F5F1E8]/40 hover:border-[#8B7355] hover:text-[#8B7355] transition-all duration-300"
                    style={{ fontFamily: "'Tenor Sans', sans-serif" }}
                  >
                    {s.abbr}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="text-xs tracking-[0.25em] text-[#8B7355] mb-6" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>OUR SERVICES</p>
              <ul className="space-y-3" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                {[
                  { label: "Wedding Photography", href: "/wedding-gallery" },
                  { label: "Studio Shoot", href: "/studio-gallery" },
                  { label: "Frames & Prints", href: "/frames-gallery" },
                  { label: "Photography Training", href: "/#booking" },
                  { label: "Drone Services", href: "/#booking" },
                  { label: "Recording Studio", href: "/audio-gallery" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm text-[#F5F1E8]/40 hover:text-[#8B7355] transition-colors duration-300 tracking-wide">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs tracking-[0.25em] text-[#8B7355] mb-6" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>GET IN TOUCH</p>
              <ul className="space-y-4 text-sm text-[#F5F1E8]/40" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                <li>
                  <a href="mailto:Leboldafrica@gmail.com" className="hover:text-[#8B7355] transition-colors duration-300">
                    Leboldafrica@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/2347064876480" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B7355] transition-colors duration-300">
                    +234 706 487 6480
                  </a>
                </li>
                <li className="leading-relaxed">
                  Udobio Street, Uyo<br />Akwa Ibom State, Nigeria
                </li>
              </ul>
              <a
                href="https://maps.google.com/?q=Udobio+Street,+Uyo,+Akwa+Ibom,+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-xs tracking-[0.2em] text-[#8B7355] hover:text-[#C4A882] transition-colors duration-300"
                style={{ fontFamily: "'Tenor Sans', sans-serif" }}
              >
                VIEW ON GOOGLE MAPS →
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
            <p className="text-[#F5F1E8]/20 text-xs tracking-[0.3em]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              © {new Date().getFullYear()} LEBOLD STUDIOS — ALL RIGHTS RESERVED
            </p>
            <div className="flex gap-6" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              <a href="/#booking" className="text-xs tracking-[0.2em] text-[#F5F1E8]/20 hover:text-[#8B7355] transition-colors duration-300">BOOK NOW</a>
              <a href="mailto:Leboldafrica@gmail.com" className="text-xs tracking-[0.2em] text-[#F5F1E8]/20 hover:text-[#8B7355] transition-colors duration-300">EMAIL US</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}