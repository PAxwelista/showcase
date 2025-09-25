"use client";

import jsonProjects from "@/../public/projects.json";
import { useTranslation } from "next-i18next";
import { Project, Skills } from ".";
import { useState } from "react";

type Locale = "fr" | "en";

export const Projects = () => {
    const { t, i18n } = useTranslation("projects");
    const locale = i18n.language as Locale;
    const [selectSkills, setSelectSkills] = useState<string[]>([]);

    const handleClickSkill = (clickSkill: string) => {
        setSelectSkills(prev =>
            prev.includes(clickSkill) ? prev.filter(skill => skill != clickSkill) : [...prev, clickSkill]
        );
    };

    const filterProjects = jsonProjects.filter(project => selectSkills.every(skill => project.skills.includes(skill)));

    const nbProjectsFilters = filterProjects.length;

    const projects = filterProjects.map(project => (
        <Project
            key={project.id}
            title={project.title[locale]}
            description={project.description[locale]}
            btnTitle={t("see_project")}
            href={project.href || null}
            webProject={project.webProject}
            picturesUrl={project.picturesUrl}
        />
    ));

    return (
        <div>
            <h2>{t("projects")}</h2>
            <Skills
                selectSkills={selectSkills}
                onSelectSkill={handleClickSkill}
                projectsSkills={jsonProjects.map(project => project.skills)}
            />
            <p>
                {t("nb_projects")} : {nbProjectsFilters}
            </p>
            {projects}
        </div>
    );
};
