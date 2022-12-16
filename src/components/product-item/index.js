import React from "react";
import { Link } from "react-router-dom";


import "./index.css"

class ProductItem extends React.Component {
    constructor(){
        super();
    }
    render() { 
        const {data} = this.props
        return (
            <Link to={`/products/${data.ID}`}>
                <article className="product-card">
                    <div>
                        <h3>название: {data.TITLE}</h3>
                        <img src={data.IMG} />
                        <p>описание: {data.DISCR}</p>
                        <span>цена: {data.PRICE}</span>
                        <br/>
                        <span>кол-во: {data.COUNT}</span>
                    </div>
                </article>
            </Link>
        )
    }
}

export default ProductItem;