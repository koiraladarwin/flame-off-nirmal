import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    if (window.innerWidth <= 768) {
      return;
    }

    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to FLAME OFF
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> best fire <b>e</b>quipment"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>World best fire saftey, equipment Remember us</p>
          <p className="text-gray-500">
            FLAMEOFF gives you the best from all around the world every possible
            fire equipments
          </p>
        </div>
      </div>


      <div className="h-[800px] max-md:h-fit w-screen relative" id="clip">
        {/* Left card - rotated -10deg and shifted left */}
        <div
          className="max-md:hidden about-image shadow-lg rounded-xl overflow-hidden absolute left-1/4 w-[320px] h-[480px] z-10 "
          style={{
            transformOrigin: "right bottom",
            transform: "rotate(-5deg) translateX(-500px) translateY(-45px)"
          }}
        >
          <img
            src="img/fire1.jpg"
            alt="Left card"
            className="absolute left-0 top-0 w-full h-full object-cover"
          />
        </div>

        {/* Right card - rotated 10deg and shifted right */}
        <div
          className="max-md:hidden about-image shadow-lg rounded-xl overflow-hidden absolute right-1/4 w-[320px] h-[480px] z-10"
          style={{
            transformOrigin: "left bottom",
            transform: "rotate(10deg) translateX(100px) translateY(-20px)"
          }}
        >
          <img
            src="img/fire1.jpg"
            alt="Right card"
            className="absolute left-0 top-0 w-full h-full object-cover"
          />
        </div>

        {/* Center card - no rotation, highest z-index */}
        <div
          className="mask-clip-path about-image shadow-2xl rounded-[60px] overflow-hidden relative w-[340px] h-[500px] z-20"
          style={{ transformOrigin: "center bottom" }}
        >
          <img
            src="img/fire1.jpg"
            alt="Center card"
            className="absolute left-0 top-0 w-full h-full object-cover"

          />
        </div>

      </div>
    </div>
  );
};

export default About;
