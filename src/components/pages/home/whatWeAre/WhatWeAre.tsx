import image1 from "@/assets/whatWeare/image-1.png";
import image2 from "@/assets/whatWeare/image-2.png";
import EllipsisText from "@/components/elipsisText/ElipsisText";
import Image from "next/image";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const WhatWeAre = () => {
  return (
    <section className="py-[100px] bg-main-background">
      <div
        style={{
          columnGap: 174,
        }}
        className="custom-container  grid   grid-cols-2"
      >
        <div className="flex-1">
          <div>
            <h2 className="font-bold mb-[18px] text-[40px] text-dark-text text-left">
              What we are?
            </h2>
            <div className="w-full">
              <Image className="w-full" src={image1} alt="image 1" />
            </div>
            <EllipsisText
              charLimit={140}
              text="We don’t just hire, we build companies. We deliver all-in-one talent acquisition solutions to help early stage companies achieve hiring success in a sustainable way"
            />
          </div>
        </div>
        <div></div>

        <div></div>
        <div className="flex-1 relative">
          <div className="flex flex-col p-[22px] gap-4 rounded-[10px] border-[0.5px]  border-paragraph/30 bg-white shadow absolute top-[50%] -left-[45%]">
            <h2 className="text-2xl  font-semibold text-background">
              What you get:
            </h2>
            <ul>
              <li className="text-[15px] text-paragraph flex items-center gap-[5px]">
                <IoMdCheckmarkCircleOutline />
                <span>Embedded, not external – we act like your own team</span>
              </li>
              <li className="text-[15px] text-paragraph flex items-center gap-[5px]">
                <IoMdCheckmarkCircleOutline />
                <span>
                  Talent experts who understand startup speed and scale
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-[18px] text-[40px] text-dark-text text-right">
              Our Capabilities
            </h2>
            <div className="w-full">
              <Image className="w-full" src={image1} alt="image 1" />
            </div>
            <EllipsisText
              charLimit={140}
              text="We don’t just hire, we build companies. We deliver all-in-one talent acquisition solutions to help early stage companies achieve hiring success in a sustainable way"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeAre;
