import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoTwitter,
} from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-800 py-10 px-4">
      <div className="w-full max-w-5xl mx-auto text-center grid gap-8 sm:text-left sm:grid-cols-3 sm:justify-items-center lg:grid-cols-4">
        <Link to="/">
          <h1 className="brand-logo sm:col-span-3 lg:col-span-1">Tastybite</h1>
        </Link>
        <article>
          <h3 className="text-lg text-slate-300 font-semibold mb-2">Home</h3>
          <ul>
            <li className="text-sm text-slate-500 font-medium mb-1">
              <Link to="/" className="hover:opacity-90">
                Popular
              </Link>
            </li>
            <li className="text-sm text-slate-500 font-medium mb-1">
              <Link to="/" className="hover:opacity-90">
                Vegeterian
              </Link>
            </li>
            <li className="text-sm text-slate-500 font-medium mb-1">
              <Link to="/" className="hover:opacity-90">
                Random
              </Link>
            </li>
          </ul>
        </article>

        <article>
          <h3 className="text-lg text-slate-300 font-semibold mb-2">
            Categories
          </h3>
          <ul>
            <li className="text-sm text-slate-500 font-medium mb-1">
              <Link to="/category/italian" className="hover:opacity-90">
                Italian
              </Link>
            </li>
            <li className="text-sm text-slate-500 font-medium mb-1">
              <Link to="/category/asian" className="hover:opacity-90">
                Asian
              </Link>
            </li>
            <li className="text-sm text-slate-500 font-medium mb-1">
              <Link to="/category/thai" className="hover:opacity-90">
                Thai
              </Link>
            </li>
            <li className="text-sm text-slate-500 font-medium mb-1">
              <Link to="/category/chinese" className="hover:opacity-90">
                Chinese
              </Link>
            </li>
          </ul>
        </article>
        <article className="flex gap-5 justify-center">
          <span className="text-slate-300 text-xl hover:opacity-80 cursor-pointer">
            <IoLogoFacebook />
          </span>
          <span className="text-slate-300 text-xl hover:opacity-80 cursor-pointer">
            <IoLogoYoutube />
          </span>
          <span className="text-slate-300 text-xl hover:opacity-80 cursor-pointer">
            <IoLogoTwitter />
          </span>
          <span className="text-slate-300 text-xl hover:opacity-80 cursor-pointer">
            <IoLogoInstagram />
          </span>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
