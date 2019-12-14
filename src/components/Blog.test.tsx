/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2019-12-14 23:24:35
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2019-12-15 00:04:53
 */

import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";
import Blog from "./Blog";

describe("<Blog />", () => {
  const blog = {
    id: "12",
    title: "blog title",
    author: "Harry Tang",
    url: "https://harrytang.xyz",
    likes: 10
  };

  const mockLikeHandler = jest.fn();
  const mockDeleteHandler = jest.fn();

  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <Blog
        blog={blog}
        likeHandler={mockLikeHandler}
        deleteHandler={mockDeleteHandler}
      />
    );
  });

  test("clicking the like button twice", () => {
    const button = component.getByText("Like");
    fireEvent.click(button);
    fireEvent.click(button);
    expect(mockLikeHandler.mock.calls.length).toBe(2);
  });

  test("name of blog shown by default, no other info", () => {
    const blogTitle = component.container.querySelector("h3>span");
    expect(blogTitle).toHaveTextContent("blog title");
    const blogInfo = component.container.querySelector(".blog-info");
    expect(blogInfo).toHaveStyle("display: none");
  });

  test("clicking blog title show all info", () => {
    const blogTitle = component.container.querySelector("h3>span");
    if (blogTitle) {
      fireEvent.click(blogTitle);
      const blogInfo = component.container.querySelector(".blog-info");
      expect(blogInfo).toHaveStyle("display: block");
    }
  });
});
