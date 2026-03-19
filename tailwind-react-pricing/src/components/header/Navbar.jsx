import React, { useState } from "react";
import { Menu, X } from "lucide-react";
const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];
const links = navLinks.map((link) => (
  <li className="hover:bg-gray-500 p-1 rounded-sm" key={link.id}>
    <a href={link.path}>{link.name}</a>
  </li>
));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center p-2 mx-10 mt-4 bg-gray-900 text-white ">
        <div className="flex gap-3 items-center">
          <div className="md:hidden">
            {open ? (
              <X  onClick={() => setOpen(!open)}></X>
            ) : (
              <Menu onClick={() => setOpen(!open)}></Menu>
            )}
            {
              <ul
                className={`absolute duration-1000  ${open ? "top-15" : "-top-60"} bg-gray-900 left-10 p-3`}
              >
                {links}
              </ul>
            }
          </div>

          <h2 className="text-2xl font-bold"><a href="#">Fit</a></h2>
        </div>

        <div className="hidden md:block">
          <ul className="flex justify-between items-center gap-5">{links}</ul>
        </div>
        <button className="btn btn-accent">Sign In</button>
      </nav>
    </>
  );
};

export default Navbar;
