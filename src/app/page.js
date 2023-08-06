"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Img from "../assets/code.jpg";
import { BsLinkedin } from "react-icons/bs";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={`main font-body ${darkMode ? "dark" : ""} h-[100vh]`}>
        <div className="w-[100%] h-[100vh] dark:bg-[#1e293b]  transition-all duration-300">
          <div className="relative">
            <div className="navbar w-[100%]  h-24 flex justify-between items-center ">
              <h2 className="text-xl ml-6 font-bold cursor-pointer dark:text-white ">
                Ranbir Verma
              </h2>
              <div className="flex items-center cursor-pointer ">
                {!darkMode ? (
                  <BsMoonStarsFill
                    className="mr-6"
                    onClick={() => setDarkMode(true)}
                  />
                ) : (
                  <BsFillSunFill
                    className={`mr-6 ${darkMode && "text-white"}`}
                    onClick={() => setDarkMode(false)}
                  />
                )}
                <button className="mr-6 bg-blue-500 p-2 rounded-md text-white dark:text-black">
                  Resume
                </button>
              </div>
            </div>
            <div className="down-section mt-16">
              <h1 className="text-5xl font-bold text-center text-blue-500">
                Ranbir Verma
              </h1>
              <p className="text-xl mt-3 w-[100%] text-center dark:text-white">
                Developer and Designer
              </p>
              <div className="w-[100%] text-center mt-4 dark:text-white">
                <p>Freelancer providing services</p>
                <p className="mt-2">
                  for programming and design content needs.
                </p>
                <p className="mt-2">
                  join me down below and let's gets cracking!
                </p>
              </div>

              <div className="social-links w-[100%] flex justify-center mt-10 gap-14 cursor-pointer dark:text-white">
                <Link href={"https://www.instagram.com/"} target="_blank">
                  <BsInstagram className="text-4xl" />
                </Link>

                <Link href={"https://linkedin.com/"} target="_blank">
                  <BsLinkedin className="text-4xl" />
                </Link>
                <Link href={"https://github.com/Ranbir59"} target="_blank">
                  <BsGithub className="text-4xl" />
                </Link>
              </div>
            </div>
            <div className="w-[100%] flex justify-center">

            <div className="image absolute  w-[300px] h-[300px] mt-10">
              <Image
                src={Img}
                layout="fill"
                objectFit="cover"
                className="rounded-[50%] text-center"
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
