// Global context for entire application
import React from 'react';

const Context = React.createContext();

// Reducers
const reducer = (state, action) => {
  switch (action.type) {
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
    this.setState({ mounted: true });
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
