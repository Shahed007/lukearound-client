"use client";

import image1 from "@/assets/whatWeare/image-1.png";
import image2 from "@/assets/whatWeare/image-2.png";
import EllipsisText from "@/components/elipsisText/ElipsisText";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const WhatWeAre = () => {
  return (
    <section className="py-[60px] md:py-[100px] bg-main-background">
      <div className="custom-container">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* What we are section */}
          <div className="mb-12">
            <h2 className="font-bold mb-[18px] text-[32px] md:text-[40px] text-dark-text text-center md:text-left">
              What we are?
            </h2>
            <div className="w-full mb-4">
              <Image className="w-full" src={image1} alt="image 1" />
            </div>
            <EllipsisText
              charLimit={140}
              text="We don't just hire, we build companies. We deliver all-in-one talent acquisition solutions to help early stage companies achieve hiring success in a sustainable way"
            />
            <div className="flex justify-center">
              <button className="mt-6 px-6 py-3 bg-[#E43D30] text-white rounded-xl font-medium hover:opacity-90 transition">
                Request A Free Talent
              </button>
            </div>
          </div>

          {/* What you get card - mobile */}
          <div className="mb-12">
            <div className="flex flex-col p-[22px] gap-4 rounded-[10px] border-[0.5px] border-paragraph/30 bg-white shadow">
              <h2 className="text-2xl font-semibold text-background">
                What you get:
              </h2>
              <ul>
                <li className="text-[15px] text-paragraph flex items-center gap-[5px]">
                  <IoMdCheckmarkCircleOutline />
                  <span>
                    Embedded, not external – we act like your own team
                  </span>
                </li>
                <li className="text-[15px] text-paragraph flex items-center gap-[5px]">
                  <IoMdCheckmarkCircleOutline />
                  <span>
                    Talent experts who understand startup speed and scale
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Our Capabilities section */}
          <div>
            <h2 className="font-bold mb-[18px] text-[32px] md:text-[40px] text-dark-text text-center md:text-right">
              Our Capabilities
            </h2>
            <div className="w-full mb-4">
              <Image className="w-full" src={image2} alt="image 2" />
            </div>
            <EllipsisText
              charLimit={140}
              text="We don't just hire, we build companies. We deliver all-in-one talent acquisition solutions to help early stage companies achieve hiring success in a sustainable way"
            />
            <div className="flex justify-center">
              <button className="mt-6 px-6 py-3 bg-[#E43D30] text-white rounded-xl font-medium hover:opacity-90 transition">
                Book A Call
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Unchanged */}
        <div
          style={{
            columnGap: 174,
          }}
          className="hidden md:grid grid-cols-2"
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
                text="We don't just hire, we build companies. We deliver all-in-one talent acquisition solutions to help early stage companies achieve hiring success in a sustainable way"
              />
              <button className="mt-6 px-6 py-3 bg-[#E43D30] text-white rounded-xl font-medium hover:opacity-90 transition">
                Request A Free Talent
              </button>
            </div>
          </div>
          <div></div>

          <div></div>
          <div className="flex-1 relative">
            <div className="flex flex-col p-[22px] gap-4 rounded-[10px] border-[0.5px] border-paragraph/30 bg-white shadow absolute top-[50%] -left-[45%]">
              <h2 className="text-2xl font-semibold text-background">
                What you get:
              </h2>
              <ul>
                <li className="text-[15px] text-paragraph flex items-center gap-[5px]">
                  <IoMdCheckmarkCircleOutline />
                  <span>
                    Embedded, not external – we act like your own team
                  </span>
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
                <Image className="w-full" src={image2} alt="image 2" />
              </div>
              <EllipsisText
                charLimit={140}
                text="We don't just hire, we build companies. We deliver all-in-one talent acquisition solutions to help early stage companies achieve hiring success in a sustainable way"
              />
              <div className="flex justify-end">
                <button className="mt-6 px-6 py-3 bg-[#E43D30] text-white rounded-xl font-medium hover:opacity-90 transition">
                  Book A Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeAre;
