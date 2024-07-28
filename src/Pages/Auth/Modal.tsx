import React from "react";
import { FC, useEffect } from "react";

interface iTog {
  show: any;
  onClose: any;
  children: any;
}

const Modal: FC<iTog> = ({ show, onClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded shadow-lg w-[90%] lg:w-[350px] min-h-[400px]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button onClick={onClose} className="absolute top-2 right-2">
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
