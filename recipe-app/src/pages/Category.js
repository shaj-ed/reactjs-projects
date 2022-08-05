import { Link, useParams } from "react-router-dom";
import useFetchRecipe from "../Hooks/useFetchRecipe";

const Category = () => {
  const { type } = useParams();
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=1030a8823f404d9489487b04d7b31418&cuisine=${type}&number=6`;
  const { recipe, loading } = useFetchRecipe(`${type}CategoryRecipes`, url);

  return (
    <main className="w-full bg-slate-300 p-10">
      <section className="max-w-5xl mx-auto ">
        {loading ? (
          <h2 className="text-zinc-700 text-md">Wait a sec..</h2>
        ) : (
          <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {recipe.results.map((item) => {
              const { id, image, title } = item;
              return (
                <Link to={`/recipe/${id}`} key={id}>
                  <article className="w-48 flex flex-col bg-zinc-600 hover:opacity-90">
                    <img src={image} alt={title} className="w-full" />
                    <h2 className="text-zinc-300 text-center text-md p-3">
                      {title.length > 15 ? `${title.slice(0, 16)}...` : title}
                    </h2>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export default Category;
