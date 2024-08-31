import React from "react";
import ContactForm from "@/Components/ContactForm.jsx";
import { RiInstagramLine } from "react-icons/ri"
import { CiLinkedin } from "react-icons/ci";
import { SiGithub } from "react-icons/si";
import Link from "next/link";

function ContactPage(){


    return(
        <div className="w-full flex justify-center items-center p-4 ">
               <section id="about" className="md:p-8">
                 <div className="container mx-auto">
                     <h2 className="text-5xl font-bold text-center mb-8">Contact</h2>
                     <div className="flex sm:flex-row flex-col ">
                        <div className="md:w-1/2">
                            <p className="text-2xl font-semibold mb-2">Connect with me</p>
                            <p>If you want to know more about me or my work, or if you would just
                                like to say hello, send me a message. I'd love to hear from you.</p>
                            <ContactForm />
                        </div>

                        <div className=" flex flex-col justify-center items-center md:w-1/2 sm:mt-0 mt-10">
                            <div>
                            <div className="mb-10">
                                <p className="text-2xl font-bold mb-3">
                                    Email
                                </p>
                                <p>
                                    Pawanpatel7688@gmail.com
                                </p>
                            </div>

                            <div className="mb-10">
                                <p className="text-2xl font-bold mb-3">
                                    Address
                                </p>
                                <p>
                                    Sai nagar, Surat
                                </p>
                                <p>Gujarat, India</p>
                            </div>

                            <div className="mb-10">
                                <p className="text-2xl font-bold mb-3">
                                    Social  
                                </p>
                                <div className="flex justify-between">
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

                            </div>
                        </div>

                     </div>
                    
                 </div>
             </section>
        </div>
    )
}

export default ContactPage
