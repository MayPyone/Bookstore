import './styles/form.css';

export default function Form() {
  return (
    <form>
      <span>Add new book</span>
      <div>
        <input placeholder="book title" />
        <input placeholder="author" />
        <button type="button">ADD BOOK</button>
      </div>
    </form>
  );
}
