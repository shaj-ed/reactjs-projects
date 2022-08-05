import {
  MdOutlineFastfood,
  MdEmojiFoodBeverage,
  MdFastfood,
  MdOutlineFoodBank,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    id: 0,
    text: "italian",
    icon: <MdOutlineFastfood />,
  },
  {
    id: 2,
    text: "asian",
    icon: <MdEmojiFoodBeverage />,
  },
  {
    id: 3,
    text: "thai",
    icon: <MdFastfood />,
  },
  {
    id: 4,
    text: "chinese",
    icon: <MdOutlineFoodBank />,
  },
];

const CategoryMenu = () => {
  return (
    <ul className="flex items-center justify-center gap-6 mt-8">
      {menuItems.map((item) => {
        const { id, text, icon } = item;
        return (
          <li key={id} className="cursor-pointer hover:opacity-70">
            <NavLink
              to={`category/${text}`}
              className={({ isActive }) =>
                isActive ? "block transition-all scale-125" : ""
              }
            >
              <span className="w-10 h-10 bg-gray-500 rounded-full text-slate-300 grid justify-center text-sm items-center mx-auto">
                {icon}
              </span>
              <h4 className="text-center text-slate-300 text-sm font-bold mt-1 capitalize">
                {text}
              </h4>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryMenu;
