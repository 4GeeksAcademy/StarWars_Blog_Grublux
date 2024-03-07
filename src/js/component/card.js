import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Card = ({ charObj, id }) => {

    const navigate = useNavigate();
    const theURL = charObj.url;

    const [imgUrl, setImgUrl] = useState("");

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
        <div className="card myCard mx-2 mt-3"
            onClick={() => navigate(`/details/${id + 1}`)}>
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body pb-5">
                <p className="myCardText">{charObj.name}</p>
            </div>
        </div>

    );

};