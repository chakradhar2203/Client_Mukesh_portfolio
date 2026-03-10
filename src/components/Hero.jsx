import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:block overflow-hidden"
    >
      {/* ── DESKTOP: Full-screen cinematic background ─────── */}
      <div className="hidden md:block absolute inset-0 z-0">
        <img
          src="/Images/Img_1.png"
          alt="Mukesh Actor"
          className="w-full h-full object-cover object-top"
        />
        {/* Cinematic overlays — desktop only */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.03] bg-repeat mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px',
          }}
        />
      </div>

      {/* ── MOBILE: Visible portrait image at top ─────────── */}
      <div className="md:hidden relative w-full flex-shrink-0" style={{ height: '55vw', minHeight: 240, maxHeight: 380 }}>
        <img
          src="/Images/Img_1.png"
          alt="Mukesh Actor"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 20%' }}
        />
        {/* Very subtle bottom fade only — keeps face fully visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
        {/* Pre-title tag floated on image */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <div className="w-6 h-px bg-orange-500" />
          <span className="text-orange-400 font-bold text-[10px] tracking-[4px] uppercase">
            Short Film Performer
          </span>
        </div>
      </div>

      {/* ── Cinematic letter-box bars ─────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-orange-500/40 z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-orange-500/40 z-20" />

      {/* ── DESKTOP Content ───────────────────────────────── */}
      <div className="hidden md:flex relative z-10 flex-1 items-center max-w-7xl mx-auto w-full px-6 pt-24 pb-16 min-h-screen">
        <div className="max-w-2xl">
          {/* Pre-title tag */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-px bg-orange-500" />
            <span className="text-orange-500 font-bold text-xs tracking-[5px] uppercase">
              Short Film Performer
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-black uppercase leading-none mb-2"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)', letterSpacing: '-1px' }}
          >
            <span className="text-white">Muk</span>
            <span className="text-gradient">esh</span>
          </motion.h1>

          {/* Location */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="flex items-center gap-2 mb-4"
          >
            <svg className="w-3.5 h-3.5 text-orange-500/70" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="text-white/40 font-light text-sm tracking-[3px] uppercase">
              Tirupati, Andhra Pradesh
            </span>
          </motion.div>

          {/* Sub-title */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex items-center gap-4 mb-10"
          >
            <span className="text-white/40 font-light text-xl tracking-[6px] uppercase">Actor</span>
            <div className="w-px h-6 bg-white/20" />
            <span className="text-orange-500/70 font-light text-sm tracking-[4px] uppercase">Cinema &amp; Theatre</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="text-white/60 font-light text-lg leading-relaxed max-w-md mb-12"
          >
            I bring characters to life through{' '}
            <span className="text-white font-medium">emotion</span>,{' '}
            <span className="text-white font-medium">realism</span>, and{' '}
            <span className="text-white font-medium">storytelling</span> — because{' '}
            every frame I step into is a story worth telling.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="flex flex-wrap gap-4"
          >
            <button onClick={() => handleScroll('#films')} className="btn-primary">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              Watch Films
            </button>
            <button onClick={() => handleScroll('#contact')} className="btn-secondary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
            className="flex gap-10 mt-16 pt-10 border-t border-white/10"
          >
            {[
              { number: '4+', label: 'Short Films' },
              { number: '3+', label: 'Production Houses' },
              { number: '3+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-orange-500">{stat.number}</div>
                <div className="text-xs text-white/40 tracking-[2px] uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── MOBILE: Text block below the image ────────────── */}
      <div className="md:hidden relative z-10 flex-1 bg-[#0f0f0f] px-5 pt-6 pb-14">
        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="font-black uppercase leading-none mb-1"
          style={{ fontSize: 'clamp(2.8rem, 14vw, 4.5rem)', letterSpacing: '-1px' }}
        >
          <span className="text-white">Muk</span>
          <span className="text-gradient">esh</span>
        </motion.h1>

        {/* Location */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="flex items-center gap-1.5 mb-3"
        >
          <svg className="w-3 h-3 text-orange-500/70 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span className="text-white/40 text-xs tracking-[2px] uppercase">Tirupati, Andhra Pradesh</span>
        </motion.div>

        {/* Actor / Cinema badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="flex items-center gap-3 mb-5"
        >
          <span className="text-white/50 text-sm tracking-[4px] uppercase">Actor</span>
          <div className="w-px h-4 bg-white/20" />
          <span className="text-orange-500/70 text-xs tracking-[3px] uppercase">Cinema &amp; Theatre</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-white/55 text-sm leading-relaxed mb-7"
        >
          I bring characters to life through{' '}
          <span className="text-white font-semibold">emotion</span>,{' '}
          <span className="text-white font-semibold">realism</span>, and{' '}
          <span className="text-white font-semibold">storytelling</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex gap-3 mb-8"
        >
          <button onClick={() => handleScroll('#films')} className="btn-primary flex-1 justify-center text-xs py-3">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            Watch Films
          </button>
          <button onClick={() => handleScroll('#contact')} className="btn-secondary flex-1 justify-center text-xs py-3">
            Contact
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="flex gap-6 pt-6 border-t border-white/10"
        >
          {[
            { number: '4+', label: 'Short Films' },
            { number: '3+', label: 'Prod. Houses' },
            { number: '3+', label: 'Yrs Exp.' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-black text-orange-500">{stat.number}</div>
              <div className="text-[10px] text-white/40 tracking-[1px] uppercase mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] tracking-[4px] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-orange-500/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
