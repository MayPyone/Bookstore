import './styles/book.css';

export default function Book(prop) {
  const { type, title, author } = prop;
  return (
    <li className="list-item">
      <span>{type}</span>
      <span>{title}</span>
      <span>{author}</span>
      <button type="button">Remove</button>
    </li>
  );
}
