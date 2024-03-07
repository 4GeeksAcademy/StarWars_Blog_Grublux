import React, { Component } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export const Details = () => {

    const [thisCharacter, setThisCharacter] = useState({});
    const [films, setFilms] = useState([]);
    var params = useParams();

    useEffect(() => {
        fetch('https://swapi.dev/api/people/' + params.theid)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                // Read the response as JSON
                return response.json();
            })
            .then(responseAsJson => {
                // Do stuff with the JSONified response
                setThisCharacter(responseAsJson);
                responseAsJson.films.forEach(URL => {
                    console.log(`first instance: ${URL}`);
                    fetch(URL)
                        .then(response => response.json())
                        .then(film => {
                            // console.log(film.title);
                            console.log(`the films are: ${film.title}`);
                            setFilms([...films, film]);
                        });


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
                    <h1>{thisCharacter.name}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="row d-flex justify-content-center text-white">
                    <div className="col">{
                        thisCharacter.films ?
                            thisCharacter.films.map((elm) => {
                                return <p>{elm.title}</p>
                            })
                            : <p>waiting for films</p>


                    }</div>
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