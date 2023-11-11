import { MenuOutlined, LinkedinFilled, GithubFilled } from "@ant-design/icons";
import { Button, Drawer, Divider } from "antd";
import { useState } from "react";



interface menuItem {
    label: string;
    key: string;
    link: string;
}

interface HamNavBarProps {
    menuItems: menuItem[];
}

export function HamNavBar({ menuItems }: HamNavBarProps) {
    const [open, setOpen] = useState<boolean>(false);
    
    function handleMenuOpen() {
        setOpen(true);
    }
    
    function handleOpenNewTab(url: string) {
        window.open(url, "_blank", "noopener noreferrer");
    }

    return (
        <>
            <Button type="link" icon={<MenuOutlined className="text-white"/>} onClick={handleMenuOpen}/>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                width={400}
            >
                <div className="flex flex-col h-full">
                <div className="flex flex-col space-y-4 text-center text-2xl">
                    {menuItems.map(item => 
                        <a href={item.link} onClick={() => setOpen(false)}>{item.label}</a>
                    )}
                </div>
                <div className="flex justify-center mt-auto space-x-4">
                    <Button className="border-none" icon={<LinkedinFilled />} onClick={() => handleOpenNewTab("https://www.linkedin.com/in/chaunguyen844/")} />
                    <Button className="border-none" icon={<GithubFilled />} onClick={() => handleOpenNewTab("https://github.com/chaung844")} />
                </div>
                </div>
            </Drawer>
        </>
    )
}