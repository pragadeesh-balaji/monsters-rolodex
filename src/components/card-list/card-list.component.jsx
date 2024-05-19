import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  constructor() {
    super();
  }

  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card key={monster.id} cardData={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
