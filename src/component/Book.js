import './styles/book.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteBooks, fetchBooks } from '../redux/book/booksSlice';

export default function Book(prop) {
  const {
    title, author, item_id, category,
  } = prop;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <li className="list-item">
      <div key={item_id} className="first">
        <div className="book">
          <p className="category">{category}</p>
          <p className="b-title">{title}</p>
          <p className="b-author">{author}</p>
        </div>
        <div className="buttongroup">
          <button type="button">Comment</button>
          <button className="remove" type="button" onClick={() => dispatch(deleteBooks(item_id))}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="second">
        <div className="percent">
          <div className="progress-bar" />
          <div className><p>64%</p>
          <p>Completed</p>
          </div>
        </div>
      </div>
    </li>
  );
}
