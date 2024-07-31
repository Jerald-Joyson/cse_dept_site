"use client";
import Image from "next/image";
import { useState } from "react";
import NavbarItem from "./NavbarItem/page";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";

const peopleDropdownItems = [
  { label: "Teaching Staffs", href: "#teaching-staffs" },
  { label: "Technical Staffs", href: "#technical-staffs" },
  { label: "Association Member", href: "#association-member" },
  { label: "Students", href: "#students" },
  { label: "Alumni", href: "#alumni" },
];

const activitiesDrop = [
  { label: "Blog", href: "/blog" },
  { label: "Events", href: "/events" },
  { label: "Magazine/Newsletter", href: "/magazine" },
  { label: "Students Group", href: "/student_gp" },
];

const academicsDropdownItems = [
  { label: "PO, PsO and PEO", href: "#po-pso-peo" },
  { label: "Programmes and Syllabi", href: "#programmes-syllabi" },
  { label: "Courses", href: "#courses" },
  { label: "Labs", href: "#labs" },
  { label: "Library", href: "#library" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <nav
      style={
        open
          ? { background: "white" }
          : {
              background: "rgba(255, 255, 255, 0.10)",
              backdropFilter: "blur(30px)",
            }
      }
      className="md:flex lg:mt-8 max-w-screen-2xl mx-auto font-bold fixed top-0 left-0 right-0 z-10 h-20"
    >
      <div className="flex items-center justify-between py-3 px-4 md:px-2 h-20 mx-auto">
        <div className="flex gap-4 items-center md:mr-14">
          <Image
            src={open ? "/logo(black).png" : "/logo.png"}
            alt="Logo image"
            width={80}
            height={60}
            className="w-24 h-14 mb-3"
          />
          <p
            className={`text-sm text-left text-white mt-2 ${
              open ? "hidden md:block" : "block"
            }`}
          >
            COMPUTER SCIENCE <br /> AND ENGINEERING
          </p>
        </div>
        <div className="md:hidden">
          <button
            className="p-2 rounded-md outline-none"
            onClick={toggleNavbar}
          >
            {open ? (
              <div className="p-2 text-white bg-black w-16 h-10 flex justify-center text-center">
                <h1 className="text-[16px]">CLOSE</h1>
              </div>
            ) : (
              <div className="p-2 text-black bg-white w-16 h-10 flex justify-center text-center">
                <h1 className="text-[16px]">MENU</h1>
              </div>
            )}
          </button>
        </div>
      </div>
      <div
        className={`fixed top-20 h-screen p-3 px-6 left-0 right-0 bg-white text-black transition-transform duration-1000 ease-in-out ${
          open ? "transform translate-x-0" : "transform -translate-x-full"
        } md:relative md:top-0 md:bg-transparent md:translate-x-0 md:flex md:p-0 md:h-auto md:pb-0 md:mt-0`}
      >
        <ul className="items md:h-20 md:pl-28 items-center justify-center md:flex md:mr-8 lg:pt-6 md:text-white text-black">
          <NavbarItem
            href="/"
            label="HOME"
            setNavbar={setOpen}
            showArrow={open}
          />
          <NavbarItem
            href="/about"
            label="ABOUT US"
            setNavbar={setOpen}
            showArrow={open}
          />
          <NavbarItem
            href="/academics"
            label="ACADEMICS"
            setNavbar={setOpen}
            showArrow={open}
            hasDropdown={true}
            dropdownItems={academicsDropdownItems}
          />
          <NavbarItem
            href="/people"
            label="PEOPLE"
            setNavbar={setOpen}
            showArrow={open}
            hasDropdown={true}
            dropdownItems={peopleDropdownItems}
          />
          <NavbarItem
            href="/activities"
            label="ACTIVITIES"
            setNavbar={setOpen}
            showArrow={open}
            hasDropdown={true}
            dropdownItems={activitiesDrop}
          />
          <NavbarItem
            href="#placements"
            label="PLACEMENTS"
            setNavbar={setOpen}
            showArrow={open}
          />
          <NavbarItem
            href="#contact"
            label="NOTIFICATION"
            setNavbar={setOpen}
            showArrow={open}
          />
        </ul>
        <div className="mt-72 md:hidden absolute">
          <h2>@2024 CSE ASSOCIATION</h2>
          <div className="flex justify-between">
            <div className="mt-1">
              <h2 className="text-[13px]">
                DESIGN AND POWERED BY{" "}
                <span className="underline font-semibold">CSE STUDENTS</span>
              </h2>
            </div>
            <div className="flex ml-28 mr-2 gap-1">
              <AiFillInstagram className="w-6 h-6 hover:scale-95" />
              <FaLinkedin className="w-5 h-6 hover:scale-95" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
