import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../../images/main.svg"
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import HeadsetIcon from '@material-ui/icons/Headset';
import WorkIcon from '@material-ui/icons/Work';
import DvrIcon from '@material-ui/icons/Dvr';

const Navbar = () => {
	return(
		<>
		<div className="container-fluid navigation_bar">
			<nav className="navscroll navbar fixed-top navbar-expand-lg navbar-light py-2 px-3">
				<div className="container">
				  <NavLink className="navbar-brand" to="/"><img src={logo} alt="logo1" className="img-fluid" width="160" /></NavLink>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="text-white"><MenuIcon style={{ fontSize: 35 }} /></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav ml-auto">
				      <li className="nav-item active">
				        <NavLink exact className="nav-link" to="/"><span className="d-lg-none d-xl-none mr-3"><HomeIcon /></span>Home<span className="sr-only">(current)</span></NavLink>
				      </li>
				      <li className="nav-item">
				        <NavLink exact className="nav-link" to="/service"><span className="d-lg-none d-xl-none mr-3"><DvrIcon /></span>Services</NavLink>
				      </li>
				      <li className="nav-item">
				        <NavLink exact className="nav-link" to="/career"><span className="d-lg-none d-xl-none mr-3"><WorkIcon /></span>Career</NavLink>
				      </li>
				      <li className="nav-item">
				        <NavLink exact className="nav-link" to="/about"><span className="d-lg-none d-xl-none mr-3"><PeopleIcon /></span>About</NavLink>
				      </li>
				      <li className="nav-item">
				        <NavLink exact className="nav-link" to="/contact"><span className="d-lg-none d-xl-none mr-3"><HeadsetIcon /></span>Contact</NavLink>
				      </li>
				    </ul>
				  </div>
				</div>
			</nav>
		</div>
		</>
	);
};

export default Navbar;