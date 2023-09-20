import React, { Component } from 'react'
import snake from './Snake.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={snake} alt="loading" />
      </div>
    )
  }
}
