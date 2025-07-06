"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const BottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={27}
          height={27}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
          ></path>
        </svg>
      ),
    },

    {
      href: "/#skills",
      label: "Skills",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={23}
          height={23}
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="m10.3 8.2l-.9.9l.9.9l-1.2 1.2l4.3 4.3c.6.6 1.5.6 2.1 0s.6-1.5 0-2.1zm3.9 6.8c-.4 0-.8-.3-.8-.8c0-.4.3-.8.8-.8s.8.3.8.8s-.3.8-.8.8M3.6 8l.9-.6L6 5.7l.9.9l.9-.9l-.1-.1c.2-.5.3-1 .3-1.6c0-2.2-1.8-4-4-4c-.6 0-1.1.1-1.6.3l2.9 2.9l-2.1 2.1L.3 2.4C.1 2.9 0 3.4 0 4c0 2.1 1.6 3.7 3.6 4"
          ></path>
          <path
            fill="currentColor"
            d="m8 10.8l.9-.8l-.9-.9l5.7-5.7l1.2-.4L16 .8l-.7-.7l-2.3 1l-.5 1.2L6.9 8L6 7.1l-.8.9s.8.6-.1 1.5c-.5.5-1.3-.1-2.8 1.4L.2 13s-.6 1 .6 2.2s2.2.6 2.2.6l2.1-2.1c1.4-1.4.9-2.3 1.3-2.7c.9-.9 1.6-.2 1.6-.2m-3.1-.4l.7.7l-3.8 3.8l-.7-.7z"
          ></path>
        </svg>
      ),
    },
    {
      href: "/#projects",
      label: "Projects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={27}
          height={27}
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="m320 64l21.334 21.333l-.001 42.667h128v298.667H42.668V128h128V85.333L192 64zM85.333 284.935V384h341.334v-99.065c-42.625 12.196-85.298 19.824-128 22.874v33.524h-85.333V307.81c-42.702-3.05-85.375-10.678-128-22.874m341.334-114.268H85.334v69.766c56.972 17.5 113.84 26.234 170.666 26.234c56.827 0 113.695-8.734 170.668-26.234zm-128-64h-85.333V128h85.333z"
          ></path>
        </svg>
      ),
    },
    {
      href: "/#services",
      label: "Services",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8c0 20.4 7.1 38.4 17.5 50.9L99.7 157L84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5c-8.5 11.5-14.9 27.5-19.4 45.8c-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7c-4-18.5-10.2-34.4-18.7-45.9c-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1c0-39.2-24.8-68.8-52.4-68.8c-2.9 0-4.7-.1-5.2-.1M440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31s31-13.77 31-31s-13.8-31-31-31M311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9s.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9s.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9s.3-6.08.8-9zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31s31-13.8 31-31s-13.8-31-31-31m0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31s31-13.8 31-31s-13.8-31-31-31"
          ></path>
        </svg>
      ),
    },
    {
      href: "/#about",
      label: "About",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={27}
          height={27}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 text-black bg-white shadow-md border-t border-gray-800 lg:hidden">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center text-sm transition ${
                isActive
                  ? "text-blue-500"
                  : "text-blue-500  hover:text-blue-500"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="mt-1 text-[11px]">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
