import CTA from "./CTA";
import ME from "../../assets/me.jpg"
import "./header.css"
import Socials from "./Socials";
const Header = () => {
    return ( 
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Abdennadher Hazem</h1>
                <h5 className="text-light">Front-end Developer</h5>
                <CTA/>
                <Socials/>
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;