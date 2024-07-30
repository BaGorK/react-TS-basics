import { useRef, type FormEvent } from 'react';

export type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;

    if (!enteredGoal || !enteredSummary) return;

    e.currentTarget.reset();

    onAddGoal(enteredGoal, enteredSummary);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input ref={goalRef} type='text' id='goal' />
      </p>
      <p>
        <label htmlFor='summary'>Short summary</label>
        <input ref={summaryRef} type='text' id='summary' />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}

// useRef contains undefined as a default value // undefined means that their is no value at all // null means their may no value under certain conditions
