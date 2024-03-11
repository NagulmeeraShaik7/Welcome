// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribe: false,
  }

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getButtonText = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="container">
        <h1 className="main-head">Welcome</h1>
        <h1 className="description">Thank you! Happy Learning</h1>
        <button
          className="subscribe-button"
          type="button"
          onClick={this.onSubscribe}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
