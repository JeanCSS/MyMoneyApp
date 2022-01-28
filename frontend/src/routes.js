import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './common/template/header';
import SideBar from './common/template/sidebar'; 
import Footer from './common/template/footer';
import Dashboard from "./dashboard/dashboard";
import BillingCycle from "./billingCycle/billingCycle";

const Routes = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <div className="preloader flex-column justify-content-center align-items-center">
                <img className="animation__shake" src="admin-lte/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60"/>
                </div>
                <Header/>
                <SideBar/>
                <div className='content-wrapper'>
                    <Switch>
                        <Route path="/" exact component={ Dashboard }/>
                        <Route path="/billingCycle" component={ BillingCycle }/> 
                    </Switch>
                </div>
                <Footer/>
            </div>    
        </BrowserRouter>
    );
}
export default Routes;


