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

import { getCycle, setCycle } from "./billingCycleAction";

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
                <BillingCycleList data={this.props} handlePageChange={this.props.getCycle}/>
              </TabContent>
              <TabContent label='Incluir' icon='fas fa-plus' id='tabCreate'>
                <BillingCycleForm onSubmit={this.props.setCycle}/>
              </TabContent>
              <TabContent label='Alterar' icon='fas fa-pencil-alt' id='tabUpdate'>
                Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna.
              </TabContent>
              <TabContent label='Exluir' icon='fas fa-trash-alt' id='tabDelete'>
                Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis.
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
const mapDispatchToProps = dispatch => bindActionCreators({ getCycle, setCycle }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle);