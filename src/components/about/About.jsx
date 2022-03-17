import "./about.css"
import me from "../../assets/me-about.jpg"
import {FaAward} from "react-icons/fa"
const About = () => {
    return ( 
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={me} alt="About" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>1.5+ Years Working</small>
                        </article>

                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>1.5+ Years Working</small>
                        </article>

                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>1.5+ Years Working</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti unde quibusdam dolorum maxime sit ipsam nulla cupiditate quae optio, eaque ab doloribus ex quidem placeat! Hic dolore inventore illum voluptates.
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;