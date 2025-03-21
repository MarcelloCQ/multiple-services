import { NavLink } from 'react-router';
import { currentYear } from './currentYear';
import './footer.css';
import routes from '../../routes/routes.json';
import texts from './../../texts.json';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer-container'>
        <p className='copyright'>
          © <span id='current-year'>{currentYear()}</span> {texts.footer.rights}
        </p>
        <div className='footer-links'>
          {routes.map((element, index) => (
            <NavLink
              to={element.path}
              key={element.routeId}
              className='footer-link'
            >
              {texts.footer.anchors[index].anchorText}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
