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

  const addGoalHandler = () => {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: 'Learn React + TS',
      description: 'Learn it from the ground up',
    };

    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={addGoalHandler}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}
