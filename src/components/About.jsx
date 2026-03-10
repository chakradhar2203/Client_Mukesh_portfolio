import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <div className="absolute inset-0 cinema-gradient" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0}
              className="section-tag"
            >
              The Story Behind
            </motion.span>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={1}
              className="text-5xl md:text-6xl font-black uppercase leading-none mb-4 text-white"
            >
              About{' '}
              <span className="text-gradient">Mukesh</span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={2}
              className="section-divider"
            />

            <div className="space-y-5">
              {[
                'I am a passionate actor who has performed in several short films across different genres over the past 3+ years.',
                'My performances capture authentic emotions and realistic storytelling that connect deeply with audiences.',
                'I continue to grow as an artist while exploring new opportunities in cinema and theatre.',
              ].map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={3 + i}
                  className="text-white/65 font-light text-lg leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Traits */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={6}
              className="flex flex-wrap gap-3 mt-10"
            >
              {['Method Acting', 'Emotional Depth', 'Character Study', 'Theatre', 'Short Films'].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 border border-orange-500/30 text-orange-400 text-xs font-semibold tracking-[2px] uppercase rounded-sm hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Statement card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={4}
            className="relative"
          >
            {/* Portrait Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[520px]">
              <img
                src="/Images/Img_2.jpeg"
                alt="Mukesh – Actor"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {/* Quote overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/90 text-base font-light leading-relaxed italic mb-3">
                  "Every character I portray carries a piece of truth — a slice of life that my audience can feel and connect with deeply."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-orange-500" />
                  <span className="text-orange-400 text-xs tracking-[3px] uppercase font-bold">Mukesh</span>
                </div>
              </div>
            </div>

            {/* Floating sticker */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-orange-500 flex flex-col items-center justify-center shadow-2xl shadow-orange-500/40"
            >
              <span className="text-white font-black text-xl leading-none">3+</span>
              <span className="text-white/80 text-[9px] tracking-[1px] uppercase font-medium text-center leading-tight mt-0.5">Years<br/>Acting</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
