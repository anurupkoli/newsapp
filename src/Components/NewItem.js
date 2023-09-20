import React, { Component } from "react";

export default class NewItem extends Component {

  changeTime = (time)=>{
    let date = new Date(time);
    date = date.toUTCString();
    return date;
  }

  render() {
    let {title, description, imgUrl, newsUrl, author, publishedAt, source} = this.props;
    return (
      <div className="card rounded-4" style={{width: "18rem", margin:'auto'}}>
        <img src={imgUrl} className="card-img-top rounded-top-4" style={{height: '10rem'}} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">
            {description}...
          </p>
          <p className="card-text">
            Author: {author?author:'Unknown'}
          </p>
          <p className="card-text text-muted">
            Published at: {this.changeTime(publishedAt)}
          </p>
          <a href={newsUrl?newsUrl:"/"} target="_blank" rel="noreferrer" className="btn btn-primary">
            Read More
          </a>
          <span className="badge text-bg-danger m-lg-3">{source} </span>
        </div>
      </div>
    );
  }
}
