import React from 'react';
import './responsiveMenu.css';


function ResponsiveMenu (props) {
    console.log("Prueba");
    
    console.log("datos",props.arrayMenuBtns);
    

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
                        props.arrayMenuBtns.map((item,i)=>(
                            <a href="prueba" key={"button"+i }>  {item} </a>
                        ))
                    }
            <a href="icono" className="icon"  onClick={handleDesplegarMenu}>
                <i className="fas fa-bars"></i>    
            </a>
            </div>


    );    
}

export default ResponsiveMenu;