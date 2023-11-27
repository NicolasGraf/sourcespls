import { Link } from "react-router-dom";

const ArgumentItem = ({ argument, isActive, onSelect }) => {
  const { title, slug } = argument;
  const fullUrl = `${window.location.origin}/${slug}`;

  return (
    <div
      className={`${
        isActive ? "border-accent" : "border-secondary-light"
      } p-2 shadow-md relative text-left w-full rounded-md border dark:bg-secondary-dark`}
      onClick={onSelect}
    >
      <h5 className="text-xl mb-4">{title}</h5>
      <Link to={`/arguments/${slug}`}>
        <a>{fullUrl}</a>
      </Link>
    </div>
  );
};

export default ArgumentItem;
