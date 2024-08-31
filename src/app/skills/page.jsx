import React from "react";
import Image from "next/image";

function SkillPage() {
    return (
        <div className="w-full px-4 py-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-screen-lg mx-auto">
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
                {/* <Card techName="React" url="/images/react.png" />
                <Card techName="Node.js" url="/images/nodejs.png" />
                <Card techName="Express" url="/images/express.png" />
                <Card techName="MongoDB" url="/images/mongodb.png" />
                <Card techName="Next.js" url="/images/nextjs.png" /> */}
                
            </div>
        </div>
    );
}

const Card = ({ techName, url }) => {
    return (
        <div className="p-4 border border-gray-300 bg-white rounded-lg shadow-md flex flex-col items-center">
             <div className="relative w-[100px] h-[150px]">
            <Image 
            src={url} 
            alt={`${techName}_icon`} 
            layout="fill"
            objectFit="contain" // Maintains aspect ratio and fits within the container
            className="rounded-lg" />
             </div>
            <div className="mt-2 text-center font-bold text-gray-700">{techName}</div>
        </div>
    );
}

export default SkillPage;
