import React from "react";
import Image from "next/image";

function EducationPage() {
    return (
        <div className="w-full px-4 py-6 md:py-8 flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">Education</h1>

            {/* First Education Item */}
            <div className="flex flex-col md:flex-row items-center w-full max-w-4xl mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex-1 p-4 md:p-6">
                    <p className="text-2xl font-semibold">Parul Institute of Engineering & Technology</p>
                    <p className="text-xl mt-2"><span>B-Tech, Computer Science</span></p>
                    <p className="text-lg mt-1"><span>June 2018 - May 2022</span></p>
                </div>
                <div className="w-full md:w-1/3">
                    <Image
                        src="/images/parul_university.webp"
                        alt="Parul University"
                        width={400}
                        height={250}
                        layout="responsive"
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Second Education Item */}
            <div className="flex flex-col md:flex-row items-center w-full max-w-4xl mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex-1 p-4 md:p-6">
                    <p className="text-2xl font-semibold">Arihant Public School</p>
                    <p className="text-xl mt-2"><span>Senior Secondary</span></p>
                    <p className="text-lg mt-1"><span>June 2016 - March 2018</span></p>
                </div>
                <div className="w-full md:w-1/3">
                    <Image
                        src="/images/arihant_school.jpg"
                        alt="Arihant Public School"
                        width={400}
                        height={250}
                        layout="responsive"
                        className="object-cover"
                    />
                </div>
            </div>

           

        </div>
    );
}

export default EducationPage;

