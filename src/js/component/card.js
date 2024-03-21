import React, { Component, useContext } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppContext } from "../layout";

export const Card = ({ charObj, id }) => {

    const navigate = useNavigate();
    const theURL = charObj.url;

    var individual_names = []

    const [imgUrl, setImgUrl] = useState("");

    const deleteFavorite = async (fav_id) => {
        console.log("deleteFavorite runs")
        const response = await fetch(`https://supreme-waffle-544xq45674gcv76w-3000.app.github.dev/favorites/${fav_id}/${user.id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            const data = await response.json();
            setLikes(data.results)
            console.log(data.msg)
            return data;
        } else {
            console.log('error: ', response.status, response.statusText);
            /* Handle the error returned by the HTTP request */
            return { error: { status: response.status, statusText: response.statusText } };
        };
    };


    const { likes, setLikes, user } = useContext(AppContext);

    const handleHeartClick = () => {
        individual_names.push(charObj.name)
        console.log(`HeartClick runs`)


        fetch(`https://supreme-waffle-544xq45674gcv76w-3000.app.github.dev/favorites/${user.id}`, {
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
            .then(response => {
                console.log(response);
                setLikes(response.results)
            }
            )
    }

    // const likesMap = () => {
    //     var entity_names = likes.map((x) => x.fav_name)
    //     console.log(`this is the likes map ${entity_names}`)
    // }
    var entityObjArray = []


    if (likes) {
        entityObjArray = likes;
        entityObjArray.map((x) => individual_names.push(x.fav_name.toLowerCase()))
        // console.log(`this is the likes map individual names ${individual_names}`)
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

    // useEffect(() => {
    //     if (user.id) {
    //         console.log("rerender")
    //         //Get likes after state toggles
    //         fetch(`https://supreme-waffle-544xq45674gcv76w-3000.app.github.dev/user/${user.id}/favorites`)
    //             .then(response => {
    //                 if (!response.ok) {
    //                     throw Error(response.statusText);
    //                 }
    //                 // Read the response as JSON
    //                 return response.json();
    //             })
    //             .then(responseAsJson => {
    //                 // Do stuff with the JSONified response
    //                 setLikes(responseAsJson);
    //                 // console.log("setting likes:")
    //                 // console.log(responseAsJson)
    //             })
    //             .catch(error => {
    //                 console.log('Looks like there was a problem: \n', error);
    //             })
    //             .catch(error => console.error(error));
    //     }

    // }, [stateToggle]);

    if (likes) {
        var favMap = likes.map((elm) => elm.fav_name);
    }

    // if (likes) {
    //     var temp = 
    // }



    var exists = likes.find((obj) => obj.fav_name == charObj.name)



    return (
        <div className="card myCard mx-2 mt-3">
            <div className="d-flex justify-content-end py-2 p-0">
                <i className={
                    exists ? "fa-solid fa-heart likeButton fs-3 liked"
                        : "fa-regular fa-heart likeButton fs-3"
                }
                    onClick={() => {
                        exists ? deleteFavorite(exists.id) :
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