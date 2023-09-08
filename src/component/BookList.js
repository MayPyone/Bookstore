import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Book from './Book';
import { fetchBooks } from '../redux/book/booksSlice';

export default function BookList() {
  const { totalbooks } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <ul>

      {totalbooks.map((item) => (
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
