"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Camera, Frame, Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../../public/logo.png";
import Image from "next/image";
import FramesSection from "@/components/framesection";

export default function LeBoldStudiosHomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  // See more states for galleries
  const [showAllWedding, setShowAllWedding] = useState(false);
  const [showAllStudio, setShowAllStudio] = useState(false);
  const [showAllBaby, setShowAllBaby] = useState(false);
  const [showAllAudio, setShowAllAudio] = useState(false);
  const [showAllFrames, setShowAllFrames] = useState(false);

  const navLinks = ["HOME", "WHO WE ARE", "OUR SERVICES", "PRICING"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gallery images
  const weddingImages = [
    "/wedding6.jpeg",
    "/wedding2t.jpeg",
    "/wedding3t.jpeg",
    "/wedding11.jpeg",
    "/wedding5.jpeg",
    "/wedding13.jpeg",
    "/wedding12.jpeg",
    "/wedding8.jpeg",
  ];

  const studioImages = [
    "/studio1.jpeg",
    "/studio4.jpeg",
    "/studio3.jpeg",
    "/studio5.jpeg",
    "/studio6.jpeg",
    "/studio7.jpeg",
    "/studio8.jpeg",
    "/studio9.jpeg",
  ];
  const frameImages = [
    "/frame11.jpeg",
    "/frame2.jpeg",
    "/frame10.jpeg",
    "/frame4.jpeg",
    "/frame5.jpeg",
    "/frame6.jpeg",
    "/frame7.jpeg",
    "/frame8.jpeg",
  ];
  const babyImages = [
    "/baby1.jpeg",
    "/baby2.jpeg",
    "/baby3.jpeg",
    "/baby4.jpeg",
    "/baby5.jpeg",
    "/baby6.jpeg",
  ];

  const audioImages = [
    "/audio1.jpeg",
    "/audio2.jpeg",
    "/audio3.jpeg",
    "/audio4.jpeg",
    "/audio5.jpeg",
    "/audio6.jpeg",
  ];

  return (
    <div className="bg-[#F5F1E8] text-[#2C2416]">
      {/* Fonts */}
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
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl tracking-[0.2em]"
            style={{ fontFamily: "'Gilda Display', serif" }}
          >
            <Image src={logo} alt="" className="w-20 h-20" />
          </motion.div>

          {/* Desktop Nav Links */}
          <div
            className="hidden md:flex items-center gap-12"
            style={{ fontFamily: "'Tenor Sans', sans-serif" }}
          >
            {navLinks.map((link) => (
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
                  transition={{
                    delay: i * 0.1,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
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
      <section
        id="home"
        className="min-h-screen relative flex items-center overflow-hidden"
      >
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <span
                className="text-xs tracking-[0.3em] text-[#8B7355]"
                style={{ fontFamily: "'Tenor Sans', sans-serif" }}
              >
                LEBOLD STUDIOS SINCE 2013
              </span>
            </motion.div>

            <h1
              className="text-7xl md:text-8xl lg:text-9xl mb-8 leading-[0.95] font-light"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              How Will You
              <br />
              <span className="italic">Remember</span>
              <br />
              Your Wedding?
            </h1>

            <div className="w-20 h-[1px] bg-[#8B7355] mb-8" />

            <p
              className="text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl text-[#4A3F2E]"
              style={{ fontFamily: "'Tenor Sans', sans-serif" }}
            >
              Let the world's best wedding photographers tell your story.
            </p>

            <div className="flex flex-wrap gap-6">
              <a
                href="#booking"
                className="group inline-flex items-center gap-3 bg-[#2C2416] text-[#F5F1E8] px-10 py-5 hover:bg-[#3D3022] transition-all duration-300"
                style={{ fontFamily: "'Tenor Sans', sans-serif" }}
              >
                <span className="text-sm tracking-[0.15em]">BOOK SESSION</span>
                <ArrowUpRight
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  size={18}
                />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-3 border border-[#2C2416] px-10 py-5 hover:bg-[#2C2416] hover:text-[#F5F1E8] transition-all duration-300"
                style={{ fontFamily: "'Tenor Sans', sans-serif" }}
              >
                <span className="text-sm tracking-[0.15em]">
                  EXPLORE SERVICES
                </span>
                <ArrowUpRight
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  size={18}
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WEDDING PHOTOS */}
      <section className="py-20 px-8 md:px-16 bg-[#EAE4D7]">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {(showAllWedding ? weddingImages : weddingImages.slice(0, 4)).map(
              (src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-[3/4] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => (window.location.href = "/wedding-gallery")}
                >
                  <img
                    src={src}
                    alt={`Wedding photo ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ),
            )}
          </div>
          {!showAllWedding && (
            <button
              onClick={() => setShowAllWedding(true)}
              className="mt-8 px-8 py-3 border border-[#2C2416] hover:bg-[#2C2416] hover:text-[#F5F1E8] transition-all duration-300"
            >
              See More
            </button>
          )}
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
                <span
                  className="text-xs tracking-[0.3em] text-[#8B7355]"
                  style={{ fontFamily: "'Tenor Sans', sans-serif" }}
                >
                  STUDIO SHOOTS
                </span>
              </div>
              <h2
                className="text-5xl md:text-6xl mb-8 leading-tight font-light"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                Pictures That
                <br />
                <span className="italic">Raise Eyebrows</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#8B7355] mb-8" />
              <p
                className="text-lg leading-relaxed text-[#4A3F2E] mb-6"
                style={{ fontFamily: "'Tenor Sans', sans-serif" }}
              >
                If you need pictures that will raise eyebrows, give you
                confidence and make you remember how wonderfully created you
                are—you are in the right place.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5]"
            >
              <Image
                src="/studio2.jpeg"
                alt="Studio Shoot"
                width={600}
                height={800}
                className="hidden lg:block w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          {/* Studio Gallery */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {(showAllStudio ? studioImages : studioImages.slice(0, 4)).map(
              (src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => (window.location.href = "/studio-gallery")}
                >
                  <img
                    src={src}
                    alt={`Studio photo ${i + 1}`}
                    className="h-[60vh] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ),
            )}
          </div>
          {!showAllStudio && (
            <button
              onClick={() => setShowAllStudio(true)}
              className="mt-8 px-8 py-3 border border-[#2C2416] hover:bg-[#2C2416] hover:text-[#F5F1E8] transition-all duration-300"
            >
              See More
            </button>
          )}
        </div>
      </section>
      <section className="py-32 px-8 md:px-16 bg-[#EAE4D7]">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="aspect-[4/5] border border-[#8B7355]/20 overflow-hidden rounded-2xl order-2 lg:order-1">
              <img
                src="/frame3.jpeg"
                alt="Frames & Prints Hero"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#8B7355] text-2xl">🖼️</span>
                <span
                  className="text-xs tracking-[0.3em] text-[#8B7355]"
                  style={{ fontFamily: "'Tenor Sans', sans-serif" }}
                >
                  FRAMES & PRINT
                </span>
              </div>

              <h2
                className="text-5xl md:text-6xl mb-8 leading-tight font-light"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                Quality Meets
                <br />
                <span className="italic">Speed</span>
              </h2>

              <div className="w-16 h-[1px] bg-[#8B7355] mb-8" />

              <p
                className="text-lg leading-relaxed text-[#4A3F2E] mb-6"
                style={{ fontFamily: "'Tenor Sans', sans-serif" }}
              >
                When quality and speed are the words, no one does it better than
                us. Our clients just keep coming back.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {(showAllFrames ? frameImages : frameImages.slice(0, 4)).map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                onClick={() => (window.location.href = "/frames-gallery")}
              >
                <img
                  src={src}
                  alt={`Frame photo ${i + 1}`}
                  className="h-[60vh] object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

            ))}
          </div>
          {!showAllFrames && (
            <button
              onClick={() => setShowAllFrames(true)}
              className="mt-8 px-8 py-3 border border-[#2C2416] hover:bg-[#2C2416] hover:text-[#F5F1E8] transition-all duration-300"
            >
              See More
            </button>
          )}
        </div>

      </section>
      ]

      {/* BABY PHOTOS */}
      <section className="py-20 px-8 md:px-16 bg-[#F5F1E8]">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {(showAllBaby ? babyImages : babyImages.slice(0, 4)).map(
              (src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-[3/4] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => (window.location.href = "/baby-gallery")}
                >
                  <img
                    src={src}
                    alt={`Baby photo ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ),
            )}
          </div>
          {!showAllBaby && (
            <button
              onClick={() => setShowAllBaby(true)}
              className="mt-8 px-8 py-3 border border-[#2C2416] hover:bg-[#2C2416] hover:text-[#F5F1E8] transition-all duration-300"
            >
              See More
            </button>
          )}
        </div>
      </section>

      {/* AUDIO */}
      <section className="py-20 px-8 md:px-16 bg-[#EAE4D7]">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {(showAllAudio ? audioImages : audioImages.slice(0, 4)).map(
              (src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => (window.location.href = "/audio-gallery")}
                >
                  <img
                    src={src}
                    alt={`Audio cover ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ),
            )}
          </div>
          {!showAllAudio && (
            <button
              onClick={() => setShowAllAudio(true)}
              className="mt-8 px-8 py-3 border border-[#2C2416] hover:bg-[#2C2416] hover:text-[#F5F1E8] transition-all duration-300"
            >
              See More
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
