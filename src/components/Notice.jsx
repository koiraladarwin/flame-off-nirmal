
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Notice() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const leftRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Title entrance: subtle slide + fade
      gsap.fromTo(
        titleRef.current,
        { y: -40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Left section entrance: subtle slide + fade + scale
      gsap.fromTo(
        leftRef.current,
        { x: -60, opacity: 0, scale: 0.98 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Cards entrance: slide up + fade + slight scale + less rotation
      gsap.fromTo(
        cardsRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.85,
          rotation: -8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.3,
          ease: "elastic.out(1, 0.4)",
          stagger: 0.3,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
          onComplete: () => {
            cardsRef.current.forEach((card, i) => {
              gsap.to(card, {
                rotation: 1.5 + (i % 2 === 0 ? 1 : -1),
                scale: 1.01,
                duration: 2.5,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
                delay: i * 0.25,
              });
            });
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className=" pt-36 flex flex-col gap-6 md:flex-row md:pl-10 md:py-20 relative md:gap-12 bg-cyan-50"
    >
      {/* top part */}
      <div
        ref={titleRef}
        className="absolute top-7 md:top-10 left-5 md:left-20 text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-blue-700"
      >
        <h1 className="text-6xl font-extrabold drop-shadow-lg">News & Events</h1>
      </div>

      {/* left part */}
      <div
        ref={leftRef}
        className="flex flex-col pt-10 md:ml-20 md:mt-0 max-w-md"
      >
        <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-8 max-md:mt-10">
          Latest <br /> News
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Stay updated with all the latest news relating to Flame Off. <br />
          Discover the cool events organized by our team.
        </p>
      </div>

      {/* right part */}
      <div className="flex flex-col flex-1 mt-12 md:mt-0 md:mr-40 gap-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-white shadow-lg p-6 rounded-xl border border-lime-400 hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
          >
            <p className="mb-2 flex justify-between items-center">
              <span className="text-lg font-bold uppercase text-lime-600 tracking-wider">
                Category
              </span>
              <span className="text-lg font-semibold text-gray-700">JUNE 2025</span>
            </p>
            <p className="tracking-wide text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo
              eveniet, quasi ea at facere quam unde ullam...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notice;

