import React from "react";

const Secheader = (props) => {
	return (
		<>
			<div className="sec_hdr">
				<div className="secondary_header sec_bg d-flex justify-content-center align-items-center flex-column">
					<h2 className="hdrcolor">{props.sectitle}</h2>	
					<h5 className="text-white lead px-4 text-center">{props.secdesc}</h5>
				</div>
			</div>
		</>
	);
};

export default Secheader;