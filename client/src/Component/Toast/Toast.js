import React, { Component } from 'react'

import { toastStore } from '../Flux/Stores'

import './Toast.css'

export default class Toast extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toastShow: false,
      toastMessage: '',
      className: 'toast'
    }
    toastStore.show = () => {
      this.setState({toastShow: true, toastMessage: toastStore.message})
    }
  }

  render () {
    if (this.state.toastShow) {
      const timeout = 3600
      setTimeout(() => {
        this.setState({className: 'toast remove'})
      }, timeout - 600)
      setTimeout(() => {
        this.setState({toastShow: false, toastMessage: '', className: 'toast'})
      }, timeout)
      return (
        <div className={this.state.className}>
          <div>
            {this.state.toastMessage}
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}