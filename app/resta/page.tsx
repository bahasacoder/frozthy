"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Users,
  Clock,
  X,
  Menu as MenuIcon,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Utensils,
  Award,
  Sparkles,
} from "lucide-react";
import {
  HERO_SLIDES,
  FEATURED_FOODS,
  MENU_CATEGORIES,
  MENU_ITEMS,
  TESTIMONIALS,
} from "./data";

export default function NusantaraRestaurantPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("Sarapan");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);

  // State Form Reservasi
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "19:00",
    guests: "2 Orang",
  });

  // Auto-play Hero Slider setiap 6 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const filteredMenu = MENU_ITEMS.filter((item) => item.category === activeTab);

  const handleReservationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReservationSuccess(true);
    setTimeout(() => {
      setReservationSuccess(false);
      setIsModalOpen(false);
      setFormData({ name: "", date: "", time: "19:00", guests: "2 Orang" });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased selection:bg-amber-500 selection:text-neutral-950">
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-neutral-950/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-2xl font-serif font-bold tracking-wider text-white">
            <Utensils className="text-amber-500 w-6 h-6" />
            <span>
              NUSANTARA<span className="text-amber-500">RASA</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest">
            <a href="#home" className="text-neutral-300 hover:text-amber-400 transition-colors">
              Beranda
            </a>
            <a href="#featured" className="text-neutral-300 hover:text-amber-400 transition-colors">
              Andalan
            </a>
            <a href="#menu" className="text-neutral-300 hover:text-amber-400 transition-colors">
              Menu
            </a>
            <a href="#about" className="text-neutral-300 hover:text-amber-400 transition-colors">
              Tentang Kami
            </a>
            <a href="#contact" className="text-neutral-300 hover:text-amber-400 transition-colors">
              Kontak
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-sm transition-colors cursor-pointer"
            >
              Reservasi Meja
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-neutral-900 border-b border-white/10 overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col space-y-4 text-sm uppercase tracking-wider">
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">
                  Beranda
                </a>
                <a href="#featured" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">
                  Andalan
                </a>
                <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">
                  Menu
                </a>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">
                  Tentang Kami
                </a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400">
                  Kontak
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="bg-amber-500 text-neutral-950 font-bold py-3 text-center uppercase tracking-widest"
                >
                  Reservasi Meja
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ================= HERO SLIDER ================= */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${HERO_SLIDES[activeSlide].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-neutral-950" />
          </motion.div>
        </AnimatePresence>

        {/* Konten Teks Hero */}
        <div className="relative z-10 h-full max-w-5xl mx-auto px-6 flex flex-col justify-center items-center text-center pt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-6"
            >
              <span className="inline-block text-amber-400 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 rounded-full">
                {HERO_SLIDES[activeSlide].subtitle}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
                {HERO_SLIDES[activeSlide].title}
              </h1>
              <p className="text-neutral-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                {HERO_SLIDES[activeSlide].description}
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                {HERO_SLIDES[activeSlide].buttonLink === "#reservation" ? (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-sm transition-all cursor-pointer"
                  >
                    {HERO_SLIDES[activeSlide].buttonText}
                  </button>
                ) : (
                  <a
                    href={HERO_SLIDES[activeSlide].buttonLink}
                    className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-sm transition-all"
                  >
                    {HERO_SLIDES[activeSlide].buttonText}
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tombol Navigasi Slider */}
        <button
          onClick={prevSlide}
          aria-label="Slide Sebelumnya"
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/40 hover:bg-amber-500 hover:text-neutral-950 items-center justify-center transition-all cursor-pointer"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Slide Berikutnya"
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/40 hover:bg-amber-500 hover:text-neutral-950 items-center justify-center transition-all cursor-pointer"
        >
          <ChevronRight size={22} />
        </button>

        {/* Indikator Titik Slider */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              aria-label={`Pilih Slide ${index + 1}`}

              className={`w-3 h-3 rounded-full transition-all ${
                activeSlide === index ? "bg-amber-500" : "bg-white/40 hover:bg-amber-400"
              }`}
            />
          ))}
        </div>  
        </section>
      </div>
  )
}

/*

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Clock, X, Menu, Phone, Mail, MapPin } from "lucide-react";
import { HERO_SLIDES, MENU_ITEMS, TESTIMONIALS } from "./data";

// Varian Animasi dan Komponen Halaman Utama
export default function RestaurantPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("Breakfast");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Logika slider otomatis dan filter menu dapat dilihat pada
  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans antialiased overflow-x-hidden">
      {/* Navbar, Hero Slider, Interactive Menu, Catering, Footer, dan Modal Reservasi */
       /*}
    </div>
  );
}
*/
