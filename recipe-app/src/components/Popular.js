import SingleRecipe from "./SingleRecipe";
import useFetchRecipe from "../Hooks/useFetchRecipe";

const Popular = () => {
  const popularUrl = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`;
  const { recipe, loading } = useFetchRecipe("popular", popularUrl);

  return (
    <div>
      <h2 className="text-3xl font-medium mb-5 capitalize text-center sm:text-left">
        popular
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

export default Popular;
