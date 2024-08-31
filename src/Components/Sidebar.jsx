"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () =>{
   return (
    <div className="flex flex-col h-screen border border-white md:w-1/4 lg:w-1/5">
        <div className="flex justify-center items-center py-2 md:px-3">
           <Image src="/images/My_Profile_pic.jpeg" 
                  alt="Profile Picture"
                  width={200} 
                  height={200}
                  className="md:px-4 md:py-3 border  rounded-full"
            />
        </div>

           <nav className="h-full flex flex-col justify-around items-center py-3 mt-5 mx-5">
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
      >
        {children}
      </Link>
    
      );
}

export default Sidebar;