import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsComponent extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: 'False',
      page: 1,

    };
  }

  async componentDidMount() {
    let url = `https:newsapi.org/v2/top-headlines?country=in&apiKey=0d7922a6c0d84b6da8aa019f7498e3bc&page=1&pagesize=9`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
  }
  handleNextClick = async () => {
    let url = `https:newsapi.org/v2/top-headlines?country=in&apiKey=0d7922a6c0d84b6da8aa019f7498e3bc&page=${this.state.page + 1}&pagesize=9`;
    let data = await fetch(url);
    let parsedData = await data.json();
    if(this.state.page+1 > Math.ceil(this.state.totalResults/9)){

    }
    else{
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1
    })
  }

  }
  handlePrevClick = async () => {
    let url = `https:newsapi.org/v2/top-headlines?country=in&apiKey=0d7922a6c0d84b6da8aa019f7498e3bc&page=${this.state.page - 1}&pagesize=9`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1
    })

  }
  render() {
    return (
      <div className='container my-4'>

        <h2>NewsMonkey- Top Headlines</h2>
        <div className='row' >
          {this.state.articles.map((element) => {

            return <div className='col-md-4' key={element.url}>
              <NewsItem tittle={element.title ? element.title : ""} description={element.description ? element.description : ""} url={element.urlToImage ? element.urlToImage : "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202203/war-647x363.jpeg?wUMjEFnXKb7SRlKppMFjkwJZsw3sLv0j"} newsUrl={element.url} />

            </div>

          })}
        </div>

        <div className='container d-flex justify-content-evenly'>
          <button disable={this.state.page <= 1} type="button" className="btn btn-dark " onClick={this.handlePrevClick} >&#8592; Previous</button>
          <button type="button" className="btn btn-dark " onClick={this.handleNextClick}  >Next &#8594;</button>
        </div>

      </div>
    )
  }
}