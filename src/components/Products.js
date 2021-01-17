import React, { Component } from 'react';
import formatCurrency from "../util";

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product => (
                        <li ley={product._id}>
                            <div className="product">
                                <a href ={"#" + product._id}>
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
                                    <button className="button primary"> 
                                        Add to cart    
                                    </button>
                                </div>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}