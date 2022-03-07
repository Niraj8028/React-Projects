import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { tittle, description ,url} = this.props;
    return (
      <div className='container my-3'>

        <div className="card" style={{ width: "18rem" }}>
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{tittle}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem