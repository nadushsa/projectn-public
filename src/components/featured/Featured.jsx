import React from "react";
import "./Featured.scss";


const Featured = () => {
    return (
        <div className="featured">
            <div className="container">
                <div className="featured-area">
                    <h1>WELCOME TO THE SOCIAL DIRECTORY OF BUSINESSES AND PROFESSIONALS</h1>
                    <h2>GET TO KNOW, CONNECT & ENGAGE</h2>
                    <div className="search">
                        <div className="searchInput">
                            <img src = "./img/search.png" alt = "Search"/>
                            <input type = "text" placeholder="What are you looking for? Ex- Electrician"/>
                            <button>Search</button>
                        </div>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Apparel and clothing stores</button>
                        <button>Arts and handicrafts</button>
                        <button>Vehicles for rent</button>
                        <button>Tailors</button>
                        <button>Sports and fitness</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured 