import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className="rwrks__blog section__padding" id="blog">
      <div className="rwrks__blog-heading">
        <h1 className="gradient__text">
          Whatever is happening, We blog about it.
        </h1>
      </div>
      <div className="rwrks__blog-cntainer">
        <div className="rwrks__blog-container_groupA">
          <Article imgUrl={blog01} />
        </div>
        <div className="rwrks__blog-container_groupB">
          <Article imgUrl={blog02} />
          <Article imgUrl={blog03} />
          <Article imgUrl={blog04} />
          <Article imgUrl={blog05} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
