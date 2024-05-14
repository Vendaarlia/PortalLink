import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs";
import DemoImage from "./DemoImage";


export default async function Hero() {
    const user = await currentUser();
    return (
        <div className="py-5 px-5 mt-0 md:px-20 lg:px-32 grid">
            <div className="grid place-content-center text-center gap-2">
                <h1><span className="text-[--ijo]">PERSONAL<br/><span className="text-[var(--pink)]">PORTAL FOR</span><br/>YOUR LINK</span></h1>
                <p className="text-xs max-w-sm md:max-w-md text-center mx-auto">Use this for replace your linktree, this your personal scroll portal for connecting your audience with you.</p>
            </div>
            <div className="flex items-center justify-center gap-3 mt-7">
                <Button asChild><Link href={!user ? "/sign-in" : "/dashboard/manage"}>Get Started</Link></Button>
                <Button variant="outline" asChild><Link href="/vendaarlia">Demo <ArrowRight className="h-4 w-4 -rotate-45 ml-[2px]" /></Link></Button>
            </div>
            <div className="mt-20 bg-secondary p-1 rounded-lg w-fit mx-auto">
                <DemoImage/>
            </div>
        </div>
    )
}
