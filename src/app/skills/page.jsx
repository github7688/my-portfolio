import React from "react";
import Image from "next/image";

function SkillPage() {
    return (
        <div className="w-full px-4 py-2">
            {/* Grid container with responsive columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-lg mx-auto">
                <Card techName="React" url="/images/react.png" />
                <Card techName="Node Js" url="/images/nodejs.png" />
                <Card techName="Express Js" url="/images/express.png" />
                <Card techName="MongoDB" url="/images/mongo.png" />
                <Card techName="Javascript" url="/images/javascript.png" />
                <Card techName="Next Js" url="/images/next.png" />
                <Card techName="Nest Js" url="/images/nestjs.png" />
                <Card techName="Typescript" url="/images/typescript.png" />
                <Card techName="Html" url="/images/html.png" />
                <Card techName="Css" url="/images/css.png" />
                <Card techName="GraphQL" url="/images/graphql.png" />
                <Card techName="C++" url="/images/cpp.png" />
                {/* Add more Card components if needed */}
            </div>
        </div>
    );
}

const Card = ({ techName, url }) => {
    return (
        <div className="p-4 border border-gray-300 bg-white rounded-lg shadow-md flex flex-col items-center">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex items-center justify-center">
                <Image 
                    src={url} 
                    alt={`${techName}_icon`} 
                    layout="fill"
                    objectFit="contain" // Maintains aspect ratio
                    className="rounded-lg"
                />
            </div>
            <div className="mt-2 text-center font-bold text-gray-700 text-xs sm:text-sm md:text-base">{techName}</div>
        </div>
    );
}

export default SkillPage;
