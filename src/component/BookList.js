import { useSelector } from 'react-redux';
import Book from './Book';

export default function BookList() {
  const { totalbooks } = useSelector((state) => state.book);
  const updateid = totalbooks.map((b) => ({
    ...b,
  }));
  return (
    <ul>
      {updateid.map((item) => (
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
