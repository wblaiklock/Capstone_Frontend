import { useState } from 'react';
import serviceCall, { ACTIONS } from '../services/apiServices.mjs';

const Form = ({ happs, setHapps }) => {
  const [formData, setFormData] = useState({
    desc: "A New Event",
    location: "",
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
        desc: "",
        location: ""
      });
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name='desc'
        type='text'
        placeholder='What to do? ...'
        value={formData.desc}
        minLength='5'
        required
      />
      <input type='submit' />
    </form>
  );
};

export default Form;
