import './styles/book.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/book/booksSlice';

export default function Book(prop) {
  const {
    category, title, author, item_id,
  } = prop;
  const dispatch = useDispatch();
  return (
    <li className="list-item">
      <div>
        <div>{category}</div>
        <div>{title}</div>
        <div>{author}</div>
        <button type="button" onClick={() => { dispatch(removeBook(item_id)); }}>Remove</button>
      </div>
    </li>
  );
}
