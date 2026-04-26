import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const name = "Buddhi Manab AI";

  // 🔥 Nav items centralized (clean + scalable)
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Train AI", path: "/train" },
    { name: "Models", path: "/models" },
    { name: "About", path: "/about" },
  ];

  const slangyGetStarted = () => {
    alert("Hya Muji banairaxu")
  }

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-gray-900 font-medium"
      : "text-gray-500 hover:text-gray-900 transition";

  return (
    <nav className="w-full sticky top-0 left-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-gray-900"
        >
          {name}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={linkStyle}
            >
              {item.name}
            </NavLink>
          ))}

          <button onClick={slangyGetStarted} className="ml-4 px-4 py-1.5 rounded-full bg-gray-900 text-white text-sm hover:bg-gray-800 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-5 pb-4 flex flex-col gap-3 bg-white border-t border-gray-100">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={linkStyle}
            >
              {item.name}
            </NavLink>
          ))}

          <button className="mt-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;