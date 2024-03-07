import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ charObj, id }) => {

    const navigate = useNavigate();


    return (
        <div className="card myCard mx-2 mt-3"
            onClick={() => navigate(`/details/${id + 1}`)}>
            <img src="https://cdn.pixabay.com/photo/2016/07/19/23/27/pokemon-1529246_1280.jpg" className="card-img-top" alt="..." />
            <div className="card-body pb-5">
                <p className="myCardText">{charObj.name}</p>
            </div>
        </div>

    );

};