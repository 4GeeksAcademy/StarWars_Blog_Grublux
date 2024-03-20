import React, { Component, useContext } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppContext } from "../layout";

export const Card = ({ charObj, id }) => {

    const navigate = useNavigate();
    const theURL = charObj.url;

    const [imgUrl, setImgUrl] = useState("");

    const { likes, setLikes, user } = useContext(AppContext);

    const handleHeartClick = () => {
        individual_names.push(charObj.name)
        console.log(`this is the heart map individual names ${individual_names}`)


        fetch('https://supreme-waffle-544xq45674gcv76w-3000.app.github.dev/favorites', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(
                {
                    "entity_id": id,
                    "entity_type": "Pokemon_Species",
                    "fav_name": charObj.name,
                    "user_id": user.id
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
            .then(
                fetch(`https://supreme-waffle-544xq45674gcv76w-3000.app.github.dev/user/${user.id}/favorites`)
                    .then(response => {
                        if (!response.ok) {
                            throw Error(response.statusText);
                        }
                        // Read the response as JSON
                        return response.json();
                    })
                    .then(responseAsJson => {
                        // Do stuff with the JSONified response
                        setLikes(responseAsJson);
                        console.log("setting likes:")
                        console.log(responseAsJson)
                    })
                    .catch(error => {
                        console.log('Looks like there was a problem: \n', error);
                    })

            )
            .catch(error => console.error(error));


    }

    // const likesMap = () => {
    //     var entity_names = likes.map((x) => x.fav_name)
    //     console.log(`this is the likes map ${entity_names}`)
    // }
    var entityObjArray = []
    var individual_names = []

    if (likes) {
        entityObjArray = likes;
        entityObjArray.map((x) => individual_names.push(x.fav_name.toLowerCase()))
        console.log(`this is the likes map individual names ${individual_names}`)
    }



    // const map1 = array1.map((x) => x * 2);


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

    useEffect(() => {
        console.log("rerender")
        //Runs only on the first render
    }, [likes]);





    return (
        <div className="card myCard mx-2 mt-3">
            <div className="d-flex justify-content-end py-2 p-0">
                <i className={
                    individual_names.includes(charObj.name) ? "fa-solid fa-heart likeButton fs-3 liked"
                        : "fa-regular fa-heart likeButton fs-3"
                }
                    onClick={() => {
                        handleHeartClick()
                    }
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