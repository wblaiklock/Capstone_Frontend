//Deployed to: https://mern-frontend-ni2a.onrender.com

import {Route, Routes} from 'react-router'

import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Front from './pages/Front';
import NewHapp from './pages/NewHapp';

import './App.css';
import serviceCall, { ACTIONS } from './services/apiServices.mjs';
import { useState, useEffect } from 'react';

function App() {
  const [happs, setHapps] = useState(null);


  useEffect(() => {
    async function getData() {
      let data = await serviceCall(ACTIONS.read);
      setHapps(data);
    }
    getData();
  }, []);


  return (
    <Routes>
      <Route path="/index" element={<Main setHapps={setHapps} happs={happs}/>}/>
      <Route path="/" element={<Front/>}/>
      <Route path="/new" element={<NewHapp setHapps={setHapps} happs={happs}/>}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;
