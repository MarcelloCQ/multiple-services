import './modal.css';

interface DataModal {
  title: string;
  message: string;
  show: boolean;
  handleCloseModal: () => void;
}

const Modal = ({ title, message, show, handleCloseModal }: DataModal) => {
  return (
    <div className={`modal ${show ? 'active' : ''}`}>
      <div className='modal-body'>
        <div className='modal-title'>
          <h2>{title}</h2>
        </div>
        <div className='modal-message'>
          <p>{message}</p>
        </div>
        <div className='modal-btn'>
          <button
            type='button'
            className='btn btn-primary'
            onClick={handleCloseModal}
          >
            ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
