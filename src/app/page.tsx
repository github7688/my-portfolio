import Image from "next/image";
import TextCarousel from "@/components/TextCarousel";
import Link from "next/link";
import heroBg from "../../public/images/herobg.svg";
import { RiInstagramLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { SiGithub } from "react-icons/si";


export default function HomePage() {
  return (
    <div className="w-full flex justify-center items-center ">
      {/* <Home/> */}

       <main
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
        id="/"
      >
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <p className="text-black">Hi, I am Pawan Patel</p>
            <p className="block text-pink-500 md:inline text-4xl">
              <TextCarousel />
            </p>
          </h1>
          <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          As a Front-End and Full-Stack Developer, I specialize in building dynamic web applications. I’m passionate about crafting seamless user experiences and tackling complex challenges to deliver innovative solutions.
          </p>
          <div className="flex md:justify-start mt-8">
          <div className="flex justify-between gap-x-4 md:gap-x-8">
                                   <Link href="https://www.instagram.com/manki_non/" target="_blank">
                                   <RiInstagramLine className="text-5xl" />
                                   </Link> 

                                   <Link href="https://www.linkedin.com/in/pawan-patel-6119351a4/" target="_blank">
                                   <CiLinkedin  className="text-5xl"/>
                                   </Link> 

                                   <Link href="https://github.com/github7688" target="_blank">
                                   <SiGithub  className="text-5xl"/>
                                   </Link> 
                                </div>
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 sm:mt-0 cursor-pointer w-1/3">
              <Link
                href="https://drive.google.com/file/d/17ntF8HWw9a2gYntc5QntCpBtwVEYHSIE/view?usp=sharing"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-400 hover:bg-black hover:text-white md:py-4 md:text-lg md:px-10"
                target="_blank"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
        {/* Show hero image on medium screens and above */}
        <div className="hidden md:block md:w-1/2">
          <Image src={heroBg} alt="Hero Image" width={800} height={800} />
        </div>
      </main>     
    </div>
  );
}
