import { FaAngleDown, FaListUl } from "react-icons/fa";
import { Categories } from "@/utils/schemas/category";
import { ListCategories } from "./ListCategories";
import HeaderLink from "./HeaderLink";
import Image from "next/image";
import Icon from "../public/Icon.svg";
import { RiAccountPinCircleLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50">
      <div className="navbar bg-base-100 shadow-md">
        <div className="navbar-start">
          {/*Defines the behavior on sm-md screens*/}
          <div className="dropdown">
            <label tabIndex={0} className="btn-ghost btn lg:hidden">
              <FaListUl />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 font-bold uppercase text-base-content shadow"
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
            className="animate-gradient-x btn-ghost btn truncate text-xl ring-transparent"
          >
            <Image src={Icon} alt="Icon" height={20} />
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
            className="btn-ghost btn-circle btn ring-primary-content"
          >
            <RiAccountPinCircleLine className="text-3xl" />
          </HeaderLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
