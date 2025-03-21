import Footer from '../../components/footer/Footer';
import HeadMenu from '../../components/head-menu/HeadMenu';
import Home from './components/Home';
import './styles/home.css';

function HomeFeature() {
  return (
    <main className='main'>
      <HeadMenu />
      <Home />
      <Footer />
    </main>
  );
}

export default HomeFeature;
