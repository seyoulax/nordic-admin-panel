import React from "react";

import './index.css'

import goodsJSON from '../../stub/products.json'

class ProductDetail extends React.Component {
    constructor(){
        super();
    }
    render() {
        const prId = window.location.pathname.replace('/products/', '')
        const data = goodsJSON.find(item => item.ID == prId)
        return(
            <>
                <article>
                        <h3>название: {data.TITLE}</h3>
                        <img src={data.IMG} />
                        <form>
                            Название товара <input type="text" name="TITLE" value={data.TITLE}/><br></br>
                            Описание товара <input type="text" name="DISCR" value={data.DISCR} /><br></br>
                            Цена товара <input type="text" name="PRICE" value={data.PRICE}/><br></br>
                            Количество товара <input type="text" name="COUNT"value={data.COUNT}/><br></br>
                            Изображение товара <input type="file" name="IMG"/><br></br>
                            <input type="submit" value="Сохранить"/><br></br>
                        </form>
                </article>
            </>
        )
    }
}

export default ProductDetail;