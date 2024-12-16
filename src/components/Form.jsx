import { useState } from 'react';
import serviceCall, { ACTIONS } from '../services/apiServices.mjs';

const Form = ({ todos, setTodos }) => {
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
      setTodos([res, ...todos]);

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
