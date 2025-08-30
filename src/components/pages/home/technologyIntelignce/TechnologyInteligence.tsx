import React from "react";
import Image from "next/image";

import LinkedIn from "@/assets/technology-logo/LinkedInLogo.png";
import jungle from "@/assets/technology-logo/jungleLogo.png";
import chatGPT from "@/assets/technology-logo/ChatGPTLogo.png";
import vqnnq from "@/assets/technology-logo/VONQLogo.png";
import lusha from "@/assets/technology-logo/LushaLogo.png";
import cnava from "@/assets/technology-logo/CanvaLogo.png";
import linkedInRecru from "@/assets/technology-logo/LinkedInRecruiterLogo.png";
import clay from "@/assets/technology-logo/ClayLogo.png";
import cord from "@/assets/technology-logo/CordLogo.png";
import dripify from "@/assets/technology-logo/DripifyLogo.png";
import teamtailor from "@/assets/technology-logo/TeamtailorLogo.png";
import testGorilla from "@/assets/technology-logo/TestGorillaLogo.png";

export default function TechnologyIntelligence() {
  const services = [
    "Talent & Competitor market insights – live salary trends, location hotspots, role demand",
    "Strategic hiring plans – built around your business goals and funding stage",
    "Outbound - Passive candidate pipeline system",
    "Inbound - Social & Ad campaigns to create attention to your opportunities",
    "DE&I data – to shape inclusive hiring and reporting with intention",
  ];

  const companyLogos = [
    { name: "LinkedIn", logo: LinkedIn },
    { name: "Welcome to the Jungle", logo: jungle },
    { name: "ChatGPT", logo: chatGPT },
    { name: "Vonq", logo: vqnnq },
    { name: "LinkedIn Recruiter", logo: linkedInRecru },
    { name: "Canva", logo: cnava },
    { name: "Hive", logo: cord },
    { name: "Clay", logo: clay },
    { name: "Dripify", logo: dripify },
    { name: "Teamtailor", logo: teamtailor },
    { name: "TestGorilla", logo: testGorilla },
    { name: "Lusha", logo: lusha },
  ];

  return (
    <section className="bg-slate-800 text-white py-16 px-6 mb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Technology & Intelligence
              </h1>
              <p className="text-lg text-slate-300">
                Real-time insights. Smarter hiring decisions.
              </p>
            </div>

            <div className="bg-white text-slate-900 p-8 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-6">What we provide:</h2>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm leading-relaxed">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-800">
              Book A Call
            </button>
          </div>

          {/* Right Content - Company Logos Grid */}
          <div className="grid grid-cols-2 gap-4">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-lg flex items-center justify-center h-20 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
