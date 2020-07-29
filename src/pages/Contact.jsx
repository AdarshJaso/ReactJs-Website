import React from "react";
import Secheader from "./common/Secondaryheader"
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const Contact = () => {
	return (
		<>

			<Secheader 
				sectitle="Get In Touch" 
				secdesc="Lorem Ipsum is simply random text." 
			/>

			<section>
			<div className="container row py-5 m-auto">
				<div className="col-md-6 d-flex align-items-center justify-content-center order-1">
					<form className="col-lg-8 col-12 col-md-10 text-center">
						<p className="display-6 text-center mb-2">Reach us</p>
						<p>Our team is happy to answer your questions.</p>
						<div className="mb-3">
						  <input type="text" className="form-control" id="name" placeholder="Your fullname" required/>
						</div>
						<div className="mb-3">
						  <input type="email" className="form-control" id="email" placeholder="E-mail address" required/>
						</div>
						<div className="mb-3">
						  <input type="tel" className="form-control" id="number" placeholder="Contact number" required/>
						</div>
						<div className="mb-3">
						  <textarea className="form-control form_textarea" id="message" placeholder="Your message" rows="3"></textarea>
						</div>
						<button className="btn btn-lg btn_custom btn_shadow col-12">Send</button>
					</form>
				</div>

				<div className="col-md-6 d-flex align-items-center order-lg-1 order-md-2 flex-column py-5">
					<div className="row col-12">
						<div className="col-md-6">
							<span className="lead mb-3">Support</span>
							<p className="small">
								Get help with all lorem ipsum products.<br/><br/>
								<span className="m-2 ml-0 hdrcolor"><CallOutlinedIcon /></span>+4654664546<br/><br/>
								<span className="m-2 ml-0 hdrcolor"><EmailOutlinedIcon /></span>sample@example.com<br/><br/>
								<span className="m-2 ml-0 hdrcolor"><LocationOnOutlinedIcon /></span>New York, USA
							</p>

						</div>
						<div className="col-md-6">
							<span className="lead mb-3">Sales</span>
							<p className="small">Purchase lorem ipsum products.<br/><br/>
								<span className="m-2 ml-0 hdrcolor"><CallOutlinedIcon /></span>+4345335546<br/><br/>
								<span className="m-2 ml-0 hdrcolor"><EmailOutlinedIcon /></span>demo@example.com<br/><br/>
								<span className="m-2 ml-0 hdrcolor"><LocationOnOutlinedIcon /></span>New York, USA
							</p>
						</div>
					</div>
				</div>
			</div>
			</section>
		</>
	);
};

export default Contact;