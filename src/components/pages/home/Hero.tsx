import Link from "next/link";
import heroImage from "@/assets/hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="custom-container gap-20 flex">
        <div className="flex-1">
          <div className="flex   gap-3">
            <h2 className="text-[81px] font-poppins font-bold text-primary tracking-wide">
              HI
            </h2>
            <ul className="flex items-center gap-3 mt-11">
              <li className="size-2 rounded-full bg-primary"></li>
              <li className="size-2 rounded-full bg-primary"></li>
              <li className="size-2 rounded-full bg-accent"></li>
            </ul>
          </div>
          <h1
            className="text-[123px]
          border-l-10 leading-30 border-background text-background pl-[6px] font-bold font-poppins"
          >
            How Ya{" "}
            <span className="block after:block after:h-[10px] after:bg-background after:w-[42%] after:relative after:translate-x-2 ">
              Doing?
            </span>
          </h1>
          <p className="text-xl font-inter text-dark-text mt-6 mb-[52px] ">
            We bridge the gap between ambitious professionals and
            forward-thinking organizations, creating partnerships that drive
            innovation and success.
          </p>
          <div className="mt-[52px] flex items-center gap-6">
            <Link className="btn btn-primary" href={"#"}>
              Clients
            </Link>{" "}
            <span className="text-xl">or</span>
            <Link className="btn btn-secondary" href={"#"}>
              Candidates
            </Link>{" "}
          </div>
        </div>
        <div className="flex-1">
          <Image src={heroImage} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
