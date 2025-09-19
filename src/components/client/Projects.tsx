"use client";

import jsonProjects from "@/../public/projects.json";
import { useTranslation } from "next-i18next";
import { Project, Skills } from ".";

type Locale = "fr" | "en";

export const Projects = () => {
    const { t, i18n } = useTranslation("projects");
    const locale = i18n.language as Locale;

    const projects = jsonProjects.map(project => (
        <Project
            key={project.id}
            title={project.title[locale]}
            description={project.description[locale]}
            btnTitle={t("see-more")}
            onClick={() => console.log("click aciic")}
            webProject={project.webProject}
        />
    ));

    return (
        <div>
            <h2>{t("projects")}</h2>
            <Skills/>
            {projects}
        </div>
    );
};
