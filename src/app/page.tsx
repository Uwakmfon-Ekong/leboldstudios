"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Camera,
  Frame,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

export default function LeBoldStudiosHomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
const navLinks = ["HOME", "WHO WE ARE", "OUR SERVICES", "PRICING"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#F5F1E8] text-[#2C2416]">
      {/* Fonts */}
      <style jsx global>{`
        @import url(
          "https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Tenor+Sans&family=Gilda+Display&display=swap"
        );
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
    {/* Logo */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-2xl tracking-[0.2em]"
      style={{ fontFamily: "'Gilda Display', serif" }}
    >
      LEBOLD
    </motion.div>

    {/* Desktop Nav Links */}
    <div
      className="hidden md:flex items-center gap-12"
      style={{ fontFamily: "'Tenor Sans', sans-serif" }}
    >
      {["HOME", "WHO WE ARE", "OUR SERVICES", "PRICING"].map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
          className="text-sm tracking-[0.15em] hover:text-[#8B7355] transition-colors"
        >
          {link}
        </a>
      ))}
      <a
        href="#booking"
        className="border border-[#2C2416] px-8 py-3 text-sm tracking-[0.15em] hover:bg-[#2C2416] hover:text-[#F5F1E8] transition-all duration-300"
      >
        BOOKING
      </a>
    </div>

    {/* Mobile Menu Toggle */}
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="md:hidden"
    >
      {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {/* Mobile Fullscreen Menu */}
  <AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      key="mobileMenu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
    >
      {/* Close Icon */}
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

      {/* Menu Links */}
      {navLinks.map((link, i) => (
        <motion.a
          key={link}
          href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
          onClick={() => setMobileMenuOpen(false)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: i * 0.1, duration: 0.3, ease: "easeOut" }}
          className="text-2xl font-semibold tracking-[0.15em] text-[#2C2416] hover:text-[#8B7355] mb-6"
        >
          {link}
        </motion.a>
      ))}

      <motion.a
        href="#booking"
        onClick={() => setMobileMenuOpen(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
        className="mt-4 px-10 py-4 border border-[#2C2416] text-[#2C2416] hover:bg-[#2C2416] hover:text-white transition-all duration-300 text-lg tracking-[0.15em]"
      >
        BOOKING
      </motion.a>
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
            className="absolute inset-0 bg-cover bg-center  scale-110"
            style={{
              backgroundImage: 'url("/leboldbg.jpeg")',
              
              filter: "blur(1px) brightness(0.8) contrast(0.95)",
            }}
          />
          <div className="absolute inset-0 bg-[#D4C4A8]/20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F1E8]/85 via-[#F5F1E8]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5F1E8]/90" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(44, 36, 22, 0.15) 100%)",
            }}
          />
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
                PHOTOGRAPHY ATELIER — EST. 2013
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
              <a
                href="#booking"
                className="group inline-flex items-center gap-3 bg-[#2C2416] text-[#F5F1E8] px-10 py-5 hover:bg-[#3D3022] transition-all duration-300"
                style={{ fontFamily: "'Tenor Sans', sans-serif" }}
              >
                <span className="text-sm tracking-[0.15em]">BOOK SESSION</span>
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </a>
              <a
                href="#services"
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
{/* WEDDING PHOTOS GALLERY */}
<section className="py-20 px-8 md:px-16 bg-[#EAE4D7]">
  <div className="max-w-[1800px] mx-auto">
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[
        "/wedding6.jpeg",
        "/wedding2t.jpeg",
        "/wedding3t.jpeg",
        "/wedding11.jpeg",
        "/wedding5.jpeg",
        "/wedding6.jpeg",
        "/wedding7.jpeg",
        "/wedding8.jpeg",
      ].map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="aspect-[3/4] overflow-hidden rounded-lg cursor-pointer"
        >
          <img
            src={src}
            alt={`Wedding photo ${i + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* STUDIO SECTION */}
      <section className="py-32 px-8 md:px-16 bg-[#F5F1E8]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Camera className="text-[#8B7355]" size={24} />
                <span className="text-xs tracking-[0.3em] text-[#8B7355]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                  STUDIO SHOOTS
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl mb-8 leading-tight font-light" style={{ fontFamily: "'Cormorant', serif" }}>
                Pictures That
                <br />
                <span className="italic">Raise Eyebrows</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#8B7355] mb-8" />
              <p className="text-lg leading-relaxed text-[#4A3F2E] mb-6" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                If you need pictures that will raise eyebrows, give you confidence and make you remember how wonderfully created you are—you are in the right place.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] bg-[#D4C9B5] border border-[#8B7355]/20"
            >
              <Image src="/wedding7.jpeg" alt="Studio Shoot" width={600} height={800} className="hidden lg:block w-full h-auto object-cover" />
            </motion.div>
           
          </div>


          <div className="grid md:grid-cols-4 gap-6 mt-12">
      {[
        "/studio1.jpeg",
        "/studio2.jpeg",
        "/wedding3t.jpeg",
        "/wedding4.jpeg",
        "/wedding5.jpeg",
        "/wedding6.jpeg",
        "/wedding7.jpeg",
        "/wedding8.jpeg",
      ].map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="aspect-square hover:scale-105 transition-transform duration-500 cursor-pointer"
        >
          <img
            src={src}
            alt={`Wedding photo ${i + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      ))}
    </div>
        </div>
      </section>

      {/* FRAMES & PRINT SECTION */}
      <section className="py-32 px-8 md:px-16 bg-[#EAE4D7]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] bg-[#C4B5A0] border border-[#8B7355]/20 order-2 lg:order-1"
            />
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <Frame className="text-[#8B7355]" size={24} />
                <span className="text-xs tracking-[0.3em] text-[#8B7355]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                  FRAMES & PRINT
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl mb-8 leading-tight font-light" style={{ fontFamily: "'Cormorant', serif" }}>
                Quality Meets
                <br />
                <span className="italic">Speed</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#8B7355] mb-8" />
              <p className="text-lg leading-relaxed text-[#4A3F2E] mb-6" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                When quality and speed are the words, no one does it better than us. Our clients just keep coming back.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square bg-gradient-to-br from-[#C4B5A0] to-[#A89885] hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="who-we-are" className="py-32 px-8 md:px-16 bg-[#F5F1E8]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs tracking-[0.3em] text-[#8B7355] mb-8 block" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              WHO WE ARE
            </span>
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight font-light" style={{ fontFamily: "'Cormorant', serif" }}>
              Since 2013
            </h2>
            <div className="w-16 h-[1px] bg-[#8B7355] mx-auto mb-8" />
            <p className="text-lg leading-relaxed text-[#4A3F2E] mb-6" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              LeBold Studios has stood at the intersection of art, emotion, and excellence—creating timeless visuals and breathing life into memories that transcend moments and generations.
            </p>
            <p className="text-lg leading-relaxed text-[#4A3F2E] mb-6" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              We are more than a photo studio. We are visual storytellers.
            </p>
            <p className="text-lg leading-relaxed text-[#4A3F2E]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              As a one-stop creative studio, we specialize in professional studio portrait sessions, high-end event coverage, and premium frame making and finishing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ...      {/* SERVICES */}
      <section id="services" className="py-32 px-8 md:px-16 bg-[#EAE4D7]">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs tracking-[0.3em] text-[#8B7355] mb-8 block" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              OUR SERVICES
            </span>
            <h2 className="text-5xl md:text-6xl mb-12 leading-tight font-light" style={{ fontFamily: "'Cormorant', serif" }}>
              What We Offer
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {[
              { title: "Wedding Photography", desc: "Full coverage from prep to reception, capturing every emotion and detail." },
              { title: "Studio Portraits", desc: "Professional, high-quality portraits for individuals, couples, and families." },
              { title: "Frames & Prints", desc: "Premium frame making and finishing to preserve your memories." },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-[#F5F1E8] p-10 border border-[#8B7355]/20 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <h3 className="text-2xl mb-4 font-semibold" style={{ fontFamily: "'Cormorant', serif" }}>
                  {service.title}
                </h3>
                <p className="text-[#4A3F2E] leading-relaxed" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-32 px-8 md:px-16 bg-[#F5F1E8]">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs tracking-[0.3em] text-[#8B7355] mb-8 block" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              PRICING
            </span>
            <h2 className="text-5xl md:text-6xl mb-12 leading-tight font-light" style={{ fontFamily: "'Cormorant', serif" }}>
              Our Packages
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {[
              { title: "Standard", price: "$500", features: ["4 hours coverage", "50 edited photos", "Online gallery"] },
              { title: "Premium", price: "$1200", features: ["8 hours coverage", "100 edited photos", "Premium prints", "Online gallery"] },
              { title: "Deluxe", price: "$2000", features: ["Full-day coverage", "All photos edited", "Custom album", "Frames & Prints", "Online gallery"] },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-[#EAE4D7] p-10 border border-[#8B7355]/20 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <h3 className="text-2xl mb-4 font-semibold" style={{ fontFamily: "'Cormorant', serif" }}>
                  {plan.title}
                </h3>
                <p className="text-3xl font-light mb-6" style={{ fontFamily: "'Cormorant', serif" }}>
                  {plan.price}
                </p>
                <ul className="text-[#4A3F2E] mb-6 space-y-2" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                  {plan.features.map((f, idx) => (
                    <li key={idx}>• {f}</li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className="inline-block px-8 py-4 border border-[#2C2416] hover:bg-[#2C2416] hover:text-[#F5F1E8] transition-all duration-300"
                  style={{ fontFamily: "'Tenor Sans', sans-serif" }}
                >
                  BOOK NOW
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-32 px-8 md:px-16 bg-[#EAE4D7]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs tracking-[0.3em] text-[#8B7355] mb-8 block" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              BOOKING
            </span>
            <h2 className="text-5xl md:text-6xl mb-12 leading-tight font-light" style={{ fontFamily: "'Cormorant', serif" }}>
              Reserve Your Spot
            </h2>
          </motion.div>

          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-[#8B7355]/20 px-6 py-4"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-[#8B7355]/20 px-6 py-4"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-[#8B7355]/20 px-6 py-4"
            />
            <textarea
              placeholder="Message / Details"
              className="border border-[#8B7355]/20 px-6 py-4 h-32"
            />
            <button
              type="submit"
              className="bg-[#2C2416] text-[#F5F1E8] px-10 py-5 hover:bg-[#3D3022] transition-all duration-300"
            >
              SEND REQUEST
            </button>
          </form>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="py-32 px-8 md:px-16 bg-[#F5F1E8]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] text-[#8B7355] mb-8 block" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            LOCATION
          </span>
          <h2 className="text-5xl md:text-6xl mb-12 leading-tight font-light" style={{ fontFamily: "'Cormorant', serif" }}>
            Find Us Here
          </h2>
          <div className="w-full aspect-video border border-[#8B7355]/20">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.962470593998!2d7.923177074784253!3d4.951882996170917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106ad32c0e7b48d7%3A0x1f0f71b63be10e57!2sLagos!5e0!3m2!1sen!2sng!4v1704567890123!5m2!1sen!2sng"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
