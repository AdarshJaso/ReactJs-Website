import React from "react";
import Secheader from "./common/Secondaryheader";
import CheckIcon from '@material-ui/icons/Check';


const Life = (props) => {
	return(
		<div className="d-flex align-items-center mb-4">
			<span className="career_life"><CheckIcon /></span>
			<span className="d-flex flex-column">
				<h5>{props.ltitle}</h5>
				<p className="small text-muted">{props.ldesc}</p>
			</span>
		</div>
	);
};


const Positions = (props) => {
	return(		
		<div className="d-flex justify-content-between align-items-center mb-3">
			<span className="d-flex flex-column">
				<p className="mb-0">{props.ptitle}</p>
				<p className="small text-muted">{props.pcity}</p>
			</span>
			<span>
				<button className="btn btn_custom mr-4">Apply</button>
			</span>
		</div>
	);
};

const Career = () => {
	return(

		<>
			<Secheader 
				sectitle="We Are Hiring!" 
				secdesc="Work at Lorem Ipsum. Your career starts here." 
			/>

			<section>
				<div className="container mx-auto py-5 col-lg-10 col-xl-9">
					<div className="mb-5 text-center">
						<h2 className="display-6 mb-1">Open Positions</h2>
						<p className="text-muted">We see collaboration, growth and great work in your future.</p>
					</div>
					<div className="row col-lg-10 m-auto">
						<div className="col-md-5 mb-4">
							<div className="hdrcolor h5">Customer Support</div>
							<hr width="40%" />
							<Positions 
								ptitle="Account Executive"
								pcity="Full Time · Boston"
							/>
							<Positions 
								ptitle="Account Executive"
								pcity="Full Time · Texas"
							/>
						</div>
						<div className="col-md-5 mb-4 offset-lg-1">
							<div className="hdrcolor h5">Product</div>
							<hr width="40%" />
							<Positions 
								ptitle="Product Manager"
								pcity="Full Time · Texas"
							/>
						</div>
						<div className="col-md-5">
							<div className="hdrcolor h5">Design</div>
							<hr width="40%" />
							<Positions 
								ptitle="Brand Designer"
								pcity="Full Time · Texas"
							/>
							<Positions 
								ptitle="Product Designer"
								pcity="Full Time · Texas"
							/>
							<Positions 
								ptitle="Visual Designer"
								pcity="Full Time · New York"
							/>
						</div>
						<div className="col-md-5 offset-lg-1">
							<div className="hdrcolor h5">Revenue</div>
							<hr width="40%" />
							<Positions 
								ptitle="Account Executive"
								pcity="Full Time · Boston"
							/>
							<Positions 
								ptitle="Account Executive"
								pcity="Full Time · New York"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-light">
				<div className="container mx-auto py-5 col-lg-10 col-xl-9">
					<div className="mb-5 text-center">
						<h2 className="display-6 mb-1">Life Here</h2>
						<p className="text-muted">We see collaboration, growth and great work in your future.</p>
					</div>
					<div className="row col-lg-10 m-auto">
						<div className="col-md-6">
							<Life ltitle="Personality" ldesc="There are variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form." />
							<Life ltitle="Professional Development" ldesc="There are variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form." />
						</div>
						<div className="col-md-6">
							<Life ltitle="Occasional Parties" ldesc="There are variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form." />
							<Life ltitle="Flexible hours" ldesc="There are variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form." />
						</div>
					</div>
				</div>
			</section>

		</>
	);
};

export default Career;