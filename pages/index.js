import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub
} from "react-icons/ai";

import { SiDiscord } from "react-icons/si";
import { Gi3DGlasses } from "react-icons/gi";

import Image from "next/image";
import python from "../public/python.png";
import unity from "../public/unity.png";
import _html from "../public/html.png";
import { useState } from "react";
import { icons } from "react-icons";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>AS - Portfolio</title>
        <meta name="description" content="Alessandro's portfolio" />
        <link rel="icon" href="/programmer.png" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40  dark:bg-gray-900">
        <section >
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-lg font-press_start text-black dark:text-white">
              0xPastore
            </h1>

            <ul className="flex items-center ">
              <li className="sm: justify-end">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer ml-10 mb-5  text-black dark:text-white"
                />
              </li>
              <li className="sm: invisible">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
                  href="#"
                >
                  Dark Mode
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium sm: text-3xl">
              Alessandro Stori
            </h2>
            <h3 className="text-2xl py-2  text-black dark:text-white">
              Student at University of Cagliari
            </h3>
            <h3 className="text-1xl py-3 font-press_start  text-black dark:text-white">
              Cat owner
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              necessitatibus!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <a href="#"><AiFillLinkedin/></a>
            <a href="https://github.com/Alessandrostori"><AiFillGithub/></a>
            <a href="discordapp.com/users/Pastore#4636"><SiDiscord/></a>
          </div>
          {/* 
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={mingu} layout="fill" objectFit="cover" />
          </div>
*/}
          {/*Projects area*/}

          <div className="text-center p-10">
            <h2 className="text-3xl py-1 dark:text-teal-600">
              Latest projects
            </h2>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              You can check my new projects on <a href="https://github.com/Alessandrostori" className="text-teal-600">GitHub</a>
            </p>
            <p className="text-md leading-8 text-gray-800 dark:text-white">
            A brief explanation of the projects completed during 2022
            </p>
          </div>

          {/*Card area*/}
          <div className="md:flex gap-10">
            {/*Card 1*/}
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <div className="flex flex-col items-center col-span-3 py-4 ">
                <Image
                  src={python}
                  width={100}
                  height={100}
                  className="rounded-3xl"
                ></Image>
              </div>

              <h3 className="text-lg font-medium pt-8 pb-2  text-black ">Python bot</h3>
              <p className=" text-black py-1">
                Project to refine python skills and learn the open-cv library
                through the creation of a bot for the collection of resources on
                a browser game
              </p>
              <h4 className="py-4 text-teal-600">
                Libraries used in the project:
              </h4>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">OpenCV</p>
              <p className="text-gray-800 py-1">PyAutoGUI</p>
            </div>
            {/*Card 2*/}
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <div className="flex flex-col items-center col-span-3 py-4 ">
                <Image
                  src={_html}
                  width={100}
                  height={100}
                  className="rounded-3xl"
                ></Image>
              </div>

              <h3 className="text-lg font-medium pt-8 pb-2  text-black  ">
                Web Development
              </h3>
              <p className=" text-black py-2 ">
                Some university projects have been completed through the use of
                these languages. Also with django I created a tool that allows
                you to check the latest ebay sales.
              </p>
              <h4 className="py-4 text-teal-600">Developed with:</h4>
              <p className="text-gray-800 py-1">HTML&CSS</p>
              <p className="text-gray-800 py-1">Nextjs</p>
              <p className="text-gray-800 py-1">Django</p>
            </div>
            {/*Card 3*/}
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <div className="flex flex-col items-center col-span-3 py-4 ">
                <Image
                  src={unity}
                  width={100}
                  height={100}
                  className="rounded-3xl"
                ></Image>
              </div>

              <h3 className="text-lg font-medium pt-8 pb-2 mb-8 text-black  ">
                Unity 3D Game Development
              </h3>
              <p className=" text-black py-2">
                University project that led me to work in a team, in addition to
                acquiring excellent knowledge on teamwork, I deepened the
                concepts of user experience and software design.
              </p>
              <h4 className="py-4 text-teal-600">Skill involved:</h4>
              <p className="text-gray-800 py-1">Unity</p>
              <p className="text-gray-800 py-1">Software engineering</p>
              <p className="text-gray-800 py-1">C#</p>
              <p className="text-gray-800 py-1">Teamwork</p>
            </div>
          </div>
        </section>
        <br className="py-2" />
      </main>
    </div>
  );
}
