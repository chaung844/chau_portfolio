interface ExperienceInfoProps {
    position?: string;
    company?:string;
    date?: string;
    description?: string | null;
}
export function ExperienceInfo({ position, company, date, description }: ExperienceInfoProps) {
    return (
        <div className="grid grid-cols-2 pb-10">
            <h2 className="text-base">{date}</h2>
            <div>
                <h2 className="font-extrabold text-xl">{position}</h2>
                <h3 className="text-lg italic">{company}</h3>
                {description && <h4 className="pt-3">{description}</h4>}
            </div>
        </div>
    )
}