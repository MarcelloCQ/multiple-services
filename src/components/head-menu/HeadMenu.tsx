import { NavLink } from 'react-router';
import './head-menu.css';
import React, { useState } from 'react';
import routes from '../../routes/routes.json';

const HeadMenu = () => {
  const [menu, setMenu] = useState(false);

  const handlerMenuChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.classList.toggle('active');
    setMenu(!menu);
  };

  return (
    <nav className='nav'>
      <div className='nav-desktop'>
        {routes.map((route) => (
          <NavLink
            key={route.routeId}
            className='nav-link'
            data-description={route.description}
            to={route.path}
          >
            {route.title}
          </NavLink>
        ))}
      </div>

      <button
        className='nav-btn-menu'
        onClick={handlerMenuChange}
        type='button'
      >
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
      </button>

      {menu ? (
        <div className='nav-mobile'>
          {routes.map((route) => (
            <NavLink
              key={route.routeId}
              className='nav-link'
              data-description={route.description}
              to={route.path}
              onClick={() => setMenu(false)}
            >
              {route.title}
            </NavLink>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
};

export default HeadMenu;
