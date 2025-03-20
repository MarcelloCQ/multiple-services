import Modal from '../../../components/modal/Modal';
import { useDataEntry } from '../hooks/useDataEntry';
import texts from './../../../texts.json';
import './../styles/excel-converter.css';

const ExcelConverter = () => {
  const {
    handleDrop,
    handleDragOver,
    handleCloseModal,
    handleCopyText,
    title,
    message,
    text,
    show,
    textCopy,
  } = useDataEntry();

  return (
    <section className='section'>
      <div className='section--xl'>
        <h1 className='text-center mb-1'>{texts['/excel-converter'].title}</h1>
        <p className='text-center mb-1'>
          {texts['/excel-converter'].description}
        </p>
        <div className='data-entry-content'>
          <button
            type='button'
            onClick={handleCopyText}
            className='data-entry-btn'
          >
            {textCopy ? 'Copiado!' : 'Copy'}
          </button>
          <textarea
            className='data-entry'
            name='data-entry'
            id='data-entry'
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            value={text}
            title='Data entry'
            readOnly
            placeholder='Arrastra un elemento xlsx o xls'
          />
        </div>
      </div>
      <Modal
        title={title}
        message={message}
        show={show}
        handleCloseModal={handleCloseModal}
      />
    </section>
  );
};

export default ExcelConverter;
