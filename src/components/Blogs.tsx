/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React from 'react';

import IBlog from "./../interfaces/Blog";

import Blog from "./Blog";

interface BlogsProps {
    blogs: IBlog[]
}

const Blogs: React.FC<BlogsProps> = ({blogs}: BlogsProps) => {
    return (
        <div>
            <h2>Latest blogs</h2>
            <ul>
            {
                blogs.map(blog=>
                    <Blog key={blog.id} blog={blog} />
                )
            }
            </ul>
        </div>
    );
};

export default Blogs;