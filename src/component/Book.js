import './styles/book.css';
import { useDispatch } from 'react-redux';
import { deleteUsers } from '../redux/book/booksSlice';

export default function Book(prop) {
  const {
    category, title, author, item_id,
  } = prop;
  const dispatch = useDispatch();
  return (
    <li className="list-item">
      <div key={item_id}>
        <div>{category}</div>
        <div>{title}</div>
        <div>{author}</div>
        <button type="button" onClick={() => { dispatch(deleteUsers(item_id)); }}>Remove</button>
      </div>
    </li>
  );
}
