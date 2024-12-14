// Assuming the books.json file is in the 'public' folder
import booksData from '../public/books.json'; // Import JSON properly
import Book from './Book';

const BookList = () => {
  return (
    <div className="book-container">
      {booksData.map((ele, index) => (
        <div key={index}>
          <Book img={ele.img} book={ele.book} author={ele.author} price={ele.price} />
        </div>
      ))}
    </div>
  );
};

export default BookList;

