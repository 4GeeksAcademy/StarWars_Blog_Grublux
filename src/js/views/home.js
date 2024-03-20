import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "../../styles/home.css";

import { Card } from "../component/card";
import { AppContext } from "../layout";

// 1. Fetch characters from API
// 2. Create a state hook to hold the array with the characters
// 3. Creat an individual Card Component to display a character
// 4. Map thru all characters and call card component for each one
// 5. Create View component ("Details") for expanded view of each character
// 6. On every card componet create a button which will <Link> to the details page for that character









export const Home = () => {


	const { likes, setLikes, user, setUser, id, setId, userObj, setUserObj } = useContext(AppContext);

	const [characterArray, setCharacterArray] = useState([]);

	var names = []

	//Get the pokemon data
	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=28')
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

	useEffect(() => {
		fetch('https://supreme-waffle-544xq45674gcv76w-3000.app.github.dev/user')
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as JSON
				return response.json();
			})
			.then(responseAsJson => {
				// Do stuff with the JSONified response
				var userObjs = responseAsJson.map((x) => x)
				setUserObj(userObjs);
				// console.log(userObjs.map((x) => x.username););
				console.log(userObjs)
				names = responseAsJson.map((x) => x)
				console.log(names)
				for (let obj of names) {
					if (obj.username == user) {
						setId(obj.id)
					}
				}

				// console.log(names)
			})
			// 	.then(
			// 		for (i in names) {

			// 		}

			// )

			//still need to work on the below!
			// .then(() => {
			// 	for (obj in userObj) {
			// 		if (userObj.username.includes(user)) {
			// 			setId(userObj.id)
			// 		}
			// 	}
			// }


			// )
			.catch(error => {
				console.log('Looks like there was a problem: \n', error);
			});
	}, []);

	return (
		<>
			<div className="row d-flex justify-content-center bg-dark text-white">
				<div className="col-10 text-center p-3 fs-5 ">
					<p>Welcome Back {user}!</p>
					<p>You Gotta catch em all!</p>
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
