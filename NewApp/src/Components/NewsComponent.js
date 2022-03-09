import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsComponent extends Component {
  articles=[];
  constructor(){
    super();
    this.state={
      articles:this.articles,
      loading:'False'
      };
    }
  async componentDidMount(){
    let url="https:newsapi.org/v2/top-headlines?country=in&apiKey=0d7922a6c0d84b6da8aa019f7498e3bc";
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles:parsedData.articles})
}
  render() {
    
    return (
      <div className='container my-3'>

        <h2>NewsMonkey- Top Headlines</h2>
        <div className='row' >
        {this.state.articles.map((element)=>{
          
          return<div className='col-md-4' key={element.url}>
            <NewsItem tittle={element.title?element.title:""} description={element.description?element.description:""} url={element.urlToImage?element.urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202203/war-647x363.jpeg?wUMjEFnXKb7SRlKppMFjkwJZsw3sLv0j"} newsUrl={element.url}/>
            
          </div>
          
        })}
        
          
          
          
        </div>

      </div>
    )
  }
}