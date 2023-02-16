import { FaAngleDown, FaListUl } from "react-icons/fa";
import HeaderLink from "./HeaderLink";

import { Categories } from "@/utils/schemas/categorySchema";

const ListCategories = (CategoriesList: typeof Categories) => {
  return (
    <ul className="rounded-box bg-base-100 p-2 text-base-content shadow-md">
      {CategoriesList.map((c, i) => (
        <li key={i}>
          <HeaderLink href={"/categories/" + c} className="ring-primary">
            {c}
          </HeaderLink>
        </li>
      ))}
    </ul>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50">
      <div className="navbar bg-primary bg-opacity-70 text-primary-content shadow-md backdrop-blur-md">
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
                <HeaderLink href="/discover" className="ring-primary-content">
                  Discover
                </HeaderLink>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Find
                  <FaAngleDown />
                </a>
                {ListCategories(Categories)}
              </li>
              <li>
                <HeaderLink href="/create" className="ring-primary-content">
                  Create
                </HeaderLink>
              </li>
            </ul>
          </div>
          <HeaderLink
            href="/"
            className="btn-ghost btn truncate text-xl ring-primary-content"
          >
            Nouvelle Génération
          </HeaderLink>
        </div>
        {/*Defines the behavior on large screens*/}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold uppercase">
            <li>
              <HeaderLink href="/discover" className="ring-primary-content">
                Discover
              </HeaderLink>
            </li>
            <li tabIndex={0}>
              <a>
                Find
                <FaAngleDown />
              </a>
              {ListCategories(Categories)}
            </li>
            <li>
              <HeaderLink href="/create" className="ring-primary-content">
                Create
              </HeaderLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <HeaderLink
            href="/account"
            className="btn-ghost btn ring-primary-content"
          >
            Account
          </HeaderLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
