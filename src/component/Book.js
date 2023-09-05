import './styles/book.css';
import { useSelector, useDispatch } from 'react-redux';

import { removeBook } from '../redux/book/booksSlice';

export default function Book() {
  const dispatch = useDispatch();
  const { totalbooks } = useSelector((state) => state.book);
  const updateid = totalbooks.map((b, index) => ({
    ...b,
    item_id: `item${index + 1}`,
  }));

  return (
    <li className="list-item">
      {
        updateid.map((book) => (
          <div key={book.item_id}>
            <div>{book.category}</div>
            <div>{book.title}</div>
            <div>{book.author}</div>
            <button type="button" onClick={() => { dispatch(removeBook(book.item_id)); }}>Remove</button>
          </div>
        ))
      }
    </li>
  );
}
