import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import "../../styles/home.css";


import { AppContext } from "../layout";




export const Landing = () => {

    const { likes, setLikes, user, setUser, } = useContext(AppContext);

    const navigate = useNavigate();



    // const setUserId = () => {
    //     fetch('https://supreme-waffle-544xq45674gcv76w-3000.app.github.dev/user')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw Error(response.statusText);
    //             }
    //             // Read the response as JSON
    //             return response.json();
    //         })
    //         .then(responseAsJson => {
    //             // Do stuff with the JSONified response
    //             var names = responseAsJson.map((x) => x.username)
    //             setUserNames(names);
    //             console.log(names);
    //         })
    //         .catch(error => {
    //             console.log('Looks like there was a problem: \n', error);
    //         });
    // }

    const handleEnter = () => {
        // setUser(user);
        if (user) {
            fetch(`https://supreme-waffle-544xq45674gcv76w-3000.app.github.dev/user/${user}`)
                .then(response => {
                    // if (!response.ok) {
                    //     // throw Error(response.statusText);
                    // }
                    // Read the response as JSON
                    return response.json();
                })
                .then(responseAsJson => {
                    if (responseAsJson == "User does not exist") {
                        navigate('/nulluser');
                        console.log("User does not exist!")
                    }
                    else {
                        setUser(responseAsJson)
                        navigate('/home')
                    }

                })
                .catch(error => {
                    console.log('Looks like there was a problem: \n', error);
                });
        }


    }


    return (
        <>
            <div className="row d-flex justify-content-center bg-dark text-white">
                <div className="col-10 text-center pt-5 fs-5 ">
                    <input type="text" id="user_name" placeholder="Username"
                        onChange={e => setUser(e.target.value)} value={user}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleEnter()
                        }
                        }
                    />
                </div>
                <div className="col-10 text-center p-3 fs-5">
                    <button className="loginButton"
                        onClick={() => {
                            handleEnter()
                        }
                        }
                    >Login</button>
                </div>
            </div >
        </>
    );

};