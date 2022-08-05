import Popular from "../components/Popular";
import Vegeterian from "../components/Vegeterian";

const Home = () => {
  return (
    <main className="w-full bg-slate-300 py-8 px-5 md:py-12">
      <section className="max-w-5xl mx-auto">
        <Popular />
        <Vegeterian />
      </section>
    </main>
  );
};

export default Home;
