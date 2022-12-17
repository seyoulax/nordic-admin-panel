import  React  from 'react'
import ReactDOM from 'react-dom/client';

import './index.css'

import productsJson from '../../stub/products.json'

import ProductItem from '../product-item/index'

class ProductsList extends React.Component {
    constructor(){
        super();
        this.state = {
            alwaysData: [],
            data: null,
            showNothingFoundErr: false,
            isLoading: true
        }
        this.findItem = this.findItem.bind(this)
    }
    findItem(event){
        event.preventDefault()
        let title = event.target[0].value
        console.log("🚀 ~ file: index.js:22 ~ Products ~ findItem ~ title", title)
        let data = this.state.alwaysData
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
    delProduct(id, context){
        console.log(context)
        const data = context.state.data.filter((item) => 
            item.ID != id
        )
        context.setState({
            data: data,
            alwaysData: data
        })
    }
    _destroy(){
        ReactDOM.unmount(
            document.getElementById('root')
        )
    }
    // * устаревшие, но ипользуются до сих пор
        // componentWillMount(){
        // }
        // componentWillUpdate(){

        // }
    // *
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                alwaysData: productsJson,
                data: productsJson,
                isLoading: false 
            })
        }, 1000);
        
    }
    // componentDidUpdate(){
        
    // }
    // componentDidCatch(error, errorInfo){

    // }
    render() {
        if(!this.state.data && !this.state.alwaysData){
            throw new Error('gg')
        } else {
            if(this.isLoading){
               return (
                <h1>isLoading</h1>
               )
            }
            return (
                <React.Fragment>
                    <div>
                        <h2>Find smt...</h2>
                        <form onSubmit={this.findItem}>
                            <input type="text"/>
                            <input type="submit" value="найти"/>
                            <button id="button_delete_component" onClick={this._destroy.bind(this)}>del component ProductsList</button>
                        </form>
                    </div>
                        {this.state.showNothingFoundErr ? <strong className="err">Ничего не было найдено</strong> : null }
                    <div className="products-wrapper">
                        {
                            
                            this.state.data.map(item => 
                                <ProductItem key={item.ID} data={item} delProduct={this.delProduct} productsListContext={this}/>
                            )
                        }
                    </div>
                </React.Fragment>
            )
        }
    }
};

export default ProductsList;