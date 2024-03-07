import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<>
			<div className="row d-flex justify-content-between bg-dark text-white pt-3">
				<div className="col text-center">
					socials
				</div>
				<div className="col text-center">
					<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" className="headerImg"></img>
				</div>
				<div className="col text-center">
					search and login
				</div>

			</div>

		</>
	);
};