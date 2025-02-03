//Deployed to: https://mern-frontend-ni2a.onrender.com

import { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router'

import Main from './pages/Main';
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

  return (

    <Routes>

      <Route path="/" element={<Main setHapps={setHapps} happs={happs}/>}/>
      <Route path="/front" element={<Front/>}/>
      <Route path="*" element={<NotFound />}/>

    </Routes>
  );
}

export default App;
