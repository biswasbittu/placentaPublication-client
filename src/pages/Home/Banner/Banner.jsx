import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const slides = [
  {
    id: 1,
    img: "https://i.ibb.co/wf6Dbyp/banner1.jpg",
    title: "প্লাসেন্টা পাবলিকেশন এ আপনাকে স্বাগতম",
    desc: "Unlock your potential with expert life coaching.",
  },
  {
    id: 2,
    img: "https://i.ibb.co/3mYWM7P1/Gemini-Generated-Image-fjgqvqfjgqvqfjgq.jpg",
    title: "Achieve Your Goals",
    desc: "Step-by-step guidance to reach your dreams.",
  },
  {
    id: 3,
    img: "https://i.ibb.co/jkXqVRQg/b3.jpg",
    title: "Build Confidence",
    desc: "Develop a strong mindset and confidence.",
  },
  {
    id: 4,
    img: "https://i.ibb.co/9mWJ8L2S/b4.jpg",
    title: "Success Mindset",
    desc: "Train your mind for long-term success.",
  },
  {
    id: 5,
    img: "https://i.ibb.co/d462rx6d/b5.jpg",
    title: "Start Today",
    desc: "Take action and change your life now.",
  },
];

export default function BannerSlider() {
  return (
    <div className="relative group ">

      {/* LEFT ARROW */}
      <div className="swiper-prev absolute left-6 top-1/2 z-20 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="backdrop-blur-md bg-white/30 p-3 rounded-full cursor-pointer hover:scale-110 hover:bg-green-600 hover:text-white transition">
          <FiArrowLeft size={22} />
        </div>
      </div>

      {/* RIGHT ARROW */}
      <div className="swiper-next absolute right-6 top-1/2 z-20 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="backdrop-blur-md bg-white/30 p-3 rounded-full cursor-pointer hover:scale-110 hover:bg-green-600 hover:text-white transition">
          <FiArrowRight size={22} />
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        effect="fade"
        loop={true}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        className="h-[90vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[90vh] flex items-center overflow-hidden">

              {/* Background Image with Zoom Animation */}
              <motion.div
                key={slide.id + "bg"}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 4 }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${slide.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative max-w-7xl mx-auto px-5 w-full">
                <div className="max-w-xl text-white">

                  {/* STAGGER ANIMATION */}
                  <motion.h1
                    key={slide.id}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl  font-bold leading-tight"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    key={slide.id + "p"}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mt-5 text-lg text-gray-200"
                  >
                    {slide.desc}
                  </motion.p>

                  <motion.div
                    key={slide.id + "btn"}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="mt-8 flex gap-4"
                  >
                    <button className="btn bg-green-600 border-none text-white hover:bg-green-700 rounded-full px-6">
                      Get Started
                    </button>

                    <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black rounded-full px-6">
                      Learn More
                    </button>
                  </motion.div>

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}