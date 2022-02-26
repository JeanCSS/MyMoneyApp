import api from '../../service/api';
const getDataChart = () => {
  let data = [["Operacoes","Prejuizo", "Lucro"]];
  const response = api.get(`/billingCycle?page=1`)
  .then(responce => {
    responce.data.billingcycles.forEach(
      e => { 
        data.push([e.nome, e.mes, e.ano]);    
      }
    );
    console.log('data', data);

  })
  return {
    type: 'LINE_CHART_FETCHED',
    payload: data
  }
}

export { getDataChart };