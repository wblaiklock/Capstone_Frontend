//Deployed to: https://mern-frontend-ni2a.onrender.com

import { useState, useEffect } from 'react';
import ListItem from './components/ListItem';
import Form from './components/Form';
import serviceCall, { ACTIONS } from './services/apiServices.mjs';
import './App.css';

function App() {
  const [happs, setHapps] = useState(null);

  useEffect(() => {
    // async function getData() {
    //   let data = await serviceCall(ACTIONS.read);
    //   setHapps(data);
    // }
    // getData();
  }, []);

  let list = () =>
    happs.map((Happ) => {
      return <ListItem key={Happ._id} Happ={Happ} happs={happs} setHapps={setHapps} />;
    });

  return (
    <main>
      <h1>Happ List:</h1>
      <Form setHapps={setHapps} happs={happs} />
      <div>{happs ? list() : <p>Nothing Happ...</p>}</div>
    </main>
  );
}

export default App;
