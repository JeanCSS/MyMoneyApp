import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";

class BillingCycleForm extends Component {
  render() {
    const {handleSubmit} = this.props;
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <div>
            <label htmlFor="nome">Nome</label>
            <Field name="nome" component="input" type="text" placeholder="Nome" className="form-control" />
          </div>
          <div>
            <label htmlFor="mes">Mes</label>
            <Field name="mes" component="input" type="text" placeholder="Mes" className="form-control" />          
          </div>
          <div>
            <label htmlFor="ano">Ano</label>
            <Field name="ano" component="input" type="text" placeholder="Ano" className="form-control" />
          </div>
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

const createReduxForm = reduxForm({form: 'billingCycleForm'});
export default createReduxForm(BillingCycleForm);

//export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm);