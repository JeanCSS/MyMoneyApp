import api from '../service/api';

async function getSummary(){ 
  const responce = await api.get('/');  
  return {
    type: 'SUMMARY_FETCHED',
    payload: responce.data
  };
} 

export default getSummary;

