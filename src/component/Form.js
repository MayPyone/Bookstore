import './styles/form.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/book/booksSlice';

export default function Form() {
  const [tit, setTitle] = useState('');
  const [auth, setAuthor] = useState('');

  const dispatch = useDispatch();
  const { totalbooks } = useSelector((state) => state.book);
  const book = () => {
    const i = totalbooks.length + 1;
    const b = {
      title: tit,
      author: auth,
      item_id: `item${i}`,
    };
    return b;
  };
  return (
    <form>
      <span>Add new book</span>
      <div>
        <input className="title" placeholder="book title" onChange={(e) => setTitle(e.target.value)} value={tit} required />
        <input className="author" placeholder="author" onChange={(e) => setAuthor(e.target.value)} value={auth} required />
        <button type="button" onClick={() => dispatch(addBook(book()))}>ADD BOOK</button>
      </div>
    </form>
  );
}
