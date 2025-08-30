"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import image1 from "@/assets/success/1.jpg";
import image2 from "@/assets/success/2.jpg";
import image3 from "@/assets/success/3.jpg";

import type { StaticImageData } from "next/image";

interface SuccessStory {
  id: number;
  name: string;
  title: string;
  image: string | StaticImageData;
  skills: string[];
  description: string;
  cardStyle: "light" | "dark" | "gray";
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    name: "Alex Thompson",
    title: "Senior Software Engineer",
    image: image1,
    skills: ["React", "Node.js", "AWS"],
    description: "Placed at TechCorp with 40% salary increase",
    cardStyle: "light",
  },
  {
    id: 2,
    name: "Maria Garcia",
    title: "Product Manager",
    image: image2,
    skills: ["Strategy", "Analytics", "Agile"],
    description: "Transitioned to fintech leadership role",
    cardStyle: "dark",
  },
  {
    id: 3,
    name: "James Wilson",
    title: "UX Designer",
    image: image3,
    skills: ["Figma", "Research", "Prototyping"],
    description: "Joined unicorn startup as Design Lead",
    cardStyle: "gray",
  },
];

const SuccessStoryCard: React.FC<{ story: SuccessStory }> = ({ story }) => {
  const cardClasses = {
    light: "bg-white border border-gray-200 text-slate-900",
    dark: "bg-slate-800 text-white",
    gray: "bg-gray-100 border border-gray-200 text-slate-900",
  };

  const descriptionClasses = {
    light: "text-gray-700",
    dark: "text-slate-300",
    gray: "text-gray-700",
  };

  return (
    <div
      className={`
        ${cardClasses[story.cardStyle]} 
        rounded-2xl transition-all duration-300
        overflow-hidden
      `}
    >
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={story.image}
          alt={story.name}
          fill
          className="object-cover rounded-2xl px-2 pt-2"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-bold mb-1">{story.name}</h3>
          <p
            className={`text-sm font-medium ${
              story.cardStyle === "dark" ? "text-slate-300" : "text-gray-500"
            }`}
          >
            {story.title}
          </p>
        </div>

        {/* Skills */}
        <ul className="list-disc pl-5 space-y-1 text-sm">
          {story.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        {/* Description */}
        <p className={`text-sm ${descriptionClasses[story.cardStyle]}`}>
          {story.description}
        </p>
      </div>
    </div>
  );
};

const SuccessStories: React.FC = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Our Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore current openings with our partner companies across various
            industries
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // Use custom pagination container
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {successStories.map((story) => (
            <SwiperSlide key={story.id}>
              <SuccessStoryCard story={story} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="custom-pagination flex justify-center mt-6"></div>
      </div>
    </section>
  );
};

export default SuccessStories;
