import React from "react";

import './index.css'

import productsJSON from '../../stub/products.json'


const savingRef = React.createRef()
class ProductDetail extends React.Component {
    constructor(){
        super();
        this.state = {
            data: productsJSON
        }
    }
    saveProduct(event){
        event.preventDefault()   
        const data = new FormData(savingRef.current)
        const file = data.get('IMG')
        //TODO: отправить запрос на сохранение файла а потом остальных данных
    }
    render() {
        const prId = window.location.pathname.replace('/products/', '')
        const data = this.state.data.find(item => item.ID == prId)
        return(
            <>
                <article>
                        <h3>название: {data.TITLE}</h3>
                        <img src={data.IMG} />
                        <form ref={savingRef} encType="multipart/form-data">
                            Название товара <input type="text" name="TITLE" defaultValue={data.TITLE}/><br></br>
                            Описание товара <input type="text" name="DISCR" defaultValue={data.DISCR} /><br></br>
                            Цена товара <input type="text" name="PRICE" defaultValue={data.PRICE}/><br></br>
                            Количество товара <input type="text" name="COUNT" defaultValue={data.COUNT}/><br></br>
                            Изображение товара <input type="file" name="IMG"/><br></br>
                            <input type="submit" value="Сохранить" onClick={(event) => (this.saveProduct(event))}/><br></br>
                        </form>
                </article>
            </>
        )
    }
}

export default ProductDetail;