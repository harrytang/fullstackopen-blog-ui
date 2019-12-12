/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React, {useRef} from 'react';

interface BlogFormProps {
    newBlogHandler: (title: string, author: string, url: string) => void;
}

const BlogForm: React.FC<BlogFormProps> = ({newBlogHandler}: BlogFormProps) => {

  const titleInputRef = useRef<HTMLInputElement>(null);
  const authorInputRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const title = titleInputRef.current!.value;
    const author = authorInputRef.current!.value;
    const url = urlInputRef.current!.value;
    newBlogHandler(title, author, url);
  };    
    
  return (
    <form onSubmit={submitHandler}>
      <h2>New Blog</h2>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" placeholder="Title" ref={titleInputRef} />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" placeholder="Author" ref={authorInputRef} />
      </div>
      <div>
        <label htmlFor="title">URL</label>
        <input type="text" id="url" placeholder="URL" ref={urlInputRef} />
      </div>        
      <div><button type="submit">Create</button></div>
    </form>
  );
};

export default BlogForm;