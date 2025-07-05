import { FiMoon } from "react-icons/fi";
import Profile from "./Profile";
import Skills from "./Skills";
import Stats from "./Stats";
import Project from "./Project";
import ServicesCard from "./Services";
import About from "./About";
import TestimonialCard from "./Testimonial";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-[300px] z-10">
        <Profile />
      </div>

      {/* Scrollable Content with left margin */}
      <section className="ml-[300px] h-screen overflow-y-auto p-10">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">
              Hey <span className="text-blue-500">there!</span> 👋
            </h1>
            <p className="mt-2 text-gray-600 max-w-xl">
              I'm thrilled to tell you a bit about myself. I have over 6+ years
              of IT experience specializing in PHP, database development, and
              open-source frameworks. If you’re in need of a motivated team
              player, let’s connect!
            </p>
          </div>
          <FiMoon className="text-2xl text-gray-600" />
        </div>

        {/* Stats */}
           <Stats />

          {/* Skills */}
          <Skills />

          {/* Projects */}
          <Project />

          {/* Services */}

          <ServicesCard />
          {/* Testimonials */}
          <TestimonialCard />

          {/* About */}
          <About />

      </section>
    </main>
  );
}
