import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="rwrks__blog-container_article">
      <div className="rwrks__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="rwrks__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p1>READ FULL ARTICLE</p1>
      </div>
    </div>
  );
};

export default Article;
