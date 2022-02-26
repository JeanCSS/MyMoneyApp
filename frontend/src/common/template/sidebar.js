import React from "react";
import Menu from './menu.js'; 

const SideBar = (props) => {

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <div className="brand-link d-flex justify-content-between align-items-center">
        <a  className="pushmenu" data-widget="pushmenu"  href="#" className="brand-link">
          <img src="./dist/img/LogoBrandsG.jpeg" alt="AdminLTE Logo" className="brand-image img-circle elevation-2"/>
          <span className="brand-text font-weight-light">Geld</span>
        </a> 
      </div>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="https://pbs.twimg.com/profile_images/1451275454267203599/jnWWcGO1_400x400.jpg" className="img-circle elevation-2" alt="User Image"/>
          </div>
          <div className="info">
            <a href="#" className="d-block">Julius</a>
          </div>
        </div>
  
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>
        <Menu/>
      </div>
    </aside>
  );
}

export default SideBar;