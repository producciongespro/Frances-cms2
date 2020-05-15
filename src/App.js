import React, {useState, useEffect } from 'react';
import ResponsiveMenu from './comp/ResponsiveMenu';
import Splash from './comp/Spalsh';
import ContTextos from './comp/ContTextos';

import getData from './mod/getData';
import resaltar from './mod/resaltar';

var arrayTextos= null;
var arrayMenu= null;


function App() {
  const [compActual, setCompActual] = useState(null);
  const [listo, setListo] = useState(false);
    

  useEffect(()=>{
    iniciar();
  },[]);

  useEffect(()=>{   
   //console.log(arrayTextos);        
  })

  async function iniciar () {
      arrayMenu= await getData( "http://frances-cms.ws/obtener_tipos.php" );            
      arrayTextos= await getData( "http://frances-cms.ws/obtener_textos.php" );    
      setListo(true);
      setCompActual( <ContTextos texto={arrayTextos[0].contenido  } /> )
      console.log("arrayMenu",arrayMenu);
      
  }

  const handleCargarVista =(e)=> {
    e.preventDefault();
    resaltar(e.target, "btn-menu");    
      console.log(e.target.id);

      switch (e.target.id) {
        case "bienvenida":
            setCompActual( <ContTextos texto={arrayTextos[0].contenido  } /> )
        break;        
        case "publicaciones":
            setCompActual( <h1> Publicaciones </h1> )
        break;
      
        default:
          break;
      }
    
    
    
    
  }

  return (
    <div className="container">
      {
        listo ?
          <React.Fragment>            
              <ResponsiveMenu arrayMenu={arrayMenu} handleCargarVista={handleCargarVista} />        
              <br/>
              {
                compActual
              }
          </React.Fragment>
        :
        <Splash />
      }
     
    </div>
  );
}

export default App;
