import React from 'react';
import './NewsItems.css';

const NewsItems = ({ title, description, imgUrl, newsUrl, date, author }) => {
  return (
    <div className="card">
      <img src={imgUrl} className="card-img-top" alt="News" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">
            By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
          </small>
        </p>
      </div>
      <div className="card-footer">
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
