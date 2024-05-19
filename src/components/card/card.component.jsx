import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  constructor() {
    super();
  }

  render() {
    const { cardData } = this.props;
    const { id, name } = cardData;
    return (
      <div className="card">
        <img
          className="card__img"
          alt="monster"
          src={`https://www.robohash.org/${id}?set=set2&size=200x200`}
        />
        <h4 className="card__title">{name}</h4>
      </div>
    );
  }
}

export default Card;
