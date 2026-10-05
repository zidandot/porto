import Button from "./UI/Button";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Hero() {
  return (
    <>
      <div className="flex justify-around mx-5 my-25 h-[75vh] items-center">
        <div className="flex flex-col gap-5 justify-center">
          <h1 className="max-w-2xl text-7xl font-bold text-neutral-800">
            I'm <span className="text-neutral-1000">Muhammad Zidan</span> Web
            Developer & UI/UX Designer
          </h1>
          <p>
            I build fast, modern, and user-friendly websites and web aplications
            that help brands grow and user happy.
          </p>
          <div className="flex gap-4">
            <Link href={"/login"}>
              <Button children="See my work" />
            </Link>
            <Link href={"/login"}>
              <Button children="Download CV" />
            </Link>
          </div>
          <div>
            <p>Connect with me</p>
            <div className="flex gap-8">
              <div className="flex rounded-full border-neutral-200 border-2 h-13 w-13 items-center justify-center">
                <FaGithub className="h-8 w-8" />
              </div>
              <div className="flex rounded-full border-neutral-200 border-2 h-13 w-13 items-center justify-center">
                <FaLinkedin className="h-8 w-8" />
              </div>
              <div className="flex rounded-full border-neutral-200 border-2 h-13 w-13 items-center justify-center">
                <FaInstagram className="h-8 w-8" />
              </div>
              <div className="flex rounded-full border-neutral-200 border-2 h-13 w-13 items-center justify-center">
                <IoIosMail className="h-9 w-9" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/fotoo.png"
            width={850}
            height={850}
            alt="pictures of Zidan"
            className="relative z-10"
          />
          <div className="rounded-full bg-neutral-1000 h-100 w-100 absolute -bottom-24 left-8 z-0"></div>
        </div>
      </div>
    </>
  );
}
