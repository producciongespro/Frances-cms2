import React from 'react';
import './responsiveMenu.css';


function ResponsiveMenu (props) {

    const handleDesplegarMenu =(e)=>{
        e.preventDefault();
        var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }

    }


    return (

<div className="topnav" id="myTopnav">
  <a href="#home" className="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="icono" className="icon"  onClick={handleDesplegarMenu}>
      <i className="fas fa-bars"></i>    
  </a>
</div>


    );    
}

export default ResponsiveMenu;