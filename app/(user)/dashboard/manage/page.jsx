import TopNav from "../../_components/TopNav";
import { Label } from "@/components/ui/label";
import { currentUser } from "@clerk/nextjs";
import ManageForm from "../../_components/ManageForm";
import Link from "next/link";


export default async function Page() {
    const { imageUrl, emailAddresses, firstName, lastName } = await currentUser();
    return (
        <div>
            <div className="py-10 px-7 md:px-20 lg:px-32 mb-14">
                <div>
                    <h1 className="text-[--pink]">Dashboard</h1>
                    <div className="flex flex-col items-center justify-center gap-2 mt-10">
                        <Link href="/user-profile/profile" className="cursor-pointer">
                            <img
                                className="w-20 h-20 rounded-full"
                                src={imageUrl}
                                alt="Profile image"
                            />
                        </Link>
                        <Label>Profile Image</Label>
                        <p className="text-xs">In order to edit profile image visit <Link href="/user-profile/profile" className="text-[--pink] hover:underline">Profile Setting</Link><span className="text-[--pink]"> *</span></p>
                    </div>
                    <ManageForm/>
                </div>
            </div>
        </div>
    )
}