import React, { Component, useContext } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppContext } from "../layout";

export const Card = ({ charObj, id }) => {

    const navigate = useNavigate();
    const theURL = charObj.url;

    const [imgUrl, setImgUrl] = useState("");

    const { likes, setLikes } = useContext(AppContext);


    // console.log(`Here is the URL ${theURL}`);

    useEffect(() => {
        fetch(theURL)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                // Read the response as JSON
                return response.json();
            })
            .then(responseAsJson => {
                // Do stuff with the JSONified response
                var imgSrc = responseAsJson.sprites.other["official-artwork"].front_default;
                setImgUrl(imgSrc);
                console.log(imgSrc);
            })
            .catch(error => {
                console.log('Looks like there was a problem: \n', error);
            });
        //Runs only on the first render
    }, []);


    return (
        <div className="card myCard mx-2 mt-3">
            <div className="d-flex justify-content-end py-2 p-0">
                <i className={
                    likes.includes(charObj.name) ? "fa-solid fa-heart likeButton fs-3 liked"
                        : "fa-regular fa-heart likeButton fs-3"
                }
                    onClick={
                        likes.includes(charObj.name) ?
                            () => {

                                setLikes(likes.filter(x => x != charObj.name))
                            }
                            :
                            () => setLikes([...likes, charObj.name])

                    }></i>
            </div>
            <div className="pb-1 myCardImg"
                onClick={() => navigate(`/details/${id + 1}`)}>
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body pb-5">
                    <p className="myCardText">{charObj.name}</p>
                </div>
            </div>
        </div>

    );

};