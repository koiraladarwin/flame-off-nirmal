import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
// import Features from "./components/Features";
// import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import IntroSection from "./components/baruncomponent/intro";
import Process from "./components/baruncomponent/process";
import { CustomCarousel } from "./components/Carausal";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />

      <Process />
      <IntroSection />
      {/* <Features />
      <Story />*/}
      <CustomCarousel />

      <Contact />
      <Footer />
    </main>
  );
}

export default App;
