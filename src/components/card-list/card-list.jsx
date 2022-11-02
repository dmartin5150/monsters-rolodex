import Card from "../card/card";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      const { name, id, email } = monster;
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);

export default CardList;
