"use client";
import Head from "../extras/head";
import { TypeAnimation } from "react-type-animation";
import Modal from "@/components/Modal/Modal";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unique-Usman</title>
        <meta
          name="description"
          content="Hello there, I'm Unique-Usman. I'm a Computer Programmer."
        />
      </Head>
      <main
        style={{ backgroundImage: "url('/bg-blur.svg')" }}
        className="bg-right bg-no-repeat bg-contain h-full bg-[#011627] flex items-center md:h-[90.5%] md:mt-14"
      >
        <div className="m-auto w-3/4 md:w-11/12">
          <div className="text-[#e5e9f0]">
            <span className="md:text-sm">Hi all. I am</span>
            <h1 className=" text-[4em] my-0.5 -mt-1.5">Unique-Usman</h1>
            <h2 className="text-[#4d5bce] text-2xl">
               &gt; <TypeAnimation
                sequence={[
                  'I am a Computer Programmer', // initially rendered starting point
                  500,
                  'I use Arch and neovim btw',
                  500,
                  'I am learning Pytorch',
                  500,
                  'I am studying CSAI',
                  500
                ]}
                speed={20}
                style={{ fontSize: '1.5rem' }}
                repeat={Infinity}
                deletionSpeed={60}
              /> 
            </h2>
          </div>

          <div className=" mt-20">
            <span className="text-textColor md:text-sm">
              {`//`} find my profile on Github:
            </span>
            <p className="text-white md:text-sm">
              <span className="text-[#4d5bce]">const</span>{" "}
              <span className="text-[#43d9ad]">githubLink</span> ={" "}
              <span className="text-[#e99287]">
                &quot;
                <a
                  target="_blank"
                  href="https://github.com/Unique-Usman"
                  rel="noreferrer"
                >
                  https://github.com/Unique-Usman
                </a>
                &quot;
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
