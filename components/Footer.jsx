import Link from "next/link";

export default function Footer() {
    return (
        <footer className="">
            <div className="wrap-marquee">
                <div className="mark-up">
                    <marquee direction="left" behavior="alternate">DUNGEON<span>PORTAL</span>LINK</marquee>
                    <marquee direction="right" behavior="alternate">DUNGEON<span>PORTAL</span>LINK</marquee>
                </div>
                <div className="line-diver"></div>
                <div className="mark-down">
                    <p>2024 DCARDGM.COM & VENDAARLIA</p>
                </div>
            </div>
        </footer>
    )
}

// for time being im using marquee tag for the footer but later i will use react-marquee