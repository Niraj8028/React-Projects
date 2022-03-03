import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsComponent extends Component {
  render() {
    return (
      <div>
      
        this is a news Component
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </div>
    )
  }
}
