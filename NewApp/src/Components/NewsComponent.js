import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';

export default class NewsComponent extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,

    };
  }

  async componentDidMount() {
    let url = `https:newsapi.org/v2/top-headlines?country=in&apiKey=0d7922a6c0d84b6da8aa019f7498e3bc&page=1&pagesize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults ,loading:false})
  }
  handleNextClick = async () => {
    let url = `https:newsapi.org/v2/top-headlines?country=in&apiKey=0d7922a6c0d84b6da8aa019f7498e3bc&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 9)) {

    }
    else {
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false
      })
    }

  }
  handlePrevClick = async () => {
    let url = `https:newsapi.org/v2/top-headlines?country=in&apiKey=0d7922a6c0d84b6da8aa019f7498e3bc&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading:false
    })

  }
  render() {
    return (

      <div className='container my-4'>
        
        <h2 className='text-center'>NewsMonkey- Top Headlines</h2>
        {this.state.loading && <Loader />}
        <div className='row' >
          {!this.state.loading && this.state.articles.map((element) => {

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