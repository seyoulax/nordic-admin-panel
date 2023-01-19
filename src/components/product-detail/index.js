import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom"; 

import './index.css'
import { Loader } from "../loader";
import productsJSON from '../../stub/products.json'
import { ToBase64 } from "../../utils/to-base64";


const savingRef = React.createRef()
// class ProductDetail extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             data: productsJSON
//         }
//     }
//     saveProduct(event){
//         event.preventDefault()   
//         const data = new FormData(savingRef.current)
//         const file = data.get('IMG')
//         //TODO: отправить запрос на сохранение файла а потом остальных данных
//     }
//     render() {
//         const prId = window.location.pathname.replace('/products/', '')
//         const data = this.state.data.find(item => item.ID == prId)
//         return(
//             <>
//                 <article>
//                         <h3>название: {data.TITLE}</h3>
//                         <img src={data.IMG} />
//                         <form ref={savingRef} encType="multipart/form-data">
//                             Название товара <input type="text" name="TITLE" defaultValue={data.TITLE}/><br></br>
//                             Описание товара <input type="text" name="DISCR" defaultValue={data.DISCR} /><br></br>
//                             Цена товара <input type="text" name="PRICE" defaultValue={data.PRICE}/><br></br>
//                             Количество товара <input type="text" name="COUNT" defaultValue={data.COUNT}/><br></br>
//                             Изображение товара <input type="file" name="IMG"/><br></br>
//                             <input type="submit" value="Сохранить" onClick={(event) => (this.saveProduct(event))}/><br></br>
//                         </form>
//                 </article>
//             </>
//         )
//     }
// }

// export default ProductDetail;

export function ProductDetail() {
    const [product, setProduct] = useState(null)
    const [products, setProducts] = useState(productsJSON)
    
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => { 
        let product = products.find(item => item.ID == id)
        setTimeout(() => setProduct(product), 1000)
    }, [])

    const saveProduct = (event) => {
        event.preventDefault()   
        const data = new FormData(savingRef.current)
        const img = data.get('IMG')
        const title = data.get('TITLE')
        const price = data.get('PRICE')
        const count = data.get('COUNT')
        const desc = data.get('DISCR')

        products.find((item, i) => {
                if (item.ID == id) {
                    products[i].TITLE = title
                    products[i].PRICE = price
                    products[i].COUNT = count
                    products[i].DISCR = desc
                    ToBase64(img, function(img64){
                        if(img64){
                            products[i].IMG = img64
                            navigate("/products", {
                                state: {
                                    data: products
                                }
                            })
                        }
                    })
                }
            }
        )
        //TODO: отправить запрос на сохранение файла а потом остальных данных
    }       
    
    if(!product){
        return <Loader />
    } else {
        return (    
            <article>
                <h3>название: {product.TITLE}</h3>
                <img src={product.IMG} />
                <form ref={savingRef} encType="multipart/form-data">
                    Название товара <input type="text" name="TITLE" defaultValue={product.TITLE}/><br></br>
                    Описание товара <input type="text" name="DISCR" defaultValue={product.DISCR} /><br></br>
                    Цена товара <input type="text" name="PRICE" defaultValue={product.PRICE}/><br></br>
                    Количество товара <input type="text" name="COUNT" defaultValue={product.COUNT}/><br></br>
                    Изображение товара <input type="file" name="IMG"/><br></br>
                    <input type="submit" value="Сохранить" onClick={(event) => (saveProduct(event))}/><br></br>
                </form>
            </article>
        )
    }
}