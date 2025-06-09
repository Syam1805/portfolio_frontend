import React, { useEffect, useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setShow(true);
  }, []);

  return (
    <nav
      className={`bg-blue-600 p-4 shadow-md fixed w-full top-0 z-10 transition-all duration-700 ease-out ${
        show ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      }`}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="container mx-auto flex flex-row justify-between items-center">
        <h1 className="text-white text-2xl font-bold tracking-wide drop-shadow-lg whitespace-nowrap">
          Panga Syamsundar Rao
        </h1>
        <div className="flex flex-row space-x-4 whitespace-nowrap">
          {[
            { href: "#home", label: "Home" },           
            { href: "#skills", label: "Skills" },
            { href: "#experience", label: "Experience" },
            { href: "#projects", label: "Projects" },
            { href: "#education", label: "Education" },
             { href: "#about", label: "About" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-white hover:text-gray-200 transition-colors duration-200 px-2 py-1
                after:content-[''] after:block after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100
                after:transition-transform after:duration-300 after:origin-left after:rounded-full"
              style={{ transition: "color 0.2s" }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;