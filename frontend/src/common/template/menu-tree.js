import React, { useState } from "react";
import MenuItem from "./menu-item";

const MenuTree  = (props) => {
  const [isAtivated, setIsAtivated] = useState("nav-link");
  return (
    
    <li className="nav-item">
      <a href="#" className={isAtivated} onClick={() => {setIsAtivated("nav-link active")}}>
        <i className={props.icon}></i>
        <p>
          {props.nome}
          <i className="fas fa-angle-left right" ></i>
          <span className={props.badge}>{  (props.badge != "") ? "6" : props.badge}</span>
        </p>
      </a> 
      <ul className="nav nav-treeview"> 
          {props.children}
      </ul>
    </li>
  );
};

export default MenuTree;
    