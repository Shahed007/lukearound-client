"use client";
import Image from "next/image";
import React, { useState } from "react";
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

const SuccessStoryCard: React.FC<{
  story: SuccessStory;
  isActive: boolean;
}> = ({ story, isActive }) => {
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
        rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
        overflow-hidden
        ${isActive ? "ring-2 ring-slate-800" : ""}
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
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="py-20 bg-gray-50">
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {successStories.map((story, index) => (
            <SuccessStoryCard
              key={story.id}
              story={story}
              isActive={index === activeIndex}
            />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-3">
          {successStories.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${
                  index === activeIndex
                    ? "bg-slate-800 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }
              `}
              aria-label={`Go to story ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
