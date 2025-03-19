import texts from './../../../texts.json';

const Home = () => {
  return (
    <section className='section'>
      <div className='section--xl'>
        <h1 className='text-center mb-1'>{texts['/home'].title}</h1>
        <p className='text-center mb-1'>{texts['/home'].description}</p>
      </div>
    </section>
  );
};

export default Home;
