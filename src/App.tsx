/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React, {useState, useEffect} from 'react';

import './App.css';

import Login from "./components/Login";
import Notification from "./components/Notification";

import loginService from "./services/login";
import blogService from "./services/blog";

import IBlog from "./interfaces/Blog";
import Blogs from "./components/Blogs";
import BlogForm from "./components/BlogForm";

const App: React.FC = () => {
  const emptyToken = {token: '', username:'', name:''};

  const [token, setToken] = useState<{token: string; username: string; name: string}>(emptyToken);
  const [notification, setNotification] = useState<{message: string; type: string}>({message: '', type: 'success'});

  const [blogs, setBlogs] = useState<IBlog[]>([]);

  /**
   * fetch blogs when the page loaded
   */
  useEffect(() => {
    blogService.getAll().then(
      data=> {
        setBlogs(data);
      }
    );
  }, []);

  /**
   * load token from local storage
   */
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      setToken(JSON.parse(token));
    }
  }, []);

  /**
   * login handler
   * @param username
   * @param password
   */
  const loginHandler = (username: string, password: string): void => {
    loginService.login({username: username, password: password})
      .then(token=>{
        window.localStorage.setItem(
          'token', JSON.stringify(token)
        );
        setToken(token);
      })
      .catch(()=>{
        setNotification({message: 'Wrong credentials', 'type': 'error'});
        setTimeout(() => {
          setNotification({message: '', 'type': 'error'});
        }, 5000);
      });
  };

  /**
   * logout handler
   */
  const logoutHandler = (): void => {
    window.localStorage.removeItem('token');
    setToken(emptyToken);
  };

  /**
   * add new blog
   * @param title
   * @param author
   * @param url
   */
  const newBlogHandler = (title: string, author: string, url: string)=>{
    blogService.create({title: title, author: author, url: url}, token.token)
      .then(blog=>{
        setNotification({message: `${blog.title} has been created`, 'type': 'success'});
        setBlogs(oldBlogs=>[...oldBlogs, blog]);
        setTimeout(() => {
          setNotification({message: '', 'type': 'error'});
        }, 5000);
      })
      .catch(error=>{
        setNotification({message: 'Some thing went wrong', 'type': 'error'});
        setTimeout(() => {
          setNotification({message: '', 'type': 'error'});
        }, 5000);
      });
  };
  
  return (
    <div className="App">

      <h1>Harry Blogs</h1>

      <Notification notification={notification}/>

      {token.token === '' ?
        <Login loginHandler={loginHandler} /> :
        <div>
            Welcome {token.username} <button onClick={logoutHandler}>Logout</button>
          <BlogForm newBlogHandler={newBlogHandler}/>
          <Blogs blogs={blogs}/>
        </div>
      }

    </div>
  );
};

export default App;