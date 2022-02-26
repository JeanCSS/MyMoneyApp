import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getSummary from '../dashboard/dashboardAction'; 
import { getCycle } from "../billingCycle/billingCycleAction";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content"; 
import ValueBox from "../common/template/widget/valueBox"; 

import LineChart from "../common/chart/lineChart";

class Dashboard extends Component {
  
  UNSAFE_componentWillMount(){
    this.props.getSummary();
    this.props.getCycle();
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
          <LineChart dados={this.props.billing_cycles}/>
        </Content>
      </div>
    );
  }  
}


const mapStateToProps = state => ({ summary: state.dashboard.summary, billing_cycles: state.cycles.billing_cycles });
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary, getCycle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);