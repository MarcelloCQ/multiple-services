import Footer from '../../components/footer/Footer';
import HeadMenu from '../../components/head-menu/HeadMenu';
import ExcelConverter from './components/ExcelConverter';

const ExcelConverterFeature = () => {
  return (
    <main className='main'>
      <HeadMenu />
      <ExcelConverter />
      <Footer />
    </main>
  );
};

export default ExcelConverterFeature;
