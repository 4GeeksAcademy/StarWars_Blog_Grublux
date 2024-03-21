import React, { Component } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export const Details = () => {

    const [thisSpecies, setThisSpecies] = useState([]);
    const [abilityName, setAbilityName] = useState([]);
    const [img, setImg] = useState("");
    var params = useParams();

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + params.theid)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                // Read the response as JSON
                return response.json();
            })
            .then(responseAsJson => {
                // Do stuff with the JSONified response
                var speciesName = responseAsJson.species.name;
                var imgURL = responseAsJson.sprites.other.home.front_shiny;
                console.log(imgURL);
                setImg(imgURL);
                // console.log(speciesName);
                setThisSpecies(speciesName);
                console.log(responseAsJson.abilities);

                let temp = responseAsJson.abilities.map(abilityObj => {
                    return abilityObj.ability.name;
                    // console.log(`Ability Name: ${x}`);
                })
                setAbilityName(temp)
            })
            .catch(error => {
                console.log('Looks like there was a problem: \n', error);
            });
        //Runs only on the first render
    }, []);


    return (


        <div className="row d-flex justify-content-center text-white">
            <>
                <div className="col">
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="col text-white">
                    <h1>{thisSpecies}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="row d-flex justify-content-center text-white">
                    <div className="col">
                        <h5>Abilities</h5>
                        {
                            abilityName.length > 0 ? abilityName.map((elm) => <p>{elm}</p>)

                                : <p>waiting for the abilities</p>
                        }
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </>


        </div>

    );

};