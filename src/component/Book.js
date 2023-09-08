import './styles/book.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteBooks, fetchBooks } from '../redux/book/booksSlice';

export default function Book(prop) {
  const {
    title, author, item_id,
  } = prop;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <li className="list-item">
      <div key={item_id}>
        <div>{title}</div>
        <div>{author}</div>
        <button type="button" onClick={() => dispatch(deleteBooks(item_id))}>Remove</button>
      </div>
    </li>
  );
}
