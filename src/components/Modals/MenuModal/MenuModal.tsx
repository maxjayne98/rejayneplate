import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Animated } from "react-animated-css";
import ReactDOM from "react-dom";

import { ModalContainer } from "./Elements";
// const MenuModal = () => {
//   const history = useHistory();
//   const [mounted, setMonted] = useState<boolean>(false);
//   const back = (e: React.MouseEvent<HTMLElement>) => {
//     e.stopPropagation();
//     history.goBack();
//   };

//   useEffect(() => {
//     setMonted(true);
//     onOpen();
//     window.onpopstate = function (event) {
//       console.log(event);

//       if (event) {
//         // Code to handle back button or prevent from navigation
//       } else {
//         // Continue user action through link or button
//       }
//     };
//   }, []);

//   function onOpen() {
//     window.history.pushState({ uppyDashboard: "open" }, ""); // not passing a title or URL
//   }

//   // function onPopState(event) {
//   //   if (event.state.uppyDashboard === "open") {
//   //     uppy.getPlugin("Dashboard").closeModal();
//   //   }
//   // }

//   return (
//     <>
//       <Animated
//         animationIn="slideInRight"
//         animationOut="slideOutRight"
//         animationInDuration={1000}
//         animationOutDuration={1000}
//         isVisible={mounted}
//       >
//         <ModalContainer>
//           <button onClick={back}>بستن منو</button>
//         </ModalContainer>
//       </Animated>
//     </>
//   );
// };

// export default MenuModal;
type Props = { onClose: Function };
const MenuModal: React.FC<Props> = ({ onClose }) => {
  const [mounted, setMonted] = useState<boolean>(false);

  const back = () => {
    setMonted(false);
    setTimeout(() => onClose(), 1000);
  };

  function onOpen() {
    window.history.pushState({ modalState: "open" }, ""); // not passing a title or URL
  }

  useEffect(() => {
    setMonted(true);
    onOpen();
    window.onpopstate = function (event) {
      if (event.state && event.state.hasOwnProperty("modalState")) {
        setMonted(false);
        setTimeout(() => onClose(), 1000);
      } else {
        // Continue user action through link or button
      }
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <Animated
        animationIn="slideInRight"
        animationOut="slideOutRight"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={mounted}
      >
        <ModalContainer>
          <button onClick={back}>بستن منو</button>
        </ModalContainer>
      </Animated>
    </>,
    document.getElementById("rejayne_modal") as HTMLElement
  );
};

export default MenuModal;
