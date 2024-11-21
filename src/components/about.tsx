import Image from "next/image";
import "../style/hero.css";
import "../style/about.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
function About() {
    return (
        <div className="header-container">
            <div className="header-boxes-con">
                {/* left */}
                <div>
                    <Image src={"/Images/kanwal.jpg"}
                    width={200}
                    height={200}
                    className="header-Image"
                    alt="Profile"/>
                    <div className="social-icon">
                     <Link href={""}> <FaYoutube className="s-icon1"/></Link>
                     <Link href={""}><FaFacebook className="s-icon2"/></Link>
                     <Link href={""}><FaInstagramSquare className="s-icon3"/></Link>
                     </div>
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">About Us
                    </h1>
                    <p className="des-hero">I am a student of GIAIC, pursuing a course in Artificial Intelligence, Web 3.0, and Metaverse. Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.</p>
                
                </div>
            </div>
        </div>
    );
}

export default About;
