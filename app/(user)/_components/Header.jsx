import { ClerkLoading, SignOutButton, UserButton } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton"
import TopNav from "./TopNav";


export default async function Header() {
    return (
        <header className="flex justify-center align-middle ">
            <TopNav active={[""]} link="" />
            <div className="flex items-center mr-6">
                <UserButton afterSignOutUrl="/" />
                <ClerkLoading className="flex gap-3 items-center">
                    <Skeleton className="w-10 h-10 rounded-full" />
                </ClerkLoading>
            </div>
        </header>
    )
}