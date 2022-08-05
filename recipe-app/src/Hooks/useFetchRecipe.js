import { useEffect, useState } from "react";

const useFetchRecipe = (category, url) => {
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipe = async () => {
      setLoading(true);
      try {
        const isRecipes = localStorage.getItem(category);
        if (isRecipes) {
          setRecipe(JSON.parse(isRecipes));
          setLoading(false);
        } else {
          const response = await fetch(url);
          const data = await response.json();
          localStorage.setItem(category, JSON.stringify(data));
          setRecipe(data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getRecipe();
  }, [category, url]);

  return { loading, recipe };
};

export default useFetchRecipe;
