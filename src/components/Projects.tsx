import { ProjectCarousel } from "./ProjectCarousel";
import { ProjectInfo } from "./ProjectInfo";
import projectData from "./data/projectData.json";
import { useEffect, useState } from "react";




export function Projects() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col justify-center bg-black scroll-mt-14 space-y-6 p-6" id="projects">
            <h1 className="text-2xl font-bold text-white w-11/12 lg:w-[954px] self-center">My Projects</h1>
            { projectData.map(project => 
                project.key % 2 == 0 || !isLargeScreen ?
                    <div className="flex flex-col lg:flex-row lg:self-center pb-14 lg:w-[954px] lg:space-x-6">
                        <ProjectInfo name={project.name} description={project.description} stack={project.stack}/> 
                        <ProjectCarousel />
                    </div> :
                    <div className="flex flex-col lg:flex-row lg:self-center pb-14 lg:w-[954px] lg:space-x-6">
                        <ProjectCarousel />
                        <ProjectInfo name={project.name} description={project.description} stack={project.stack}/> 
                    </div>
            )}
        </div>
    )
}