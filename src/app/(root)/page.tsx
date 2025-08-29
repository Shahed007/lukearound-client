import MarqueeFlow from "@/components/marquee/Marquee";
import Hero from "@/components/pages/home/Hero";
import WhatWeAre from "@/components/pages/home/whatWeAre/WhatWeAre";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <MarqueeFlow />
      <WhatWeAre />
    </div>
  );
}
