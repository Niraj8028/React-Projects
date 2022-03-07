import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsComponent extends Component {
  render() {
    return (
      <div className='container my-3'>

        <h2>NewsMonkey- Top Headlines</h2>
        <div className='row'>
          <div className='col-md-4'>
            <NewsItem tittle="This is tittle" description="This is description" url="https://images.wsj.net/im-499318/social"/>
            
          </div>
          <div className='col-md-4'>
            <NewsItem tittle="This is tittle" description="This is description" url="https://images.wsj.net/im-499318/social"/>
            
          </div>
          <div className='col-md-4'>
            <NewsItem tittle="This is tittle" description="This is description" url="https://images.wsj.net/im-499318/social"/>
            
          </div>
          
        </div>

      </div>
    )
  }
}
