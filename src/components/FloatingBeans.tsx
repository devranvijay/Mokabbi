import { motion } from "motion/react";
import { useMemo } from "react";

export function FloatingBeans({ count = 14, opacity = 0.18 }: { count?: number; opacity?: number }) {
  const beans = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 10 + Math.random() * 22,
        dur: 14 + Math.random() * 18,
        delay: Math.random() * 6,
        rot: Math.random() * 360,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {beans.map((b) => (
        <motion.div
          key={b.id}
          className="absolute"
          style={{ left: `${b.x}%`, top: `${b.y}%`, opacity }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            rotate: [b.rot, b.rot + 360],
          }}
          transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
        >
          <svg width={b.size} height={b.size * 1.4} viewBox="0 0 24 32">
            <ellipse cx="12" cy="16" rx="10" ry="15" fill="#5B3A29" />
            <path d="M 12 2 Q 8 16 12 30" stroke="#1E1A18" strokeWidth="1.4" fill="none" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export function SteamParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute bottom-0 rounded-full bg-white/30 blur-xl"
          style={{
            left: `${(i * 6) % 100}%`,
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
          }}
          animate={{ y: [0, -800], opacity: [0, 0.4, 0] }}
          transition={{
            duration: 10 + Math.random() * 8,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
