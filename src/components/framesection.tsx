"use client";

export default function FramesSection() {
  const images = [
    "/frame11.jpeg",
    "/frame2.jpeg",
    "/frame10.jpeg",
    "/frame4.jpeg",
    "/frame5.jpeg",
    "/frame6.jpeg",
    "/frame7.jpeg",
    "/frame8.jpeg",
  ];

  return (
    <section className="py-32 px-8 md:px-16 bg-[#EAE4D7]">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Text + Hero Image */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="aspect-[4/5] border border-[#8B7355]/20 overflow-hidden rounded-2xl order-2 lg:order-1">
            <img
              src="/frame3.jpeg"
              alt="Frames & Prints Hero"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#8B7355] text-2xl">🖼️</span>
              <span
                className="text-xs tracking-[0.3em] text-[#8B7355]"
                style={{ fontFamily: "'Tenor Sans', sans-serif" }}
              >
                FRAMES & PRINT
              </span>
            </div>

            <h2
              className="text-5xl md:text-6xl mb-8 leading-tight font-light"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              Quality Meets
              <br />
              <span className="italic">Speed</span>
            </h2>

            <div className="w-16 h-[1px] bg-[#8B7355] mb-8" />

            <p
              className="text-lg leading-relaxed text-[#4A3F2E] mb-6"
              style={{ fontFamily: "'Tenor Sans', sans-serif" }}
            >
              When quality and speed are the words, no one does it better than us. Our clients just keep coming back.
            </p>
          </div>
        </div>

        {/* Grid of Frames */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {images.map((img, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
            >
              <img
                src={img}
                alt={`Frame ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
