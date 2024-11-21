import Image from "next/image";
import "../style/hero.css";

function Hero() {
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

                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">I'm Kanwal yousuf
                        Front-end Developer
                    </h1>
                    <p className="des-hero">A dedicated front-end developer and eager student,I combine creativity and tecnical skills to craft seemless use experiences.Always exploring new tools and techniques to improve my craft and stay ahead in the fast-paced tech world</p>
                <button className="hero-btm">HIRE ME</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
