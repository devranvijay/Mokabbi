import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export function CoffeeCup() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-200, 200], [12, -12]), { stiffness: 80, damping: 18 });
  const ry = useSpring(useTransform(mx, [-200, 200], [-12, 12]), { stiffness: 80, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX - window.innerWidth / 2);
      my.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <motion.div
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", perspective: 1000 }}
      className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px]"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full blur-3xl opacity-60 bg-gradient-coffee animate-pulse-glow" />

      {/* Steam */}
      <div className="absolute left-1/2 top-[5%] -translate-x-1/2 flex gap-3 pointer-events-none">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block w-3 h-24 rounded-full bg-white/40 blur-md animate-steam"
            style={{ animationDelay: `${i * 0.8}s` }}
          />
        ))}
      </div>

      {/* Cup SVG */}
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full drop-shadow-[0_30px_60px_rgba(91,58,41,0.5)]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="cupGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FAF6F2" />
            <stop offset="100%" stopColor="#D4A373" />
          </linearGradient>
          <linearGradient id="coffeeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8B5E3C" />
            <stop offset="100%" stopColor="#3B2418" />
          </linearGradient>
          <radialGradient id="foamGrad" cx="0.5" cy="0.4">
            <stop offset="0%" stopColor="#FFF8EE" />
            <stop offset="100%" stopColor="#E8D3B5" />
          </radialGradient>
        </defs>

        {/* Saucer */}
        <ellipse cx="200" cy="330" rx="160" ry="22" fill="#5B3A29" opacity="0.85" />
        <ellipse cx="200" cy="325" rx="155" ry="18" fill="url(#cupGrad)" />

        {/* Handle */}
        <path d="M 305 200 Q 365 200 365 235 Q 365 270 305 270" stroke="url(#cupGrad)" strokeWidth="16" fill="none" strokeLinecap="round" />
        <path d="M 305 210 Q 350 210 350 235 Q 350 260 305 260" stroke="#5B3A29" strokeWidth="3" fill="none" opacity="0.3" />

        {/* Cup body */}
        <path d="M 70 180 L 90 305 Q 95 320 110 320 L 290 320 Q 305 320 310 305 L 330 180 Z" fill="url(#cupGrad)" />
        <path d="M 70 180 L 90 305 Q 95 320 110 320 L 290 320 Q 305 320 310 305 L 330 180 Z" fill="none" stroke="#5B3A29" strokeWidth="1.5" opacity="0.4" />

        {/* Coffee surface */}
        <ellipse cx="200" cy="180" rx="130" ry="22" fill="url(#coffeeGrad)" />
        <motion.ellipse
          cx="200" cy="180" rx="115" ry="14" fill="url(#foamGrad)"
          animate={{ rx: [115, 118, 115], ry: [14, 12, 14] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Latte art leaf */}
        <path d="M 200 168 Q 175 175 200 195 Q 225 175 200 168 Z M 200 172 L 200 192" stroke="#5B3A29" strokeWidth="1.2" fill="none" opacity="0.5" />
      </motion.svg>

      {/* Orbiting beans */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-4 h-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 18 + i * 3, repeat: Infinity, ease: "linear" }}
          style={{ originX: 0.5, originY: 0.5 }}
        >
          <div
            style={{
              transform: `translate(${180 + i * 8}px, 0) rotate(${i * 72}deg)`,
            }}
            className="w-4 h-6 rounded-full bg-gradient-to-b from-[#5B3A29] to-[#1E1A18] shadow-md relative"
          >
            <div className="absolute inset-0 m-auto w-[1px] h-4 bg-[#1E1A18] opacity-60" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
