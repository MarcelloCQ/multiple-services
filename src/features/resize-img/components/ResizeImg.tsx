import Modal from '../../../components/modal/Modal';
import texts from '../../../texts.json';
import useImage from '../hooks/useImage';
import './../styles/resize-img.css';

const ResizeImg = () => {
  const {
    handleImg,
    handleGenerate,
    updateImageSize,
    handleCloseModal,
    show,
    images,
    title,
    message,
  } = useImage();

  return (
    <section className='section'>
      <div className='section--xl'>
        <h1 className='text-center mb-1'>{texts['/resize-img'].title}</h1>
        <p className='text-center mb-1'>{texts['/resize-img'].description}</p>

        <form className='form-img'>
          <div className='form-inputfile-btn-container'>
            <div className='input-file-container'>
              <label htmlFor='input-file'>Imágenes</label>
              <input
                id='input-file'
                name='input-file'
                className='input-file'
                type='file'
                multiple
                onChange={handleImg}
                accept='image/*'
              />
            </div>

            {images.length < 1 ? (
              <div></div>
            ) : (
              <button
                onClick={handleGenerate}
                type='button'
                className='generate-button'
              >
                Generar
              </button>
            )}
          </div>

          <div className='image-list'>
            {images.map((image, index) => (
              <div key={index} className='image-item'>
                <img
                  className='image'
                  src={image.url}
                  alt={`Imagen ${index}`}
                />

                <div className='size-controls'>
                  <label>Ancho:</label>
                  <input
                    className='size-input'
                    type='number'
                    value={image.width}
                    onChange={(e) =>
                      updateImageSize(
                        index,
                        parseInt(e.target.value),
                        undefined
                      )
                    }
                  />

                  <label>Alto:</label>
                  <input
                    type='number'
                    className='size-input'
                    value={image.height}
                    onChange={(e) =>
                      updateImageSize(
                        index,
                        undefined,
                        parseInt(e.target.value)
                      )
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>

      <Modal
        handleCloseModal={handleCloseModal}
        message={message}
        show={show}
        title={title}
      />
    </section>
  );
};

export default ResizeImg;
