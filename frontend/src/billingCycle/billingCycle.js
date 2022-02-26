import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import TabsHeader from "../common/tab/tabsHeader";
import TabHeader from "../common/tab/tabHeader";
import TabsContent from "../common/tab/tabsContent";
import TabContent from "../common/tab/tabContent";
import Tabs from "../common/tab/tabs"; 
import BillingCycleList from "./billingCycleList";
import BillingCycleForm from "./billingCycleForm";

import { getCycle, setCycle, updateCycle, deleteCycle, showUpdate, showDelete, init } from "./billingCycleAction";

class BillingCycle extends Component{
  UNSAFE_componentWillMount(){
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.props.getCycle('page=1');
    ///this.props.setCycle({ "nome": "today", "mes": "fevereiro", "ano": "2020" });
  } 
  render(){ 
    return (
      <div>
        <ContentHeader title="BillingCycle" small="Version 1.0.0"/>
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar' icon='fas fa-bars' target='tabList' />
              <TabHeader label='Incluir' icon='fas fa-plus' target='tabCreate' />
              <TabHeader label='Alterar' icon='fas fa-pencil-alt' target='tabUpdate'/>
              <TabHeader label='Exluir' icon='fas fa-trash-alt' target='tabDelete' />
            </TabsHeader>
            <TabsContent>
              <TabContent label='Listar' icon='fas fa-bars' id='tabList'>
                <BillingCycleList data={this.props}/>
              </TabContent>
              <TabContent label='Incluir' icon='fas fa-plus' id='tabCreate'>
                <BillingCycleForm submitLable="Cadastrar" submitClass="primary" data={this.props} onSubmit={this.props.setCycle}/>
              </TabContent>
              <TabContent label='Alterar' icon='fas fa-pencil-alt' id='tabUpdate'>
                <BillingCycleForm submitLable="Editar" submitClass="warning" data={this.props} onSubmit={this.props.updateCycle}/>
              </TabContent>
              <TabContent label='Exluir' icon='fas fa-trash-alt' id='tabDelete'>
                <BillingCycleForm submitLable="Excluir" submitClass="danger" data={this.props} onSubmit={this.props.deleteCycle} readOnly={true}/>
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPage: state.cycles.currentPage,
  totalPages: state.cycles.totalPages, 
  billing_cycles: state.cycles.billing_cycles
});
const mapDispatchToProps = dispatch => bindActionCreators({ getCycle, setCycle, updateCycle, deleteCycle, showUpdate, showDelete, init}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle);