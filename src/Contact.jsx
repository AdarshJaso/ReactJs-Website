import React from "react";
import Secheader from "./Secondaryheader"

const Contact = () => {
	return (
		<>

			<Secheader 
				sectitle="Get In Touch" 
				secdesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
			/>

			<section>
			<div className="container row py-5 m-auto">

				<div className="col-md-6 d-flex align-items-center justify-content-center order-1">
					<form className="col-lg-8 col-12 col-md-10 text-center">
						<p className="display-6 text-center mb-4">Reach us</p>
						<div class="mb-3">
						  <input type="text" class="form-control" id="name" placeholder="Your fullname" required/>
						</div>
						<div class="mb-3">
						  <input type="email" class="form-control" id="email" placeholder="E-mail address" required/>
						</div>
						<div class="mb-3">
						  <input type="tel" class="form-control" id="number" placeholder="Contact number" required/>
						</div>
						<div class="mb-3">
						  <textarea class="form-control form_textarea" id="message" placeholder="Your message" rows="3"></textarea>
						</div>
						<button className="btn btn-lg btn_custom btn_shadow col-12">Send</button>
					</form>
				</div>

				<div className="col-md-6 d-flex align-items-center justify-content-center order-lg-1 order-md-2">
				sldjflsjlfkjs
				</div>

			</div>
			</section>
		</>

	);
};

export default Contact;