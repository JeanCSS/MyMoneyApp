import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setTab, showTab } from "./tabAction";

import If from "../template/if";

class TabHeader extends Component {
  UNSAFE_componentWillMount(){
    this.props.setTab("tabList");
    this.props.showTab("tabList", "tabCreate");
  }
  render (){
    const selected = this.props.tab.selected === this.props.target;
    const show = this.props.tab.visible[this.props.target]; 
    return (
      <If condicao={show}>
        <li className="nav-item"> 
          <a className={`nav-link ${selected ? 'active' : ''}`} href='' data-toggle="tab"data-target={this.props.target} onClick={e => {this.props.setTab(this.props.target)}}>
            <i className={this.props.icon}></i> {`  ${this.props.label}`}
          </a>
        </li>
      </If>
    );
  }
};

const mapStateToProps = state => ({ tab : state.tab });
const mapDispatchToProps = dispatch => bindActionCreators({ setTab, showTab}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);