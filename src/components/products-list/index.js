import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


import './index.css'

import {Loader} from '../loader'

import productsJson from '../../stub/products.json'

import {ProductItem} from '../product-item/index'



export function ProductsList(props) {
    const [data, setData] = useState(null)
    const [selected, setSelected] = useState([])
    const [alwaysData, setAlwaysData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [showNothingFoundErr, setShowNothingFoundErr] = useState(false)
    const navigate = useNavigate()

    const location = useLocation()
    useEffect(() => {
        setTimeout(() => {
            const newProducts = location?.state?.data
            if(!newProducts){
                setAlwaysData(productsJson)
            } else {
                setAlwaysData(newProducts)
            }
            setIsLoading(false)
        }, 1000)
    }, [])
    const findItem = (event) => {
        event.preventDefault()
        let title = event.target[0].value
        let data = alwaysData
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
        setData(array)
        setShowNothingFoundErr(t_f)
    }   
    const delProduct = (id) => {
        const data = alwaysData.filter((item) => 
            item.ID != id
        )
        if(selected){
            for(let i = 0; i < selected.length; i++){
                if(selected[i].ID == id){
                    selected.splice(i, 1)
                } 
            }
        }
        setSelected([...selected])
        setAlwaysData(data)
        setData(data)
    }
    const delCurrentProducts = () => {
        const productsNow = data || alwaysData

        for(let i = 0; i < productsNow.length; i++) {
            for(let j = 0; j < selected.length; j++) {
                if(selected[i] && (productsNow[i].ID ==  selected[j].ID)){
                    productsNow.splice(i, 1)
                }
            }
        }

        setSelected([])
        setData([...productsNow])
    }
    
    const products = data || alwaysData
    if(isLoading){
        return (
            <Loader />
        )
    }
    return (
        <React.Fragment>
            <div>
                <h2>Find smt...</h2>
                <form onSubmit={findItem}>
                    <input type="text"/>
                    <input type="submit" value="найти"/>
                    <button onClick={(event) => delCurrentProducts(event)}>Удалить {selected.length} товаров</button>
                    <button onClick={() => navigate("add")}>Добавить товар</button>
                </form>
            </div>
                {showNothingFoundErr ? <strong className="err">Ничего не было найдено</strong> : null }
            <div className="products-wrapper">
                {
                    products.map(item => 
                        <ProductItem key={item.ID} data={item} delProduct={delProduct} selected={selected}  setSelected={setSelected}/>
                    )
                }
            </div>
        </React.Fragment>
    )
    
}
/*class ProductsList extends React.Component {
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
                    <Loader />
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
};*/

