import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,disc,img,newsurl,author,date,source}=this.props;
    return (
      <div>
        <div className="card my-2">
  <img src={img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">
     {disc}
    </p>
    <span className="badge text-bg-info">{source}</span>
    <p className="card-text"><small className="text-body-secondary">By {author?author:"unknown"} at {new Date(date).toGMTString()}</small></p>
    <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">
      Read Article
    </a>
  </div>
</div>

      </div>
    )
  }
}
