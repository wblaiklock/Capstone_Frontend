import React from 'react'

function NotFound(props) {
  return (
    <main>
        <h1>404</h1>
        <h2>Page not Found</h2>
        <img src ="../img/confused.jpg"></img>
        <p>The page was not found but there's more events on the Main Page!</p>
        <footer> 
            <button id="notFoundButton" onClick={() =>{location.href = "./"}}>
          Back to Main
        </button>
        </footer>
 
    </main>
  )
}

export default NotFound