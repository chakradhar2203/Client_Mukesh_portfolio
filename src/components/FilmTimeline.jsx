import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { films, upcoming } from '../data/films';

const genreColors = {
  Comedy: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
  Drama: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
  Thriller: 'text-red-400 border-red-400/30 bg-red-400/10',
  Romance: 'text-pink-400 border-pink-400/30 bg-pink-400/10',
};

function FilmCard({ film, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [playing, setPlaying] = useState(false);

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex gap-8 md:gap-16 items-start">
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-5 h-5 rounded-full bg-orange-500 border-4 border-[#0f0f0f] z-10 shadow-[0_0_20px_rgba(249,115,22,0.6)]"
        />
        {index < films.length - 1 && (
          <div className="w-px flex-1 min-h-[120px] mt-2 timeline-line" />
        )}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 + index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex-1 glass-card rounded-2xl overflow-hidden mb-16 group hover:border-orange-500/20 transition-all duration-500"
      >
        {/* Card header */}
        <div className="p-6 pb-4 border-b border-white/5">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-orange-500 font-black text-sm">#{String(index + 1).padStart(2, '0')}</span>
                <span className={`text-xs px-3 py-1 rounded-full border font-semibold tracking-[1px] uppercase ${genreColors[film.genre] || 'text-white/40 border-white/10 bg-white/5'}`}>
                  {film.genre}
                </span>
              </div>
              <h3 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tight group-hover:text-orange-400 transition-colors duration-300">
                {film.title}
              </h3>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-white/30 text-xs tracking-[3px] uppercase">{film.year}</span>
              <span className="text-orange-500/60 text-xs mt-1">
                ▶ Starts at {film.startTime}
              </span>
            </div>
          </div>
          <p className="text-white/55 font-light text-sm leading-relaxed mt-3">{film.description}</p>
        </div>

        {/* YouTube embed */}
        <div className="p-5 bg-black/30">
          {playing ? (
            <div className="youtube-embed">
              <iframe
                src={`https://www.youtube.com/embed/${film.videoId}?start=${film.startSeconds}&autoplay=1&rel=0&modestbranding=1`}
                title={film.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div
              className="relative rounded-xl overflow-hidden cursor-pointer group/thumb aspect-video bg-black/60 flex items-center justify-center"
              onClick={() => setPlaying(true)}
            >
              {/* Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${film.videoId}/maxresdefault.jpg`}
                alt={film.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover/thumb:opacity-90 transition-opacity duration-300"
                onError={(e) => {
                  e.currentTarget.src = `https://img.youtube.com/vi/${film.videoId}/hqdefault.jpg`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Play button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.6)] transition-shadow duration-300 group-hover/thumb:shadow-[0_0_60px_rgba(249,115,22,0.8)]"
              >
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
              {/* Start time badge */}
              <div className="absolute bottom-3 right-3 z-10 bg-black/80 text-orange-400 text-xs font-bold px-3 py-1 rounded-full border border-orange-500/30">
                Starts at {film.startTime}
              </div>
              {/* Watch label */}
              <div className="absolute bottom-3 left-3 z-10 text-white/50 text-xs tracking-[2px] uppercase">
                Click to Watch
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function FilmTimeline() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });
  const upcomingRef = useRef(null);
  const upcomingInView = useInView(upcomingRef, { once: true, margin: '-80px' });

  return (
    <section id="films" className="relative py-32 overflow-hidden bg-[#080808]">
      {/* Decorative glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-tag"
          >
            Filmography
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black uppercase text-white leading-none"
          >
            Short Film{' '}
            <span className="text-gradient">Timeline</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 mt-4 text-sm tracking-[2px] uppercase"
          >
            From first frame to now — a cinematic journey
          </motion.p>
        </div>

        {/* Films List */}
        <div>
          {films.map((film, index) => (
            <FilmCard key={film.id} film={film} index={index} />
          ))}
        </div>

        {/* Upcoming Works */}
        <div ref={upcomingRef} className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={upcomingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="section-tag">What's Next</span>
            <h3 className="text-3xl font-black uppercase text-white">
              Upcoming <span className="text-gradient">Works</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcoming.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={upcomingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="glass-card rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-400 group"
              >
                <div className="flex items-start gap-5">
                  <div className="text-4xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-orange-500 text-xs font-bold tracking-[3px] uppercase border border-orange-500/30 px-2 py-0.5 rounded-full">
                        {item.status}
                      </span>
                    </div>
                    <h4 className="text-white font-black text-xl group-hover:text-orange-400 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-white/50 text-sm font-light mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                {/* Animated indicator */}
                <div className="flex items-center gap-2 mt-6">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-orange-400/60 text-xs tracking-[2px] uppercase">In Development</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
