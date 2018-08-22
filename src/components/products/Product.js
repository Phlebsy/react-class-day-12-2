import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const { name, description, price } = this.props.product;

    return (
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
          <p className="card-text">{description}</p>
          <button className="btn btn-warning">Add to Cart</button>
        </div>
      </div>
    );
  }
}
