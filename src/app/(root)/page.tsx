import MarqueeFlow from "@/components/marquee/Marquee";
import ClientSection from "@/components/pages/Client/Client-Section";
import Hero from "@/components/pages/home/Hero";


export default function Home() {
  return (
    <div className="">
      <Hero />
      <MarqueeFlow />
      <ClientSection/>
    </div>
  );
}
