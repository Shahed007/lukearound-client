import Image from "next/image"

export default function EmployerBrandingSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/professional-woman.png"
              alt="Professional woman holding coffee cup"
              width={500}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">Employer Branding</h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            We don&apos;t just hire, we build companies. We deliver all-in-one talent acquisition solutions to help early
            stage companies achieve hiring success in a sustainable way...
            <span className="text-blue-600 cursor-pointer hover:underline">Read More</span>
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">What we provide:</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">Proof, answers, and urgency that turn consideration into a &quot;yes.&quot;</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">Assets that sell your workplace to potential hires.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">Internal marketing that turns candidates into applicants.</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
              Book A Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
