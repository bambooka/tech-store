import React from 'react';
import {linkData} from "./linkData";
import {socialData} from "./socialData";
import {items} from './productData'

const ProductContext = React.createContext();

class ProductProvider extends React.Component {

    state = {
        sidebarOpen: false,
        cartOpen: false,
        cartItems: 11,
        links: linkData,
        socialIcons: socialData,
        cart: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: true
    };

    componentDidMount() {

        this.setProducts(items)
    }

    setProducts = (products) => {
        let storeProducts = products.map(item => {
                const {id} = item.sys;
                const image = item.fields.image.fields.file.url;
                const product = {id, ...item.fields, image};
                return product;
            });
        console.log(storeProducts);

        let featuredProducts = storeProducts.filter(item =>
            item.featured === true)

        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false
        })
    };

    getStorageCart = () => {
        return [];
    };

    getStorageProduct = () => {
        return [];
    };

    getTotals = () => {};

    addTotals =() => {};

    sybcStorage = () => {};

    addToCart = (id) => {
        console.log(`add to cart ${id}`)
    };
    getSingleProduct = (id) => {
        console.log(`get single product ${id}`)
    };

    handleSidebar = () => {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        })
    };

    handleCart = () => {
        this.setState({
            cartOpen: !this.state.cartOpen
        })
    };

    closeCart = () => {
        this.setState({
            cartOpen: false
        })
    };

    openCart = () => {
        this.setState({
            cartOpen: false
        })
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleSidebar: this.handleSidebar,
                handleCart: this.handleCart,
                openCart: this.openCart,
                closeCart: this.closeCart,
                addToCart: this.addToCart

            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
