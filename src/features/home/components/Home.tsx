import texts from './../../../texts.json';
import logoRamen from '/ramen.svg';

const Home = () => {
  return (
    <section className='section'>
      <div className='section--xl'>
        <h1 className='text-center mb-1'>{texts['/home'].title}</h1>
        <p className='text-center mb-2'>{texts['/home'].description}</p>
        <div className='container-logo'>
          <img src={logoRamen} className='logo-ramen-x1' alt='' />
          <img src={logoRamen} className='logo-ramen-x3' alt='' />
          <img src={logoRamen} className='logo-ramen-x6' alt='' />
        </div>
      </div>
    </section>
  );
};

export default Home;
