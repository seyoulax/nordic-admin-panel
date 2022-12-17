import React from "react";
import { Link } from "react-router-dom";


import "./index.css"



class ProductItem extends React.Component {
    constructor(){
        super();
        
    }
    render() { 
        const {data, delProduct, productsListContext} = this.props
        return (
            <article className="product-card">
                <div>
                    <h3>название: {data.TITLE}</h3>
                    <img src={data.IMG} />
                    <p>описание: {data.DISCR}</p>
                    <span>цена: {data.PRICE}</span>
                    <br/>
                    <span>кол-во: {data.COUNT}</span>
                    <div>
                        <button onClick={() => delProduct(data.ID, productsListContext)}>
                            <>Удалить</>
                        </button>
                        <Link to={`/products/${data.ID}`}>Редактировать</Link>
                    </div>
                </div>
            </article>
        )
    }
}

export default ProductItem;