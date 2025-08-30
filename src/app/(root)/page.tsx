import MarqueeFlow from "@/components/marquee/Marquee";
import CandidateSection from "@/components/pages/Candidate/CandidateSection";
import ClientSection from "@/components/pages/Client/Client-Section";
import { ContactForm } from "@/components/pages/contact-from/ContactPage";
import Hero from "@/components/pages/home/Hero";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <MarqueeFlow />
      <ClientSection />
      <CandidateSection />
      <ContactForm />
    </div>
  );
}
