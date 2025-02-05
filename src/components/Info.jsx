import React from 'react'
import { useState, useEffect } from 'react';
import serviceCall, { ACTIONS } from '../services/apiServices.mjs';

function Info({happ, happs, setSelectedHapp, setHapps}) {
    const [update, setUpdate] = useState(false);
    const [formData, setFormData] = useState({ ...happ });
    

    function handleChange(e) {
        setFormData({ ...formData, desc: e.target.value });
      }

    async function handleSave() {
        try {
          let res = await serviceCall(ACTIONS.update, formData, happ._id);
          setUpdate((u) => !u);
    
          let newList = happs.map((td) => (td._id === happ._id ? res : td));
    
          setHapps(newList);
        } catch (err) {
          console.error(err);
        }
      }
    
      useEffect(() => {
        setFormData({ ...happ }); 
      }, [happ]);
    
      async function handleDelete() {
        try {
          await serviceCall(ACTIONS.delete, null, happ._id);
    
          let filteredHapps = happs.filter((td) => td._id !== happ._id);
    
          setHapps(filteredHapps);
        } catch (err) {
          console.error(err);
        }
        setSelectedHapp(null)
      }


  return (
    <div>
    <div>
        <h1>{happ.desc}</h1>
    </div>
    
    <h2>{happ.location}</h2>

          <button onClick={() => setUpdate((u) => !u)}>
            Edit
          </button>{' '}
          <button onClick={handleDelete} >
            Delete
          </button>


    </div>
  )
}

export default Info