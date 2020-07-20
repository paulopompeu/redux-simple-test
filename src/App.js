import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import Counter from './Counter'
import { createStore } from 'redux'

class App extends Component {
  reducer = () => {
    return {
      count: 42
    };
  }

  store = (reducer) => {
    createStore(reducer)
  }

  render() {

    return (
      <Provider store={this.store()}>
        <Counter />
      </Provider>
    )
  }
}

export default App
