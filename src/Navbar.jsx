import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return(

		<>
			
				<nav className="container navbar navscroll fixed-top navbar-expand-lg navbar-light py-2 px-3">
				  <NavLink className="navbar-brand text-white" to="/">Navbar</NavLink>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>

				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav ml-auto">
				      <li className="nav-item active">
				        <NavLink activeClassName="menu_active" exact  className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
				      </li>
				      <li className="nav-item">
				        <NavLink activeClassName="menu_active" exact className="nav-link" to="/service">Services</NavLink>
				      </li>
				      <li className="nav-item">
				        <NavLink activeClassName="menu_active" exact className="nav-link" to="/career">Career</NavLink>
				      </li>
				      <li className="nav-item">
				        <NavLink activeClassName="menu_active" exact className="nav-link" to="/about">About</NavLink>
				      </li>
				      <li className="nav-item">
				        <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact">Contact</NavLink>
				      </li>

				    </ul>
				  </div>
				</nav>



		</>


		);
};

export default Navbar;