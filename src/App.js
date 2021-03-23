import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  return (

    <div className="App">
    <h1>Workout Reps 💪🏻</h1>
      <h2>Pull Ups</h2>
      <Counter />

      <h2>Squats</h2>
      <Counter initialCount={0} />

      <h2>One Arm Pull Up Negatives</h2>
      <Counter initialCount={0} />

      <h2>Push Ups</h2>
      <Counter initialCount={0} />
    </div>
  );
}
