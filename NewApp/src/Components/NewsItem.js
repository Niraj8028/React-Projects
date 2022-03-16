import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { tittle, description ,url,newsUrl,author,date} = this.props;
    return (
      <div className='container my-4'>

        <div className="card" style={{ width: "18rem" }}>
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{tittle}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-muted">by {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">Read more..</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem