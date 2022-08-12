import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-center text-slate-400 mb-5">
        Wellcome to Home.
      </h1>
      <article className="w-40 h-40 bg-zinc-600 text-zinc-300 text-center p-5">
        <h2 className="text-2xl font-medium">Get The Content</h2>
        <Link
          to="/dashboard"
          className="text-lg font-bold text-slate-300 mt-5 block"
        >
          Dashboard
        </Link>
      </article>
    </section>
  );
};

export default Home;
