"use client";

import { Header, Projects, About, Contact } from "@/components/client";
import React, { useRef } from "react";

export default function Page() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const handleGoToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const handleGoToProject = () => {
        projectRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const handleGoToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main>
            <Header
                onClickAbout={handleGoToAbout}
                onClickProject={handleGoToProject}
                onClickContact={handleGoToContact}
            />
            <div ref={aboutRef}>
                <About />
            </div>

            <div ref={projectRef} className="scroll-mt-10">
                <Projects />
            </div>
            <div ref={contactRef} className="scroll-mt-10">
                <Contact />
            </div>
        </main>
    );
}
