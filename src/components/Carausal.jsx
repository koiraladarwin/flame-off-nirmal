import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carousel from "./ui/carousel";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

export function CustomCarousel() {
  const containerRef = useRef(null);
  const carouselRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate entire carousel container
      gsap.from(carouselRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const slideData = [
    {
      title: "Fire Response Vehicle",
      button: "See Fleet in Action",
      src: "/img/firetruck.jpg",
      alt: "Red fire truck parked and ready for emergency",
    },
    {
      title: "Smart Home Appliance",
      button: "Explore Smart Devices",
      src: "/img/smarthome.png",
      alt: "Abstract smart home control panel",
    },
    {
      title: "Powerful Fire Suppression",
      button: "Browse Extinguishers",
      src: "/img/fireremover.jpg",
      alt: "Fire extinguisher in smoky background",
    },
    {
      title: "Secure & Connected Living",
      button: "Upgrade Your Safety",
      src: "/img/house.jpg",
      alt: "Smart security and lifestyle devices",
    },
  ];


return (
  <section
    ref={containerRef}
    className="relative w-full pb-32  md:px-12 bg-[#f8f3e1] flex flex-col items-center"
  >
       <AnimatedTitle
        title="Our Services"
        containerClass="mt-5 mb-10 !text-black text-center"
      />
    
    <div
      ref={carouselRef}
      className="w-full max-w-6xl"
    >
      <Carousel slides={slideData} />
    </div>
  </section>
);
}
