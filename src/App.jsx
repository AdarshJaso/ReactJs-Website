import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Career from "./Career";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
const App = () => {
	return (
		<>
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/service" component={Service} />
				<Route exact path="/career" component={Career} />
				<Route exact path="/contact" component={Contact} />
				<Redirect to="/" />
			</Switch>
			<Footer />

		</BrowserRouter>
		</>

	);
};

export default App;