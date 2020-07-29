import React from "react";
import Secheader from "./common/Secondaryheader";
import Teams from "../data/Teamsdata";


const Tcards = (props) => {
	return (

		<figure className="figure col-md-3 text-center">
			<img src={props.timage} className="figure-img img-fluid rounded col-lg-6 col-7 col-md-10" alt="team3" />
			  <figcaption className="figure-caption text-dark">{props.ttitle}</figcaption>
		</figure>
	);
};

const About = () => {
	return (
		<>

		<Secheader 
			sectitle="About" 
			secdesc="Lorem Ipsum is simply random text." 
		/>

		<section>
			<div className="container mx-auto py-5 col-lg-10 col-xl-9">
				<div className="mb-5 text-center">
					<p className="display-6 mb-1">Who We Are...</p>
					<p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				</div>
				<p>We like to say, if our best clients and our organisation were people, they’d be friends. We want to understand your business and sit beside you at the table, not across from you. We’re built to help you understand and leverage technology all the way from the Reception Desk to the Board Room. We’re big on the cloud and the opportunity it presents.</p>
				<p>Whether your requirements are totally on-premises, totally in the cloud, or somewhere in between, Evologic is flexible in its application of the right technology. IT has to work for you.</p>
			</div>
		</section>

		<section className="bg-light">
			<div className="container row py-5 m-auto col-lg-10 col-xl-9">
				<p className="display-6 text-center mb-4">Our Story</p>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
			</div>
		</section>

		<section>
			<div className="container py-5 m-auto">
				<div className="mb-4">
					<p className="display-6 text-center mb-1">Our Team</p>
					<p className="d-lg-block d-none col-8 m-auto text-center text-muted">These people are the reason for our success and stainless reputation.<br/>They have years of experience and absolute dedication to what they do.</p>
				</div>
				<div className="row col-lg-11 d-flex align-items-center justify-content-evenly m-auto">
						{
							Teams.map((val, ind) => {
								return <Tcards key={ind}
									timage={val.timage}
									ttitle={val.ttitle}
								/>
							})
						}
				</div>
			</div>
		</section>
		
		</>
	);
};

export default About;