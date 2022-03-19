import "./footer.css"
import {BsLinkedin, BsGithub, BsFacebook, BsInstagram} from "react-icons/bs"
const Footer = () => {
    return ( 
        <footer id="footer">
            <a href="# "className="footer__logo">HAZEM</a>
            <ul className="permalinks">
                <li><a href="# ">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
            <a href="https://www.linkedin.com/in/hazem-abdennadher/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/c-yrus" target="_blank" rel="noreferrer"><BsGithub/></a>
            <a href="https://www.facebook.com/Ha.Zem.A.07" target="_blank" rel="noreferrer"><BsFacebook/></a>
            <a href="https://www.instagram.com/hazem_kami/" target="_blank" rel="noreferrer"><BsInstagram/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; | Made With <span>💖</span> By Hazem Abdennadher</small>
            </div>
        </footer>
    );
}
export default Footer;