// import { type ReactNode } from 'react';
import { type PropsWithChildren } from 'react';

// interface CourseGoalProps {
//   title: string;
//   desc: string;
// }

// type CourseGoalProps = {
//   title: string;
//   children: ReactNode;
// };

type CourseGoalProps = PropsWithChildren<{ title: string }>;

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}
