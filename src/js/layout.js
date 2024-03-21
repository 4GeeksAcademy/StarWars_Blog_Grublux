import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Landing } from "./views/landing";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Details } from "./views/details";

import { Header } from "./component/header";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";



export const AppContext = React.createContext(null);



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const [likes, setLikes] = useState("");
	const [user, setUser] = useState("");
	const [stateToggle, setStateToggle] = useState(false);
	// const [id, setId] = useState(0);
	// const [userObj, setUserObj] = useState([])

	return (
		<div>

			<AppContext.Provider value={{ likes, setLikes, user, setUser, stateToggle, setStateToggle }}>
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Header />
						<Navbar />
						<Routes>
							<Route path="/" element={<Landing />} />
							<Route path="/home" element={<Home />} />
							<Route path="/details/:theid" element={<Details />} />
							<Route path="/single/:theid" element={<Single />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</AppContext.Provider>
		</div>
	);
};

export default injectContext(Layout);
