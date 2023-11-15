interface ProjectInfoProps {
    name: string;
    description?:string;
    stack: string;
}
export function ProjectInfo({ name, description, stack }: ProjectInfoProps) {
    return (
        <div className="lg:w-[300px] w-11/12 space-y-6 flex flex-col lg:h-[500px] h-[300px] self-center pb-6 lg:pb-0">
            <div className="bg-white lg:h-[200px] h-[150px]">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            <div className="bg-white h-full">{stack}</div>
        </div>
    )
}