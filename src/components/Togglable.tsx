/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React, { useState } from "react";

interface TogglableProps {
  buttonLabel: string;
}

const Togglable: React.FC<TogglableProps> = props => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = (): void => {
    setVisible(!visible);
  };

  // useImperativeHandle(ref, () => {
  //   return {
  //     toggleVisibility
  //   };
  // });

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  );
};

export default Togglable;
