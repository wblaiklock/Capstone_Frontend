import { useState, useEffect } from 'react';

import React from 'react'
import ListItem from '../components/ListItem';
import Info from '../components/Info';

function Main({setHapps, happs}) {

  const [selectedHapp, setSelectedHapp] = useState(null);

  let list = () =>
    happs.map((Happ) => {
      return <ListItem key={Happ._id} happ={Happ} setSelectedHapp={setSelectedHapp}/>;
    });


  return (
    <main>
       <div className="header">    
            <a href="./landing" ><img src="../img/logo.png" id="logo"/></a>
                <div className= "title">
                <h2 >HAPPS          
                </h2> <h4>It's What's Happening</h4>
            </div>
          <a href="./New" id="add"><img src="../img/add-event-icon.png" id="add"/></a>
        </div>

        <div className="row">
            <div className="column side" styles="background-color:#aaa;">

            <h3>Happs:</h3>
                { <div>{happs ? list() : <p>Nothing Happ...</p>}</div>   }
            </div>
              
            <div className="column middle" styles="background-color:#bbb;">
                {selectedHapp ? <Info happ={selectedHapp} happs={happs} setHapps={setHapps} setSelectedHapp={setSelectedHapp}/> : <p>Select an Event to see What's Happening!</p> }
            </div>

        </div>

        <div className="footer">
        <i>It's time to make something HAPPen</i>
        </div>


    </main>
  )
}

export default Main