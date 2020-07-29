import React from "react";
import {NavLink} from "react-router-dom";
import Secheader from "./common/Secondaryheader";
import Data from "../data/Servicesdata";

const Scards = (props) => {
	return (
			<div className="col-md-4 col-lg-4 mb-3 text-center">
				<div className="box_border col-lg-9 p-3 pt-4 m-auto rounded">
					<img src={props.scardimage} className="img-fluid mb-2" alt="cards" width="20%" />
					<p className="my-2">{props.scardtitle}</p>
					<p className="text-muted text-left text-xl-center text-lg-center">{props.scarddesc}</p>
				</div>
			</div>
		);
};

const Service = () => {
	return (
		<>

			<Secheader 
				sectitle="Services" 
				secdesc="Lorem Ipsum is simply random text." 
			/>

			<section> 
				<div className="container mx-auto py-5">
					<div className="mb-5 text-center">
						<p className="display-6 mb-1">Services We Provide</p>
						<p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
					<div className="row d-flex items-align-center justify-content-evenly">
						{
							Data.map((val, ind) => {
								return <Scards key={ind}
									scardimage={val.scardimage}
									scardtitle={val.scardtitle}
									scarddesc={val.scarddesc}
								/>
							})
						}
					</div>
				</div>
			</section>

			<section className="bg-light">
				<div className="container py-5 text-center">
					<p className="display-6">Not quite sure yet ?</p>
					<p className="text-muted">Why not visit our <NavLink className="text-decoration-none" to="/contact">contact page</NavLink>, we would love to chat with you!</p>
				</div>
			</section>
		</>
	);
};

export default Service;