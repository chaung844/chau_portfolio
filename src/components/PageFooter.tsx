import { LinkedinFilled, GithubFilled } from "@ant-design/icons";
import { Button } from "antd";

export function PageFooter() {

    function handleOpenNewTab(url: string) {
        window.open(url, "_blank", "noopener noreferrer");
    }

    return (
        <div className="flex flex-col h-[25vh] bg-black text-white justify-center items-center">
            <h1>Footer</h1>
            <h2>Chau Nguyen</h2>
            <div className="flex justify-center mt-6 space-x-4">
                <Button className="border-none text-white" icon={<LinkedinFilled />} onClick={() => handleOpenNewTab("https://www.linkedin.com/in/chaunguyen844/")} />
                <Button className="border-none text-white" icon={<GithubFilled />} onClick={() => handleOpenNewTab("https://github.com/chaung844")} />
            </div>

        </div>
    )
}