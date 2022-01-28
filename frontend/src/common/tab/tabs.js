import React from "react";

export default props => ( 
  <div className="card card-primary card-outline card-outline-tabs">
    <div className="card-header p-0 border-bottom-0">
      {props.children}
    </div>
  </div>
);