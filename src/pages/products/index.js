import React from "react";

import { Outlet } from "react-router-dom";

import "./index.css"

class Products extends React.Component{
    constructor(){
        super()
    }
    
    //methods od each react`s component for depicting template
    render(){
        return (
                <section>
                    <h1>Catalog</h1>
                    <Outlet />
                </section>
            )

    }
}

export default Products;