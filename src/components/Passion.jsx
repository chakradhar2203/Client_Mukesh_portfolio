import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Passion() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="passion" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 cinema-gradient" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-orange-500/6 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[600px]">
              <img
                src="/Images/Img_3.jpeg"
                alt="Mukesh - Passion for Cinema"
                className="w-full h-full object-cover"
                style={{ objectPosition: '35% center' }}
              />
              {/* Orange frame accent */}
              <div className="absolute inset-0 ring-1 ring-orange-500/20 rounded-2xl" />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-orange-500/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-orange-500/30 rounded-full -z-10" />

            {/* Floating badge */}
            <motion.div
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-5 border border-orange-500/20"
            >
              <div className="text-4xl mb-1">🎭</div>
              <div className="text-white font-bold text-sm">Actor</div>
              <div className="text-orange-500/60 text-xs tracking-[2px] uppercase">& Storyteller</div>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-tag"
            >
              What Drives Him
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-black uppercase leading-none mb-4 text-white"
            >
              Passion for{' '}
              <span className="text-gradient">Cinema</span>
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: 60 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-[3px] bg-gradient-to-r from-orange-500 to-amber-500 mb-10 rounded-full"
            />

            <div className="space-y-6">
              {[
                {
                  icon: '❤️',
                  text: 'I believe acting is more than performance — it is storytelling that connects hearts and stirs real emotions.',
                },
                {
                  icon: '🌟',
                  text: 'Every role I play is an opportunity to explore new perspectives and bring characters to life authentically.',
                },
                {
                  icon: '🎬',
                  text: 'My dream is to keep growing in cinema and create performances that inspire audiences for years to come.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.15 }}
                  className="flex gap-5 items-start group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xl group-hover:bg-orange-500/20 group-hover:border-orange-500/40 transition-all duration-300">
                    {item.icon}
                  </div>
                  <p className="text-white/65 font-light text-lg leading-relaxed pt-2">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-12 pt-10 border-t border-white/8"
            >
              <div className="flex items-center gap-6">
                <a
                  href="https://www.instagram.com/dampuri_mukesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  Follow on Instagram
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
