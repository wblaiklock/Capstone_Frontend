import axios from 'axios';

export const ACTIONS = {  create: 'create',  read: 'read',  update: 'update',  delete: 'delete'};

export default async function serviceCall(action, formData, id) {
  const url = 'https://mern-backend-0cco.onrender.com/api/happs';

  switch (action) {
    case ACTIONS.create:
      return createHapp(url, formData);
    case ACTIONS.read:
      return getHapps(url);
    case ACTIONS.update:
      return updateHapp(url, id, formData);
    case ACTIONS.delete:
      return deleteHapp(url, id);
  }
}

async function getHapps(url) {
  try {
    let res = await axios.get(url);

    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function createHapp(url, formData) {
  try {
    const res = await axios.post(url, formData);
    
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function updateHapp(url, id, formData) {
  try {
    let res = await axios.put(`${url}/${id}`, formData);

    return res.data;
  } catch (err) {
    console.error(err);
  }
}

async function deleteHapp(url, id) {
  try {
    let res = await axios.delete(`${url}/${id}`);

    return res.data;
  } catch (err) {
    console.error(err);
  }
}
