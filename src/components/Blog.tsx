/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React from 'react';
import IBlog from "./../interfaces/Blog";

interface BlogProps {
    blog: IBlog
}

const Blog: React.FC<BlogProps> = ({blog}: BlogProps) => {
    return (
        <div>
            <h3>{blog.title}</h3>
            <div>Author: {blog.author}</div>
            <div>Url: {blog.url}</div>
            <div>Likes: {blog.likes}</div>
        </div>
    );
};

export default Blog;