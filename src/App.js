import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  useEffect(() => {
    axios.get('http://localhost:8080/api/books')
      .then(response => {
        console.log('Response:', response);
        setBooks(response.data);
      })
      .catch(error => console.error('Axios error:', error));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = () => {
    // Validation: Check if title and author are not empty
    if (!newBook.title || !newBook.author) {
      console.error('Title and Author cannot be empty.');
      return;
    }

    axios.post('http://localhost:8080/api/books', JSON.stringify(newBook), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setBooks([...books, response.data]);
        setNewBook({ title: '', author: '' });
      })
      .catch(error => console.error('Axios error:', error));
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
      <div>
        <h2>Add New Book</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BookList />
    </div>
  );
}

export default App;