import React from "react";
import { useState, useEffect } from "react";
import "../../styles/home.css";

import { Card } from "../component/card";

// 1. Fetch characters from API
// 2. Create a state hook to hold the array with the characters
// 3. Creat an individual Card Component to display a character
// 4. Map thru all characters and call card component for each one
// 5. Create View component ("Details") for expanded view of each character
// 6. On every card componet create a button which will <Link> to the details page for that character









export const Home = () => {

	const [characterArray, setCharacterArray] = useState([]);

	useEffect(() => {
		fetch('https://swapi.dev/api/people')
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as JSON
				return response.json();
			})
			.then(responseAsJson => {
				// Do stuff with the JSONified response
				setCharacterArray(responseAsJson.results);
				console.log(responseAsJson);
			})
			.catch(error => {
				console.log('Looks like there was a problem: \n', error);
			});
		//Runs only on the first render
	}, []);

	return (
		<>
			<div className="row d-flex justify-content-center bg-dark text-white">
				<div className="col-10 text-center p-3 fs-5 ">
					<p>All of your starwars favorites now streaming on Disney +</p>
				</div>
			</div>
			<div className="row d-flex justify-content-center bg-dark text-white">
				{
					characterArray.length > 1 ?
						characterArray.map(
							(charObj, ind) => <Card charObj={charObj} key={ind} id={ind} />
						)
						: <p className="text-center pt-3 fs-1"><i className="fa-solid fa-spinner"></i></p>
				}

			</div>
		</>
	);

};
