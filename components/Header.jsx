import Link from "next/link";
import { Button } from "./ui/button";
import { currentUser } from "@clerk/nextjs";
import Logo from "./Logo";
import PortalLlink from "./PortalLink";

export default async function Header() {
    const user = await currentUser();
    return (
        <header className="flex justify-between items-center border-[#ed89fb] border-[1px] rounded-[5px] w-[75vw] h-[35px] mx-[auto] mt-4">
            <PortalLlink />
            <div>
                <Logo />
            </div>
            <Link href={!user ? "/sign-in" : "/dashboard/manage"} className="mx-[4px] px-[15px] py-[2px] border-[#ed89fb] border-[1px] rounded-[5px] hover:bg-[#ed89fb] hover:text-[#c9d1f5]">{!user ? "Login" : "Dashboard"}</Link>
        </header>
    )
}

// <Button className="p-0 m-0" asChild><Link href={!user ? "/sign-in" : "/dashboard/profile"} className="mx-[4px] py-[0] px-[15px] border-[#ed89fb] border-[1px] rounded-[5px] leading-none">{!user ? "Login" : "Dashboard"}</Link></Button>
