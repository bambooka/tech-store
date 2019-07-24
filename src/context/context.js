import React from 'react';

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
    render(){
        return (
            <ProductContext.Provider value="hello from contex">
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
