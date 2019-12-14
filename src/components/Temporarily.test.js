/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2019-12-14 23:18:52
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2019-12-14 23:23:09
 */

import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Temporarily from "./Temporarily";

test("renders content", () => {
  const blog = {
    title: "blog title",
    author: "Harry Tang",
    likes: 18
  };

  const component = render(<Temporarily blog={blog} />);

  expect(component.container).toHaveTextContent("blog title");

  expect(component.container).toHaveTextContent("Harry Tang");

  expect(component.container).toHaveTextContent("18");
});
