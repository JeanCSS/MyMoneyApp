import react from "react";
import api from '../service/api'; 
import { toastr } from "react-redux-toastr";
import { reset } from "redux-form";
import { setTab, showTab } from "../common/tab/tabAction";

const getCycle = async (query) =>{ 
  const responce = await api.get(`/billingCycle?${query}`); 

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: responce.data.billingcycles,
    totalPages: responce.data.count,
    currentPage: responce.data.currentPage
  };
} 

const setCycle = (value) => {   
  return Dispatch => {
    api.post('billingCycle', value)
    .then(responce => {
      toastr.success('Sucesso', 'Ciclo de pagamento criado com sucesso');

      Dispatch([
       reset('billingCycleForm'),
       setTab("tabList"),
       showTab("tabList", "tabCreate", "tabUpdate", "tabDelete"),
       getCycle("page=1")
      ]);
      
    })
    .catch(error => {
      console.log(error);
      toastr.error('Erro', 'Erro ao criar ciclo de pagamento '+error);
    });
  } 
} 

export { getCycle, setCycle };
 