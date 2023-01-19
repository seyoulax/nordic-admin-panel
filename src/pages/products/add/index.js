import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import ProductsJSON from '../../../stub/products'
import {ErrorMessage} from '../../../components/error-block'
import { ToBase64 } from '../../../utils/to-base64'

const addFormRef = React.createRef()

export function AddProduct(props){
    const [fileError, setFileError] = useState(false)
    useEffect(() => {

    }, [])

    const navigator = useNavigate()
    
    const add = (event) => {
        event.preventDefault()
        const data = new FormData(addFormRef.current)
        const title = data.get('title')
        const desc = data.get('desc')
        const price = data.get('price')
        const amount = data.get('amount')
        const img = data.get('img')
        if(img.type != "image/png"){
            setFileError(true)
        } else {
            const product = {
                "ID" : '1112121',
                "TITLE" : title,
                "DISCR" : desc,
                "PRICE" : price,
                "IMG" : "",
                "COUNT" : amount
            }
            ToBase64(img, function(img64){
                product.IMG = img64
                ProductsJSON.push(product)
                navigator('/products', {
                    state: {
                        data: ProductsJSON
                    }
                })
            })
        }
        //TODO : сделать отправку на сервер
    }

    return (
        <>
            <h3>Форма для добавления товара</h3>
            {fileError ? <ErrorMessage message="можно добавлять только файлы с расширением .png"></ErrorMessage> : ""}
            <form ref={addFormRef} encType='multipart/form-data' onSubmit={(event) => add(event)}>
                <input type="text" name="title" placeholder="Заголовок" />
                <input type="text" name="desc" placeholder="Описание" />
                <input type="number" name="price" placeholder="Цена" />
                <input type="number"name="amount" placeholder="Количество" />
                <input type="file" name="img" />
                <button type="submit">Добавить</button>
            </form>
        </>
    )
}