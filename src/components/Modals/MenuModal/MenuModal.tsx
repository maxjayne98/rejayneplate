import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CustomAnimated from "../../CustomAnimated";
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
};
const defaultProps = {
  onClose: () => ({}),
} as Props;

const MenuModa: React.FC<Props> = ({ onClose }) => {
  const [mounted, setMonted] = useState<boolean>(false);
  const animationOutDuration = 1000;
  const closeModalOnClick = (e: React.MouseEvent<HTMLElement>) => {
    setMonted(false);
    setTimeout(() => onClose(), animationOutDuration);
  };
  function onOpen() {
    window.history.pushState({ modalState: "open" }, "?modal"); // not passing a title or URL
  }

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
    <BackDrop>
      <CustomAnimated
        isVisible={mounted}
        animationIn="slideInRight"
        animationOut="slideOutRight"
      >
        <ModalContentContainer>
          <div
            style={{ color: "green", fontSize: "1.4rem", marginBottom: "1rem" }}
          >
            منو
          </div>
          <div
            style={{
              color: "red",
              backgroundColor: "green",
              fontSize: "1.4rem",
              marginBottom: "1rem",
            }}
            onClick={closeModalOnClick}
          >
            بستن
          </div>
        </ModalContentContainer>
      </CustomAnimated>
    </BackDrop>,
    document.getElementById("rejayne_modal") as HTMLElement
  );
};

MenuModa.defaultProps = defaultProps;

export default MenuModa;
