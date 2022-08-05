import { Link, useParams } from "react-router-dom";
import useFetchRecipe from "../Hooks/useFetchRecipe";

const Search = () => {
  const { type } = useParams();
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=1030a8823f404d9489487b04d7b31418&query=${type}&number=8`;
  const { recipe, loading } = useFetchRecipe(`${type}Recipe`, url);

  return (
    <main className="w-full bg-slate-300 p-10">
      <section className="max-w-5xl mx-auto">
        {loading ? (
          <h2 className="text-zinc-800 text-center text-xl capitalize">
            {type} Recipes Fetching..
          </h2>
        ) : (
          <>
            <h2 className="text-zinc-800 text-center capitalize text-xl font-medium  mb-8">
              {type} Recipes
            </h2>
            <div className="grid gap-8 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center">
              {recipe.results.map((item) => {
                const { id, title, image } = item;
                return (
                  <Link
                    key={id}
                    to={`/recipe/${id}`}
                    className="w-36 block rounded-lg overflow-hidden hover:opacity-80 bg-zinc-600"
                  >
                    <article>
                      <img src={image} alt={title} />
                      <h3 className="text-center text-zinc-300 p-3 text-md">
                        {title.length > 10 ? `${title.slice(0, 11)}...` : title}
                      </h3>
                    </article>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Search;
