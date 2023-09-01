import Book from './Book';

export default function BookList(prop) {
  const { type, title, author } = prop;
  return (
    <ul>
      <Book type={type} title={title} author={author} />
    </ul>
  );
}
