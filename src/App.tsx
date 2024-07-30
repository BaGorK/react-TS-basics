import { useState } from 'react';

import Header from './components/Header';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';

import goalsImg from './assets/goals.jpg';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (enteredGoal: string, enteredSummary: string) => {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: enteredGoal,
      description: enteredSummary,
    };

    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoal) => prevGoal.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal
        onAddGoal={(enteredGoal, enteredSummary) =>
          handleAddGoal(enteredGoal, enteredSummary)
        }
      />
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}
