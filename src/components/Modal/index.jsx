import { createPortal } from "react-dom";
import { useEffect } from "react";
import {
  ModalCloseButton,
  ModalContainer,
  ModalContentContainer,
  ModalOverlay,
} from "./Modal.styled";
import sprite from "../../assets/svg/sprite.svg";

const Modal = ({ children, open, onClose }) => {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    onClose();
  };

  if (!open) return null;

  return createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContainer>
        <ModalContentContainer>
          <ModalCloseButton
            width="32px"
            height="32px"
            fill="none"
            onClick={handleCloseClick}
          >
            <use href={`${sprite}#icon-close`} />
          </ModalCloseButton>

          {children}
        </ModalContentContainer>
      </ModalContainer>
    </ModalOverlay>,
    document.getElementById("modal-portal")
  );
};

export default Modal;
