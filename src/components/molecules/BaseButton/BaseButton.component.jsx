import React, { Fragment } from "react";
import { useState } from "react";
import styled from "styled-components";
const BaseButton = ({ text, selected, onClick }) => {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };
  const boxStyle = {
    margin: "0",
    backgroundColor: isActive ? "#2e7d32" : "rgb(29 78 216)",
  };
  const Button = styled.div`
    &:active {
      background: "#2e7d32";
    }
  `;

  return (
    <Fragment>
      <button
        className={`s-btn s-btn__filled ${
          selected === text ? "is-selected" : ""
        }`}
        style={boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {text}
      </button>
    </Fragment>
  );
};
export default BaseButton;
