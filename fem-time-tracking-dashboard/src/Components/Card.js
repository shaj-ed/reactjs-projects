import SingleCard from "./SingleCard";

const Card = ({ cardItem, activeItem }) => {
  return (
    <section className="cards">
      {cardItem.map((item, index) => {
        return <SingleCard key={index} item={item} activeItem={activeItem} />;
      })}
    </section>
  );
};

export default Card;
