import React, { Component } from 'react';
import Product from './Product.js'
import Title from "./Title.js"
import { storeProducts } from "../data.js";
import { ProductConsumer } from '../context'

class ProductList extends Component {

    state={
        products:storeProducts
    }    
    render(){
        console.log(this.state.products)
        return(
        <React.Fragment>
            <div className="py-5">
            <div className="container">
            <Title name="our" title="product"></Title>
                <div className="row" />
                <ProductConsumer>
                    {(value)=> {
                        return <h1>{value}</h1>

                    }}
                </ProductConsumer>
                
            </div>
            </div>
        </React.Fragment>
        )
    }


}

export default ProductList;