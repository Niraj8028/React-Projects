import React, { Component } from 'react'
import loading from "./XOsX.gif"
export default class Loader extends Component {
  render() {
    return (
      <div className='text-center'>
        <img  src={loading}/>
      </div>
    )
  }
}
