"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

const Profile = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <aside className="w-full lg:max-w-[320px] sm:w-full sm:max-w-sm bg-white pb-6 rounded-none sm:rounded-xl prof shadow-lg h-screen overflow-y-scroll sm:my-18  sm:ml-[1px]">
        {/* Cover Image */}
        <div className="relative h-[180px] lg:h-40 bg-gradient-to-r from-blue-400 to-blue-600"></div>

        {/* Profile Image */}
        <div className="relative flex justify-center">
          <div
            onClick={() => setShowPopup(true)}
            className="cursor-pointer absolute -top-16 w-33 h-33 rounded-full border-4 border-white overflow-hidden shadow-md"
          >
            <Image
              src="/IMG_4895~2.JPG"
              alt="Divine Timothy"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-18 text-center px-3 pb-2">
          <h2 className="text-[25px] font-bold text-gray-800">
            Divine Timothy
          </h2>
          <div className="flex flex-col justify-center items-center">
            <p className="text-md text-blue-600">Full-Stack Web Developer</p>
            <div className="flex gap-2 w-max items-center">
              <p className="text-sm text-gray-500">App Developer</p>
              <span>|</span>
              <p className="text-sm text-gray-500">Tech Content Creator</p>
            </div>
          </div>
          <p className="flex items-center justify-center gap-1 text-sm text-gray-500 mt-2">
            <FaMapMarkerAlt className="text-blue-500" /> Abia State, Nigeria
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 text-xl text-gray-600 mt-4">
            <Link
              href="https://web.facebook.com/boya1one"
              target="_blank"
              className="hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978c.401 0 .955.042 1.468.103a9 9 0 0 1 1.141.195v3.325a9 9 0 0 0-.653-.036a27 27 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.7 1.7 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103l-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647"
                ></path>
              </svg>
            </Link>
            <Link
              href="https://github.com/boyalonetech"
              aria-label="GitHub"
              className="hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 64 64"
              >
                <path
                  fill="currentColor"
                  d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30c2 0 2-1 2-2v-5c-7 2-10-2-11-5c0 0 0-1-2-3c-1-1-5-3-1-3c3 0 5 4 5 4c3 4 7 3 9 2c0-2 2-4 2-4c-8-1-14-4-14-15q0-6 3-9s-2-4 0-9c0 0 5 0 9 4c3-2 13-2 16 0c4-4 9-4 9-4c2 7 0 9 0 9q3 3 3 9c0 11-7 14-14 15c1 1 2 3 2 6v8c0 1 0 2 2 2c3 0 22-9 22-30C64 14 50 0 32 0"
                ></path>
              </svg>
            </Link>
            <Link
              href="https://x.com/boyalonetechs"
              aria-label="Twitter"
              className="hover:text-blue-500"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://www.instagram.com/boyalonetechs/"
              aria-label="LinkedIn"
              className="hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <circle
                  cx={17}
                  cy={7}
                  r={1.5}
                  fill="currentColor"
                  fillOpacity={0}
                >
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="1.3s"
                    dur="0.15s"
                    values="0;1"
                  ></animate>
                </circle>
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <path
                    strokeDasharray={72}
                    strokeDashoffset={72}
                    d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.6s"
                      values="72;0"
                    ></animate>
                  </path>
                  <path
                    strokeDasharray={28}
                    strokeDashoffset={28}
                    d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.7s"
                      dur="0.6s"
                      values="28;0"
                    ></animate>
                  </path>
                </g>
              </svg>
            </Link>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/"
              download
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md transition text-sm flex items-center gap-2"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M15 7h-3V1H8v6H5l5 5zm4.338 6.532c-.21-.224-1.611-1.723-2.011-2.114A1.5 1.5 0 0 0 16.285 11h-1.757l3.064 2.994h-3.544a.27.27 0 0 0-.24.133L12.992 16H7.008l-.816-1.873a.28.28 0 0 0-.24-.133H2.408L5.471 11H3.715c-.397 0-.776.159-1.042.418c-.4.392-1.801 1.891-2.011 2.114c-.489.521-.758.936-.63 1.449l.561 3.074c.128.514.691.936 1.252.936h16.312c.561 0 1.124-.422 1.252-.936l.561-3.074c.126-.513-.142-.928-.632-1.449"
                  ></path>
                </svg>
              </span>
              My Resume
            </Link>
            <Link
              href="/contact"
              className="border border-blue-500 hover:bg-blue-50 text-blue-500 px-3 py-2 rounded-md text-sm transition flex items-center gap-2"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  viewBox="0 0 48 48"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth={4}
                  >
                    <path d="M43 5L29.7 43l-7.6-17.1L5 18.3z"></path>
                    <path strokeLinecap="round" d="M43 5L22.1 25.9"></path>
                  </g>
                </svg>
              </span>
              Contact Me
            </Link>
          </div>

          {/* Additional Content */}
          <div className="border-t mt-6 pt-4 space-y-4 text-sm text-gray-600 text-left">
            {/* Bio */}
            <p>
              Passionate about solving real-world problems using tech. I build
              scalable apps, teach others, and share my journey online.
            </p>

            {/* Tech Stack */}
            <div>
              <h4 className="text-gray-700 font-semibold mb-1">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  "React",
                  "Next.js",
                  "Tailwind",
                  "Firebase",
                  "TypeScript",
                  "VsCode",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability */}
            <p className="text-green-600 font-medium">
              ✅ Open to freelance and remote opportunities
            </p>

            {/* Contact Info */}
            <div>
              <p className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 36 36"
                >
                  <path
                    fill="currentColor"
                    d="M32.33 6a2 2 0 0 0-.41 0h-28a2 2 0 0 0-.53.08l14.45 14.39Z"
                    className="clr-i-solid clr-i-solid-path-1"
                  ></path>
                  <path
                    fill="currentColor"
                    d="m33.81 7.39l-14.56 14.5a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-.12-.61M5.3 28H3.91v-1.43l7.27-7.21l1.41 1.41Zm26.61 0h-1.4l-7.29-7.23l1.41-1.41l7.27 7.21Z"
                    className="clr-i-solid clr-i-solid-path-2"
                  ></path>
                  <path fill="none" d="M0 0h36v36H0z"></path>
                </svg>
                :{" "}
                <a
                  href="mailto:boyalontechs@gmail.com"
                  className="text-blue-500"
                >
                  boyalontechs@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="m20.33 21.48l2.24-2.24a2.19 2.19 0 0 1 2.34-.48l2.73 1.09a2.18 2.18 0 0 1 1.36 2v5A2.17 2.17 0 0 1 26.72 29C7.59 27.81 3.73 11.61 3 5.41A2.17 2.17 0 0 1 5.17 3H10a2.16 2.16 0 0 1 2 1.36l1.09 2.73a2.16 2.16 0 0 1-.47 2.34l-2.24 2.24s1.29 8.73 9.95 9.81"
                  ></path>
                </svg>
                :{" "}
                <a href="tel:+2348161514098" className="text-blue-500">
                  +234 816 151 4098
                </a>
              </p>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-gray-700 font-semibold mb-1">Achievements</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>4K+ projects completed</li>
                <li>5+ years of experience</li>
                <li>Top 10% frontend talent on Upwork</li>
              </ul>
            </div>

            {/* Languages */}
            <div className="mb-12">
              <h4 className="text-gray-700 font-semibold mb-1">Languages</h4>
              <p>English, Igbo</p>

              <div className="mt-6 hidden lg:block">
                <hr />

                <h1 className="p-2 text-black text-center text-md font-medium">
                  &copy; {new Date().getFullYear()} Boy Alone Tech.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Image Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={() => setShowPopup(false)}
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-md">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <Image
              src="/IMG_4895~2.JPG"
              alt="Divine Timothy"
              width={800}
              height={800}
              quality={100}
              className="rounded-2xl object-cover w-full lg:scale-[1.7] h-64"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
