import React, { useRef, useEffect } from "react";

type ModalProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ id, title, children }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!window.bootstrap) return;
    const modalEl = modalRef.current;
    if (modalEl) {
      new window.bootstrap.Modal(modalEl);
    }
  }, []);

  return (
    <div
      className="modal fade"
      id={id}
      tabIndex={-1}
      aria-labelledby={`${id}Label`}
      aria-hidden="true"
      ref={modalRef}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${id}Label`}>
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
