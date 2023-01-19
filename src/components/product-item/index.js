import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";


import "./index.css"



// class ProductItem extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             currentDel: false
//         }
//     }
//     setCurrent(event){
//         const {data, selected, setSelected} = this.props
//         if(event.target.checked){
//             this.setState({
//                 currentDel: true
//             })
//             const yorn = selected.find(item => item.ID == data.ID)
//             if(yorn){
//                 console.log(yorn)
//             } else {
//                 selected.push(data)
//                 setSelected([...selected])
//             }
//         } else {
//             this.setState({
//                 currentDel: false
//             })
//             let filtered = selected.filter(item => item.ID != data.ID)
//             setSelected(filtered)
//         }
//     }
//     render() { 
//         const {data, delProduct} = this.props
//         const className = `product-card ${this.state.currentDel ? 'del' : ""}`
//         return (
//             <article className={className}>
//                 <div>
//                     <h3>название: {data.TITLE}</h3>
//                     <img src={data.IMG} />
//                     <p>описание: {data.DISCR}</p>
//                     <span>цена: {data.PRICE}</span>
//                     <br/>
//                     <span>кол-во: {data.COUNT}</span>
//                     <div>
//                         <button onClick={() => delProduct(data.ID)}>
//                             <>Удалить</>
//                         </button>
//                         <Link to={`/products/${data.ID}`}>Редактировать</Link>
//                     </div>
//                     <div>
//                         <input  type="checkbox" onClick={(event) => this.setCurrent(event)}/>
//                     </div>
//                 </div>
//             </article>
//         )
//     }
// }

export function ProductItem(props) {
    const [currentDel, setCurrentDel] = useState(false);
    const setCurrent = (event) => {
        const {data, selected, setSelected} = props
        if(event.target.checked){
            setCurrentDel(true)
            const yorn = selected.find(item => item.ID == data.ID)
            if(yorn){
                console.log(yorn)
            } else {
                selected.push(data)
                setSelected([...selected])
            }
        } else {
            setCurrentDel(false)
            let filtered = selected.filter(item => item.ID != data.ID)
            setSelected(filtered)
        }
    }
    const {data, delProduct} = props
    const className = `product-card ${currentDel ? 'del' : ""}`
    return (
        <article className={className}>
            <div>
                <h3>название: {data.TITLE}</h3>
                <img src={data.IMG} />
                <p>описание: {data.DISCR}</p>
                <span>цена: {data.PRICE}</span>
                <br/>
                <span>кол-во: {data.COUNT}</span>
                <div>
                    <button onClick={() => delProduct(data.ID)}>
                        <>Удалить</>
                    </button>
                    <Link to={`/products/${data.ID}`}>Редактировать</Link>
                </div>
                <div>
                    <input  type="checkbox" onClick={(event) => setCurrent(event)}/>
                </div>
            </div>
        </article>
    )
};