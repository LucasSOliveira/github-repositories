const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal w-full h-full md:h-fit md:w-fit">
        <div className="modal-content">
          <button onClick={onClose} className="close-button"></button>
          {children}
        </div>
      </div>
    </>
  );
};

export { Modal };
