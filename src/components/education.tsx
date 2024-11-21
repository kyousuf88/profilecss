import "../style/education.css";
function Education(){
    return(
        <main className="edu-main">
            <div className="edu-text">
                <h1>Education</h1>
                <p>Trusted by Proessionals for Exceptionl Quality and Servicesour client from various
                    industries trust us to deliver top-notch quality and results.Here's what they have to say
                    about our work..
                </p>
            </div>
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">University of Karachi</h1>
                    <span>Completed</span>
                </div>
                <div className="commerce">
                    <h1>Bachelor in Commerce</h1>
                    <p>I am pursuing a Bachelor's degree i Commerce the prestigious University 
                        of Karachi.starting in 2006.This program will provide us foundation in programming 
                        software development and data analysis.
                    </p>
                </div>
            </div>
            {/* box 2*/}
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Governor IT initiative</h1>
                    <span>Student</span>
                </div>
                <div className="commerce">
                    <h1>Certified Web 3.0 and metaverse</h1>
                    <p>At the governor IT Initiative,student explore AI,Metaverse and Blockchain technologies
                        in an accesable manner.This free program is an excellent opportunity for those interested in these
                        innovative fields.
                    </p>
                </div>
            </div>
            {/* box 3*/}
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Web Development</h1>
                    <span>Student</span>
                </div>
                <div className="commerce">
                    <h1>Certificate of web training</h1>
                    <p>At smit, student gain knowledge in web development,digital marketing and freelancing 
                        from exceptional teachers.They offer valuable mentorship,student with practical skills essential for career success.
                    </p>
                </div>
            </div>

        </main>
    )
}
export default Education;