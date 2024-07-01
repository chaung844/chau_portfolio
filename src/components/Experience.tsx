import { ExperienceInfo } from "./ExperienceInfo";
import experienceData from "./data/experienceData.json";


export function Experience () {
    return (
        <div className="flex flex-col justify-center scroll-mt-14 space-y-6 p-6" id="experience">
            <h1 className="text-2xl font-bold w-11/12 lg:w-[954px] self-center">Experience</h1>
            <div className="w-11/12 lg:w-[954px] self-center">
                {experienceData.map(experience => 
                    <ExperienceInfo position={experience.position} company={experience.company} date={experience.date} description={experience.description}/>
                )}
            </div>
        </div>   
    )
}