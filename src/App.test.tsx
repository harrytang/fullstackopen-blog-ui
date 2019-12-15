import React from "react";
import {
  render,
  RenderResult,
  waitForElement,
  fireEvent
} from "@testing-library/react";
import App from "./App";
import { async } from "q";

describe("<App />", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<App />);
  });

  test("only displays a login form and no blogs are rendered", async () => {
    //component.rerender(<App />);

    await waitForElement(() =>
      component.container.querySelector(".login-title")
    );

    expect(component.container.querySelector(".login-title")).toHaveTextContent(
      "Login"
    );
  });

  test("when the user is logged in, the blog posts are rendered", async () => {
    // await waitForElement(async () => {
    //   const loginButton = component.getByText("Login");
    //   const usernameInput = component.container.querySelector("#username")!;
    //   const passwordInput = component.container.querySelector("#password")!;

    //   // login
    //   fireEvent.change(usernameInput, { target: { value: "harry" } });
    //   fireEvent.change(passwordInput, { target: { value: "Gi@Duy7275" } });
    //   fireEvent.click(loginButton);

    //   await waitForElement(() => {
    //     expect(component.container.querySelector(".App")).toHaveTextContent(
    //       "Latest blogs"
    //     );
    //   });
    // });
  });
});
