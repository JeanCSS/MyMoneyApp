import react from "react";
import api from '../service/api'; 
import { toastr } from "react-redux-toastr";
import { reset, initialize } from "redux-form";
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
      Dispatch(init()); 
    })
    .catch(error => {  
      toastr.error('Erro', 'Erro ao criar ciclo de pagamento '+error);
    });
  } 
} 

const updateCycle = (value) => {   
  return Dispatch => {
    api.put(`billingCycle/${value.id}`, value)
    .then(responce => {
      toastr.success('Sucesso', 'Ciclo de pagamento atualizado com sucesso');
      Dispatch(init()); 
    })
    .catch(error => { 
      toastr.error('Erro', 'Erro ao criar ciclo de pagamento '+error);
    });
  } 
}

const deleteCycle = (value) => {   
  console.log('delete',value);
  return Dispatch => {
    api.delete(`billingCycle/${value.id}`)
    .then(responce => {
      toastr.success('Sucesso', 'Ciclo de pagamento deletado com sucesso'); 
      Dispatch(init()); 
    })
    .catch(error => {  
      toastr.error('Erro', 'Erro ao criar ciclo de pagamento '+error);
    });
  } 
} 

const showUpdate = (value) => {
  console.log(value);
  return [
      setTab("tabUpdate"),
      showTab("tabUpdate"),
      initialize('billingCycleForm', value)
  ]
}

const showDelete = (value) => {
  console.log(value);
  return [
      setTab("tabDelete"),
      showTab("tabDelete"),
      initialize('billingCycleForm', value)
  ]
}

const init = () => {
  return [
    reset('billingCycleForm'),
    setTab("tabList"),
    showTab("tabList", "tabCreate"),
    getCycle("page=1"),
    initialize('billingCycleForm', {})
  ]
}

export { getCycle, setCycle, updateCycle, deleteCycle, showUpdate, showDelete, init };
 