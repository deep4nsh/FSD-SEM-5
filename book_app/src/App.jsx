import React, { useEffect, useState } from 'react'
import BookCard from './components/BookCard'

const STORAGE_KEY = 'book_app_books_v1'

export default function App() {
  const [books, setBooks] = useState([])
  const [form, setForm] = useState({ title: '', author: '', image: '' })

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setBooks(JSON.parse(raw))
    } catch (e) {
      console.error('Failed to load books', e)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
  }, [books])

  function addBook(e) {
    e.preventDefault()
    if (!form.title.trim()) return
    setBooks(prev => [{ id: Date.now(), ...form }, ...prev])
    setForm({ title: '', author: '', image: '' })
  }

  function removeBook(id) {
    setBooks(prev => prev.filter(b => b.id !== id))
  }

  return (
    <div className="app">
      <header>
        <h1>Book Details</h1>
      </header>

      <main>
        <form className="book-form" onSubmit={addBook}>
          <input
            placeholder="Title"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            required
          />
          <input
            placeholder="Author"
            value={form.author}
            onChange={e => setForm({ ...form, author: e.target.value })}
          />
          <input
            placeholder="Image URL (optional)"
            value={form.image}
            onChange={e => setForm({ ...form, image: e.target.value })}
          />
          <button type="submit">Add Book</button>
        </form>

        <section className="grid">
          {books.length === 0 ? (
            <p className="empty">No books yet — add one above.</p>
          ) : (
            books.map(book => (
              <BookCard key={book.id} book={book} onRemove={() => removeBook(book.id)} />
            ))
          )}
        </section>
      </main>
    </div>
  )
}
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
