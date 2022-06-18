import iconElipsis from "./../images/icon-ellipsis.svg";

const SingleCard = ({ item, activeItem }) => {
  const data = item.timeframes[`${activeItem}`];
  // console.log(item.timeframes[`${activeItem}`]);

  const lastText = () => {
    if (activeItem === "daily") {
      return "Day";
    } else if (activeItem === "weekly") {
      return "Week";
    } else {
      return "Month";
    }
  };

  return (
    <article className="card">
      <div className="card__hide"></div>
      <div className="card__info">
        <header className="card__header">
          <h3 className="card__title">{item.title}</h3>
          <img src={iconElipsis} className="card__icon" alt={item} />
        </header>
        <div className="card__content">
          <p className="card__hours">{data.current}hrs</p>
          <p className="card__lastweek">
            Last {lastText()} - {data.previous}hrs
          </p>
        </div>
      </div>
    </article>
  );
};

export default SingleCard;
