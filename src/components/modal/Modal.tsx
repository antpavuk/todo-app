import { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import CloseButton from "./CloseButton";

interface IModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleClose: () => void;
}

const Modal: FC<PropsWithChildren<IModalProps>> = ({
  isOpen,
  setIsOpen,
  children,
  handleClose,
}) => {
  const portalDiv = document.getElementById("portal" || "modal")!;

  return (
    <>
      {isOpen
        ? createPortal(
            <div>
              <div className="modal-overlay" />
              <div className="modal-content">
                <CloseButton onClick={handleClose} />
                {children}
              </div>
            </div>,
            portalDiv
          )
        : null}
    </>
  );
};

export default Modal;
