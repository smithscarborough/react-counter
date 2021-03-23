import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>Pancakes Eaten</h2>
      <Counter />

      <h2>Waffles Eaten</h2>
      <Counter initialCount={42} />

      <h2>Strudles Eaten</h2>
      <Counter initialCount={10} />

      <h2>Croissants Eaten</h2>
      <Counter initialCount={0} />
    </div>
  );
}
