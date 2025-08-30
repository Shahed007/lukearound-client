export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 mt-6 mb-3">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Our proven methodology ensures perfect matches through a comprehensive, data-driven approach
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Discovery & Analysis Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <circle cx="32" cy="32" r="28" fill="#1e40af" />
                <path d="M32 8 L32 32 L50 40 A28 28 0 0 0 32 8" fill="#ef4444" />
                <path d="M32 32 L14 24 A28 28 0 0 0 32 60 L32 32" fill="#64748b" />
              </svg>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Discovery & Analysis</h3>

          <p className="text-gray-600 text-center mb-6 leading-relaxed">
            Deep dive into company culture, role requirements, and candidate aspirations
          </p>

          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Comprehensive needs assessment</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Cultural fit evaluation</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Skills gap analysis</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Market research</span>
            </li>
          </ul>
        </div>

        {/* Talent Sourcing Card */}
        <div className="bg-slate-800 rounded-2xl p-8 text-white hover:shadow-lg transition-shadow">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <g fill="#ef4444">
                  <circle cx="32" cy="20" r="6" />
                  <circle cx="20" cy="35" r="5" />
                  <circle cx="44" cy="35" r="5" />
                  <path d="M32 28 L20 42 L44 42 Z" opacity="0.7" />
                </g>
                <g stroke="#ef4444" strokeWidth="2" fill="none">
                  <path d="M32 26 L20 30" />
                  <path d="M32 26 L44 30" />
                  <path d="M20 40 L44 40" />
                </g>
              </svg>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-center">Talent Sourcing</h3>

          <p className="text-slate-300 text-center mb-6 leading-relaxed">
            Leverage our extensive network and advanced tools to identify top candidates
          </p>

          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-slate-200">Global talent network access</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-slate-200">AI-powered candidate matching</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-slate-200">Passive candidate engagement</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-slate-200">Diversity-focused sourcing</span>
            </li>
          </ul>
        </div>

        {/* Vetting & Placement Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <path
                  d="M20 35 L30 40 L50 25"
                  stroke="#ef4444"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 40 Q15 35 20 35 L45 35 Q50 35 50 40 L50 50 Q50 55 45 55 L20 55 Q15 55 15 50 Z"
                  fill="#1e40af"
                  opacity="0.1"
                  stroke="#1e40af"
                  strokeWidth="2"
                />
                <circle cx="32" cy="20" r="8" fill="#ef4444" opacity="0.2" stroke="#ef4444" strokeWidth="2" />
              </svg>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Vetting & Placement</h3>

          <p className="text-gray-600 text-center mb-6 leading-relaxed">
            Rigorous screening process followed by seamless onboarding support
          </p>

          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Multi-stage interviews</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Technical assessments</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Reference verification</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-700">Onboarding assistance</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
