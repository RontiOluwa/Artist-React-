import React, {Component} from 'react';
import {Link} from 'react-router-dom'

const Header = () =>{
    return(
        <header>
            <Link to="/"> Music Db</Link>
        </header>
    )
}

export default Header;