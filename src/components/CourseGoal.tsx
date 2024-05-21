import { type ReactNode } from 'react';
// import { type PropsWithChildren } from 'react';

// interface CourseGoalProps {
//   title: string;
//   desc: string;
// }

// type CourseGoalProps = PropsWithChildren<{ title: string }>;

type CourseGoalProps = {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
};

export default function CourseGoal({
  title,
  id,
  children,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
