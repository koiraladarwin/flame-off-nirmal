
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
      className="text-gray-900 pt-20 pb-40 px-4 relative bg-cyan-50 rounded-xl"
    >
      <AnimatedTitle
        title="Our Process"
        containerClass="mt-5 mb-10 !text-black text-center"
      />

      {/* Process Boxes */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((step, idx) => (
          <div
            key={idx}
            ref={(el) => (boxRefs.current[idx] = el)}
            className="bg-white text-gray-800 rounded-2xl w-full max-w-xs mx-auto p-6 border-2 border-black shadow-md hover:shadow-lg"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-sky-100 mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg font-bold mb-2 text-center">{step.title}</h3>
            <p className="text-sm text-gray-600 text-center">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-4xl mx-auto px-12 py-6 bg-white border-2 border-black rounded-lg shadow-md flex items-center justify-center gap-4 select-none">
        <p className="text-gray-900 text-2xl md:text-3xl font-medium leading-relaxed m-0">
          Want to know more? It’s as easy as a call. Reach us at
        </p>
        <a
          href="tel:+984202009"
          className="text-blue font-bold text-2xl md:text-3xl hover:text-sky-800 transition-colors duration-300 whitespace-nowrap"
        >
          (00) 200 123456789
        </a>
      </div>
    </div>
  );
};

export default Process;

