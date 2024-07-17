import { useState } from "react";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      let newTeam = [...team, fighter];
      let newMoney = money - fighter.price;
      let newStrength = totalStrength + fighter.strength;
      let newAgility = totalAgility + fighter.agility;
      setTeam(newTeam);
      setMoney(newMoney);
      setTotalStrength(newStrength);
      setTotalAgility(newAgility);
    } else {
      console.log("Not enough money");
    }
  };

  const handleRemoveFighter = (fighter) => {
    let newTeam = team.filter((teamMember) => {
      return teamMember.name !== fighter.name;
    });
    let newMoney = money + fighter.price;
    let newStrength = totalStrength - fighter.strength;
    let newAgility = totalAgility - fighter.agility;
    setTeam(newTeam);
    setMoney(newMoney);
    setTotalStrength(newStrength);
    setTotalAgility(newAgility);
  };

  const DisplayFighter = ({ fighter }) => {
    return (
      <>
        <img src={fighter.img}></img>
        {fighter.name},{fighter.price},{fighter.strength},{fighter.agility}
      </>
    );
  };

  return (
    <div class="container">
      <h1>Zombie Fighters</h1>
      <p>Money: ${money}</p>
      <p>Team strength: {totalStrength}</p>
      <p>Team Agility: {totalAgility}</p>
      <h2>Your team: {team.length}</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((fighter, index) => (
            <li key={index}>
              <DisplayFighter fighter={fighter} />
              <button onClick={() => handleRemoveFighter(fighter)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h2>Available Fighters</h2>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <DisplayFighter fighter={fighter} />
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
