import React, { Component } from 'react';
import formatCurrency from "../util";
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/productActions';
import {addToCart} from '../actions/cartActions';

 class Products extends Component {

    constructor(props){
        super(props);
        this.state = {
            product: null,
        };
    }

    componentDidMount(){
        this.props.fetchProducts();
    }

    openModal = (product) => {
        // this.setState({product});
        this.setState({
            selectedProductId: product._id,
        });
    };

    closeModal = () => {
        this.setState({
            selectedProductId: null,
        });
    };

    render() {
        // const {product} = this.state;
        return (
            <div>
                <Fade bottom cascade = {true}>
                    {
                        !this.props.products ? (<div> Loading... </div>
        ) : (
                        <ul className="products">
                    {this.props.products.map((product) => (
                        <li key={product._id}>
                            <div className="product">
                                <a href ={"#" + product._id} onClick = {() => this.openModal(product)}>
                               {/* if there is no image, it shows the title  */}
                                    <img src ={product.image} alt = {product.title}></img>
                                    <p>
                                        {product.title}
                                    </p>
                                </a>
                                <div className="product-price">
                                    <div> 
                                        {formatCurrency(product.price)} 
                                    </div>
                                    <button onClick ={() => this.props.addToCart(product)}  className="button primary"> 
                                        Add to cart    
                                    </button>
                                </div>
                            </div>

                            
                            <Modal isOpen = {this.state.selectedProductId === product._id} onRequestClose = {this.closeModal}>
                                <Zoom>
                                    <button className="close-modal" onClick = {this.closeModal}> x </button>
                                    <div className="product-details">
                                        <img src = {product.image} alt = {product.title}></img>
                                        <div className ="product-detail-descripton"> 
                                            <p>
                                                <strong> {product.title} </strong>
                                            </p>
                                            <p>
                                                {product.description}
                                            </p>
                                            <p>
                                                Available sizes: {" "}
                                                {product.availableSizes.map((x) => (
                                                    <span> {" "} <button className = "button" > {x} </button> </span>
                                                ))}
                                            </p>
                                            <div className ="product-price">
                                                <div>
                                                    {formatCurrency(product.price)}
                                                </div>
                                                <button className = "button primary" onClick = {() => {
                                                    this.props.addToCart(product);
                                                    this.closeModal();
                                                }}>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>
                            </Modal>
                        </li>

                    ))}
                </ul>
        )
                    }
                
                </Fade>

                {/* {
                    product && <Modal isOpen = {true} onRequestClose = {this.closeModal}>
                        <Zoom>
                            <button className="close-modal" onClick = {this.closeModal}> x </button>
                            <div className="product-details">
                                <img src = {product.image} alt = {product.title}></img>
                                <div className ="product-detail-descripton"> 
                                    <p>
                                        <strong> {product.title} </strong>
                                    </p>
                                    <p>
                                        {product.description}
                                    </p>
                                    <p>
                                        Available sizes: {" "}
                                        {product.availableSizes.map((x) => (
                                            <span> {" "} <button className = "button" > {x} </button> </span>
                                        ))}
                                    </p>
                                    <div className ="product-price">
                                        <div>
                                            {formatCurrency(product.price)}
                                        </div>
                                        <button className = "button primary" onClick = {() => {
                                            this.props.addToCart(product);
                                            this.closeModal();
                                        }}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </Modal>
                } */}
                
            </div>
        )
    }
}

export default connect((state) => ({
    products: state.products.filteredItems
}),
    {
        fetchProducts,
        addToCart
    })
    (Products);
