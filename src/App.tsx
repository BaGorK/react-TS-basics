import CourseGoal from './components/CourseGoal';
import goalsImg from './assets/goals.jpg';
import Header from './components/Header';
import { useState } from 'react';

export default function App() {
  type CourseGoal = {
    title: string;
    description: string;
    id: number;
  };

  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const addGoalHandler = () => {};

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={addGoalHandler}>Add Goal</button>
      <CourseGoal title='Learn React + TS'>
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
}
