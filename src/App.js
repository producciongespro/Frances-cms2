import React, {useState, useEffect } from 'react';
import ResponsiveMenu from './comp/ResponsiveMenu';
import Splash from './comp/Spalsh';
import getData from './mod/getData';


function App() {
  const [arrayMenu, setArrayMenu ] = useState(null);
  

  useEffect(()=>{
    setup();    
  },[]);

  useEffect(()=>{   
    //console.log(arrayMenu);        
  })

  async function setup () {
      setArrayMenu(await getData( "http://frances-cms.ws/obtener_tipos.php" ));            
  }

  const handleCargarVista =(e)=> {
    e.preventDefault();
    let element = e.target;
    
    console.log(e.target.id);
    //Se elimina la clase activa de todos los elementos
    let btnMenu = document.getElementsByClassName("btn-menu");
    console.log("btnMenu",btnMenu);
    
    //btnMenu.classList.remove("active");
    //Se le asigna la clase activa al elemento seleccionado    
    element.classList.add("active");
    
  }

  return (
    <div className="container">
      {
        arrayMenu ?
        <ResponsiveMenu arrayMenu={arrayMenu} handleCargarVista={handleCargarVista} />        
        :
        <Splash />
      }
     
    </div>
  );
}

export default App;
