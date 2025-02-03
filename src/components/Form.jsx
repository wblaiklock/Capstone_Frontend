import { useState } from 'react';
import serviceCall, { ACTIONS } from '../services/apiServices.mjs';

const Form = ({ happs, setHapps }) => {
  const [formData, setFormData] = useState({
    desc: '',
    complete: false,
  });

  function handleChange(e) {
    setFormData({ [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let res = await serviceCall(ACTIONS.create, formData);
      setHapps([res, ...happs]);

      setFormData({
        desc: '',
        complete: false,
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
      />
      <input type='submit' />
    </form>
  );
};

export default Form;
