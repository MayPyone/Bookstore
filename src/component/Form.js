import './styles/form.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBooks, fetchBooks } from '../redux/book/booksSlice';

export default function Form() {
  const [tit, setTitle] = useState('');
  const [auth, setAuthor] = useState('');

  const { totalbooks } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  console.log(totalbooks);
  const book = () => {
    const b = {
      title: tit,
      author: auth,
      item_id: uuidv4(),
      category: 'Fiction',
    };
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
    return b;
  };
  return (
    <form>
      <span>Add new book</span>
      <div>
        <input className="title" placeholder="book title" onChange={(e) => setTitle(e.target.value)} value={tit} required />
        <input className="author" placeholder="author" onChange={(e) => setAuthor(e.target.value)} value={auth} required />
        <button type="button" onClick={() => dispatch(addBooks(book()))}>ADD BOOK</button>
      </div>
    </form>
  );
}
