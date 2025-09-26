"use client";

import skillsJson from "@/../public/skills/skills.json";
import Image from "next/image";
import React from "react";
import { Tooltip } from "react-tooltip";

type Props = {
    selectSkills: string[];
    onSelectSkill: (skill: string) => void;
    projectsSkills: string[][];
};

export const Skills = ({ selectSkills, projectsSkills, onSelectSkill }: Props) => {
    const skillsName = skillsJson.map(skill => skill.name);

    const projectsAvailable = projectsSkills.filter(projectSkills =>
        selectSkills.every(skill => projectSkills.includes(skill))
    );

    const possibleSkills = skillsName.filter(skillName =>
        projectsAvailable.some(projectAvailable => projectAvailable.includes(skillName))
    );

    const skills = skillsJson.map(skill => {
        const skillName = skill.name;
        const isSelect = selectSkills.includes(skillName);
        const isActive = possibleSkills.includes(skillName);

        return (
            <React.Fragment key={skillName}>
                <button
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={skillName}
                    data-tooltip-place="top"
                    className={`m-2 duration-200 ease-in-out ${isActive && "cursor-pointer hover:scale-110"} w-[50px] h-[50px] ${
                        isSelect && "shadow-[0px_4px] shadow-red-600"
                    }`}
                    onClick={() => onSelectSkill(skillName)}
                    disabled={!isActive}
                >
                    <Image
                        src={`/skills/images/${skill.pictureName}`}
                        alt={skillName}
                        width={50}
                        height={50}
                        className={`${!isActive && "grayscale"}`}
                    />
                </button>
                <Tooltip id="my-tooltip" />
            </React.Fragment>
        );
    });

    return <div className="flex flex-wrap m-5 justify-center">{skills}</div>;
};
