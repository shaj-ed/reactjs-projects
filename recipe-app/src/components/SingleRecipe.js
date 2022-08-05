import { AiOutlineClockCircle } from "react-icons/ai";
import { BiBookmarkAltMinus } from "react-icons/bi";
import { Link } from "react-router-dom";

const SingleRecipe = ({ recipe }) => {
  const { id, title, image, dishTypes, readyInMinutes, extendedIngredients } =
    recipe;
  return (
    <Link to={`/recipe/${id}`}>
      <article className="w-full max-w-xs mx-auto sm:w-full justify-self-center hover:opacity-90">
        <img src={image} className="w-full" alt={title} />
        <div className="p-5 bg-zinc-200 text-zinc-700">
          <h3 className="text-base font-medium">
            {title.length > 20 ? `${title.slice(0, 21)}...` : title}
          </h3>
          <div className="flex gap-5">
            <p className="text-sm font-medium flex items-center gap-2 mt-1 mb-4">
              <AiOutlineClockCircle /> {readyInMinutes}
            </p>
            <p className="text-sm font-medium flex items-center gap-2 mt-1 mb-4">
              <BiBookmarkAltMinus /> {extendedIngredients.length}
            </p>
          </div>
          <div className="flex gap-1 flex-wrap">
            {dishTypes.length > 3
              ? dishTypes.slice(0, 3).map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="text-xs rounded py-1 px-3 bg-zinc-800 text-zinc-300 inline-block"
                    >
                      {item}
                    </span>
                  );
                })
              : dishTypes.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="text-xs rounded py-1 px-3 bg-zinc-800 text-zinc-300 inline-block"
                    >
                      {item}
                    </span>
                  );
                })}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default SingleRecipe;
