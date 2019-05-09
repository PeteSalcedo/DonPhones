import React, { Component } from 'react';
import Product from './Product.js'
import Title from "./Title.js"
import { storeProducts } from "../data.js";

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
            <Title name="our" title="product">
                
            </Title>
                <div className="row" />
                
                
            </div>
            </div>
        </React.Fragment>
        )
    }


}

export default ProductList;