import React from "react";
import "./article.css";
import blog from "../../assets/blog02.png";

const Article = ({ date, title }) => {
  return (
    <div className="gpt__3-blog-article_container ">
      <div className="gpt__3-blog-article_image">
        <img src={blog} alt="" />
      </div>
      <div className="gpt__3-blog-article_content">
        <div className="gpt__3-blog-article_content-heading">
          <p>{date}</p>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Article;
