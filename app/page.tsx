// until 1 hr 14 min
// link: https://www.youtube.com/watch?v=FTH6Dn3AyIQ


import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";


// Creating Home page
export default function Home() {
  return (
    <main className="relative bg-black-100 text-white flex justify-center 
                      items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
      </div>
    </main>
  );
}
