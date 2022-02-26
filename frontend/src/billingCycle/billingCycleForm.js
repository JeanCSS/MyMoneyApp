import React, {Component} from "react";
import {reduxForm, Field} from "redux-form"; 
import labelAndInput from "../common/form/labelAndInput";
class BillingCycleForm extends Component {
  render() { 
    const {handleSubmit, readOnly} = this.props;
    const {init} = this.props.data;
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body"> 
          <div className="row">
            <Field name="nome" label="Nome" component={labelAndInput} type="text" placeholder="Nome" cols="12 4" readOnly={readOnly}/>
            <Field name="mes" label="Mes" component={labelAndInput} type="text" placeholder="Mes" cols="12 4" readOnly={readOnly}/>          
            <Field name="ano" label="Ano" component={labelAndInput} type="number" placeholder="Ano" cols="12 4" readOnly={readOnly}/>
          </div>
        </div>
        <div className="box-footer">
          <button type="submit" className={"btn btn-"+this.props.submitClass}>{this.props.submitLable}</button>
          <button type="button" className="btn btn-default" onClick={() => init()}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm); 