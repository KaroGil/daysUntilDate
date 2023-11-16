import './App.css';
import { DaysUntil } from './components/DaysUntil';

function App() {
  const movie = "The hunger games: The ballad of songbirds and snakes"
  return (
    <div className="App">
      <h1>Days Until</h1>
      <h2>{movie}</h2>
       <DaysUntil date="2023-11-16" />
    </div>
  );
}

export default App;
