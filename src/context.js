// Global context for entire application
import React from 'react';

const Context = React.createContext();

// Reducers
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        productList: [action.payload, ...state.productList]
      };
    default:
      return state;
  }
};

// Provider
export class Provider extends React.Component {
  state = {
    productList: [],
    cartItems: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    this.setState({
      productList: [
        { name: 'Basketball', description: 'Bouncy', price: 15.0 },
        { name: 'Laptop', description: 'Computery', price: 750.0 },
        { name: 'Table', description: 'Ikea approved', price: 45.0 }
      ]
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

// Consumer
export const Consumer = Context.Consumer;
