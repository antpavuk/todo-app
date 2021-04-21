import { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import useActions from "../../store/hooks/useActions";
import CloseButton from "./CloseButton";

interface IModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Modal: FC<PropsWithChildren<IModalProps>> = ({
  isOpen,
  setIsOpen,
  children,
}) => {
  const portalDiv = document.getElementById("portal" || "modal")!;
  const { removeTodosError } = useActions();

  const handleClose = () => removeTodosError();

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
