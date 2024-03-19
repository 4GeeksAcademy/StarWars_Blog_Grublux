import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import "../../styles/home.css";


import { AppContext } from "../layout";




export const Landing = () => {

    const { likes, setLikes, user, setUser } = useContext(AppContext);

    const [characterArray, setCharacterArray] = useState([]);

    const navigate = useNavigate();

    // useEffect(() => {
    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=28')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw Error(response.statusText);
    //             }
    //             // Read the response as JSON
    //             return response.json();
    //         })
    //         .then(responseAsJson => {
    //             // Do stuff with the JSONified response
    //             setCharacterArray(responseAsJson.results);
    //             console.log(responseAsJson);
    //         })
    //         .catch(error => {
    //             console.log('Looks like there was a problem: \n', error);
    //         });
    //     //Runs only on the first render
    // }, []);

    return (
        <>
            <div className="row d-flex justify-content-center bg-dark text-white">
                <div className="col-10 text-center pt-5 fs-5 ">
                    <h2 className="text-white-50 pb-2">Please Login</h2>
                    <input type="text" id="user_name" placeholder="Username"
                        onChange={e => setUser(e.target.value)} value={user}
                    />
                </div>
                <div className="col-10 text-center p-3 fs-5">
                    <button className="loginButton"
                        onClick={() => {
                            setUser(user);
                            navigate(`/home`)
                        }
                        }
                    >Submit</button>
                </div>
            </div >


            {/* <div className="row d-flex justify-content-center bg-dark text-white">
                <div className="col-10 text-center p-3 fs-5 ">
                    <p>Gotta catch em all!</p>
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

            </div> */}
        </>
    );

};