interface ProjectInfoProps {
    name: string;
    description?:string;
    stack: string;
}
export function ProjectInfo({ name, description, stack }: ProjectInfoProps) {
    return (
        <div className="lg:w-[350px] w-11/12 gap-y-6 flex flex-col lg:h-[350px] h-[300px] self-center pb-6 lg:pb-0">
            <div className="bg-white lg:h-[200px] h-[150px] flex flex-col justify-center p-6 rounded-md">
                <h1 className="text-lg font-bold">{name}</h1>
                <p className="italic">{description}</p>
            </div>
            <div className="bg-white lg:h-[150px] h-[100px] flex items-center p-6 rounded-md">{stack}</div>
        </div>
    )
}