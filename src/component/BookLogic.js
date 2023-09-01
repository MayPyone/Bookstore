import BookList from './BookList';

export default function BookLogic() {
  const book = [{
    type: 'Romance',
    title: 'My tree',
    author: 'Jue',
  },
  ];
  return (
    <BookList type={book[0].type} title={book[0].title} author={book[0].author} />
  );
}
