//Deployed to: https://mern-frontend-ni2a.onrender.com

import {Route, Routes} from 'react-router'

import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Front from './pages/Front';

import './App.css';

function App() {

  return (

    <Routes>

      <Route path="/" element={<Main/>}/>
      <Route path="/front" element={<Front/>}/>
      <Route path="*" element={<NotFound />}/>

    </Routes>
  );
}

export default App;
