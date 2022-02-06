import React, {Component} from "react";

class Lista extends Component {
  render (){
    const { totalPages, billing_cycles } = this.props.data;
    const { handlePageChange } = this.props;
 
    function dadosTabela(dados){
      return dados.map(dado => (
        <tr key={dado.id}>  
          <td>{dado.id}</td>
          <td>{dado.nome}</td>
          <td>{dado.mes}</td>
          <td>{dado.ano}</td>
        </tr>
      ));
    }

    function pageItens(){
      let itens = [];
      const fim = totalPages < 5 ? totalPages : 5;
      for(let i = 1; i<=fim; i++){
        itens.push(
          <li className="page-item"key={i}>
            <button className="page-link" onClick={() => {handlePageChange(`page=${i}`)}}>{i}</button>
          </li>
        );
      }
      return itens;
    }
    return (
      <div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Bordered Table</h3>
              </div> 
              <div className="card-body p-0">
                <table className="table table-striped">
                  <thead>
                    <tr> 
                      <th>ID</th>
                      <th>Nome</th>
                      <th>Mes</th>
                      <th>Ano</th>
                    </tr>
                  </thead>
                  <tbody> 
                      {
                        billing_cycles[0] ? dadosTabela(billing_cycles) : "<tr><td>Nenhum dado</td></tr>"
                      }
                  </tbody>
                </table>
              </div>
              <div className="card-footer clearfix">
                <ul className="pagination pagination-sm m-0 float-right">
                  <li className="page-item"><button className="page-link">«</button></li>
                  {totalPages > 0 ? pageItens() : ""}
                  <li className="page-item"><button className="page-link">»</button></li>
                </ul>
              </div>
            </div>
    </div>
    );
  }
}

export default Lista;