import { useState, useEffect } from 'react';

import React from 'react'
import Form from '../components/Form';
import ListItem from '../components/ListItem';
import serviceCall, { ACTIONS } from '../services/apiServices.mjs';

function Main() {
  const [happs, setHapps] = useState(null);


  useEffect(() => {
    async function getData() {
      let data = await serviceCall(ACTIONS.read);
      setHapps(data);

    //  console.log(data)
    }
    getData();
  }, []);



  let list = () =>
    happs.map((Happ) => {
     // return <ListItem key={Happ._id} Happ={Happ} happs={happs} setHapps={setHapps} />;
    });


  return (
    <main>

        <div className="header">    
            <img src="../img/logo.png" id="logo"/>
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
                Column
            </div>
            <div className="column side" styles="background-color:#ccc;">
                <h3>New Happs:</h3>
                <Form setHapps={setHapps} happs={happs} />

            </div>
        </div>

        <div className="footer">
        <p>Footer</p>
        </div>


    </main>
  )
}

export default Main