import React from 'react'

function Front() {
  return (
    
    <main id="front">
        <h1 styles="font-size:48px">HAPPS</h1>

       <img src="../img/games.jpg" id="move1"/>
       <img src="../img/concert.jpg" id="move2"/>
       <h2>Bringing People Together</h2>
       <p>Finally, a way to meet people in real life.</p>
 
       <button id="frontButton" onClick={() =>{location.href = "./"}}>
          See What's the Happs
        </button>

    </main>
  )
}

export default Front