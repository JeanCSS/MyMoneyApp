import api from '../service/api';

const getCycle = async (query) =>{ 
  const responce = await api.get(`/billingCycle?${query}`); 

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: responce.data.billingcycles,
    totalPages: responce.data.count,
    currentPage: responce.data.currentPage
  };
} 

const setCycle = async (value) => {  
  const responce = await api.post('billingCycle', value)
  return {
    type: 'BILLING_CYCLES_SET',
    payload: responce.data
  };
} 

export { getCycle, setCycle };
 