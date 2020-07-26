import React from "react";

const Secheader = (props) => {
	return (
		<>
			<div className="secondary_header d-flex justify-content-center align-items-center flex-column">
				<h2 className="hdrcolor">{props.sectitle}</h2>	
				<h5 className="text-white lead">{props.secdesc}</h5>
			</div>
		</>

	);
};

export default Secheader;