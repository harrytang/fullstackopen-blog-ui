/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2019-12-14 23:24:35
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2019-12-14 23:46:32
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

  const component = render(
    <Blog
      blog={blog}
      likeHandler={mockLikeHandler}
      deleteHandler={mockDeleteHandler}
    />
  );

  test("clicking the like button twice", () => {
    const button = component.getByText("Like");
    fireEvent.click(button);
    fireEvent.click(button);
    expect(mockLikeHandler.mock.calls.length).toBe(2);
  });
});
