import React from 'react'
import { connect } from 'react-redux'

class Counter extends React.Component {
  increment = () => {
    // fill in later
    this.props.dispatch({ type: 'INCREMENT' }) 
  }

  decrement = () => {
    // fill in later
    this.props.dispatch({ type: 'DECREMENT' }) 

  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

// Add this function:
const mapStateToProps = (state) => ({
  count: state.count,
})

// export default connect(mapStateToProps)(Counter);
export default connect(mapStateToProps)(Counter)
