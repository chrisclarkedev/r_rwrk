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
            date="Dec 24, 2022"
            title="RWRKS and Open AI is the future. Let's explore how it works."
          />
        </div>
        <div className="rwrks__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Dec 5, 2022"
            title="How RWRKS has fundamentally changed AI."
          />
          <Article
            imgUrl={blog01}
            date="Dec 7, 2022"
            title="Augmented Reality in accordance with RWRKS does wonders!"
          />
          <Article
            imgUrl={blog04}
            date="Dec 13, 2022"
            title="Future proofing technology in conjunction with RWRKS."
          />
          <Article
            imgUrl={blog03}
            date="Dec 21, 2022"
            title="Incredible knowledgebase that allows users to customize UI for ease of use."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
