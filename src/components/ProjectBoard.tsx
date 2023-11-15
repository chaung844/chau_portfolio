import { ProjectCarousel } from "./ProjectCarousel";
import { ProjectInfo } from "./ProjectInfo";
import projectData from "./data/projectData.json";
import { useEffect, useState } from "react";




export function ProjectBoard() {
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
        <>
            <h1 className="text-center text-2xl font-bold">My Projects</h1>
            { projectData.map(project => 
                project.key % 2 == 0 || !isLargeScreen ?
                    <div className="flex flex-col lg:flex-row lg:space-x-6 justify-center pb-14">
                        <ProjectInfo name={project.name} description={project.description} stack={project.stack}/> 
                        <ProjectCarousel />
                    </div> :
                    <div className="flex flex-col lg:flex-row lg:space-x-6 justify-center pb-8">
                        <ProjectCarousel />
                        <ProjectInfo name={project.name} description={project.description} stack={project.stack}/> 
                    </div>
            )}
        </>
    )
}