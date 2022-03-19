import "./nav.css"
import {AiOutlineHome,AiOutlineUser,AiOutlineMessage} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import { useState } from "react"
const Nav = () => {
    const [activeNav, setActiveNav]=useState("#")
    const changeNav = (location) =>{
        setActiveNav(location)
    }
    return ( 
        <nav>
            <a href="# " onClick={()=>changeNav("#")} className={activeNav==="#" ? "active":""}><AiOutlineHome/></a>
            <a href="#about" onClick={()=>changeNav("#about")} className={activeNav==="#about" ? "active":""}><AiOutlineUser/></a>
            <a href="#experience" onClick={()=>changeNav("#experience")} className={activeNav==="#experience" ? "active":""}><BiBook/></a>
            <a href="#services" onClick={()=>changeNav("#services")} className={activeNav==="#services" ? "active":""}><RiServiceLine/></a>
            <a href="#contact" onClick={()=>changeNav("#contact")} className={activeNav==="#contact" ? "active":""}><AiOutlineMessage/></a>
        </nav>
    );
}

export default Nav;