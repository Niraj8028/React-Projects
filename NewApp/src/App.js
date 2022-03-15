import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import NewsComponent from './Components/NewsComponent'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (

      <div>
        <Navbar/>
        <NewsComponent pageSize={6} country='us' category='sports'/>
      </div>
    )
  }
}
