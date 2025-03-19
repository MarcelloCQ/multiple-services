import { NavLink } from 'react-router';
import './head-menu.css';
import React, { useState } from 'react';
import routes from '../../routes/routes.json';
import { convertRoutesToArray } from '../../routes/routesUtils';

const HeadMenu = () => {
  const [menu, setMenu] = useState(false);

  const handlerMenuChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.classList.toggle('active');
    setMenu(!menu);
  };

  const routesArray = convertRoutesToArray(routes);

  return (
    <nav className='nav'>
      <div className='nav-desktop'>
        {routesArray.map((route, index) => (
          <NavLink key={index} className='nav-link' to={route.path}>
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
          {routesArray.map((route, index) => (
            <NavLink
              key={index}
              className='nav-link'
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
