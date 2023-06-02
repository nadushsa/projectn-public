import React from "react";
import "./CatCard.scss";
import {Link} from "react-router-dom";

const CatCard = ({item}) => {
    return (
        <Link to = "/nCards?cat=apperalAndClothingStores">
            <div className = "catCard">
                <imp src = {item.img} alt = "Category Image"/>
                <span className = "desc">{item.desc}</span>
                <span className = "title">{item.title}</span>
            </div>
        </Link>       
    )
}

export default CatCard