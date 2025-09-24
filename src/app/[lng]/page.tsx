import { Header, Projects } from "@/components/client";
import { About, Contact } from "@/components/server";

export default function Page() {
    return (
        <main>
            <Header />
            <About />
            <Projects/>
            <Contact/>
        </main>
    );
}
