import React, {useState, useEffect } from 'react';
import ResponsiveMenu from './comp/ResponsiveMenu';
import Splash from './comp/Spalsh';

import getData from './mod/getData';

function App() {
  const [ready, setReady ]= useState(false);
  var arrayMenuBtns=null;

  useEffect(()=>{
    setup();
  },[])

  async function setup () {
    arrayMenuBtns = await getData( "http://frances-cms.ws/obtener_tipos.php" );
      console.log(arrayMenuBtns);
      setReady(true);
  }

  return (
    <div className="container">
      {
        ready ?
        arrayMenuBtns && <ResponsiveMenu arrayMenuBtns={arrayMenuBtns} />
        :
          <Splash />
      }
     
    </div>
  );
}

export default App;
