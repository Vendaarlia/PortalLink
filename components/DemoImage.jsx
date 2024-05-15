"use client";
import { useTheme } from "next-themes"

export default function DemoImage() {
    const { resolvedTheme, systemTheme } = useTheme();
    let currentTheme = resolvedTheme == "dark" ? '/demo.png' : '/demo.png';
    return (
        <div className="border border-[--pink] w-[70vw] rounded-[5px] ">
            <img className="rounded-[5px]" src={currentTheme} alt="demo" />
        </div>
    )
}

// this component for image for chaneg with theme