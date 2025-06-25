import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      {/* <Features />
      <Story />*/}
      <Contact />
      { /*<div className="fixed bottom-0 right-0 bg-red-400 z-10 mr-10 mb-10 w-[80px] h-[80px] rounded-full">
      </div>
      */}
      <Footer />
    </main>
  );
}

export default App;
