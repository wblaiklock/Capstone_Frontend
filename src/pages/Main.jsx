import React from 'react'
import Form from '../components/Form';

function Main(props) {
  return (
    <main>

        <div className="header">    
            <h2>Header</h2>
        </div>

        <div className="row">
            <div className="column side" styles="background-color:#aaa;">
            <h3>Happs:</h3>
                {/* <div>{happs ? list() : <p>Nothing Happ...</p>}</div> */  }
            </div>
            <div className="column middle" styles="background-color:#bbb;">
                Column
            </div>
            <div className="column side" styles="background-color:#ccc;">
                <h3>New Happs:</h3>
                <Form setHapps={props.setHapps} happs={props.happs} />

            </div>
        </div>

        <div className="footer">
        <p>Footer</p>
        </div>


    </main>
  )
}

export default Main