import './listItem.css';
import { useState, useEffect } from 'react';
import serviceCall, { ACTIONS } from '../services/apiServices.mjs';

const ListItem = ({ happ, happs, setHapps }) => {
  const [update, setUpdate] = useState(false);
  const [formData, setFormData] = useState({ ...happ });

  async function handleCheckChange(e) {
    // const updatedHapp = { ...happ, complete: e.target.checked };

    // await serviceCall(ACTIONS.update, updatedHapp, happ._id);

    // setHapps((prevHapps) =>
    //   prevHapps.map((td) => (td._id === happ._id ? updatedHapp : td))
    // );
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
  }

  function handleChange(e) {
    setFormData({ ...formData, desc: e.target.value });
  }

  let complete=false;

  return (
    <div id='item-cont'>
      {update ? (
        <>
          <input type='text' value={formData.desc} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {' '}
          <input
            onChange={handleCheckChange}
            type='checkbox'
            checked={complete}
          />
          <h3>{happ.desc}</h3>
          <button disabled={complete} onClick={() => setUpdate((u) => !u)}>
            Edit
          </button>{' '}
          <button onClick={handleDelete} disabled={!complete}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default ListItem;
