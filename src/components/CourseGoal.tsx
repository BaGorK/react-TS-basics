export default function CourseGoal({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}
