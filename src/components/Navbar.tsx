import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Coffee", href: "#coffee" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 200], [0, 18]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
        style={{ backdropFilter: scrolled ? `blur(${blur.get()}px)` : "none" }}
      >
        <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "glass rounded-full shadow-soft py-3 px-6" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 20, scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-gradient-coffee flex items-center justify-center text-cream font-display text-lg shadow-soft"
            >
              M
            </motion.div>
            <div className="leading-tight">
              <div className="font-display text-lg text-coffee">Mokabbi</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Cafe & Bistro</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="story-link text-sm text-foreground/80 hover:text-coffee transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#reserve"
            className="magnetic-btn hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-coffee px-5 py-2.5 text-sm font-medium text-cream"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Reserve Table
          </a>

          <button
            className="md:hidden relative z-[60] p-2 rounded-full text-coffee hover:bg-coffee/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{ background: "oklch(0.97 0.012 75 / 0.97)", backdropFilter: "blur(24px) saturate(160%)" }}
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-7 px-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.7, 0, 0.2, 1] }}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-4xl text-coffee hover:text-caramel transition-colors tracking-tight"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#reserve"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.07, duration: 0.4, ease: [0.7, 0, 0.2, 1] }}
                onClick={() => setMobileOpen(false)}
                className="mt-6 magnetic-btn inline-flex items-center gap-2 rounded-full bg-gradient-coffee px-8 py-3.5 text-sm font-medium text-cream shadow-soft"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Reserve Table
              </motion.a>
            </div>

            <div className="pb-10 text-center text-xs tracking-widest uppercase text-coffee/40">
              Mokabbi · Andheri East
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
