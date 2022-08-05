import SingleRecipe from "./SingleRecipe";
import useFetchRecipe from "../Hooks/useFetchRecipe";

const Vegeterian = () => {
  const vegetarianUrl = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6&tags=vegetarian`;

  const { recipe, loading } = useFetchRecipe("vegetarian", vegetarianUrl);

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-medium mb-5 capitalize text-center sm:text-left">
        vegeterian
      </h2>
      {loading ? (
        <h2 className="text-2xl font-medium mb-5 text-center">wait a sec..</h2>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-2">
          {recipe.recipes.map((item) => {
            return <SingleRecipe key={item.id} recipe={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Vegeterian;
