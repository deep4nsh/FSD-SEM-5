import React from 'react'

export default function BookCard({ book, onRemove }) {
  const placeholder = 'https://via.placeholder.com/240x320?text=No+Image'
  return (
    <article className="card">
      <img src={book.image || placeholder} alt={book.title} />
      <div className="card-body">
        <h3>{book.title}</h3>
        <p className="author">{book.author || 'Unknown author'}</p>
        <div className="actions">
          <button className="remove" onClick={onRemove}>Remove</button>
        </div>
      </div>
    </article>
  )
}
