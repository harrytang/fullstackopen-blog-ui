/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2019-12-14 23:13:47
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2019-12-14 23:18:01
 */

import React from "react";

interface Props {
  blog: { title: string; author: string; likes: number };
}
const Temporarily: React.FC<Props> = ({ blog }) => {
  const onClick = (): void => {
    alert("clicked");
  };

  return (
    <div>
      <div>
        {blog.title} {blog.author}
      </div>
      <div>
        blog has {blog.likes} likes
        <button onClick={onClick}>like</button>
      </div>
    </div>
  );
};

export default Temporarily;
