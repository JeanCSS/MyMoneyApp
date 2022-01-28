import React from "react";

export default props => (
  <div>
    {props.condicao ? props.children : ""}
  </div>
)