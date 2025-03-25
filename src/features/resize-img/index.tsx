import Footer from '../../components/footer/Footer';
import HeadMenu from '../../components/head-menu/HeadMenu';
import ResizeImg from './components/ResizeImg';
import './../home/styles/home.css';

const ResizeImgFeature = () => {
  return (
    <main className='main'>
      <HeadMenu />
      <ResizeImg />
      <Footer />
    </main>
  );
};

export default ResizeImgFeature;
