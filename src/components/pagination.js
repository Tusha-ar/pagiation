import React from "react";

import "./styles.css";

const Container = ({ children, navigationStyle, containerStyle, ...props }) => {
  return React.createElement(
    children.type || "div",
    { style: Object.assign(containerStyle) },
    React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        navigationStyle,
        ...props
      });
    })
  );
};

export default Container;
