import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../layout";

export const Header = () => {
	const { user, setUser, likes, loggedIn, setLoggedIn } = useContext(AppContext);
	// const [loggedIn, setLoggedIn] = useState("")

	const navigate = useNavigate()



	return (
		<>
			<div className="row d-flex justify-content-between bg-dark text-white pt-3">
				<div className="col justify-content-center text-center pt-3">
					<i className="fa-brands fa-youtube socials mx-1"></i><i className="fa-brands fa-instagram socials mx-1"></i>
					<i className="fa-brands fa-tiktok socials mx-1"></i><i className="fa-brands fa-x-twitter socials mx-1"></i>
				</div>
				<div className="col-6 justify-content-center text-center">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/404px-International_Pok%C3%A9mon_logo.svg.png" className="headerImg"></img>
				</div>
				<div className="col justify-content-center text-center pt-3" style={user.id ? { display: "block" } : { display: "none" }}>
					<p className="topRightLoginButton"
						onClick={() => {
							setUser("");
							navigate('/')

						}}
					>Log Out</p>
				</div>
				<div className="col text-center pt-3" style={user.id ? { display: "none" } : { display: "block" }}>
					<p className="topRightLoginButton"
						onClick={() => {
							navigate("/signup");
							setUser("")
						}}
					>Create Account</p>
				</div>

			</div>

		</>
	);
};