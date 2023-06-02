import React, { useEffect, useState } from 'react';
import "./Navbar.scss";
import { Link, useLocation } from 'react-router-dom';
import image from "./nivorksa.jpg";

const Navbar = () => {
    const [active, setActive] = useState(true);
    const [open, setOpen] = useState(false);

    const {pathname} = useLocation ()

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) :setActive(false)
    }

    useEffect (() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        }
    }, [])

    const currentUser = {
        id: 1,
        username: "Navodya",
        isProfessional: true
    }

    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to = "/" className='link'>
                    <span className='text'>ProjectN</span>
                    </Link>
                </div>

                <div className="links">
                    {!currentUser?.isProfessional && <span>Become a Professional</span>}
                    <span>Sign In</span>
                    {!currentUser && <button>Sign Up</button>}
                    {currentUser && (
                        <div className="user" onClick = {() => setOpen(!open)}>
                           <span>{currentUser?.username}</span> 
                           <img src = {image} alt = "Profile Picture"/>
                           {open && <div className="options"> {
                                currentUser?.isProfessional && (
                                    <>
                                        <Link className='link' to = "/mynCards">nCards</Link>
                                        <Link className='link' to = "/add">Add New nCards</Link>
                                    </>
                                )
                           }     
                           <Link className='link' to = "/contracts">Contracts</Link>
                           <Link className='link' to = "/messages">Messages</Link>
                           <Link className='link' to = "/">Log Out</Link>

                           </div>}
                        </div>
                    )}
                </div>
            </div>                
        </div>
    )
}

export default Navbar