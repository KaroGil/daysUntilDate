import { useState } from 'react';
import './App.css';
import { DaysUntil } from './components/DaysUntil';

function App() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  }


  const events = [
    { date: "2023-11-16", movie: "The hunger games: The ballad of songbirds and snakes" },
    { date: "2025-03-18", movie: "The hunger games: Sunrise on the Reaping (Book)" },
    { date: "2026-11-20", movie: "The hunger games: Sunrise on the Reaping (Movie)" }
  ];

  const today = new Date();
  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return toggle ? eventDate >= today : true;
  });


  return (
    <div className="App">
      <button className="toggle" onClick={handleClick}>
        {toggle ? 'Show All Events' : 'Show Upcoming Events Only'}
      </button>
      {filteredEvents.map(event => (
        <DaysUntil key={event.date} date={event.date} movie={event.movie} />
      ))}
    </div>
  );
}

export default App;
