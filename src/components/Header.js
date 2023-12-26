import React  from "react"
import logo192 from  "../images/logo192.png"



export default function Header(){
    return(
        <>
        
        <nav className='nav'>
            <img  src = {logo192} alt="react"className='react_img'></img>
            <ul className='nav-items'>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        </>
    )
}

//export default Header 