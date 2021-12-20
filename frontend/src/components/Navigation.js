import React, {useState, useEffect} from 'react'
import { Link, Switch, BrowserRouter as Router } from "react-router-dom"
import {FaTwitter, FaTiktok, FaDiscord, FaFacebook, FaInstagram} from "react-icons/fa"
import "../styles/navbar.css"
const Navigation = () => {

    const [isOpen, setIsOpen] = useState(true);

    window.addEventListener("scroll", () => {
        console.log(window.screenY)
        
        if(window.screenY > 20){
            alert("bitch")
        }
    })

    const isOpenOrClose = () => {
        return isOpen ? "open" : "close"
    }

    useEffect(() => {
        

    }, [isOpen])
    return (
        <div style={{margin: "auto"}}>
            <ul className={isOpen ? "top-open" : "top-close"}>
                <li><Link className={isOpenOrClose()} to="/discord"><FaDiscord/></Link></li>
                <li><Link className={isOpenOrClose()} to="/instagram"><FaInstagram/></Link></li>
                <li><Link className={isOpenOrClose()} to="/tiktok"><FaTiktok/></Link></li>
                <li><Link className={isOpenOrClose()} to="/facebook"><FaFacebook/></Link></li>
                <li><Link className={isOpenOrClose()} to="/twitter"><FaTwitter/></Link></li>


          </ul>
        
            <ul className="nav">
                <li><Link className="title" to="/">The Gaming Dao</Link></li>
                <li><Link className="link" to="/about">About</Link></li>
                <li><Link className="link" to="/framework">Framework</Link></li>
                <li><Link className="link" to="/vision">Vision</Link></li>
                <li><Link className="link" to="/ecosystem">Ecosystem</Link></li>
                <li><Link className="link" to="/team">Team</Link></li>
                <li><Link className="link" to="/FAQ">FAQ</Link></li>
            </ul>
</div>

      
    )
}

export default Navigation
