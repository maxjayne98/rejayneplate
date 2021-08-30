import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import type { AnimationString } from "react-animated-css";
import ReactDOM from "react-dom";
import {
  BackDrop,
  ModalContentContainer,
  ChargeInput,
  ChargeSubmitButton,
  ChargeTitle,
} from "./Elements";

import { addThousandSeparator, removeComma } from "../../../utils";

type Props = {
  onClose: Function;
  animationIn?: AnimationString;
  animationOut?: AnimationString;
  animationInDuration?: number;
  animationOutDuration?: number;
  modal?: JSX.Element;
};

const defaultProps = {
  onClose: () => ({}),
  animationIn: "slideInRight",
  animationOut: "slideOutRight",
  animationInDuration: 1000,
  animationOutDuration: 1000,
  modal: <div>salam</div>,
} as Props;

const ChargeModal: React.FC<Props> = ({
  onClose,
  animationIn = "slideInRight",
  animationOut = "slideOutRight",
  animationInDuration = 1000,
  animationOutDuration = 1000,
  modal = <div>salam</div>,
}) => {
  const [mounted, setMonted] = useState<boolean>(false);
  const [chargeValue, setChargeValue] = useState<string>("");

  function onOpen() {
    window.history.pushState({ modalState: "open" }, "?modal"); // not passing a title or URL
  }

  const backDropOnClick = (e: React.MouseEvent<HTMLElement>) => {
    setMonted(false);
    setTimeout(() => onClose(), animationOutDuration);
  };

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const value = removeComma(e.target.value);
    setChargeValue(addThousandSeparator(value));
  };

  const contentOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setMonted(true);
    onOpen();
    window.onpopstate = function (event) {
      setMonted(false);
      setTimeout(() => onClose(), animationOutDuration);
    };
    return () => {
      window.onpopstate = null;
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <BackDrop onClick={(e) => backDropOnClick(e)}>
        <Animated
          animationIn={animationIn}
          animationOut={animationOut}
          animationInDuration={animationInDuration}
          isVisible={mounted}
        >
          <ModalContentContainer onClick={contentOnClick}>
            <ChargeTitle>افزایش اعتبار</ChargeTitle>
            <ChargeInput
              value={chargeValue}
              onChange={(e) => inputOnChange(e)}
              type="text"
              pattern="[0-9]"
            ></ChargeInput>
            <ChargeSubmitButton
              onClick={() => {
                console.log("man salemam");
              }}
            >
              ثبت
            </ChargeSubmitButton>
          </ModalContentContainer>
        </Animated>
      </BackDrop>
    </>,
    document.getElementById("rejayne_modal") as HTMLElement
  );
};

ChargeModal.defaultProps = defaultProps;

export default ChargeModal;
