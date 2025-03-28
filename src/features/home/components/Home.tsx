import { NavLink } from 'react-router';
import texts from './../../../texts.json';
import routes from '../../../routes/routes.json';
import useHome from '../hooks/useHome';
import githubwhite from './../../../assets/github-white.svg';
import linkedinwhite from './../../../assets/linkedin-white.svg';
import conversorhite from './../../../assets/excel-to-json-white.svg';
import imgwhite from './../../../assets/img-white.svg';
import arrowwhite from './../../../assets/arrow-white.svg';
import './../styles/home.css';
import './../../../components/button/button.css';

const Home = () => {
  const { opacity } = useHome();

  return (
    <>
      <section className='hero-section'>
        <div className='hero-overlay'></div>

        <div className='hero-content'>
          <h1 className='hero-title'>
            <span className='gradient-text'>{texts['/home'].title}</span>
          </h1>
          <p className='hero-description'>{texts['/home'].description}</p>
          <div className='hero-buttons'>
            <a
              href='#tools-section'
              className='button button-primary'
              target='_self'
              rel='noopener noreferrer'
            >
              {texts['/home'].button1}
            </a>

            <a
              href='#contact-us-section'
              className='button button-outline'
              target='_self'
              rel='noopener noreferrer'
            >
              {texts['/home'].button2}
            </a>
          </div>
        </div>

        <div className='scroll-indicator' style={{ opacity }}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='chevron-down'
          >
            <path d='m6 9 6 6 6-6' />
          </svg>
        </div>
      </section>

      <section className='section section-gray' id='tools-section'>
        <div className='container mt-3 mb-3'>
          <h2 className='section-title'>
            <span className='gradient-text'>{texts['/home'].h2}</span>
          </h2>

          <div className='tools-flex'>
            <div className='tool-card'>
              <div className='tool-card-content'>
                <div className='tool-header'>
                  <div className='tool-icon'>
                    <img
                      src={conversorhite}
                      className='tool-img'
                      alt='Ícono de conversor de datos'
                    />
                  </div>
                  <h3 className='tool-title'>
                    {texts['/home'].herramientas['conversor-xlsx-json'].title}
                  </h3>
                </div>
                <p className='tool-description'>
                  {
                    texts['/home'].herramientas['conversor-xlsx-json']
                      .description
                  }
                </p>
                <NavLink to={routes[1].path} className='tool-link'>
                  {texts['/home'].herramientas['conversor-xlsx-json'].button1}
                  <img
                    src={arrowwhite}
                    className='arrow'
                    alt='Ícono de flecha'
                  />
                </NavLink>
              </div>
            </div>

            <div className='tool-card'>
              <div className='tool-card-content'>
                <div className='tool-header'>
                  <div className='tool-icon'>
                    <img
                      src={imgwhite}
                      className='tool-img'
                      alt='Ícono de imagen'
                    />
                  </div>
                  <h3 className='tool-title'>
                    {texts['/home'].herramientas['redimencionador-img'].title}
                  </h3>
                </div>
                <p className='tool-description'>
                  {
                    texts['/home'].herramientas['redimencionador-img']
                      .description
                  }
                </p>
                <NavLink to={routes[2].path} className='tool-link'>
                  {texts['/home'].herramientas['redimencionador-img'].button1}
                  <img
                    src={arrowwhite}
                    className='arrow'
                    alt='Ícono de flecha'
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section section-dark' id='about-me-section'>
        <div className='container mt-3 mb-3'>
          <h2 className='section-title'>
            <span className='gradient-text'>
              {texts['/home']['about-me'].title}
            </span>
          </h2>

          <div className='about-card'>
            <p className='about-text'>
              {texts['/home']['about-me'].description1}
            </p>
            <p className='about-text'>
              {texts['/home']['about-me'].description2}
            </p>
            <div className='skills-container'>
              {texts['/home']['about-me'].stack.map((element) => (
                <span
                  className={`skill-tag ${element.classname}`}
                  key={element.stackid}
                >
                  {element.stackname}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section className='section section-gray' id='projects-section'>
        <div className='container mt-3 mb-3'>
          <h2 className='section-title'>
            <span className='gradient-text'>
              {texts['/home'].projects.title}
            </span>
          </h2>

          <div className='projects-flex'>
            {texts['/home'].projects.projects.map((element) => (
              <div className='project-card' key={element.idporject}>
                <div className='project-card-content'>
                  <h3 className='project-title'>{element.title}</h3>
                  <p className='project-description'>{element.description}</p>
                  <a href='#' className='project-link'>
                    {element.button1}
                    <img
                      src={arrowwhite}
                      className='arrow'
                      alt='Ícono de flecha'
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className='section section-gray' id='contact-us-section'>
        <div className='container mb-3 mt-3'>
          <h2 className='section-title'>
            <span className='gradient-text'>
              {texts['/home']['contact-me'].title}
            </span>
          </h2>
          <p className='contact-description'>
            {texts['/home']['contact-me'].description}
          </p>

          <div className='social-links'>
            <a
              href={texts['/home']['contact-me'].anchors.github}
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
            >
              <img
                src={githubwhite}
                className='social-img'
                alt='Ícono de GitHub'
              />
            </a>
            <a
              href={texts['/home']['contact-me'].anchors.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
            >
              <img
                src={linkedinwhite}
                className='social-img'
                alt='Ícono de LinkedIn'
              />
            </a>
          </div>

          <NavLink
            to={routes[3].path}
            className={'button button-primary contact-button'}
          >
            {texts['/home']['contact-me'].button1}
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Home;
