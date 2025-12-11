import dayjs from "dayjs";

import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window.js";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Shawn's Portfolio</p>
        <ul className="">
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)} className="">
              <p className="">{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id} className="">
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
        <time dateTime="">{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
