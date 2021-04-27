import React, { FC } from "react";
import ErrorMessage from "./ErrorMessage";
import Modal from "./Modal";

interface IErrorModal {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  handleModalClose: () => void;
  error?: any;
}

const ErrorModal: FC<IErrorModal> = ({
  isModalOpen,
  setIsModalOpen,
  handleModalClose,
  error,
}) => {
  const errorText = error?.response.data.message;

  return (
    <Modal
      isOpen={isModalOpen}
      setIsOpen={setIsModalOpen}
      handleClose={handleModalClose}
    >
      <ErrorMessage message={errorText || error?.statusText}></ErrorMessage>
    </Modal>
  );
};

export default ErrorModal;
