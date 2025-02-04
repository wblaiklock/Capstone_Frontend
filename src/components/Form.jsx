import { useState } from 'react';
import serviceCall, { ACTIONS } from '../services/apiServices.mjs';
import Carousel from '../components/Carousel';

const Form = ({ happs, setHapps }) => {
  const [formData, setFormData] = useState({
    desc: "A New Event",
    location: "New York",
    time: Date()
  });

  function handleChange(e) {
    setFormData( prevState => ({
      ...prevState,[e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let res = await serviceCall(ACTIONS.create, formData);
      setHapps([res, ...happs]);

      setFormData({
        desc: "",    //Reset value
        location: ""
      });
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <p>Event Description:</p>
      <input
        onChange={handleChange}
        name='desc'
        type='text'
        placeholder='What to do? ...'
        value={formData.desc}
        minLength='5'
        required
      /><p>Location:</p>
        <input
        onChange={handleChange}
        name='location'
        type='text'
        placeholder="Where's the Happs? ..."
        value={formData.location}
        minLength='5'
        required
      /><br></br><br></br>
      <input type='submit' />
    </form>

    <Carousel/>
    </div>    
  );
};

export default Form;
