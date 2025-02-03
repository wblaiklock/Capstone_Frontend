import { useState } from 'react';
import serviceCall, { ACTIONS } from '../services/apiServices.mjs';

const Form = ({ happs, setHapps }) => {
  const [formData, setFormData] = useState({
    desc: "A New Event2",
    location: "2X 1Y",
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
        desc: '',
        location: "4X 3Y"
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
        minlength='5'
      />
      <input type='submit' />
    </form>
  );
};

export default Form;
