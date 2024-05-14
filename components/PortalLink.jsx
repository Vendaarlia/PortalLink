import Link from "next/link";

export default function PortalLlink() {
    return (
        <Link href="/" className="select-none">
            <p className="mx-[4px] px-[15px] py-[2px] border-[#ed89fb] border-[1px] rounded-[5px] text-[--pink] hover:bg-[#ed89fb] hover:text-[#c9d1f5]">Portal</p>
        </Link>
    )
}