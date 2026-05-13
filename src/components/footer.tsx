import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";

// Custom SVG icons for social platforms
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#1A150D] px-8 md:px-16 pt-20 pb-10">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Tenor+Sans&display=swap");
      `}</style>
      <div className="max-w-[1800px] mx-auto">

        {/* Top row */}
        <div className="grid md:grid-cols-3 gap-12 pb-16 border-b border-white/10">

          {/* Brand */}
          <div>
            <h3
              className="text-3xl font-light text-[#F5F1E8] mb-4"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              LeBold <span className="italic">Studios</span>
            </h3>
            <p
              className="text-[#F5F1E8]/40 text-sm leading-relaxed mb-8"
              style={{ fontFamily: "'Tenor Sans', sans-serif" }}
            >
              Crafting timeless imagery since 2013. Based in Uyo, serving Nigeria and beyond.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 flex-wrap">
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/leboldstudios/",
                  icon: <InstagramIcon />,
                  hoverColor: "hover:border-[#E1306C] hover:text-[#E1306C]",
                },
                {
                  label: "Facebook",
                  href: "https://facebook.com/Leboldstudios",
                  icon: <FacebookIcon />,
                  hoverColor: "hover:border-[#1877F2] hover:text-[#1877F2]",
                },
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/@leboldstudios8292",
                  icon: <YouTubeIcon />,
                  hoverColor: "hover:border-[#FF0000] hover:text-[#FF0000]",
                },
                {
                  label: "WhatsApp",
                  href: "https://wa.me/2347064876480",
                  icon: <WhatsAppIcon />,
                  hoverColor: "hover:border-[#25D366] hover:text-[#25D366]",
                },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className={`w-11 h-11 border border-white/10 flex items-center justify-center text-[#F5F1E8]/40 ${s.hoverColor} transition-all duration-300 rounded-sm`}
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p
              className="text-xs tracking-[0.25em] text-[#8B7355] mb-6"
              style={{ fontFamily: "'Tenor Sans', sans-serif" }}
            >
              OUR SERVICES
            </p>
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
                  <a
                    href={item.href}
                    className="text-sm text-[#F5F1E8]/40 hover:text-[#8B7355] transition-colors duration-300 tracking-wide flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#8B7355] transition-all duration-300 overflow-hidden" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs tracking-[0.25em] text-[#8B7355] mb-6"
              style={{ fontFamily: "'Tenor Sans', sans-serif" }}
            >
              GET IN TOUCH
            </p>
            <ul
              className="space-y-5 text-sm text-[#F5F1E8]/40"
              style={{ fontFamily: "'Tenor Sans', sans-serif" }}
            >
              <li>
                <a
                  href="mailto:Leboldafrica@gmail.com"
                  className="flex items-start gap-3 hover:text-[#8B7355] transition-colors duration-300 group"
                >
                  <Mail
                    size={15}
                    className="mt-0.5 shrink-0 text-[#8B7355]/60 group-hover:text-[#8B7355] transition-colors"
                  />
                  Leboldafrica@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2347064876480"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-[#8B7355] transition-colors duration-300 group"
                >
                  <Phone
                    size={15}
                    className="mt-0.5 shrink-0 text-[#8B7355]/60 group-hover:text-[#8B7355] transition-colors"
                  />
                  +234 706 487 6480
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="mt-0.5 shrink-0 text-[#8B7355]/60"
                />
                <span className="leading-relaxed">
                  Udobio Street, Uyo<br />Akwa Ibom State, Nigeria
                </span>
              </li>
            </ul>

            <a
              href="https://maps.google.com/?q=Udobio+Street,+Uyo,+Akwa+Ibom,+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-7 text-xs tracking-[0.2em] text-[#8B7355] hover:text-[#C4A882] transition-colors duration-300 group"
              style={{ fontFamily: "'Tenor Sans', sans-serif" }}
            >
              <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              VIEW ON GOOGLE MAPS
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p
            className="text-[#F5F1E8]/20 text-xs tracking-[0.3em]"
            style={{ fontFamily: "'Tenor Sans', sans-serif" }}
          >
            © {new Date().getFullYear()} LEBOLD STUDIOS — ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-6" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            <Link
              href="/#booking"
              className="text-xs tracking-[0.2em] text-[#F5F1E8]/20 hover:text-[#8B7355] transition-colors duration-300"
            >
              BOOK NOW
            </Link>
            <a
              href="mailto:Leboldafrica@gmail.com"
              className="text-xs tracking-[0.2em] text-[#F5F1E8]/20 hover:text-[#8B7355] transition-colors duration-300"
            >
              EMAIL US
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;