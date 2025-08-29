import React from "react";
import Marquee from "react-fast-marquee";
import image1 from "@/assets/marquee/brand-1.png";
import image2 from "@/assets/marquee/brand-2.png";
import image3 from "@/assets/marquee/brand-3.png";
import image4 from "@/assets/marquee/brand-4.png";
import image5 from "@/assets/marquee/brand-5.png";
import image6 from "@/assets/marquee/brand-6.png";
import Image, { StaticImageData } from "next/image";

const marqueeList: StaticImageData[] = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];

const MarqueeFlow = () => {
  return (
    <div className=" linear-background-marquee">
      <Marquee>
        {marqueeList.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center"
            style={{
              height: "120px",
              width: "203px",
              marginRight: "20px", // space between logos
            }}
          >
            <Image
              src={item}
              alt={`image of ${idx}`}
              width={120}
              height={203}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeFlow;
