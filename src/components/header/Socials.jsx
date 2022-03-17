import {BsLinkedin, BsGithub, BsFacebook, BsInstagram} from "react-icons/bs"
const Socials = () => {
    return ( 
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/hazem-abdennadher/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/c-yrus" target="_blank"><BsGithub/></a>
            <a href="https://www.facebook.com/Ha.Zem.A.07" target="_blank"><BsFacebook/></a>
            <a href="https://www.instagram.com/hazem_kami/" target="_blank"><BsInstagram/></a>
        </div>
    );
}

export default Socials;