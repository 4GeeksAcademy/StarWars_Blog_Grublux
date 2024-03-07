import React, { Component } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export const Details = () => {

    const [thisSpecies, setThisSpecies] = useState([]);
    const [abilityName, setAbilityName] = useState([]);
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
                // console.log(speciesName);
                setThisSpecies(speciesName);
                console.log(responseAsJson.abilities);
                responseAsJson.abilities.forEach(abilityObj => {
                    var x = abilityObj.ability.name;
                    console.log(`Ability Name: ${x}`);
                    var y = [...abilityName, x];
                    setAbilityName(y);
                    // fetch(URL)
                    //     .then(response => response.json())
                    //     .then(film => {
                    //         // console.log(film.title);
                    //         console.log(`the films are: ${film.title}`);
                    //         setFilms([...films, film]);
                    //     });


                });
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
                    <img src="https://cdn.pixabay.com/photo/2022/05/24/07/39/lego-7217829_1280.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="col text-white">
                    <h1>{thisSpecies}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="row d-flex justify-content-center text-white">
                    <div className="col">{
                        abilityName ?
                            <p>{abilityName}</p>
                            : <p>waiting for films</p>
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

            {/* {
                thisCharacter.length > 1 ?
                    thisCharacter.map(
                        (charObj, ind) =>
                            

                    )
                    : <p className="text-center pt-3 fs-1"><i className="fa-solid fa-spinner"></i></p>
            } */}


        </div>

    );

};