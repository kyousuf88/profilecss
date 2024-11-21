import "../style/services.css";
import { GiSoundOn } from "react-icons/gi";
import { GrGamepad } from "react-icons/gr";
import { GiPhotoCamera } from "react-icons/gi";
import { RiAdvertisementFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";

function Services () {
    return(
        <main className="main">
            <div className="ser-container">
                  {/* top div */}
                  <div className="top-div-ser">
                    <h2 className="title-ser">My Services</h2>
                    <p className="dec-ser">I have asolid foundation in web development,specializing in HTML,CSS and JavaScript.My experience extend to using framework like React and Next.js to create dynamic and user-friendly applications.I"m also proficient in Tailwind CSS for efficient styling and design. with apassion for learning,I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.</p>
                  </div>
                  {/* bottom div */}
                  <div className="boxes-cont">
                    <div className="box">
                      <FaLaptopCode className="ser-icon"/>
                      <h3>Web Development</h3>
                      <span>Blog, E-Commerce</span>
                    </div>
                    <div className="box">
                      <GiSoundOn className="ser-icon"/>
                      <h3>Sound Design</h3>
                      <span>Voice Over</span>
                    </div>
                    <div className="box">
                      <GrGamepad className="ser-icon"/>
                      <h3>Game Design</h3>
                      <span>Design,Props and Object</span>
                  </div>
                    <div className="box">
                      <GiPhotoCamera className="ser-icon"/>
                      <h3>Photography</h3>
                      <span>Portrait,photography</span>
                    </div>
                    <div className="box">
                      <RiAdvertisementFill className="ser-icon"/>
                      <h3>Advertisement</h3>
                      
                    </div>
                    <div className="box">
                      <FaLaptopCode className="ser-icon"/>
                      <h3>Web Development</h3>
                      <span>Blog, E-Commerce</span>
                    </div>
                  </div>
            </div>
        </main>
   )
}
export default Services;