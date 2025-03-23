import Button from '../../../components/button/Button';
import Modal from '../../../components/modal/Modal';
import useForm from '../hooks/useForm';
import texts from './../../../texts.json';
import './../styles/contact-form.css';

const ContactForm = () => {
  const { formSubmit, handleClose, modalMessage, show, title } = useForm();
  return (
    <section className='hero-section'>
      <div className='hero-overlay'></div>
      <div className='section--xl'>
        <h1 className='section-title'>
          <span className='gradient-text'>{texts['/contact-form'].title}</span>
        </h1>
        <p className='section-description'>
          {texts['/contact-form'].description}
        </p>
        <div className='content-row'>
          <form className='contact-form' onSubmit={formSubmit}>
            <div className='input-container'>
              <label htmlFor='name'>{texts['/contact-form'].labels.name}</label>
              <input
                className='input input-contact'
                type='text'
                name='name'
                id='name'
                required
              />
            </div>

            <div className='input-container'>
              <label htmlFor='email'>
                {texts['/contact-form'].labels.email}
              </label>
              <input
                className='input input-contact'
                type='email'
                name='email'
                id='email'
                required
              />
            </div>

            <div className='input-container'>
              <label htmlFor='message'>
                {texts['/contact-form'].labels.message}
              </label>
              <textarea
                className='input input-contact'
                name='message'
                id='message'
                required
              />
            </div>

            <Button
              type='submit'
              classname='button-primary'
              textbutton={texts['/contact-form'].button1}
            />
          </form>
          <div className='logo-container'>
            <img
              className='logo'
              loading='lazy'
              src='/ramen.png'
              alt='Logo ramen'
            />
          </div>
        </div>
      </div>
      <Modal
        show={show}
        handleCloseModal={handleClose}
        title={title}
        message={modalMessage}
      />
    </section>
  );
};

export default ContactForm;
