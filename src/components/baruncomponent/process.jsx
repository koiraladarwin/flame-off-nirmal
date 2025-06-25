import React from "react";
import { Settings, Mail, CheckSquare, Smile } from "lucide-react";

const steps = [
  {
    icon: <Settings size={36} className="text-lime-600" />,
    title: "Your Need",
    desc: "Search the Service You need",
  },
  {
    icon: <Mail size={36} className="text-lime-600" />,
    title: "Enquiry",
    desc: "For enquiring make a call or mail us",
  },
  {
    icon: <CheckSquare size={36} className="text-lime-600" />,
    title: "Confirm",
    desc: "Get your Quote and confirm us",
  },
  {
    icon: <Smile size={36} className="text-lime-600" />,
    title: "Stay Calm",
    desc: "Feel free and Relax Yourself",
  },
];

const Process = () => {
  return (
    <>
      <div className=" text-white py-20 px-4 relative ">
        <h2 className="text-6xl text-black font-bold text-center mb-4">
          Our Process
        </h2>

        <div className="flex justify-center items-center gap-2 mb-12">
          <div className="h-px w-12 " />
          <div className="w-2 h-2 bg-lime-500 rounded-full" />
          <div className="h-px w-12 " />
        </div>

        {/* processs */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white text-black rounded-full w-56 h-56 mx-auto flex flex-col items-center justify-center border-[10px] border-lime-600"
            >
              {step.icon}
              <h3 className="text-xl font-semibold mt-3 mb-2 hover:text-green-600">
                {step.title}
              </h3>
              <p className="text-center text-sm px-4">{step.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-16 text-black text-3xl">
          Want to know more? It’s as easy.. Call Us on{" "}
          <span className="text-blue-950 font-semibold">
            (00) 200 123456789
          </span>
        </p>
      </div>
    </>
  );
};

export default Process;
