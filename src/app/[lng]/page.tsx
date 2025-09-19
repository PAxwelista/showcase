import { Header, Projects } from "@/components/client";
import { About } from "@/components/server";

export default function Page() {
    return (
        <main>
            <Header />
            <About />
            <Projects/>
        </main>
    );
}
