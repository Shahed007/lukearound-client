"use client"

import { useState, useEffect } from "react"

const opportunities = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Soup Inc",
    location: "Remote",
    timeAgo: "Posted 2 days ago",
    salary: "$120k - $150k",
    description: "Lead development of scalable web applications in a fast-growing fintech startup.",
    skills: ["React", "Node.js", "AWS"],
    buttonText: "Apply Now",
    buttonStyle: "bg-slate-800 hover:bg-slate-900 text-white",
  },
  {
    id: 2,
    title: "Product Manager", 
    company: "Innovate Labs",
    location: "Hybrid",
    timeAgo: "Posted 1 week ago",
    salary: "$100k - $130k",
    description: "Drive product strategy and roadmap for AI-powered healthcare solutions.",
    skills: ["Strategy", "Analytics", "Agile"],
    buttonText: "Apply Now",
    buttonStyle: "bg-orange-500 hover:bg-orange-600 text-white",
    featured: true,
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Design Studio",
    location: "On-site", 
    timeAgo: "Posted 3 days ago",
    salary: "$80k - $110k",
    description: "Create intuitive user experiences for enterprise software solutions.",
    skills: ["Figma", "Research", "Prototyping"],
    buttonText: "Apply Now",
    buttonStyle: "bg-slate-800 hover:bg-slate-900 text-white",
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Meta",
    location: "Remote",
    timeAgo: "Posted 4 days ago",
    salary: "$110k - $140k",
    description: "Build cutting-edge user interfaces for billions of users worldwide.",
    skills: ["React", "TypeScript", "GraphQL"],
    buttonText: "Apply Now",
    buttonStyle: "bg-slate-800 hover:bg-slate-900 text-white",
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "Netflix",
    location: "Hybrid",
    timeAgo: "Posted 5 days ago",
    salary: "$130k - $160k",
    description: "Analyze user behavior and optimize content recommendation algorithms.",
    skills: ["Python", "ML", "Statistics"],
    buttonText: "Apply Now",
    buttonStyle: "bg-slate-800 hover:bg-slate-900 text-white",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "Amazon",
    location: "On-site",
    timeAgo: "Posted 1 week ago",
    salary: "$115k - $145k",
    description: "Scale infrastructure and improve deployment processes for AWS services.",
    skills: ["AWS", "Docker", "Kubernetes"],
    buttonText: "Apply Now",
    buttonStyle: "bg-slate-800 hover:bg-slate-900 text-white",
  },
]

export default function LiveOpportunities() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = Math.ceil(opportunities.length / 3)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [totalSlides])

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
//   }

//   const getVisibleOpportunities = () => {
//     const startIndex = currentSlide * 3
//     return opportunities.slice(startIndex, startIndex + 3)
//   }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Live Opportunities</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore current openings with our partner companies across various industries
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-3 gap-6 px-4">
                {opportunities.slice(slideIndex * 3, slideIndex * 3 + 3).map((opportunity) => (
                  <div
                    key={opportunity.id}
                    className={`rounded-2xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col ${
                      opportunity.featured 
                        ? "bg-slate-800 text-white shadow-lg" 
                        : "bg-white border border-gray-200 shadow-sm"
                    }`}
                  >
                    {/* Header with badges */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          opportunity.featured 
                            ? "bg-slate-700 text-slate-200 border border-slate-600" 
                            : "bg-slate-800 text-white"
                        }`}
                      >
                        {opportunity.location.split(' - ')[1] || opportunity.location}
                      </span>
                      <span 
                        className={`text-sm ${
                          opportunity.featured ? "text-slate-300" : "text-gray-500"
                        }`}
                      >
                        {opportunity.timeAgo}
                      </span>
                    </div>

                    {/* Job Title */}
                    <h3 className={`text-2xl font-bold mb-2 ${
                      opportunity.featured ? "text-white" : "text-slate-900"
                    }`}>
                      {opportunity.title}
                    </h3>

                    {/* Company and Salary */}
                    <div className={`text-lg mb-6 ${
                      opportunity.featured ? "text-slate-200" : "text-slate-700"
                    }`}>
                      <div className="font-semibold">{opportunity.company}</div>
                      <div className={`text-base ${
                        opportunity.featured ? "text-slate-300" : "text-gray-600"
                      }`}>
                        {opportunity.salary}
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`text-base mb-6 leading-relaxed ${
                      opportunity.featured ? "text-slate-200" : "text-gray-600"
                    }`}>
                      {opportunity.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-6 flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {opportunity.skills.map((skill, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-lg text-sm ${
                              opportunity.featured 
                                ? "bg-slate-700 text-slate-200" 
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            • {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="mt-auto">
                      <button
                      className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 ${opportunity.buttonStyle}`}
                      >
                      {opportunity.buttonText}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Dots Only */}
      <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-slate-800" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
      </div>
    </section>
  )
}