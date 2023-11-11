import { HamNavBar } from "./HamNavBar";



const menuItems = [
    {
        label: "About",
        key: "about",
        link: "#about",
    },
    {
        label: "Experience",
        key: "experience",
        link: "#experience",
    },
    {
        label: "Projects",
        key: "projects",
        link: "#projects",
    },
    {
        label: "Activities",
        key: "activities",
        link: "#activities",
    }
];

export function NavBar() {
    return (
        <nav className="h-14 w-full flex bg-black text-white fixed items-center px-8 z-50 space-x-6 justify-end">
            <h1 className="mr-auto">Chau Nguyen</h1>
            {/* Large screen menu */}
            <div className="space-x-4 lg:block hidden">
                {menuItems.map(item => 
                    <a href={item.link} className="">{item.label}</a>
                )}
            </div>
            {/* Small-medium screen menu */}
            <div className="flex lg:hidden">
                <HamNavBar menuItems={menuItems}/>
            </div>
        </nav>
    )
}