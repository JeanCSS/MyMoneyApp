import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getSummary from '../dashboard/dashboardAction';
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Grid from "../common/layout/grid";
import ValueBox from "../common/template/widget/valueBox";
import api from '../service/api';

class Dashboard extends Component {
  
  UNSAFE_componentWillMount(){
    this.props.getSummary();
  }
  render(){ 
    
    const { credito, debito } = this.props.summary;
    
    return (
      <div>
        <ContentHeader title="Dashboard" small="Version 1.0.0"/>
        <Content>
          <div className="row">
            <ValueBox cols="12 4" color="success" icon="university" value={`R$${credito}`} text="Total de Creditos"/> 
            <ValueBox cols="12 4" color="danger" icon="credit-card" value={`R$${debito}`} text="Total de Débitos"/>
            <ValueBox cols="12 4" color="info" icon="money-bill-alt" value={`R$${credito - debito}`} text="Valor Consolidado"/>
          </div>
        </Content>
      </div>
    );
  }  
}


const mapStateToProps = state => ({ summary: state.dashboard.summary });
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);