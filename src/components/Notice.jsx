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
      // Animate top title
      gsap.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animate left section
      gsap.from(leftRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animate each card
      gsap.from(cardsRef.current, {
        y: 100,
        opacity: 0,
        stagger: 0.3,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-auto bg-white flex flex-col p-4 gap-4 md:flex-row md:pl-10 md:py-20 relative rounded-3xl md:gap-10"
    >
      {/* top part */}
      <div ref={titleRef} className="absolute top-5 left-5">
        <h1 className="text-4xl font-bold">News and Events</h1>
      </div>

      {/* left part */}
      <div ref={leftRef} className="flex flex-col mt-20 md:mt-0">
        <h2 className="text-4xl font-black mt-10">
          Latest <br /> News
        </h2>
        <p className="mt-2">
          Here you can get all the news relating to Flame off. <br /> All the
          cool events organized by flame off
        </p>
      </div>

      {/* right part */}
      <div className="flex justify-center items-center flex-col flex-1 mr-4 md:flex-1 mt-10 md:mt-0">
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="bg-blue-100 w-full p-5 rounded-xl mb-4"
        >
          <p className="mb-2">
            <span className="text-xl font-black text-orange-500 uppercase">
              Category
            </span>
            <span className="text-xl font-black ml-2">JUNE 2025</span>
          </p>
          <p className="tracking-wider">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            nemo eveniet, quasi ea at facere quam unde ullam...
          </p>
        </div>

        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="bg-blue-100 w-full p-5 rounded-xl"
        >
          <p className="mb-2">
            <span className="text-xl font-black text-orange-500 uppercase">
              Category
            </span>
            <span className="text-xl font-black ml-2">JUNE 2025</span>
          </p>
          <p className="tracking-wider">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            nemo eveniet, quasi ea at facere quam unde ullam...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notice;
