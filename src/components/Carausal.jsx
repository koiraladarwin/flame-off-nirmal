import Carousel from "./ui/carousel";

export function CustomCarousel() {
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
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}

