import React, {Component} from "react";
import { connect } from "react-redux";  

class TabContent extends Component {

  render (){
    const selected = this.props.tab.selected === this.props.id;
    return (
      <div className={`tab-pane fade ${selected ? 'active show' : ''}`}>
        {this.props.children}
      </div> 
    );
  }
};

const mapStateToProps = state => ({ tab : state.tab }); 

export default connect(mapStateToProps)(TabContent);