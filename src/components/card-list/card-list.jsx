import { Component } from "react";
import Card from "../card/card";
import './card-list.styles.css';

class CardList extends Component {
  render() {
    const monsters = this.props.monsters;

    return (
      <div className='card-list'>
        {monsters.map((monster) => {
        const { name, id, email} = monster;
          return <Card monster={monster} key={monster.id} />
        })}
      </div>
    );
  }
}

export default CardList;
