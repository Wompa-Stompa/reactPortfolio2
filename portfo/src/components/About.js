import React from "react";

 function About() {
    return (
        <section className="about">
            <div className="row">
                <div className="three columns">
                    <img className="pic" alt="Chris" src="./components/img" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>

                    <p>Chris Broussard is a front end web developer, currently attending a Vanderbilt Coding Bootcamp.</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Info</h2>
                            <p className="info"> </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default About;