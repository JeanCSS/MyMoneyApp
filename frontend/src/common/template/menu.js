import React from "react"; 
import MenuItem from "./menu-item";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setMenu } from "./menuActions";

const Menu = (props) => { 
    console.log("Menu:", props.selected);
    return ( 
    
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {        
            Object.keys(props.menu).map(key => {
              return <MenuItem key={key} titulo={key} data={props.menu[key]} selected={props.selected} onClick={props.setMenu}/>       
            })
          }
          <li className="nav-header">MISCELLANEOUS</li>
        </ul>
      </nav>  
    );
}

const mapStateToProps = state => ({menu: state.menu.menu, selected: state.menu.selected});
const mapDispatchToProps = dispatch => bindActionCreators({setMenu}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Menu);