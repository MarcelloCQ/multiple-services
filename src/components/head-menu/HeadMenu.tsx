import { NavLink } from "react-router-dom";
import "./head-menu.css";
import routes from "../../routes/routes.json";
import useHeaderMenu from "./hook/useHeaderMenu";

const HeadMenu = () => {
  const { menu, handleMenuChange, setMenu, menuRef, buttonRef } =
    useHeaderMenu();

  return (
    <nav className="nav">
      <div className="nav-desktop">
        {routes.map((route) => (
          <NavLink
            key={route.routeId}
            className="nav-link"
            data-description={route.description}
            to={route.path}
          >
            {route.title}
          </NavLink>
        ))}
      </div>

      <button
        className="nav-btn-menu"
        onClick={handleMenuChange}
        type="button"
        ref={buttonRef}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      {menu ? (
        <div className="nav-mobile" ref={menuRef}>
          {routes.map((route) => (
            <NavLink
              key={route.routeId}
              className="nav-link"
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
