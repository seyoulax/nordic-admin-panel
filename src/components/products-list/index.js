import React from 'react'


import './index.css'

import productsJson from '../../stub/products.json'

import ProductItem from '../product-item/index'

class ProductsList extends React.Component {
    constructor(){
        super();
        this.state = {
            data: productsJson,
            showNothingFoundErr: false
        }
        this.findItem = this.findItem.bind(this)
    }
    findItem(event){
        event.preventDefault()
        let title = event.target[0].value
        console.log("🚀 ~ file: index.js:22 ~ Products ~ findItem ~ title", title)
        let data = productsJson
        let t_f = false
        let array = []
        if(title == ''){
            array = data
        } else {
            array.push(data.find(item => 
                item.TITLE.toLowerCase() == title.toLowerCase() || item.DISCR.toLowerCase() == title.toLowerCase()
            ))
            if(array[0] == undefined){
                array = data
                t_f = true
            } 
        }
        this.setState({
            data : array,
            showNothingFoundErr: t_f
        })        
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <h2>Find smt...</h2>
                    <form onSubmit={this.findItem}>
                        <input type="text"/>
                        <input type="submit" value="найти"/>
                    </form>
                </div>
                    {this.state.showNothingFoundErr ? <strong className="err">Ничего не было найдено</strong> : null }
                <div className="products-wrapper">
                    {
                        this.state.data.map(item => 
                            <ProductItem key={item.ID} data={item}/>
                        )
                    }
                </div>
            </React.Fragment>
        )
    }
};

export default ProductsList;