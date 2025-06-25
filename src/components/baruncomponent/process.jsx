
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Settings, Mail, CheckSquare, Smile } from "lucide-react";
import AnimatedTitle from "../AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: <Settings size={36} className="text-black" />,
    title: "Your Need",
    desc: "Search the Service You need",
  },
  {
    icon: <Mail size={36} className="text-black" />,
    title: "Enquiry",
    desc: "For enquiring make a call or mail us",
  },
  {
    icon: <CheckSquare size={36} className="text-black" />,
    title: "Confirm",
    desc: "Get your Quote and confirm us",
  },
  {
    icon: <Smile size={36} className="text-black" />,
    title: "Stay Calm",
    desc: "Feel free and Relax Yourself",
  },
];

const Process = () => {
  const containerRef = useRef(null);
  const boxRefs = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(boxRefs.current, {
        opacity: 0,
        y: 100,
        scale: 0.3,
        rotation: -45,
        stagger: 0.2,
        duration: 1.4,
        ease: "elastic.out(1, 0.4)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        onComplete: () => {
          boxRefs.current.forEach((box) => {
            const wobbleTimeline = gsap.timeline({
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });

            wobbleTimeline
              .to(box, { rotation: 1.5, scale: 1.01, duration: 1 })
              .to(box, { rotation: -1.2, scale: 1, duration: 1.1 })
              .to(box, { rotation: 1, scale: 1.005, duration: 0.9 })
              .to(box, { rotation: -1.5, scale: 1, duration: 1 });
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (

    <div
      id="process"
      ref={containerRef}
      className="bg-[#f9fafb] text-gray-900 pt-20 pb-32 px-4 md:px-8 relative rounded-xl"
    >
      <AnimatedTitle
        title="Our Process"
        containerClass="mb-14 text-center !text-black"
      />

      {/* Process Boxes */}
      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((step, idx) => (

          <div
            key={idx}
            ref={(el) => (boxRefs.current[idx] = el)}
            className="bg-white text-gray-800 rounded-xl w-full max-w-sm mx-auto p-8 border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 mb-6">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">
              {step.title}
            </h3>
            <p className="text-base text-gray-600 text-center">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="mt-20 max-w-4xl mx-auto px-8 py-6 bg-white border border-gray-300 rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-center gap-4 select-none">
        <p className="text-gray-800 text-xl md:text-2xl font-medium text-center md:text-left">
          Want to know more? It’s as easy as a call. Reach us at
        </p>
        <a
          href="tel:+984202009"
          className="text-blue-600 font-bold text-xl md:text-2xl hover:text-blue-800 transition-colors duration-300 whitespace-nowrap"
        >
          (00) 200 123456789
        </a>
      </div>
    </div>

  );
};

export default Process;

