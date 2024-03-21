import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import "../../styles/home.css";


import { AppContext } from "../layout";




export const NullUser = () => {

    const { likes, setLikes, user, setUser, } = useContext(AppContext);

    const navigate = useNavigate();


    const handleEnter = () => {
        navigate("/signup")
    }

    return (
        <>
            <div className="row d-flex justify-content-center bg-dark text-secondary">
                <div className="col-10 text-center pt-5 fs-5 ">
                    <h3 className="noUser">User Does Not Exist</h3>
                    <p>click below to</p>
                    <i class="fa-solid fa-circle-down"></i>
                </div>
                <div className="col-10 text-center p-3 fs-5">
                    <button className="signUpButton"
                        onClick={() => {
                            handleEnter()
                        }
                        }
                    >Join the fun!</button>
                </div>
            </div >
        </>
    );

};