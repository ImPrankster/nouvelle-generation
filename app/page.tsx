import Image from "next/image";
import humanSittingPic from "../public/home/human-sitting.png";
import humanStandingPic from "../public/home/human-standing.png";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
  return (
    <main className="p-8 lg:px-16">
      <article className="prose max-w-none lg:prose-xl">
        <div className="h-8" />
        <div className="flex flex-col items-center justify-center gap-x-16 lg:flex-row">
          <h1 className="uppercase lg:max-w-lg">
            Making Cosmetics Accessible to{" "}
            <span className="text-primary">Everyone</span>
          </h1>
          <Image alt="" className="" src={humanSittingPic} width={500} />
        </div>
        <div className="flex flex-col items-center justify-center gap-x-16 lg:flex-row">
          <Image
            alt=""
            className="hidden lg:block"
            src={humanStandingPic}
            width={500}
          />
          <h1 className="text-end uppercase lg:max-w-lg">
            A wiki & community for all things{" "}
            <span className="text-primary">L&apos;Oreal</span>
          </h1>
          <Image
            alt=""
            className="lg:hidden"
            src={humanStandingPic}
            width={500}
          />
        </div>
        <div className="mt-8 mb-2 w-full text-center text-xl font-bold uppercase text-neutral">
          Learn More
        </div>
        <FaArrowDown className="left-1/2 inline w-full animate-bounce text-2xl text-neutral" />
      </article>
    </main>
  );
}
