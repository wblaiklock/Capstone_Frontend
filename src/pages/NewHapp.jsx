import React from 'react'
import Form from '../components/Form';

function NewHapp({setHapps, happs}) {
  return (
    <main>

       <div className="header">    
            <a href="./landing" ><img src="../img/logo.png" id="logo"/></a>
                <div className= "title">
                <h2 >HAPPS          
                </h2> <h4>It's What's Happening</h4>
            </div>
           <a href="./" id="add"><img src="../img/back.png" id="add"/></a>
        </div>

        <div className="row">

            <div className="column middle" styles="background-color:#bbb;">
            <h3>New Happs:</h3>
                <Form setHapps={setHapps} happs={happs} />

            </div>

        </div>

        <div className="footer">
        <i>It's time to make something HAPPen</i>
        </div>


    </main>
  )
}

export default NewHapp