import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchRecipe from "../Hooks/useFetchRecipe";
import RecipeDetail from "../components/RecipeDetail";

const SingleRecipeDetail = () => {
  const [activeTab, setActiveTab] = useState("instructions");
  const { id } = useParams();
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`;
  const { recipe, loading } = useFetchRecipe(`${id}Detail`, url);

  return (
    <main className="w-full bg-slate-300 p-10 text-zinc-800">
      <section className="max-w-5xl mx-auto ">
        {loading ? (
          <h2 className="text-md">Wait a sec..</h2>
        ) : (
          <RecipeDetail
            recipe={recipe}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </section>
    </main>
  );
};

export default SingleRecipeDetail;
