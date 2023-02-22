import "server-only";

import Image from "next/image";
import humanSittingPic from "../public/home/human-sitting.png";
import humanStandingPic from "../public/home/human-standing.png";
import Icon from "../public/home/Icon.png";
import { FaArrowDown } from "react-icons/fa";

export const revalidate = 0;

export default function Home() {
  return (
    <main className="p-8 lg:px-16">
      <article className="prose flex max-w-none flex-col items-center lg:prose-xl">
        <Image alt="" src={Icon} height={128} className="py-4" />
        <div className="flex flex-col items-center justify-center gap-x-16 lg:flex-row">
          <h2 className="uppercase lg:max-w-lg">
            Making cosmetics easy to access for everyone
          </h2>
          <Image alt="" src={humanSittingPic} width={500} />
        </div>
        <div className="flex flex-col items-center justify-center gap-x-16 lg:flex-row">
          <Image
            alt=""
            className="hidden lg:block"
            src={humanStandingPic}
            width={500}
          />
          <h2 className="text-end uppercase lg:max-w-lg">
            Revolutionize the beauty industry with frontier technology
          </h2>
          <Image
            alt=""
            className="lg:hidden"
            src={humanStandingPic}
            width={500}
          />
        </div>
        <div className="mt-8 mb-2 w-full text-center text-xl font-bold uppercase">
          Learn More
        </div>
        <FaArrowDown className="left-1/2 inline w-full animate-bounce text-2xl" />
      </article>
    </main>
  );
}
