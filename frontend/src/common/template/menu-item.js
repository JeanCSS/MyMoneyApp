import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuItem = (props) => { 
  const { href, icon, badge, children } = props.data; 
  const selected = props.selected === props.titulo;
    //console.log("MenuItem:", props);
    return (
      <li className="nav-item">
        <Link to={href} className={`nav-link ${selected ? 'nav-link active' : 'nav-link'}`} onClick={() => {props.onClick(props.titulo)}}>
          <i className={icon}></i>
          <p>
            {props.titulo}
            <i className={children && "fas fa-angle-left right"} ></i>
            <span className={props.badge}>{(props.badge != "") ? "" : props.badge}</span>
          </p>
        </Link>
          { 
            children && Object.keys(children).map(child => {      //console.log('child: ', child)
              return( 
                <ul className="nav nav-treeview" key={child}>
                  <MenuItem titulo={child} data={children[child]} selected={props.selected} onClick={props.onClick}/>
                </ul>
              )  
            })
          
          }
      </li>
    ); 
};

export default MenuItem;
    