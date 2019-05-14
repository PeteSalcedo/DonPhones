import React, { Component } from 'react';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    render(){
        return(
            
                <ProductContext.provider value="hello from context">
                    {this.props.children}
                </ProductContext.provider>
            
        )
    }
}
const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer };