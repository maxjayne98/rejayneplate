import React from "react";
import { Animated } from "react-animated-css";
import type { AnimationString } from "react-animated-css";

type Props = {
  animationIn?: AnimationString;
  animationOut?: AnimationString;
  animationInDuration?: number;
  animationOutDuration?: number;
  children?: JSX.Element | JSX.Element[];
  isVisible: boolean;
};

const defaultProps = {
  animationIn: "slideInRight",
  animationOut: "slideOutRight",
  animationInDuration: 1000,
  animationOutDuration: 1000,
  children: <div>salam</div>,
  isVisible: false,
} as Props;

const ChargeModal: React.FC<Props> = ({
  animationIn = "slideInRight",
  animationOut = "slideOutRight",
  animationInDuration = 1000,
  animationOutDuration = 1000,
  isVisible = false,
  children = <div>salam</div>,
}) => {
  return (
    <>
      <Animated
        animationIn={animationIn}
        animationOut={animationOut}
        animationInDuration={animationInDuration}
        animationOutDuration={animationOutDuration}
        isVisible={isVisible}
      >
        {children}
      </Animated>
    </>
  );
};

ChargeModal.defaultProps = defaultProps;

export default ChargeModal;
