import Footer from '../../components/footer/Footer';
import HeadMenu from '../../components/head-menu/HeadMenu';
import ContactForm from './components/ContactForm';
import './../home/styles/home.css';

const ContactFormFeature = () => {
  return (
    <main className='main'>
      <HeadMenu />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default ContactFormFeature;
