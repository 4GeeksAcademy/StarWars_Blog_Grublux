import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="row d-flex justify-content-center bg-dark border-bottom border-secondary">
			<div className="col-7 d-flex justify-content-center">
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNavDropdown">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">News + Features</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Video</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Films</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Games + Interactive</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Databank</a>
								</li>
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										Live Battle!
									</a>
									<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
										<li><a className="dropdown-item" href="#">Action</a></li>
										<li><a className="dropdown-item" href="#">Another action</a></li>
										<li><a className="dropdown-item" href="#">Something else here</a></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};
