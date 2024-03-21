import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import "../../styles/home.css";


import { AppContext } from "../layout";




export const SignUp = () => {

    const { likes, setLikes, user, setUser, } = useContext(AppContext);

    const [newUser, setNewUser] = useState("");
    const [password, setPassword] = useState("");
    const [newEmail, setNewEmail] = useState("");

    const navigate = useNavigate();


    const handleEnter = () => {
        // Create New User(user);
        fetch('https://supreme-waffle-544xq45674gcv76w-3000.app.github.dev/user', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(
                {
                    "email": newEmail,
                    "password": password,
                    "username": newUser
                }
            ), // data can be a 'string' or an {object} which comes from somewhere further above in our application
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) throw Error(res.statusText);
                return res.json();
            })
            .then(response => console.log('Success:', response))
            .catch(error => console.error(error));
    }

    return (
        <>
            <div className="row d-flex justify-content-center bg-dark text-white">
                <div className="col-10 text-center pt-5 fs-5 ">
                    <input type="text" id="user_name" placeholder="Enter Email"
                        onChange={e => setNewEmail(e.target.value)} value={newEmail}
                    />
                </div>
                <div className="col-10 text-center pt-2 fs-5 ">
                    <input type="text" id="user_name" placeholder="Choose Username"
                        onChange={e => setNewUser(e.target.value)} value={newUser}
                    />
                </div>
                <div className="col-10 text-center pt-2 fs-5 ">
                    <input type="text" id="user_name" placeholder="Choose Password"
                        onChange={e => setPassword(e.target.value)} value={password}
                    />
                </div>
                <div className="col-10 text-center p-3 fs-5">
                    <button className="loginButton"
                        onClick={() => {
                            handleEnter()
                        }
                        }
                    >Create Account</button>
                </div>
            </div >
        </>
    );

};