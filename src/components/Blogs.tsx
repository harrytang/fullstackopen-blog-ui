/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React from "react";

import IBlog from "./../interfaces/Blog";

import Blog from "./Blog";

interface BlogsProps {
  blogs: IBlog[];
  likeHandler: (blog: IBlog) => void;
  deleteHandler: (id: string) => void;
}

const Blogs: React.FC<BlogsProps> = ({
  blogs,
  likeHandler,
  deleteHandler
}: BlogsProps) => {
  const sortedBlog = [...blogs];
  sortedBlog.sort(function(a, b) {
    return b.likes - a.likes;
  });

  return (
    <div>
      <h2>Latest blogs</h2>
      <ul className="blog-list">
        {sortedBlog.map(blog => (
          <Blog
            key={blog.id}
            blog={blog}
            likeHandler={likeHandler}
            deleteHandler={deleteHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
