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
                    {
                        props.arrayMenu.map((item,i)=>(
                                <a 
                                    onClick={props.handleCargarVista}
                                    className="btn-menu"                                    
                                    href={item.identificador}
                                    key={"btn"+i}
                                    id={item.identificador}          
                                    >  
                                    {item.etiqueta }                                 
                                </a>
                        ))                     
                    }
            <a href="icono" className="icon"  onClick={handleDesplegarMenu}>
                <i className="fas fa-bars"></i>    
            </a>
            </div>
    );    
}

export default ResponsiveMenu;