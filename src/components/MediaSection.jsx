import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const mediaHouses = [
  {
    name: 'Right Times',
    icon: '📺',
    description: 'Collaborated on compelling short-form content that resonates with modern audiences.',
    color: 'from-blue-500/20 to-blue-600/5',
    borderColor: 'border-blue-500/20 hover:border-blue-500/50',
    accentColor: 'text-blue-400',
  },
  {
    name: 'Liya Sunshine Media',
    icon: '☀️',
    description: 'Worked on vibrant productions that blend emotion, creativity, and authentic storytelling.',
    color: 'from-yellow-500/20 to-yellow-600/5',
    borderColor: 'border-yellow-500/20 hover:border-yellow-500/50',
    accentColor: 'text-yellow-400',
  },
  {
    name: 'Dreambox Productions',
    icon: '🎬',
    description: 'Partnered to bring dream-like cinematic narratives to life with profound impact.',
    color: 'from-orange-500/20 to-orange-600/5',
    borderColor: 'border-orange-500/20 hover:border-orange-500/50',
    accentColor: 'text-orange-400',
  },
];

export default function MediaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="media" className="relative py-32 overflow-hidden bg-[#080808]" ref={ref}>
      <div className="absolute top-0 left-1/2 w-[600px] h-[300px] bg-orange-500/5 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-tag"
          >
            Professional Credits
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black uppercase text-white leading-none"
          >
            Production Houses{' '}
            <span className="text-gradient">&amp; Media</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 mt-4 max-w-xl mx-auto text-sm leading-relaxed"
          >
            Mukesh has collaborated with leading regional production houses and media companies to deliver exceptional performances.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {mediaHouses.map((house, i) => (
            <motion.div
              key={house.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12 }}
              className={`media-card glass-card rounded-2xl p-8 border ${house.borderColor} transition-all duration-400 relative overflow-hidden group`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${house.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-6">{house.icon}</div>

                {/* House number */}
                <div className={`text-xs font-bold tracking-[3px] uppercase ${house.accentColor} mb-2`}>
                  #{String(i + 1).padStart(2, '0')} Production House
                </div>

                {/* Name */}
                <h3 className="text-white font-black text-2xl leading-tight mb-4 group-hover:text-white transition-colors duration-300">
                  {house.name}
                </h3>

                {/* Description */}
                <p className="text-white/50 font-light text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                  {house.description}
                </p>

                {/* Bottom accent */}
                <div className={`mt-8 pt-6 border-t border-white/5 flex items-center gap-2`}>
                  <span className={`w-2 h-2 rounded-full ${house.accentColor.replace('text-', 'bg-')}`} />
                  <span className={`text-xs tracking-[2px] uppercase font-semibold ${house.accentColor}`}>
                    Collaborated
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 glass-card rounded-2xl p-8 border border-white/5 text-center"
        >
          <p className="text-white/40 text-sm tracking-[2px] uppercase font-medium">
            Open for collaborations with new production houses &amp; media companies
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block mt-4 text-orange-500 font-bold text-sm tracking-[2px] uppercase hover:text-orange-400 transition-colors duration-300"
          >
            Get in Touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
