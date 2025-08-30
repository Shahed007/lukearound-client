import MarqueeFlow from "@/components/marquee/Marquee";
import CandidateSection from "@/components/pages/Candidate/CandidateSection";
import ClientSection from "@/components/pages/Client/Client-Section";
import Hero from "@/components/pages/home/Hero";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <MarqueeFlow />
      <ClientSection/>
      <CandidateSection/>
    </div>
  );
}
