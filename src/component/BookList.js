import { useSelector } from 'react-redux';
import Book from './Book';

export default function BookList() {
  const { totalbooks } = useSelector((state) => state.book);
  return (
    <ul>
      {totalbooks.map((item) => (
        <Book
          key={item.item_id}
          category={item.category}
          title={item.title}
          author={item.author}
          item_id={item.item_id}
        />
      ))}
    </ul>
  );
}
