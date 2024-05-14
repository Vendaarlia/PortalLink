import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="select-none hover:underline">
            <p className="text-[--pink] mx-[4px] px-[15px] py-[2px]">DCARDGM</p>
        </Link>
    )
}