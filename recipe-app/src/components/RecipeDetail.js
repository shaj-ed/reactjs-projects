import { MdOutlinePlayArrow } from "react-icons/md";

const RecipeDetail = ({ recipe, activeTab, setActiveTab }) => {
  const { image, title, summary, instructions, extendedIngredients } = recipe;
  return (
    <article className="grid gap-10 md:gap-16 md:grid-cols-2 md:justify-items-start">
      <div className="">
        <h2 className="text-xl font-medium mb-5">{recipe.title}</h2>
        <img
          src={image}
          className="w-56 md:w-full rounded-sm shadow-md"
          alt={title}
        />
      </div>
      <div className="md:mt-10 md:justify-self-start">
        <button
          type="button"
          className={
            activeTab === "instructions"
              ? "button bg-gray-800 text-gray-200 scale-110 transition"
              : "button bg-gray-200 text-gray-800"
          }
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </button>
        <button
          type="button"
          className={
            activeTab === "ingredients"
              ? "button bg-gray-800 text-gray-200 ml-5 scale-110 transition"
              : "button bg-gray-200 text-gray-800 ml-5"
          }
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </button>
        {activeTab === "instructions" ? (
          <>
            <p
              dangerouslySetInnerHTML={{ __html: summary }}
              className="mb-4 mt-8 text-base"
            ></p>
            <p
              dangerouslySetInnerHTML={{ __html: instructions }}
              className="mb-4 text-base"
            ></p>
          </>
        ) : (
          <ul className="mt-5">
            {extendedIngredients.map((item) => {
              return (
                <li
                  key={item.id}
                  className="text-md mb-3 flex items-center gap-2"
                >
                  <MdOutlinePlayArrow /> {item.original}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </article>
  );
};

export default RecipeDetail;
