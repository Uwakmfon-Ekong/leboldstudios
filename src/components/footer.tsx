const Footer = () => {
  return (
   <footer className="bg-[#1A150D] px-8 md:px-16 pt-20 pb-10">
        <div className="max-w-[1800px] mx-auto">
          {/* Top row */}
          <div className="grid md:grid-cols-3 gap-12 pb-16 border-b border-white/10">
            {/* Brand */}
            <div>
              <h3 className="text-3xl font-light text-[#F5F1E8] mb-4" style={{ fontFamily: "'Cormorant', serif" }}>
                LeBold <span className="italic">Studios</span>
              </h3>
              <p className="text-[#F5F1E8]/40 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                Crafting timeless imagery since 2013. Based in Uyo, serving Nigeria and beyond.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-4 flex-wrap">
                {[
                  { label: "Instagram", handle: "@leboldstudios", href: "https://www.instagram.com/leboldstudios/", abbr: "IG" },
                  { label: "Facebook", handle: "LeBold Studios", href: "https://facebook.com/Leboldstudios", abbr: "FB" },
                  { label: "YouTube", handle: "@leboldstudios", href: "https://www.youtube.com/@leboldstudios8292", abbr: "YT" },
                  { label: "WhatsApp", handle: "+234 706 487 6480", href: "https://wa.me/2347064876480", abbr: "WA" },
                ].map((s) => (
                  <a
                    key={s.abbr}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 border border-white/10 flex items-center justify-center text-[10px] tracking-widest text-[#F5F1E8]/40 hover:border-[#8B7355] hover:text-[#8B7355] transition-all duration-300"
                    style={{ fontFamily: "'Tenor Sans', sans-serif" }}
                  >
                    {s.abbr}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="text-xs tracking-[0.25em] text-[#8B7355] mb-6" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>OUR SERVICES</p>
              <ul className="space-y-3" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                {[
                  { label: "Wedding Photography", href: "/wedding-gallery" },
                  { label: "Studio Shoot", href: "/studio-gallery" },
                  { label: "Frames & Prints", href: "/frames-gallery" },
                  { label: "Photography Training", href: "/#booking" },
                  { label: "Drone Services", href: "/#booking" },
                  { label: "Recording Studio", href: "/audio-gallery" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm text-[#F5F1E8]/40 hover:text-[#8B7355] transition-colors duration-300 tracking-wide">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs tracking-[0.25em] text-[#8B7355] mb-6" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>GET IN TOUCH</p>
              <ul className="space-y-4 text-sm text-[#F5F1E8]/40" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                <li>
                  <a href="mailto:Leboldafrica@gmail.com" className="hover:text-[#8B7355] transition-colors duration-300">
                    Leboldafrica@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/2347064876480" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B7355] transition-colors duration-300">
                    +234 706 487 6480
                  </a>
                </li>
                <li className="leading-relaxed">
                  Udobio Street, Uyo<br />Akwa Ibom State, Nigeria
                </li>
              </ul>
              <a
                href="https://maps.google.com/?q=Udobio+Street,+Uyo,+Akwa+Ibom,+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-xs tracking-[0.2em] text-[#8B7355] hover:text-[#C4A882] transition-colors duration-300"
                style={{ fontFamily: "'Tenor Sans', sans-serif" }}
              >
                VIEW ON GOOGLE MAPS →
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
            <p className="text-[#F5F1E8]/20 text-xs tracking-[0.3em]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              © {new Date().getFullYear()} LEBOLD STUDIOS — ALL RIGHTS RESERVED
            </p>
            <div className="flex gap-6" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              <a href="/#booking" className="text-xs tracking-[0.2em] text-[#F5F1E8]/20 hover:text-[#8B7355] transition-colors duration-300">BOOK NOW</a>
              <a href="mailto:Leboldafrica@gmail.com" className="text-xs tracking-[0.2em] text-[#F5F1E8]/20 hover:text-[#8B7355] transition-colors duration-300">EMAIL US</a>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;