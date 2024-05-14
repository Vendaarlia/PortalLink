'use client'
import PortalLlink from "@/components/PortalLink";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TopNav({ active = [], showBack = false, link }) {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (!username) {
            fetch("/api/get")
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.data !== null) {
                        setUsername(data.data.username);
                        setShow(true);
                    }
                    else {
                        setShow(true);
                    }
                });
        }
    });

    const activeClass = "bg-primary text-white";
    const primaryClass = "h-10 px-4 rounded-full dark:border-none border bg-secondary hover:bg-primary hover:text-white transition flex items-center justify-center text-sm"
    return (
        <div className="py-3 px-6">
            <div className="flex flex-wrap gap-2 items-center">
                <PortalLlink />
                <Link href="/dashboard/profile" className={cn(primaryClass, active.includes("Profile") && activeClass)}>Profile Setting</Link>
                <Link href="/dashboard/manage" className={cn(primaryClass, active.includes("Edit") && activeClass)}>Dashboard</Link>
                <Link target={username ? "_blank" : ""} href={`/${!username ? "#" : username}`} className={cn(primaryClass, active.includes("Visit") && activeClass)}>Your Portal</Link>
            </div>
        </div>
    )
}

//unutk fungsi active masih belum berfungsi
// ini berfungsi untuk menampilkan active di linknya