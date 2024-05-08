import { Carousel } from "antd"; 
import { useRef, useState } from "react";



export function ProjectCarousel() {
    const [isHover, setIsHover] = useState<boolean>(false);
    const ref = useRef<any>(null);

    function handleMouseLeave() {
        setIsHover(false);
        if (ref.current) {
            ref.current.goTo(0,true);
        }
    }
    return (
        <div className="lg:h-[350px] h-[300px] lg:w-[580px] w-11/12 bg-black self-center" onMouseEnter={() => setIsHover(true)} onMouseLeave={handleMouseLeave}>
            <Carousel ref={ref} effect="fade" autoplay={isHover} autoplaySpeed={500} dots={false} className="text-center w-full lg:h-[350px] h-[300px] bg-blue-200">
                <div>
                    <h1>Thumbnail</h1>
                </div>
                <div>
                    <h1>chau</h1>
                </div>
                <div>
                    <h1>nho nho nho</h1>
                </div>
                <div>
                    <h1>nho nho nho nho</h1>
                </div>
                <div>
                    <h1>nho nho nho nho nho</h1>
                </div>
                <div>
                    <h1>nho nho nho nho nho nho</h1>
                </div>
            </Carousel>
        </div>
    )
}