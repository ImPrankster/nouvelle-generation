import "server-only";

import Image from "next/image";
import humanSittingPic from "../public/home/human-sitting.png";
import humanStandingPic from "../public/home/human-standing.png";
import Icon from "../public/home/Icon.png";
import { FaArrowDown } from "react-icons/fa";

export const revalidate = 0;

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Image
        alt=""
        src={Icon}
        className="z-10 m-8 mt-24 w-3/4 max-w-4xl py-4"
      />
      <svg
        id="visual"
        viewBox="0 0 2048 300"
        width="2048"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="w-screen"
      >
        <rect x="0" y="0" width="2048" height="300" fill="#FAF7F5"></rect>
        <path
          d="M0 238L42.7 207.7C85.3 177.3 170.7 116.7 256 108.3C341.3 100 426.7 144 512 157.5C597.3 171 682.7 154 768 146.5C853.3 139 938.7 141 1024 153.3C1109.3 165.7 1194.7 188.3 1280 175.3C1365.3 162.3 1450.7 113.7 1536 119.7C1621.3 125.7 1706.7 186.3 1792 196C1877.3 205.7 1962.7 164.3 2005.3 143.7L2048 123L2048 301L2005.3 301C1962.7 301 1877.3 301 1792 301C1706.7 301 1621.3 301 1536 301C1450.7 301 1365.3 301 1280 301C1194.7 301 1109.3 301 1024 301C938.7 301 853.3 301 768 301C682.7 301 597.3 301 512 301C426.7 301 341.3 301 256 301C170.7 301 85.3 301 42.7 301L0 301Z"
          fill="#ea74ff"
          strokeLinecap="round"
          strokeLinejoin="miter"
        ></path>
      </svg>
      <section className="min-w-full bg-[#ea74ff] p-4 pb-16">
        <div className="flex flex-col items-center justify-center gap-x-16 lg:flex-row">
          <h2 className="font-shout text-5xl italic text-white lg:max-w-lg">
            Making cosmetics easy to access for everyone
          </h2>
          <Image alt="" src={humanSittingPic} width={500} />
        </div>
        <div className="mt-16 flex flex-col items-center justify-center gap-x-16 lg:flex-row">
          <Image
            alt=""
            className="hidden lg:block"
            src={humanStandingPic}
            width={500}
          />
          <h2 className="text-end font-shout text-5xl italic text-white lg:max-w-lg">
            Revolutionize the beauty industry with frontier technology
          </h2>
          <Image
            alt=""
            className="lg:hidden"
            src={humanStandingPic}
            width={500}
          />
        </div>
      </section>
      <svg
        id="visual"
        viewBox="0 0 2048 300"
        width="2048"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="w-screen"
      >
        <rect x="0" y="0" width="2048" height="300" fill="#ea74ff"></rect>
        <path
          d="M0 96L48.8 97.7C97.7 99.3 195.3 102.7 292.8 103.8C390.3 105 487.7 104 585.2 117.8C682.7 131.7 780.3 160.3 877.8 166.2C975.3 172 1072.7 155 1170.2 136C1267.7 117 1365.3 96 1462.8 93.3C1560.3 90.7 1657.7 106.3 1755.2 120.7C1852.7 135 1950.3 148 1999.2 154.5L2048 161L2048 301L1999.2 301C1950.3 301 1852.7 301 1755.2 301C1657.7 301 1560.3 301 1462.8 301C1365.3 301 1267.7 301 1170.2 301C1072.7 301 975.3 301 877.8 301C780.3 301 682.7 301 585.2 301C487.7 301 390.3 301 292.8 301C195.3 301 97.7 301 48.8 301L0 301Z"
          fill="#F9F7F5"
          strokeLinecap="round"
          strokeLinejoin="miter"
        ></path>
      </svg>
      <div className="mb-2 w-full text-center text-xl font-bold uppercase">
        Learn More
      </div>
      <FaArrowDown className="left-1/2 inline w-full animate-bounce text-2xl" />

      <h2 className="mt-16 font-shout text-5xl italic lg:max-w-lg">Our Team</h2>
      <div className="mt-8 grid w-full grid-cols-1 items-center justify-items-center gap-4 p-16 md:grid-cols-3">
        <div className="card bg-base-100 shadow-xl lg:max-w-xs">
          <figure>
            <Image alt="" src={humanStandingPic} />
          </figure>
          <div className="card-body">
            <h2 className="card-title overflow-x-auto whitespace-nowrap">
              Leo Wang
            </h2>
            <p>Designer / Developer</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl lg:max-w-xs">
          <figure>
            <Image alt="" src={humanStandingPic} />
          </figure>
          <div className="card-body">
            <h2 className="card-title overflow-x-auto whitespace-nowrap">
              Tina Xu
            </h2>
            <p>Product design</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl lg:max-w-xs">
          <figure>
            <Image alt="" src={humanStandingPic} />
          </figure>
          <div className="card-body">
            <h2 className="card-title overflow-x-auto whitespace-nowrap">
              Gloria Wen
            </h2>
            <p>Market Analysis</p>
          </div>
        </div>
      </div>
    </main>
  );
}
