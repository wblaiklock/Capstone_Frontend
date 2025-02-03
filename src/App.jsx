//Deployed to: https://mern-frontend-ni2a.onrender.com

import { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router'

import Main from './pages/Main';
import ListItem from './components/ListItem';
import NotFound from './pages/NotFound';
import Front from './pages/Front';

import serviceCall, { ACTIONS } from './services/apiServices.mjs';
import './App.css';

function App() {
  const [happs, setHapps] = useState(null);

  useEffect(() => {
    async function getData() {
      let data = await serviceCall(ACTIONS.read);
      setHapps(data);

      //console.log(data)
    }
    getData();
  }, []);

  let list = () =>
    happs.map((Happ) => {
      return <ListItem key={Happ._id} Happ={Happ} happs={happs} setHapps={setHapps} />;
    });

  return (

    <Routes>

      <Route path="/" element={<Main setHapps={setHapps} happs={happs}/>}/>
      {/* <Route path="/" element={<Front/>}/> */}
      <Route path="*" element={<NotFound />}/>

    </Routes>
  );
}

export default App;
