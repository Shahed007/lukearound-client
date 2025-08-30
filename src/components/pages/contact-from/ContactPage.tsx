"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react"
import Image from "next/image"
import image from "@/assets/contact-image.png"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    industry: "",
    yourAge: "",
    growthForecast: "",
    projectTimeline: "",
    needs: [] as string[],
    message: "",
  })

  const [openSelect, setOpenSelect] = useState<string | null>(null)

  const handleNeedsChange = (need: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      needs: checked ? [...prev.needs, need] : prev.needs.filter((n) => n !== need),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const CustomSelect = ({
    value,
    onChange,
    placeholder,
    options,
    name,
  }: {
    value: string
    onChange: (value: string) => void
    placeholder: string
    options: { value: string; label: string }[]
    name: string
  }) => {
    const isOpen = openSelect === name

    return (
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpenSelect(isOpen ? null : name)}
          className="w-full mt-1 px-3 py-2 bg-[#082B47] border border-[#D2D1D1] text-[#D2D1D1] placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2D1D1] flex items-center justify-between"
        >
          <span className={value ? "text-[#D2D1D1]" : "text-[#D2D1D1]"}>
            {value ? options.find((opt) => opt.value === value)?.label : placeholder}
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-[#082B47] text-[#D2D1D1] border border-gray-300 rounded-md shadow-lg">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value)
                  setOpenSelect(null)
                }}
                className="w-full px-3 py-2 text-left bg-[#082B47] border-[#D2D1D1] text-[#D2D1D1] hover:bg-blue-950 first:rounded-t-md last:rounded-b-md cursor-pointer"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto w-full rounded-2xl overflow-hidden space-y-5 mb-20 py-5 mt-20">
      <div className="grid lg:grid-cols-2 min-h-[700px]">
        {/* Left Side - Contact Info */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md">
            <div className="mb-8">
              <Image
                src={image}
                alt="Contact illustration"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4 text-balance">Ready to Transform Your Hiring?</h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Get in touch with our team to discuss your talent needs or explore career opportunities.
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-900 font-medium">123 Business District, San Francisco, CA 94105</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <p className="text-gray-900">+1 (555) 123-4567</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <p className="text-gray-900">hello@talentforge.com</p>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <p className="text-gray-900">Mon-Fri: 9AM-6PM PST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-[#082B47] p-4 lg:p-6 rounded-2xl shadow-md ">
          <div className="max-w-full mx-auto">
            <h2 className="text-2xl font-bold text-white mb-2">Send us a message</h2>
            <p className="text-white mb-8">We&#39;ll get back to you within 24 hours</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-white text-md font-bold mb-1">
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                    className="w-full px-3 py-2 bg-[#082B47] border border-[#D2D1D1] text-[#D2D1D1] placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2D1D1]"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-white text-md font-bold mb-1">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                    className="w-full px-3 py-2 bg-[#082B47] border border-[#D2D1D1] text-[#D2D1D1] placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2D1D1]"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white text-md font-bold mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 bg-[#082B47] border border-[#D2D1D1] text-[#D2D1D1] placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2D1D1]"
                  placeholder="john@example.com"
                />
              </div>

              {/* Industry */}
              <div>
                <label className="block text-white text-md font-bold mb-3">Industry</label>
                <CustomSelect
                  name="industry"
                  value={formData.industry}
                  onChange={(value) => setFormData((prev) => ({ ...prev, industry: value }))}
                  placeholder="Your Industry name"
                  options={[
                    { value: "technology", label: "Technology" },
                    { value: "healthcare", label: "Healthcare" },
                    { value: "finance", label: "Finance" },
                    { value: "retail", label: "Retail" },
                    { value: "manufacturing", label: "Manufacturing" },
                    { value: "other", label: "Other" },
                  ]}
                />
              </div>

              <div>
                <label className="block text-white text-md font-bold mb-3">Your goals</label>
                <div className="space-y-3">
                  <CustomSelect
                    name="yourAge"
                    value={formData.yourAge}
                    onChange={(value) => setFormData((prev) => ({ ...prev, yourAge: value }))}
                    placeholder="Your age"
                    options={[
                      { value: "18-25", label: "18-25" },
                      { value: "26-35", label: "26-35" },
                      { value: "36-45", label: "36-45" },
                      { value: "46-55", label: "46-55" },
                      { value: "55+", label: "55+" },
                    ]}
                  />

                  <CustomSelect
                    name="growthForecast"
                    value={formData.growthForecast}
                    onChange={(value) => setFormData((prev) => ({ ...prev, growthForecast: value }))}
                    placeholder="Growth Forecast"
                    options={[
                      { value: "rapid", label: "Rapid Growth" },
                      { value: "steady", label: "Steady Growth" },
                      { value: "moderate", label: "Moderate Growth" },
                      { value: "stable", label: "Stable" },
                    ]}
                  />

                  <CustomSelect
                    name="projectTimeline"
                    value={formData.projectTimeline}
                    onChange={(value) => setFormData((prev) => ({ ...prev, projectTimeline: value }))}
                    placeholder="Project Timeline"
                    options={[
                      { value: "immediate", label: "Immediate (1-3 months)" },
                      { value: "short", label: "Short term (3-6 months)" },
                      { value: "medium", label: "Medium term (6-12 months)" },
                      { value: "long", label: "Long term (12+ months)" },
                    ]}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-md font-bold mb-3">Your needs</label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      id="growing-speed"
                      type="checkbox"
                      checked={formData.needs.includes("growing-speed")}
                      onChange={(e) => handleNeedsChange("growing-speed", e.target.checked)}
                      className="w-4 h-4 bg-[#082B47] border border-[#D2D1D1] text-[#D2D1D1] placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-[#D2D1D1]"
                    />
                    <label htmlFor="growing-speed" className="text-white text-sm">
                      We&#39;re growing at speed / need people
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      id="talent-function"
                      type="checkbox"
                      checked={formData.needs.includes("talent-function")}
                      onChange={(e) => handleNeedsChange("talent-function", e.target.checked)}
                      className="w-4 h-4 bg-[#082B47] border border-[#D2D1D1] text-[#D2D1D1] placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-[#D2D1D1]"
                    />
                    <label htmlFor="talent-function" className="text-white text-sm">
                      We need to build a talent function
                    </label>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full px-3 py-2 bg-[#082B47] border border-[#D2D1D1] text-[#D2D1D1] placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D2D1D1] min-h-[80px] resize-vertical"
                  placeholder="Write message..."
                />
              </div>

              <button
                type="submit"
                className="w-xs bg-[#EBEBEB] text-[#] font-medium py-3 rounded-lg transition-colors cursor-pointer"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
