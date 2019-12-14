/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React, { useState } from "react";
import IBlog from "./../interfaces/Blog";

interface BlogProps {
  blog: IBlog;
  likeHandler: (blog: IBlog) => void;
  deleteHandler: (id: string) => void;
}

const Blog: React.FC<BlogProps> = ({
  blog,
  likeHandler,
  deleteHandler
}: BlogProps) => {
  const [visible, setVisible] = useState(false);
  //const [visibleDeleteBtn, setVisibleDeleteBtn] = useState(false);

  //const hideWhenVisible = {display: visible ? 'none' : ''};
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = (): void => {
    setVisible(!visible);
  };

  return (
    <div className="blog">
      <h3>
        <span onClick={toggleVisibility}>{blog.title}</span>
      </h3>

      <div className="blog-info" style={showWhenVisible}>
        <div>Author: {blog.author}</div>
        <div>Url: {blog.url}</div>
        <div>
          Likes: {blog.likes}{" "}
          <button onClick={(): void => likeHandler(blog)}>Like</button>
        </div>
        <div>
          <button onClick={(): void => deleteHandler(blog.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
