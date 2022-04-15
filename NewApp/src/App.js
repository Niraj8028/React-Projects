import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Counter from './Components/counter';
import NewsComponent from './Components/NewsComponent'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// dsadsadf
export default class App extends Component {
  render() {
    return (

      <div>
        <Navbar/>
        <Counter/>
      </div>
    )
  }
}
