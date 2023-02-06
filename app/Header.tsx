import { FaAngleDown, FaListUl } from "react-icons/fa";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 p-2">
      <div className="navbar rounded-box bg-primary bg-opacity-70 text-primary-content backdrop-blur-md">
        <div className="navbar-start">
          {/*Defines the behavior on sm-md screens*/}
          <div className="dropdown">
            <label tabIndex={0} className="btn-ghost btn lg:hidden">
              <FaListUl />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-primary p-2 font-bold uppercase text-primary-content shadow"
            >
              <li>
                <a>Discover</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Search
                  <FaAngleDown />
                </a>
                <ul className="rounded-box bg-base-200 p-2 text-base-content">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a className="btn-ghost btn hidden truncate text-xl sm:inline-flex">
            Nouvelle Génération
          </a>
          tio
        </div>
        {/*Defines the behavior on large screens*/}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold uppercase">
            <li>
              <a>Discover</a>
            </li>
            <li tabIndex={0}>
              <a>
                Search <FaAngleDown />
              </a>
              <ul className="rounded-box bg-base-200 p-2 text-base-content">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn-ghost btn">Account</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
