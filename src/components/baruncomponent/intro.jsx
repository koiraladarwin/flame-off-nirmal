import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const buttonRefs = useRef([]);

useGSAP(() => {
  const ctx = gsap.context(() => {
    // Image Animation - entrance + subtle swinging motion (left-right + up-down)
    gsap.fromTo(
      imgRef.current,
      {
        x: -100,
        y: 0,
        opacity: 0,
        scale: 0.9,
        rotation: -5,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        onComplete: () => {
          // Create a subtle swinging motion with x/y position changes
          gsap.to(imgRef.current, {
            keyframes: [
              { x: -10, y: 5, duration: 1, ease: "sine.inOut" },
              { x: 10, y: -5, duration: 1, ease: "sine.inOut" },
              { x: -10, y: 5, duration: 1, ease: "sine.inOut" },
            ],
            repeat: -1,
            yoyo: true,
          });
        },
      }
    );

    // Text Content Animation - slide + fade + gentle wobble
    gsap.fromTo(
      textRef.current.children,
      {
        y: 30,
        opacity: 0,
        rotation: 0,
      },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        stagger: 0.2,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        onComplete: () => {
          gsap.to(textRef.current.children, {
            rotation: 1.5,
            duration: 1.5,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            stagger: 0.2,
          });
        },
      }
    );

    // Vertical Buttons Animation - enter + gentle wobble
    gsap.fromTo(
      buttonRefs.current,
      {
        x: 80,
        opacity: 0,
        scale: 0.95,
        rotation: 5,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        stagger: 0.3,
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        onComplete: () => {
          buttonRefs.current.forEach((btn) => {
            gsap.to(btn, {
              rotation: -2,
              duration: 1.5,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut",
            });
          });
        },
      }
    );
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (

    
<div
  ref={sectionRef}
  className="relative h-screen w-full flex flex-col md:flex-row items-center justify-between overflow-hidden bg-[#e0e6fb] px-4 md:px-12"
>
  {/* Image Section */}
  <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-4 md:p-8">
    <img
      ref={imgRef}
      src="/img/cctv.png"
      alt="CCTV Camera"
      className="h-full md:h-[85%] object-contain"
    />
  </div>

  {/* Text Section */}
  <div
    ref={textRef}
    className="w-full md:w-1/2 px-4 md:px-8 flex flex-col gap-6 md:gap-8 justify-center py-8 md:py-0"
  >
    <div className="flex items-center gap-3 text-lg md:text-xl font-bold">
      <span className="bg-lime-500 rounded-xl text-white px-3 py-1">CCTV</span>
      <span className="bg-black rounded-xl text-white px-4 py-1">SURVEILLANCE</span>
    </div>

    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold max-w-xl leading-tight text-gray-900">
      WE OFFE<span className="text-lime-600">R</span> MORE THAN A SIMPLE
      SECURITY SYSTEM
    </h1>

    <p className="text-base md:text-lg text-gray-700 max-w-lg">
      Reliable, advanced, and affordable surveillance to keep your space secure 24/7.
    </p>

    <button className="bg-black text-white px-6 py-3 w-fit font-semibold rounded-md hover:bg-gray-800 transition">
      View Details
    </button>
  </div>

  {/* Rotated Side Buttons */}
  <div className="absolute right-0 top-1/3 hidden xl:flex flex-col gap-4">
    <div
      ref={(el) => (buttonRefs.current[0] = el)}
      className="bg-lime-500 text-white rotate-[-90deg] px-6 py-2 font-semibold text-xs tracking-wide"
    >
      BOOK A SERVICE CALL
    </div>
    <div
      ref={(el) => (buttonRefs.current[1] = el)}
      className="bg-lime-600 text-white rotate-[-90deg] px-6 py-2 font-semibold text-xs tracking-wide"
    >
      ENQUIRE NOW
    </div>
  </div>
</div>
  );
};

export default IntroSection;
