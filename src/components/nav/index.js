import React from "react";
import './index.css';
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import './index.css';

import {shape} from '../../shapes/nav-shape'



class Nav extends React.Component{
    constructor(){
        super()
    }
    //methods od each react`s component for depicting template
    render(){
        const {menu} = this.props 
        return (
            <div>
                <article className="menu">   
                    <h1>Nav</h1>
                    <ul>
                    {
                        menu.map((item, i) => 
                            <li key={i}>
                                <Link to={item.link}>{item.text}</Link>
                            </li>
                        )
                    }
                    </ul>
                </article>
            </div>
        )
    }
}

Nav.propTypes= {
    menu: PropTypes.arrayOf(
        shape
    )
    
}

export default Nav; 