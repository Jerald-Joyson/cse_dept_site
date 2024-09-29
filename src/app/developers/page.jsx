"use client";
import ColoredSection from "@/components/ColoredSection";
import Image from "next/image";
import React from "react";
import { ImLinkedin2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";

export default function Developers() {
  const iconMap = {
    ImLinkedin2: ImLinkedin2,
    BsTwitterX: BsTwitterX,
    FaGithub: FaGithub,
    FaBehance: FaBehance,
  };

  const data = [
    {
      img: "/ali.jpeg",
      name: "Muhammad Ali",
      position: "UI-UX Designer",
      socialmedia1: "https://www.linkedin.com/in/muhammadalima",
      socialmediaimg1: "ImLinkedin2",
      socialmedia2: "https://behance.com/muhammadalima",
      socialmediaimg2: "FaBehance",
      socialmedia3: "https://github.com/muhammadalima",
      socialmediaimg3: "FaGithub",
    },
    {
      img: "/ali.jpeg",
      name: "Muhammad Hashiq",
      position: "Full-Stack Developer",
      socialmedia1: "https://www.linkedin.com/in/muhammad-hashiq",
      socialmediaimg1: "ImLinkedin2",
      socialmedia2: "https://twitter.com/muhammad-hashiq",
      socialmediaimg2: "BsTwitterX",
      socialmedia3: "https://github.com/muhammad-hashiq",
      socialmediaimg3: "FaGithub",
    },
    {
      img: "/jerald.jpeg",
      name: "Jerald Joyson",
      position: "Full-Stack Developer",
      socialmedia1: "https://www.linkedin.com/in/jerald-joyson",
      socialmediaimg1: "ImLinkedin2",
      socialmedia2: "https://twitter.com/jerald-joyson",
      socialmediaimg2: "BsTwitterX",
      socialmedia3: "https://github.com/jerald-joyson",
      socialmediaimg3: "FaGithub",
    },
    {
      img: "/bimal.jpeg",
      name: "Bimal Devasia",
      position: "Full-Stack Developer",
      socialmedia1: "https://www.linkedin.com/in/bimal-devasia",
      socialmediaimg1: "ImLinkedin2",
      socialmedia2: "https://twitter.com/bimal-devasia",
      socialmediaimg2: "BsTwitterX",
      socialmedia3: "https://github.com/bimal-devasia",
      socialmediaimg3: "FaGithub",
    },
    {
      img: "/nishan.jpeg",
      name: "Mohammad Nishan",
      position: "Full-Stack Developer",
      socialmedia1: "https://www.linkedin.com/in/mohammad-nishan",
      socialmediaimg1: "ImLinkedin2",
      socialmedia2: "https://twitter.com/mohammad-nishan",
      socialmediaimg2: "BsTwitterX",
      socialmedia3: "https://github.com/mohammad-nishan",
      socialmediaimg3: "FaGithub",
    },
    {
      img: "/viswa.jpg",
      name: "Viswajith vp",
      position: "Full-Stack Developer",
      socialmedia1: "https://www.linkedin.com/in/viswajith-vp",
      socialmediaimg1: "ImLinkedin2",
      socialmedia2: "https://twitter.com/viswajith-vp",
      socialmediaimg2: "BsTwitterX",
      socialmedia3: "https://github.com/viswajith-vp",
      socialmediaimg3: "FaGithub",
    },
    {
      img: "/ali.jpeg",
      name: "Amal Joseph",
      position: "ML Developer",
      socialmedia1: "https://www.linkedin.com/in/bimal-devasia",
      socialmediaimg1: "ImLinkedin2",
      socialmedia2: "https://twitter.com/bimal-devasia",
      socialmediaimg2: "BsTwitterX",
      socialmedia3: "https://github.com/bimal-devasia",
      socialmediaimg3: "FaGithub",
    },
    {
      img: "/ali.jpeg",
      name: "Rohini Kanth",
      position: "ML Developer",
      socialmedia1: "https://www.linkedin.com/in/mohammad-nishan",
      socialmediaimg1: "ImLinkedin2",
      socialmedia2: "https://twitter.com/mohammad-nishan",
      socialmediaimg2: "BsTwitterX",
      socialmedia3: "https://github.com/mohammad-nishan",
      socialmediaimg3: "FaGithub",
    },
  ];

  return (
    <ColoredSection>
      <div
        id="teams"
        className="bg-[#0a0a0a] h-screen text-white  px-8 pt-8 overflow-hidden"
      >
        <h1 className="px-8 text-[60px] md:text-[100px] font-semibold">
          Meet our team
        </h1>
        <div className="mt-6 w-full">
          <div className="flex space-x-8 animate-marquee">
            {data &&
              [...data, ...data].map((item, index) => (
                <div
                  key={index}
                  className="inline-block min-w-[250px] md:min-w-[350px] transition-all duration-300 ease-in-out transform hover:-translate-y-10 relative group"
                >
                  <Image
                    src={item.img}
                    alt="developer"
                    width={300}
                    height={600}
                    className="rounded-[48px] w-auto h-[900px] md:h-[500px] object-cover"
                  />
                  <div className="mt-4">
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {item.name}
                    </h3>
                    <div className="flex gap-2 mt-1">
                      <div className="relative mt-1 w-4 h-4 bg-[#d9d9d9] rounded-lg" />
                      <h2 className="text-sm md:text-base font-mono  ">
                        {item.position}
                      </h2>
                    </div>
                    <div className="flex space-x-4 mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pb-4 ">
                      <a
                        href={item.socialmedia1}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {React.createElement(iconMap[item.socialmediaimg1], {
                          className: "w-6 h-6 text-white hover:text-blue-500",
                        })}
                      </a>
                      <a
                        href={item.socialmedia2}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {React.createElement(iconMap[item.socialmediaimg2], {
                          className: "w-6 h-6 text-white hover:text-blue-400",
                        })}
                      </a>
                      <a
                        href={item.socialmedia3}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {React.createElement(iconMap[item.socialmediaimg3], {
                          className: "w-6 h-6 text-white hover:text-blue-400",
                        })}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </ColoredSection>
  );
}
