import React from "react";
import { useHistory } from "react-router-dom";
import { ModalContainer } from "./Elements";
const MenuModal = () => {
  const history = useHistory();
  const back = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <div>
      <ModalContainer>
        <button onClick={back}>بستن منو</button>
      </ModalContainer>
    </div>
  );
};

export default MenuModal;
