import {
  CardContainer,
  CardImage,
  CardText,
  CardTitle,
  StyledCard,
  CardLine,
} from "../assets/styles/Card.styled";
import { cardItem } from "../data";

const Card = () => {
  return (
    <CardContainer>
      <CardLine></CardLine>
      {cardItem.map((item) => {
        const { id, title, text, imageUrl } = item;

        return (
          <StyledCard key={id}>
            <CardImage>
              <img src={imageUrl} alt={title} />
            </CardImage>
            <CardTitle>{title}</CardTitle>
            <CardText>{text}</CardText>
          </StyledCard>
        );
      })}
    </CardContainer>
  );
};

export default Card;
