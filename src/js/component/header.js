import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../layout";

export const Header = () => {
	const { user, setUser, likes } = useContext(AppContext);
	// const [loggedIn, setLoggedIn] = useState("")



	return (
		<>
			<div className="row d-flex justify-content-between bg-dark text-white pt-3">
				<div className="col text-center">
					socials
				</div>
				<div className="col text-center">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/404px-International_Pok%C3%A9mon_logo.svg.png" className="headerImg"></img>
				</div>
				{/* <div className="col text-center" style={user.id ? { display: "block" } : { display: "none" }}>
					Welcome back {user}!
				</div>
				<div className="col text-center" style={user.id ? { display: "none" } : { display: "block" }}>
					Login
				</div> */}

			</div>

		</>
	);
};