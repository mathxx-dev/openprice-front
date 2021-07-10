import React, { Component } from 'react'



class FeedItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image : this.props.image,
            title : this.props.title,
            origin : this.props.origin,
            price_card : this.props.price_card,
            price_discount : this.props.price_discount,
        }
    }
    
    render() {
        return (
            <>
                <div className="product-option__image">
                    <img className="product-option__image--img"
                        src={this.props.image} 
                        alt={this.props.title}
                    />
                </div>
                <div className="product-option__details">
                    <span className="product-option__details--title">{this.props.title}</span>
                    <span className="product-option__details--origin">Vendido por {this.props.origin}</span>
                    <div className="product-price">
                        <span className="product-price--value">R$ {this.props.price_card}</span>
                        <span className="product-price--type">NO CARTÃO</span>
                    </div>
                    <div className="product-price">
                        <span className="product-price--value discount">R$ {this.props.price_discount}</span>
                        <span className="product-price--type discount">NO BOLETO</span>
                    </div>
                </div>
            </>
        )
    }
}

export default  FeedItem;