import React from "react";
import Grid from "../../layout/grid";

const ValueBox = (props) => {
 
  const {color, icon, value, text, cols} = props;

  return ( 
    <Grid cols={cols}>
      <div className={`small-box bg-${color}`}>
        <div className="inner">
          <h3>{value}</h3>
          <p>{text}</p>
        </div>
        <div className="icon">
          <i className={`fas fa-${icon}`}></i>
        </div>
        <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
      </div> 
    </Grid>
  );
}

export default ValueBox;