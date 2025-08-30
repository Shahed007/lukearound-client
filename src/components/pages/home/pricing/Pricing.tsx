import React from "react"
import { Check } from "lucide-react"

export default function PricingSection() {
  const plans = [
    {
      name: "Head Hunting",
      description: "For large organizations",
      price: "15%",
      priceDescription: "First Annual Salary",
      role: "Client",
      features: ["Volume discounts", "6-month replacement guarantee", "Dedicated team", "24/7 support"],
      buttonText: "Book Now",
      featured: false,
    },
    {
      name: "Talent as a service",
      description: "For large organizations",
      price: "Custom",
      priceDescription: "First Annual Salary",
      role: "Client",
      features: ["Volume discounts", "6-month replacement guarantee", "Dedicated team", "24/7 support"],
      buttonText: "Book Now",
      featured: true,
    },
    {
      name: "Exclusive contract",
      description: "For large organizations",
      price: "20%",
      priceDescription: "First Annual Salary",
      role: "Client",
      features: ["Volume discounts", "6-month replacement guarantee", "Dedicated team", "24/7 support"],
      buttonText: "Book Now",
      featured: false,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Choose the plan that fits your hiring needs. No hidden fees, no surprises.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-8 flex flex-col h-full ${
              plan.featured
                ? "bg-slate-800 text-white shadow-2xl scale-105"
                : "bg-white text-gray-900 shadow-lg border border-gray-200"
            }`}
          >
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    plan.featured ? "bg-white/20 text-white" : "bg-slate-800 text-white"
                  }`}
                >
                  Role: {plan.role}
                </span>
              </div>
              <p className={`text-sm ${plan.featured ? "text-gray-300" : "text-gray-600"}`}>{plan.description}</p>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="text-4xl font-bold mb-2">{plan.price}</div>
              <p className={`text-sm ${plan.featured ? "text-gray-300" : "text-gray-600"}`}>{plan.priceDescription}</p>
            </div>

            {/* Features */}
            <div className="mb-8 space-y-4 flex-grow">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-3">
                  <div
                    className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.featured ? "bg-white/20" : "bg-green-100"
                    }`}
                  >
                    <Check className={`w-3 h-3 ${plan.featured ? "text-white" : "text-green-600"}`} />
                  </div>
                  <span className={`text-sm ${plan.featured ? "text-gray-200" : "text-gray-700"}`}>{feature}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors mt-auto ${
                plan.featured
                  ? "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}