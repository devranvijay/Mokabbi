import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Coffee, Leaf, Flame, Heart, Users, Award, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Star, ArrowUpRight, Search, MessageCircle } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { CoffeeCup } from "@/components/CoffeeCup";
import { FloatingBeans, SteamParticles } from "@/components/FloatingBeans";

import heroCoffee from "@/assets/hero-coffee.jpg";
import interior from "@/assets/interior.jpg";
import breakfast from "@/assets/breakfast.jpg";
import matcha from "@/assets/matcha.jpg";
import pizza from "@/assets/pizza.jpg";
import dessert from "@/assets/dessert.jpg";
import brewing from "@/assets/brewing.jpg";
import milkshake from "@/assets/milkshake.jpg";
import sandwich from "@/assets/sandwich.jpg";
import pasta from "@/assets/pasta.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mokabbi Cafe & Bistro — Coffee Crafted with Passion | Andheri East" },
      { name: "description", content: "Handcrafted specialty coffee, artisan breakfast, pasta, pizza and cozy luxury ambience in the heart of Andheri East, Mumbai." },
      { property: "og:title", content: "Mokabbi Cafe & Bistro" },
      { property: "og:description", content: "Coffee crafted with passion. Specialty café in Andheri East." },
    ],
  }),
  component: Home,
});

// ---------- shared motion presets ----------
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.7, 0, 0.2, 1] as const },
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      {...fadeUp}
      className="inline-flex items-center gap-3 text-xs tracking-[0.4em] uppercase text-caramel"
      style={{ fontFamily: "var(--font-ui)" }}
    >
      <span className="w-8 h-px bg-caramel" />
      {children}
    </motion.span>
  );
}

// ---------- HERO ----------
function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-gradient-warm">
      {/* Background ambience */}
      <div className="absolute inset-0 bg-gradient-coffee opacity-[0.06]" />
      <FloatingBeans count={18} opacity={0.18} />
      <SteamParticles />

      {/* Soft radial light */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-caramel/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-coffee/20 blur-3xl" />

      <Navbar />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-16 md:pt-40 lg:pt-48 lg:pb-24 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-widest uppercase text-coffee">
              <span className="w-1.5 h-1.5 rounded-full bg-caramel animate-pulse" />
              Andheri East · Mumbai
            </span>
          </motion.div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-coffee">
            {"Coffee Crafted ".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
                className="inline-block mr-4"
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9 }}
              className="inline-block"
            >
              with <em className="italic text-gradient-coffee animate-gradient-shift">Passion</em>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 text-lg text-foreground/70 max-w-xl leading-relaxed"
          >
            Experience handcrafted coffee, artisan breakfast, signature desserts and a warm,
            elegant ambience in the heart of Andheri. Every cup, brewed with intention.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-6 md:mt-10 flex flex-wrap gap-3 sm:gap-4"
          >
            <a href="#reserve" className="magnetic-btn group inline-flex items-center gap-3 rounded-full bg-gradient-coffee px-8 py-4 text-sm font-medium text-cream shadow-soft" style={{ fontFamily: "var(--font-ui)" }}>
              Reserve a Table
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="#menu" className="magnetic-btn inline-flex items-center gap-3 rounded-full border border-coffee/30 px-8 py-4 text-sm font-medium text-coffee hover:bg-coffee hover:text-cream transition-colors" style={{ fontFamily: "var(--font-ui)" }}>
              View Menu
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
            className="mt-8 md:mt-14 flex flex-wrap items-center gap-4 sm:gap-8"
          >
            <div>
              <div className="font-display text-3xl text-coffee">4.9</div>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-caramel text-caramel" />)}
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-coffee/20" />
            <div>
              <div className="font-display text-3xl text-coffee">15k+</div>
              <div className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Happy guests</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-coffee/20" />
            <div>
              <div className="font-display text-3xl text-coffee">7</div>
              <div className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Brew methods</div>
            </div>
          </motion.div>
        </div>

        <div className="relative hidden md:flex items-center justify-center">
          <CoffeeCup />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs tracking-widest uppercase text-coffee/60"
      >
        <span>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="w-px h-10 bg-coffee/40" />
      </motion.div>
    </section>
  );
}

