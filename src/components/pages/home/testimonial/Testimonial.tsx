"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Image from "next/image"
import { motion, Variants } from "framer-motion"

import image1 from "@/assets/testimonial/Image1.png"
import image2 from "@/assets/testimonial/Image2.png"
import image3 from "@/assets/testimonial/Image3.png"

const testimonials = [
  {
    id: 1,
    name: "Michael Rodriguez",
    title: "CTO, Tec Flow Solutions",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words don't look even slightly believable.",
    avatar: image1,
  },
  {
    id: 2,
    name: "Jennifer Park",
    title: "VP HR, Innovate Now",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatar: image2,
  },
  {
    id: 3,
    name: "David Kim",
    title: "Founder, Startup Lab",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    avatar: image3,
  },
  {
    id: 4,
    name: "Sofia Martinez",
    title: "Product Manager, Bright Future Inc.",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    avatar: image2,
  },
  {
    id: 5,
    name: "Liam Johnson",
    title: "CEO, NextGen Tech",
    content:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.",
    avatar: image3,
  },
  {
    id: 6,
    name: "Emma Wilson",
    title: "Head of Marketing, Creative Minds",
    content:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    avatar: image1,
  },
  {
    id: 7,
    name: "Noah Smith",
    title: "Lead Developer, CodeCrafters",
    content:
      "There are countless variations of Lorem Ipsum passages, all generated randomly, ensuring the text is never the same twice.",
    avatar: image3,
  },
  {
    id: 8,
    name: "Olivia Brown",
    title: "UX Designer, Pixel Perfect",
    content:
      "Using Lorem Ipsum helps to focus on the design elements rather than the content itself.",
    avatar: image2,
  },
  {
    id: 9,
    name: "Ethan Davis",
    title: "CTO, CloudWorks",
    content:
      "Lorem Ipsum has been used for centuries, providing a filler text that helps designers visualize layouts.",
    avatar: image1,
  },
  {
    id: 10,
    name: "Ava Lee",
    title: "HR Manager, Global Ventures",
    content:
      "Even though it looks like readable English, Lorem Ipsum is actually scrambled Latin, making it perfect for placeholder text.",
    avatar: image3,
  },
]

// Type-safe Framer Motion Variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }, // cubic-bezier equivalent of easeOut
  },
}

export default function TestimonialsCarousel() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 mt-20 mb-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        <p className="text-lg text-gray-600 max-w-6xl mx-auto">
          Don&#39;t just take our word for it. Here&#39;s what our partners have to say about working with us.
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet testimonial-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active testimonial-bullet-active",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative h-full"
              >
                {/* Main testimonial card */}
                <div className="bg-slate-800 rounded-2xl p-8 pb-12 text-white relative h-full min-h-[380px] shadow-lg">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-white/90 leading-relaxed mb-6">{testimonial.content}</p>

                  {/* Name and title */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-white/70 text-sm">{testimonial.title}</p>
                  </div>

                  {/* Quote mark */}
                  <div className="absolute bottom-4 right-6 text-white/20">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                {/* Profile image positioned outside the card */}
                <div className="relative bottom-10 left-8 mb-4">
                  <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        
        .testimonial-bullet {
          width: 12px !important;
          height: 12px !important;
          background: #cbd5e1 !important;
          opacity: 1 !important;
          margin: 0 4px !important;
          border-radius: 9999px !important;
          transition: all 0.3s ease-in-out;
        }
        
        .testimonial-bullet-active {
          background: #1e293b !important;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  )
}
