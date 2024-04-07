import React ,{useState, useEffect} from 'react'
import Logo from "../assets/logo.png"

export default function Header() {
  const[theme, setTheme] = useState("light");

  //document.documentElement.classList.add(theme);

  useEffect (() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  },[theme])

  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="Taskmate Logo" />
            <span>Taskmate</span>        
        </div>
         <div className="themeSelector">
            <span onClick={() => setTheme("light")} className="light"></span>
            <span onClick={() => setTheme("medium")} className="medium"></span>
            <span onClick={() => setTheme("dark")} className="dark"></span>
            <span onClick={() => setTheme("gOne")} className="gOne"></span>
            <span onClick={() => setTheme("gTwo")} className="gTwo"></span>
            <span onClick={() => setTheme("gThree")}className="gThree"></span>
         </div>
    </header>
  )
}
