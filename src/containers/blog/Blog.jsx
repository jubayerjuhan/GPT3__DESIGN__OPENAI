import React from "react";
import Article from "./../../components/article/Article";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__margin">
      <div className="gpt3__blog-heading gradient__text">
        <h1>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__articleContainer">
        <div className="gpt3__article-sectionA">
          <Article
            date="20 Sept 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__article-sectionB">
          <Article
            date="20 Sept 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            date="20 Sept 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            date="20 Sept 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            date="20 Sept 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
