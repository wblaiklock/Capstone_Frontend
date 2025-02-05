import './listItem.css';
import { useState, useEffect } from 'react';
import serviceCall, { ACTIONS } from '../services/apiServices.mjs';

const ListItem = ({ happ, setSelectedHapp }) => {

  function handleClick(e){
    setSelectedHapp(happ)
  }

  return (
    <div id='item-cont'>

          <a href="#" onClick={handleClick}><h3>{happ.desc}</h3></a>
      
    </div>
  );
};

export default ListItem;
