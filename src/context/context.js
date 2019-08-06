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
            item.featured === true);

        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false
        }, () => {
            this.addTotals();
        })
    };

    getStorageCart = () => {
        let cart;
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        } else {
            cart = [];
        }
        return cart;
    };

    getStorageProduct = () => {
        return localStorage.getItem('singleProduct')
            ? JSON.parse(localStorage.getItem('singleProduct'))
            : {}
    };

    getTotals = () => {
        let subTotal = 0;
        let cartItems = 0;
        this.state.cart.forEach(
            item => {
                subTotal += item.total;
                cartItems += item.count;
            }
        );

        subTotal = parseFloat(subTotal.toFixed(2));
        let tax = subTotal * 0.13;
        tax = parseFloat(tax.toFixed(2));
        let total = subTotal + tax;
        total = parseFloat(total.toFixed(2));
        return {
            cartItems,
            total,
            subTotal,
            tax
        }
    };

    addTotals = () => {
        const totals = this.getTotals();
        this.setState({
            cartItems: totals.cartItems,
            cartTotal: totals.total,
            cartSubTotal: totals.subTotal,
            cartTax: totals.tax
        })
    };

    syncStorage = () => {
        localStorage.setItem("cart", JSON.stringify(this.state.cart))
    };

    addToCart = (id) => {
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.storeProducts];
        let tempItem = tempCart.find(item => item.id === id);

        if (!tempItem) {
            tempItem = tempProducts.find(item => item.id === id);
            let total = tempItem.price;
            let cartItem = {...tempItem, count: 1, total};
            tempCart = [...tempCart, cartItem];
        } else {
            tempItem.count++;
            tempItem.total = tempItem.count * tempItem.price;
            tempItem.total = parseFloat(tempItem.total.toFixed(2))
        }

        this.setState(() => {
            return {cart: tempCart}
        }, () => {
            this.addTotals();
            this.syncStorage();
            this.openCart();
        });

        console.log(tempCart, tempProducts)
    };

    getSingleProduct = (id) => {
        console.log(`get single product ${id}`)
    };

    setSingleProduct = id => {
        let product = this.state.storeProducts.find(item => item.id === id);
        localStorage.setItem('singleProducts', JSON.stringify(product));
        this.setState({
            singleProduct: {...product},
            loading: false
        })
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
            cartOpen: true
        })
    };

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const cartItem = tempCart.find(item => item.id === id);
        cartItem.count++;
        cartItem.total = cartItem.count * cartItem.price;
        cartItem.total = parseFloat(cartItem.total.toFixed(2));
        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, ()=> {
            this.addTotals();
            this.syncStorage();
        })
    };

    decrement = (id) => {
        console.log(id)
    };

    removeItem = (id) => {
        console.log(id)
    };

    clearCart = () => {
        console.log('cart is cleaned')
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleSidebar: this.handleSidebar,
                handleCart: this.handleCart,
                openCart: this.openCart,
                closeCart: this.closeCart,
                addToCart: this.addToCart,
                setSingleProduct: this.setSingleProduct,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart

            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
