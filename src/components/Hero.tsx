import { Button } from "antd";



export function Hero() {
    return (
        <div id="hero" className="flex flex-col h-[90vh] pt-[46px] text-white bg-black justify-center items-center shadow-lg">
            <h2 className="text-lg">Full-stack developer</h2>
            <h1 className="text-5xl font-bold">Chau Nguyen</h1>
            <Button type="link" href="#dummy" className="text-lg">about me: portfolio</Button>
        </div>
    )
}