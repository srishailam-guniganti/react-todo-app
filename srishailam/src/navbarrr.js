import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
        <ul>
        <Link to='/'><li>home</li></Link>
        <Link to ='/about'><li>about </li></Link>
        <Link to ='/online'><li>online</li></Link>

        
        </ul>
        </div>
    )
}
export default Navbar