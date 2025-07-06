import { FiMoon } from "react-icons/fi";
import Skills from "./Skills";
import Stats from "./Stats";
import Project from "./Project";
import ServicesCard from "./Services";
import About from "./About";
import TestimonialCard from "./Testimonial";
import Profile from "./Profile";

export default function Home() {
  return (
    <main className="flex flex-col fixed overflow-y-scroll sm:flex-row bg-white text-gray-900 font-sans min-h-screen w-full">
      {/* Sidebar */}
      <Profile />

      {/* Main Content */}
      <section
        className="flex-1 h-screen overflow-y-auto p-6 sm:p-10 mt-20 sm:mt-12"
        id="home"
      >
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">
              Hey <span className="text-blue-500">there!</span> 👋
            </h1>
            <p className="mt-2 text-gray-600 max-w-xl">
              I'm thrilled to tell you a bit about myself. I have over 6+ years
              of IT experience specializing in PHP, database development, and
              open-source frameworks. If you're in need of a motivated team
              player, let's connect!
            </p>
          </div>
          <FiMoon className="text-2xl text-gray-600" />
        </div>

        {/* Sections */}
        <Stats />
        <Skills />
        <Project />
        <ServicesCard />
        <TestimonialCard />
        <About />
      </section>
    </main>
  );
}
