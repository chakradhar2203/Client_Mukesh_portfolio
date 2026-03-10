import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080808] border-t border-white/5 overflow-hidden">
      {/* Cinematic top bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 w-[400px] h-[200px] bg-orange-500/5 rounded-full blur-[80px] -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col leading-none mb-4">
                <span className="text-white font-black text-3xl tracking-widest uppercase">
                  M<span className="text-orange-500">U</span>KESH
                </span>
                <span className="text-orange-500/50 font-light text-[10px] tracking-[6px] uppercase mt-1">
                  Actor Portfolio
                </span>
              </div>
              <p className="text-white/35 text-sm font-light leading-relaxed max-w-xs">
                Bringing characters to life through emotion, realism, and storytelling.
              </p>
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white/60 font-bold text-xs tracking-[4px] uppercase mb-6">Navigation</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Films', href: '#films' },
                { label: 'Passion', href: '#passion' },
                { label: 'Media', href: '#media' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/40 hover:text-orange-500 font-medium text-xs tracking-[2px] uppercase transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white/60 font-bold text-xs tracking-[4px] uppercase mb-6">Get In Touch</h4>
            <div className="space-y-3 mb-6">
              <a
                href="tel:+919652947318"
                className="flex items-center gap-3 text-white/40 hover:text-white text-sm font-light transition-colors duration-300 group"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-orange-500/20 flex items-center justify-center transition-all duration-300">
                  📞
                </span>
                +91 96529 47318
              </a>
              <a
                href="mailto:dampurinirmaladnirmala@gmail.com"
                className="flex items-center gap-3 text-white/40 hover:text-white text-sm font-light transition-colors duration-300 group"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-orange-500/20 flex items-center justify-center transition-all duration-300">
                  ✉️
                </span>
                dampurinirmaladnirmala@gmail.com
              </a>
            </div>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/dampuri_mukesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 text-pink-400 hover:bg-pink-500/10 hover:border-pink-500/60 transition-all duration-300 text-xs font-semibold tracking-[2px] uppercase"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @dampuri_mukesh
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs tracking-[2px] font-light">
            © {year} Mukesh. All rights reserved.
          </p>
          <p className="text-white/15 text-xs tracking-[1px]">
            Made with ❤️ for Cinema
          </p>
        </div>
      </div>

      {/* Bottom cinematic bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
    </footer>
  );
}
