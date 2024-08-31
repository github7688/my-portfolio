"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () =>{
   return (
    <div className="flex flex-col h-screen border border-white md:w-1/4 lg:w-1/5">
           <div className="relative mt-5 mx-auto w-11/12  h-1/5 md:h-2/5 lg:h-2/4 border border-white p-4 rounded-full overflow-hidden shadow-black shadow-lg">
               <Image
                   src="/images/My_Profile_pic.jpeg"
                   alt="Profile Picture"
                   layout="fill"
                   objectFit="cover" // Ensures the image covers the entire container without distortion
               // Applies rounding to the image, but `overflow-hidden` on container is key
               />
           </div>

           <nav className="h-full flex flex-col justify-around items-center py-3 mt-2 mx-5">
               <NavItem href="/">Home</NavItem>
               <NavItem href="/about">About</NavItem>
               <NavItem href="/skills">Skills</NavItem>
               <NavItem href="/education">Education</NavItem>
               <NavItem href="/contact">Contact</NavItem>
           </nav>
    </div>
   )
}


const NavItem = ({href, children}) =>{
    
    const pathname = usePathname();
    console.log(pathname);
    const isActive = pathname === href;
      
    return (
       
        <Link
        href={href}
        className={`flex items-center justify-center py-2 w-full transition-colors duration-300 ${isActive ? ' border border-black bg-black text-white' : ' border border-white hover:border-black hover:bg-black hover:text-white'}`}
        passHref
      >
        {children}
      </Link>
    
      );
}

export default Sidebar;