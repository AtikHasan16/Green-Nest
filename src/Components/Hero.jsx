import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const Hero = () => {
  return (
    <div>
      <Swiper
        loop={true}
        speed={3000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero-bg-1 text-white text-center pt-30 md:pt-80 pb-10  space-y-6 poppins bg-cover ">
            <h1 className="text-6xl font-bold font-bebas">
              "Mist Me Softly: Embrace the Shade."
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold">Maidenhair Fern</h2>
            <p className="w-8/12 mx-auto overflow-hidden md:text-xl">
              This is perhaps the most delicate and graceful of the common
              ferns. Its most striking feature is its airy, almost circular
              fan-shaped fronds that are a vivid light green, held aloft by
              thin, black, wiry stems. Unlike many rugged ferns, the Maidenhair
              demands a gentle environment, mimicking the sheltered, humid space
              of a rainforest understory. It’s perfect for adding a touch of
              fragile elegance to a shaded corner or a terrarium. To keep it
              happy, ensure it receives consistently moist soil and bright,
              indirect light—direct sun will quickly scorch its tender leaves.
              High humidity is key to preventing the fronds from crisping up.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-bg-2 text-white text-center pt-30 md:pt-80 pb-10  space-y-6 poppins bg-cover ">
            <h1 className="text-6xl font-bold font-bebas">
              "Filtered Light, Forest Floor Delight."
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold">
              Wood Sorrel (Oxalis acetosella)
            </h2>
            <p className="w-8/12 mx-auto overflow-hidden md:text-xl">
              Often mistaken for clover due to its three heart-shaped leaflets,
              the Wood Sorrel is a charming inhabitant of the forest floor. It
              has a magical quality: its leaves exhibit nyctinasty, meaning they
              fold up at dusk or when stressed by touch, rain, or strong sun. It
              features small, delicate flowers, usually white or pale pink,
              which add brightness to the gloom of the woods. This plant prefers
              moist, humus-rich soil and deep shade. It's an excellent,
              low-growing ground cover that offers fine texture and a subtle,
              whimsical motion to your nature display.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-bg-3 text-white text-center pt-30 md:pt-80 pb-10   space-y-6 poppins bg-cover ">
            <h1 className="text-6xl font-bold font-bebas">
              "Keep Me Damp: The Art of Stillness."
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold">Moss (Bryophyta)</h2>
            <p className="w-8/12 mx-auto overflow-hidden md:text-xl">
              Moss is the quintessential forest texture—a dense, emerald-green,
              velvety carpet. This non-vascular plant has no true roots,
              absorbing everything it needs directly through its tiny leaves,
              which is why it must be kept consistently moist. Moss thrives in
              conditions where other plants struggle: deep shade, high moisture,
              and still air. It symbolizes resilience and peace, creating
              miniature landscapes and lending an ancient, tranquil feel. It’s
              ideal for use as a living mulch or in closed terrariums where the
              humidity can be easily maintained.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-bg-4 text-white text-center pt-30 md:pt-80 pb-10 space-y-6 poppins bg-cover ">
            <h1 className="text-6xl font-bold font-bebas">
              "Leafy Layers: A Tapestry of Shade."
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold">
              Hosta (Hosta spp.)
            </h2>
            <p className="w-8/12 mx-auto overflow-hidden md:text-xl">
              The Hosta is the champion of shade gardens, beloved primarily for
              its bold, architectural foliage. While it does produce flowers,
              its true star quality lies in the leaves, which come in a
              spectacular array of sizes, shapes, colors, and textures—from deep
              blue-green and wrinkled to variegated with creamy white or yellow
              edges. It provides essential structure and mass to a shaded area.
              While tough, Hostas need rich, well-draining soil and consistently
              moist conditions to develop their impressive size and color. They
              make a statement as a focal point or a beautiful border.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
