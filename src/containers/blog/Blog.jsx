import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className="rwrks__blog section__padding" id="blog">
      <div className="rwrks__blog-heading">
        <h1 className="gradient__text">Whatever happens, We blog about it.</h1>
      </div>
      <div className="rwrks__blog-container">
        <div className="rwrks__blog-container_groupA">
          <Article
            imgUrl={blog05}
            date="Dec 13, 2022"
            title="RWRKS and Open AI is the future. Let's explore how it works."
          />
        </div>
        <div className="rwrks__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Dec 13, 2022"
            title="RWRKS and Open AI is the future. Let's explore how it works."
          />
          <Article
            imgUrl={blog01}
            date="Dec 13, 2022"
            title="RWRKS and Open AI is the future. Let's explore how it works."
          />
          <Article
            imgUrl={blog04}
            date="Dec 13, 2022"
            title="RWRKS and Open AI is the future. Let's explore how it works."
          />
          <Article
            imgUrl={blog03}
            date="Dec 13, 2022"
            title="RWRKS and Open AI is the future. Let's explore how it works."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
