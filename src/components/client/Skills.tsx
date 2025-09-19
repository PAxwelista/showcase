"use client";

import skillsJson from "@/../public/skills.json";
import Image from "next/image";
import React from "react";
import { Tooltip } from "react-tooltip";

export const Skills = () => {
    const skills = skillsJson.map(skill => (
        <React.Fragment key={skill.name}>
            <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content={skill.name}
                data-tooltip-place="top"
                className="m-2 cursor-pointer bg-red-100 w-[50px] h-[50px]"
            >
                <Image
                    src={require(`/public/${skill.imageName}`)}
                    alt={skill.name}
                    width={50}
                    height={50}
                />
            </button>
            <Tooltip id="my-tooltip" />
        </React.Fragment>
    ));

    return <div className="m-5">{skills}</div>;
};
