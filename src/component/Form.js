import './styles/form.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/book/booksSlice';

export default function Form() {
  const dispatch = useDispatch();
  const { totalbooks } = useSelector((state) => state.book);
  const book = () => {
    const tit = document.querySelector('.title').value;
    const auth = document.querySelector('.author').value;
    const i = totalbooks.length + 1;
    const b = {
      title: tit,
      author: auth,
      item_id: `item${i}`,
    };
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
    return b;
  };
  return (
    <form>
      <span>Add new book</span>
      <div>
        <input className="title" placeholder="book title" />
        <input className="author" placeholder="author" />
        <button type="button" onClick={() => dispatch(addBook(book()))}>ADD BOOK</button>
      </div>
    </form>
  );
}