// ---------- Marquee bar ----------
function Marquee() {
  const items = ["Specialty Coffee", "Artisan Breakfast", "Signature Desserts", "Wood-fired Pizza", "Manual Brewing", "Premium Matcha"];
  return (
    <div className="relative py-8 bg-espresso text-cream overflow-hidden border-y border-caramel/20">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="mx-6 sm:mx-10 inline-flex items-center gap-6 sm:gap-10 font-display text-xl sm:text-3xl md:text-5xl italic">
            {it}
            <Coffee className="w-6 h-6 text-caramel" />
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------- ABOUT ----------
function About() {
  return (
    <section id="about" className="relative py-16 md:py-32 overflow-hidden">
      <FloatingBeans count={8} opacity={0.08} />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.7, 0, 0.2, 1] }}
          className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-luxe"
        >
          <img src={interior} alt="Mokabbi cafe interior" loading="lazy" className="w-full h-full object-cover" width={1280} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-coffee flex items-center justify-center text-cream">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display text-lg text-coffee">Since 2019</div>
              <div className="text-xs text-muted-foreground">A neighbourhood ritual</div>
            </div>
          </motion.div>
        </motion.div>

        <div>
          <SectionEyebrow>Our Story</SectionEyebrow>
          <motion.h2 {...fadeUp} className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-coffee">
            A quiet corner of <em className="italic text-gradient-coffee">Andheri</em>, brewed with care.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-6 text-foreground/70 leading-relaxed">
            Mokabbi began as a small dream — to build a café where every detail, from the single-origin
            beans to the linen napkins, feels considered. We roast in small batches, source from
            farmers we know by name, and pour every cup like it matters. Because it does.
          </motion.p>

          {/* Coffee bean divider */}
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="my-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-coffee/20" />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
              <Coffee className="w-5 h-5 text-caramel" />
            </motion.div>
            <div className="h-px flex-1 bg-coffee/20" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { label: "Mission", text: "Elevate the everyday ritual of coffee with craft, warmth and honesty." },
              { label: "Vision", text: "Mumbai's most loved neighbourhood café — where guests become regulars." },
            ].map((b, i) => (
              <motion.div
                key={b.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="text-xs tracking-[0.3em] uppercase text-caramel">{b.label}</div>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- WHY MOKABBI ----------
const features = [
  { icon: Coffee, title: "Premium Coffee", text: "Single-origin specialty beans, roasted fresh." },
  { icon: Leaf, title: "Fresh Ingredients", text: "Sourced daily from local artisan partners." },
  { icon: Flame, title: "Specialty Brewing", text: "Aeropress, pour-over, French press and more." },
  { icon: Heart, title: "Cozy Ambience", text: "Warm wood, soft light, lived-in luxury." },
  { icon: Users, title: "Friendly Staff", text: "Baristas who remember your usual order." },
  { icon: Award, title: "Awarded Café", text: "Andheri's most loved neighbourhood spot." },
];

function WhyUs() {
  return (
    <section className="relative py-16 md:py-32 bg-gradient-to-b from-cream to-[oklch(0.94_0.02_70)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>Why Mokabbi</SectionEyebrow>
          <motion.h2 {...fadeUp} className="mt-4 font-display text-4xl md:text-6xl text-coffee leading-[1.05]">
            Crafted in every <em className="italic text-gradient-coffee">detail</em>
          </motion.h2>
        </div>

        <div className="mt-10 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.7, 0, 0.2, 1] }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl bg-card p-8 shadow-soft hover:shadow-luxe transition-all duration-500 border border-border/50 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-caramel/10 group-hover:bg-caramel/25 transition-colors duration-700 blur-2xl" />
              <motion.div
                className="relative w-14 h-14 rounded-2xl bg-gradient-coffee flex items-center justify-center text-cream shadow-soft"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <f.icon className="w-6 h-6" />
              </motion.div>
              <h3 className="relative mt-6 font-display text-2xl text-coffee">{f.title}</h3>
              <p className="relative mt-3 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- CATEGORIES (Featured) ----------
const cats = [
  { icon: "☕", name: "Coffee", img: heroCoffee },
  { icon: "🥐", name: "Breakfast", img: breakfast },
  { icon: "🍕", name: "Pizza", img: pizza },
  { icon: "🍝", name: "Pasta", img: pasta },
  { icon: "🍰", name: "Desserts", img: dessert },
  { icon: "🥤", name: "Milkshakes", img: milkshake },
  { icon: "🧋", name: "Matcha", img: matcha },
  { icon: "🥪", name: "Sandwiches", img: sandwich },
];

function Categories() {
  return (
    <section className="relative py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionEyebrow>Featured</SectionEyebrow>
            <motion.h2 {...fadeUp} className="mt-4 font-display text-4xl md:text-6xl text-coffee leading-[1.05] max-w-xl">
              Everything we love, on one menu.
            </motion.h2>
          </div>
          <motion.a {...fadeUp} href="#menu" className="story-link text-sm tracking-widest uppercase text-coffee">
            Browse Full Menu →
          </motion.a>
        </div>

        <div className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {cats.map((c, i) => (
            <motion.a
              key={c.name}
              href="#menu"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-soft hover:shadow-luxe transition-all"
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" width={1024} height={1024} />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent" />
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-2xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              >
                {c.icon}
              </motion.div>
              <div className="absolute bottom-5 left-5 right-5">
                <div className="font-display text-2xl text-cream">{c.name}</div>
                <div className="text-xs tracking-widest uppercase text-caramel/90 mt-1 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- COFFEE SHOWCASE ----------
const coffees = [
  { name: "Espresso", note: "Bold · 30ml", price: "₹180" },
  { name: "Cappuccino", note: "Velvet foam", price: "₹240" },
  { name: "Latte", note: "Silky milk", price: "₹260" },
  { name: "Americano", note: "Clean & long", price: "₹200" },
  { name: "Spanish Latte", note: "Condensed sweet", price: "₹290" },
  { name: "Cold Brew", note: "16hr steep", price: "₹280" },
  { name: "Affogato", note: "Espresso + gelato", price: "₹320" },
];

function CoffeeShowcase() {
  return (
    <section id="coffee" className="relative py-16 md:py-32 bg-espresso text-cream overflow-hidden">
      <FloatingBeans count={14} opacity={0.1} />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-caramel/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-3 text-xs tracking-[0.4em] uppercase text-caramel">
            <span className="w-8 h-px bg-caramel" />
            The Coffee Bar
          </span>
          <motion.h2 {...fadeUp} className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-cream">
            Seven ways to fall in <em className="italic text-caramel">love</em>.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-6 text-cream/70">
            From a perfect double shot to a slow-steeped cold brew — our menu honours every coffee tradition.
          </motion.p>
        </div>

        <div className="mt-10 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {coffees.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl p-6 glass-dark hover:border-caramel/50 transition-all overflow-hidden"
            >
              {/* Mini cup w/ liquid fill on hover */}
              <div className="relative w-20 h-24 mx-auto">
                <svg viewBox="0 0 80 96" className="w-full h-full">
                  <defs>
                    <clipPath id={`cup-${i}`}>
                      <path d="M 12 20 L 18 80 Q 20 88 28 88 L 52 88 Q 60 88 62 80 L 68 20 Z" />
                    </clipPath>
                  </defs>
                  <rect x="0" y="0" width="80" height="96" fill="transparent" clipPath={`url(#cup-${i})`}>
                    <animate attributeName="y" from="96" to="32" dur="1.2s" begin="mouseover" fill="freeze" />
                  </rect>
                  <rect x="0" y="96" width="80" height="64" fill="#D4A373" clipPath={`url(#cup-${i})`} className="transition-all duration-700 group-hover:translate-y-[-58px]" style={{ transformOrigin: "center" }} />
                  <path d="M 12 20 L 18 80 Q 20 88 28 88 L 52 88 Q 60 88 62 80 L 68 20 Z" stroke="#FAF6F2" strokeWidth="1.5" fill="none" />
                  <path d="M 62 32 Q 76 32 76 48 Q 76 64 62 64" stroke="#FAF6F2" strokeWidth="1.5" fill="none" />
                </svg>
                {/* Steam */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {[0, 1].map((s) => (
                    <span key={s} className="w-1 h-6 rounded-full bg-cream/40 blur-sm animate-steam" style={{ animationDelay: `${s * 0.6}s` }} />
                  ))}
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-display text-xl text-cream">{c.name}</h3>
                <div className="text-xs tracking-widest uppercase text-caramel mt-1">{c.note}</div>
                <div className="mt-4 text-cream/80" style={{ fontFamily: "var(--font-ui)" }}>{c.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- MATCHA ----------
function MatchaSection() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.96 0.04 145), oklch(0.92 0.05 140))" }}>
      <FloatingBeans count={6} opacity={0.08} />
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-3 text-xs tracking-[0.4em] uppercase" style={{ color: "oklch(0.45 0.12 145)" }}>
            <span className="w-8 h-px bg-matcha" />
            抹茶 · The Matcha Bar
          </span>
          <motion.h2 {...fadeUp} className="mt-4 font-display text-4xl md:text-6xl leading-[1.05]" style={{ color: "oklch(0.3 0.08 145)" }}>
            Ceremonial-grade <em className="italic">matcha</em>, whisked fresh.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-6 text-foreground/70 max-w-md">
            Single-origin Uji matcha, hand-whisked with bamboo chasen and steamed milk.
            Earthy, calm, quietly indulgent.
          </motion.p>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="mt-8 flex flex-wrap gap-3 sm:gap-6">
            {["Iced Latte", "Hot Whisk", "Matcha Float"].map((m) => (
              <div key={m} className="glass rounded-2xl px-5 py-4">
                <div className="font-display text-lg" style={{ color: "oklch(0.3 0.08 145)" }}>{m}</div>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.7, 0, 0.2, 1] }}
          className="relative aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-luxe"
        >
          <img src={matcha} alt="Matcha latte" loading="lazy" className="w-full h-full object-cover" width={1024} height={1024} />
          <motion.div
            className="absolute top-6 right-6 glass rounded-full px-4 py-2 text-xs tracking-widest uppercase"
            animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}
          >
            🍵 Ceremonial Grade
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------- MENU ----------
const menuData: Record<string, { name: string; desc: string; price: string; img: string; veg: boolean; chef?: boolean }[]> = {
  Coffee: [
    { name: "Spanish Latte", desc: "Espresso, condensed milk, steamed milk", price: "₹290", img: heroCoffee, veg: true, chef: true },
    { name: "Cold Brew", desc: "16-hour steeped, bright and smooth", price: "₹280", img: heroCoffee, veg: true },
    { name: "Affogato", desc: "Vanilla gelato drowned in espresso", price: "₹320", img: dessert, veg: true },
  ],
  Breakfast: [
    { name: "Eggs Benedict", desc: "Poached eggs, hollandaise, sourdough", price: "₹420", img: breakfast, veg: false, chef: true },
    { name: "Avocado Toast", desc: "Smashed avo, chilli oil, microgreens", price: "₹380", img: breakfast, veg: true },
    { name: "Butter Croissant", desc: "24-hour fermented, golden flaky", price: "₹180", img: breakfast, veg: true },
  ],
  Pizza: [
    { name: "Margherita Classica", desc: "San Marzano, fior di latte, basil", price: "₹520", img: pizza, veg: true, chef: true },
    { name: "Truffle Mushroom", desc: "Wild mushrooms, truffle oil, taleggio", price: "₹680", img: pizza, veg: true },
  ],
  Pasta: [
    { name: "Carbonara", desc: "Guanciale, pecorino, fresh egg yolk", price: "₹540", img: pasta, veg: false },
    { name: "Aglio e Olio", desc: "Garlic, chilli, parsley, olive oil", price: "₹460", img: pasta, veg: true },
  ],
  Desserts: [
    { name: "Dark Chocolate Sphere", desc: "Hot caramel poured tableside", price: "₹380", img: dessert, veg: true, chef: true },
    { name: "Tiramisu", desc: "Coffee-soaked savoiardi, mascarpone", price: "₹340", img: dessert, veg: true },
  ],
  Matcha: [
    { name: "Iced Matcha Latte", desc: "Uji matcha, oat milk", price: "₹320", img: matcha, veg: true },
    { name: "Matcha Affogato", desc: "Matcha shot over vanilla gelato", price: "₹360", img: matcha, veg: true, chef: true },
  ],
};

function Menu() {
  const tabs = Object.keys(menuData);
  const [active, setActive] = useState(tabs[0]);
  const [query, setQuery] = useState("");

  const items = menuData[active].filter((i) => i.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <section id="menu" className="relative py-16 md:py-32 bg-gradient-warm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>The Menu</SectionEyebrow>
          <motion.h2 {...fadeUp} className="mt-4 font-display text-4xl md:text-6xl text-coffee leading-[1.05]">
            A menu that <em className="italic text-gradient-coffee">honours</em> every craving.
          </motion.h2>
        </div>

        <motion.div {...fadeUp} className="mt-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-2 glass rounded-full px-5 py-3 w-full md:w-80">
            <Search className="w-4 h-4 text-coffee/60" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes…"
              className="bg-transparent text-sm outline-none flex-1 text-coffee placeholder:text-coffee/40"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-all ${
                  active === t ? "bg-gradient-coffee text-cream shadow-soft" : "text-coffee/70 hover:text-coffee"
                }`}
                style={{ fontFamily: "var(--font-ui)" }}
              >
                {t}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-luxe transition-all border border-border/50"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <img src={it.img} alt={it.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={1024} height={1024} />
                {it.chef && (
                  <div className="absolute top-4 left-4 bg-gradient-coffee text-cream text-[10px] tracking-widest uppercase px-3 py-1 rounded-full shadow-soft">
                    ★ Chef's Pick
                  </div>
                )}
                <div className="absolute top-4 right-4 w-7 h-7 rounded-md border-2 flex items-center justify-center bg-cream/90" style={{ borderColor: it.veg ? "#4a8a3a" : "#8a3a3a" }}>
                  <span className="w-3 h-3 rounded-full" style={{ background: it.veg ? "#4a8a3a" : "#8a3a3a" }} />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl text-coffee">{it.name}</h3>
                  <div className="font-display text-lg text-caramel">{it.price}</div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                <button className="magnetic-btn mt-5 w-full rounded-full bg-coffee text-cream text-xs tracking-widest uppercase py-3" style={{ fontFamily: "var(--font-ui)" }}>
                  Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------- BREWING TIMELINE ----------
const brews = [
  { name: "Aeropress", desc: "Clean, full-bodied, 90 seconds", emoji: "🧪" },
  { name: "Pour Over", desc: "Bright, nuanced, V60", emoji: "💧" },
  { name: "French Press", desc: "Rich, robust, 4 minutes", emoji: "☕" },
  { name: "Moka Pot", desc: "Italian stovetop intensity", emoji: "🫖" },
];

function Brewing() {
  return (
    <section className="relative py-16 md:py-32 bg-espresso text-cream overflow-hidden">
      <FloatingBeans count={10} opacity={0.1} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-3 text-xs tracking-[0.4em] uppercase text-caramel">
            <span className="w-8 h-px bg-caramel" />
            Signature Brewing
          </span>
          <motion.h2 {...fadeUp} className="mt-4 font-display text-4xl md:text-6xl leading-[1.05]">
            Slow coffee, the <em className="italic text-caramel">old way</em>.
          </motion.h2>
        </div>

        <div className="mt-10 md:mt-20 relative">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-caramel/30 hidden md:block" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {brews.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ rotateY: 8, rotateX: -4, y: -8 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className="relative group"
              >
                <div className="relative glass-dark rounded-3xl p-5 sm:p-8 text-center">
                  <div className="text-3xl sm:text-5xl mb-3 sm:mb-4">{b.emoji}</div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-coffee text-cream flex items-center justify-center font-display border-4 border-espresso">
                    {i + 1}
                  </div>
                  <h3 className="font-display text-lg sm:text-2xl text-cream mt-2">{b.name}</h3>
                  <p className="mt-2 text-sm text-cream/60">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- REVIEWS ----------
const reviews = [
  { name: "Aanya M.", role: "Regular", text: "The Spanish latte ruined every other café for me. Mokabbi is a love letter to coffee.", stars: 5 },
  { name: "Rohan K.", role: "Visitor", text: "Cosy, warm, and the eggs benedict are perfect. I came once and stayed for hours.", stars: 5 },
  { name: "Sara P.", role: "Local", text: "It feels like a small bistro in Paris dropped into Andheri. My new Sunday ritual.", stars: 5 },
  { name: "Vikram S.", role: "Coffee nerd", text: "Their pour-over is precise. Conversations with the baristas are half the reason I keep coming back.", stars: 5 },
  { name: "Priya R.", role: "Regular", text: "Beautiful interiors, slow service in the best way. Real, considered coffee.", stars: 5 },
];

function Reviews() {
  return (
    <section className="relative py-16 md:py-32 bg-espresso text-cream overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-caramel/10 blur-3xl" />
      <div className="relative">
        <div className="text-center max-w-2xl mx-auto px-6">
          <span className="inline-flex items-center gap-3 text-xs tracking-[0.4em] uppercase text-caramel">
            <span className="w-8 h-px bg-caramel" /> Kind Words
          </span>
          <motion.h2 {...fadeUp} className="mt-4 font-display text-4xl md:text-6xl">
            Loved by our <em className="italic text-caramel">regulars</em>.
          </motion.h2>
        </div>

        <div className="mt-10 md:mt-20 overflow-hidden">
          <div className="flex gap-4 sm:gap-6 animate-marquee" style={{ width: "max-content" }}>
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} className="w-[270px] sm:w-[340px] md:w-[380px] shrink-0 glass-dark rounded-3xl p-5 sm:p-8">
                <div className="text-6xl font-display text-caramel leading-none">"</div>
                <p className="mt-2 text-cream/90 leading-relaxed">{r.text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-coffee flex items-center justify-center font-display text-cream">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-display text-cream">{r.name}</div>
                    <div className="text-xs text-cream/50 tracking-widest uppercase">{r.role}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(r.stars)].map((_, s) => <Star key={s} className="w-3.5 h-3.5 fill-caramel text-caramel" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- GALLERY ----------
function Gallery() {
  const imgs = [
    { src: interior, h: "row-span-2", title: "The space" },
    { src: heroCoffee, h: "", title: "Latte art" },
    { src: breakfast, h: "", title: "Breakfast" },
    { src: brewing, h: "row-span-2", title: "Pour over" },
    { src: dessert, h: "", title: "Desserts" },
    { src: matcha, h: "", title: "Matcha bar" },
    { src: pizza, h: "", title: "Wood-fired" },
    { src: milkshake, h: "", title: "Milkshakes" },
  ];
  return (
    <section id="gallery" className="relative py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>Gallery</SectionEyebrow>
          <motion.h2 {...fadeUp} className="mt-4 font-display text-4xl md:text-6xl text-coffee leading-[1.05]">
            A look <em className="italic text-gradient-coffee">inside</em>.
          </motion.h2>
        </div>

        <div className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[120px] sm:auto-rows-[160px] md:auto-rows-[220px] gap-2 sm:gap-4">
          {imgs.map((im, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-luxe transition-all ${im.h}`}
            >
              <img src={im.src} alt={im.title} loading="lazy" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]" width={1024} height={1024} />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="font-display text-2xl text-cream">{im.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- RESERVATION ----------
function Reservation() {
  return (
    <section id="reserve" className="relative py-16 md:py-32 overflow-hidden bg-gradient-warm">
      <FloatingBeans count={8} opacity={0.1} />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-caramel/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center">
          <SectionEyebrow>Reservation</SectionEyebrow>
          <motion.h2 {...fadeUp} className="mt-4 font-display text-4xl md:text-6xl text-coffee leading-[1.05]">
            Save your <em className="italic text-gradient-coffee">table</em>.
          </motion.h2>
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="mt-4 text-foreground/70">
            Tell us when you're coming — we'll have your seat warm.
          </motion.p>
        </div>

        <motion.form
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          onSubmit={(e) => { e.preventDefault(); alert("Thank you — we'll confirm shortly."); }}
          className="mt-10 glass rounded-3xl p-5 sm:p-8 md:p-10 shadow-luxe space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Name" type="text" />
            <Field label="Phone" type="tel" />
            <Field label="Date" type="date" />
            <Field label="Time" type="time" />
            <Field label="Guests" type="number" />
            <Field label="Email" type="email" />
          </div>
          <Field label="Special requests" type="text" />
          <button type="submit" className="magnetic-btn relative w-full rounded-full bg-gradient-coffee text-cream py-4 text-sm tracking-widest uppercase shadow-soft hover:shadow-luxe transition-shadow overflow-hidden" style={{ fontFamily: "var(--font-ui)" }}>
            <span className="relative z-10">Reserve My Table</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  const [val, setVal] = useState("");
  const [focused, setFocused] = useState(false);
  const float = focused || val.length > 0;
  return (
    <div className="relative">
      <input
        type={type}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full bg-transparent border-b-2 border-coffee/20 focus:border-caramel pt-6 pb-2 text-foreground outline-none transition-colors"
      />
      <label
        className={`absolute left-0 pointer-events-none transition-all duration-300 text-coffee/60 ${
          float ? "top-0 text-xs tracking-widest uppercase text-caramel" : "top-6 text-base"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

// ---------- CONTACT ----------
function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-32 bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-3 text-xs tracking-[0.4em] uppercase text-caramel">
            <span className="w-8 h-px bg-caramel" /> Visit
          </span>
          <motion.h2 {...fadeUp} className="mt-4 font-display text-4xl md:text-6xl leading-[1.05]">
            Find us in <em className="italic text-caramel">Andheri</em>.
          </motion.h2>

          <div className="mt-10 space-y-6">
            {[
              { icon: MapPin, label: "Address", text: "Chakala, Andheri East, Mumbai 400099" },
              { icon: Clock, label: "Hours", text: "Mon — Sun · 7:30 AM to 11:30 PM" },
              { icon: Phone, label: "Phone", text: "+91 98765 43210" },
              { icon: Mail, label: "Email", text: "hello@mokabbi.cafe" },
            ].map((c) => (
              <div key={c.label} className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-coffee flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-cream" />
                </div>
                <div>
                  <div className="text-xs tracking-widest uppercase text-caramel">{c.label}</div>
                  <div className="mt-1 text-cream/90">{c.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/3] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-luxe border border-caramel/20"
        >
          <iframe
            title="Mokabbi map"
            src="https://www.google.com/maps?q=Andheri+East+Mumbai&output=embed"
            className="w-full h-full grayscale contrast-125"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-coffee/20 mix-blend-multiply pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

// ---------- FOOTER ----------
function Footer() {
  return (
    <footer className="relative bg-espresso text-cream pt-14 md:pt-24 pb-10 overflow-hidden border-t border-caramel/15">
      <SteamParticles />
      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-coffee flex items-center justify-center font-display text-xl text-cream">M</div>
            <div>
              <div className="font-display text-2xl">Mokabbi</div>
              <div className="text-xs tracking-[0.3em] uppercase text-cream/50">Cafe & Bistro</div>
            </div>
          </div>
          <p className="mt-6 text-cream/70 max-w-md leading-relaxed">
            Coffee crafted with passion. A warm corner of Andheri East — for slow mornings, long
            conversations and the perfect cup.
          </p>

          <div className="mt-8">
            <div className="text-xs tracking-widest uppercase text-caramel mb-3">Newsletter</div>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 max-w-sm">
              <input type="email" placeholder="your@email.com" className="flex-1 min-w-0 bg-cream/5 border border-cream/15 rounded-full px-4 py-3 text-sm placeholder:text-cream/40 outline-none focus:border-caramel" />
              <button className="magnetic-btn bg-gradient-coffee text-cream rounded-full px-5 text-xs tracking-widest uppercase shrink-0">Join</button>
            </form>
          </div>
        </div>

        <div>
          <div className="text-xs tracking-widest uppercase text-caramel mb-4">Visit</div>
          <ul className="space-y-2 text-cream/70 text-sm">
            <li>Andheri East, Mumbai</li>
            <li>+91 98765 43210</li>
            <li>hello@mokabbi.cafe</li>
            <li>7:30 AM — 11:30 PM</li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-caramel mb-4">Follow</div>
          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter].map((Ico, i) => (
              <a key={i} href="#" className="w-11 h-11 rounded-full glass-dark flex items-center justify-center hover:bg-gradient-coffee transition-colors">
                <Ico className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-16 pt-8 border-t border-cream/10 mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/50">
        <div>© {new Date().getFullYear()} Mokabbi Cafe & Bistro. Brewed in Mumbai.</div>
        <div>Crafted with passion ☕</div>
      </div>
    </footer>
  );
}

// ---------- FLOATING ACTIONS ----------
function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919876543210"
        className="magnetic-btn w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-luxe animate-pulse-glow"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

// ---------- LOADER ----------
function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      onAnimationComplete={() => setDone(true)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso"
    >
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 100 120" className="w-full h-full">
          <defs>
            <clipPath id="loaderCup">
              <path d="M 18 30 L 22 92 Q 24 100 32 100 L 68 100 Q 76 100 78 92 L 82 30 Z" />
            </clipPath>
          </defs>
          <motion.rect
            x="0" y="100" width="100" height="80" fill="#D4A373" clipPath="url(#loaderCup)"
            initial={{ y: 100 }} animate={{ y: 30 }} transition={{ duration: 1.4, ease: "easeInOut" }}
          />
          <path d="M 18 30 L 22 92 Q 24 100 32 100 L 68 100 Q 76 100 78 92 L 82 30 Z" stroke="#FAF6F2" strokeWidth="2" fill="none" />
          <path d="M 78 42 Q 94 42 94 60 Q 94 78 78 78" stroke="#FAF6F2" strokeWidth="2" fill="none" />
        </svg>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.5 }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-display text-cream text-xl tracking-[0.4em]"
        >
          MOKABBI
        </motion.div>
      </div>
    </motion.div>
  );
}

function Home() {
  return (
    <main className="relative bg-background text-foreground">
      <Loader />
      <Hero />
      <Marquee />
      <About />
      <WhyUs />
      <Categories />
      <CoffeeShowcase />
      <MatchaSection />
      <Menu />
      <Brewing />
      <Reviews />
      <Gallery />
      <Reservation />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
