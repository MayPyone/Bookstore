import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Book from './Book';
import { fetchUsers } from '../redux/book/booksSlice';

export default function BookList() {
  const { totalbooks } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  });
  const keys = Object.keys(totalbooks);
  return (
    <ul>
      {
      keys.map((key) => totalbooks[key].map((item) => (
        <Book
          key={item.item_id}
          category={item.category}
          title={item.title}
          author={item.author}
          item_id={key}
        />
      )))
      }

    </ul>
  );
}
