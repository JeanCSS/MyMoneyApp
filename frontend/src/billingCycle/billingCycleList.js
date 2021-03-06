import React, {Component} from "react";

class BillingCycleList extends Component {
  
  render (){
    const { currentPage, totalPages, billing_cycles, showUpdate, showDelete, getCycle } = this.props.data;
      
    function dadosTabela(dados){
      return dados.map(dado => (
        <tr key={dado.id}>  
          <td>{dado.id}</td>
          <td>{dado.nome}</td>
          <td>{dado.mes}</td>
          <td>{dado.ano}</td>
          <td>
            <button className="btn btn-warning" onClick={() => showUpdate(dado)}><i className="fa fa-pen"></i> </button>
            <button className="btn btn-danger" onClick={() => showDelete(dado)}><i className="fa fa-trash"></i> </button>
          </td>
        </tr>
      ));
    }

    function pageItens(){
      let itens = [];
      const fim = totalPages < 5 ? totalPages : 5; 

      const inicio = currentPage - 5 <= 0 ? 1 : currentPage - 4; 
      for(let i = 0; i < fim; i++){ 
        const selected = currentPage == inicio + i ? 'bg-info' : ''; 
        //console.log("selected", selected);
        itens.push(
          <li className="page-item"key={i + inicio}>
            <a className={`page-link ${selected}`} onClick={() => {getCycle(`page=${i + inicio}`)}}>{i + inicio}</a>
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody> 
                  {
                    billing_cycles[0] ? dadosTabela(billing_cycles) : <tr><td> Nenhum dado </td></tr>
                  } 
              </tbody>
            </table>
          </div>
          <div className="card-footer clearfix">
            <ul className="pagination pagination-sm m-0 float-right">
              {currentPage > 1 ? <li className="page-item"><a className="page-link" onClick={() => {getCycle(`page=${currentPage - 1}`)}}>??</a></li> : ''}
                                  
              {totalPages > 0 ? pageItens() : ""}
              
              {currentPage < totalPages ? <li className="page-item"><a className="page-link" onClick={() => {getCycle(`page=${Number(currentPage) + 1}`)}}>??</a></li> : ''}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BillingCycleList;