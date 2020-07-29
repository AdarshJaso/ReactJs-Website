import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
	return (
		<>
			<footer>
				<div className="container d-lg-flex align-items-center justify-content-between py-3 small text-center">
					<div className="text-white small">Copyright © 2020 AdarshJaso - All rights reserved</div>
					<div className="text-white">
						<span className="mx-2"><TwitterIcon fontSize="small" /></span>
						<span className="mx-2"><LinkedInIcon fontSize="small" /></span>
						<span className="mx-2"><GitHubIcon fontSize="small" /></span>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;