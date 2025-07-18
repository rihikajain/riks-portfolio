import React from "react";

const links = [
  "home",
  "about",
  "education",
  "projects",
  "experience",
  "skills",
  "leadership",
  "contact",
];

function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-primary-dark to-primary px-2 text-white rounded shadow">
          Rihika
        </h1>
        <ul className="hidden md:flex space-x-6">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-primary font-medium hover:text-primary-dark transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
