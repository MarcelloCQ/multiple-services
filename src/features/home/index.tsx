import HeadMenu from '../../components/head-menu/HeadMenu';
import Home from './components/Home';
import './styles/index.css';

function HomeFeature() {
  return (
    <main className='main'>
      <HeadMenu />
      <Home />
    </main>
  );
}

export default HomeFeature;
