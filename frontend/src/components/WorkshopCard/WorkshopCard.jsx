import React from 'react';
import Button from '../Button/Button';
import './WorkshopCard.css';

/**
 * WorkshopCard displays a single workshop's summary.
 *
 * Props:
 *  - workshop: { id, title, description, date, duration, seats, category, isFull }
 *  - onBook: function(workshop)
 */
const WorkshopCard = ({ workshop, onBook }) => {
  const {
    id,
    title,
    description,
    date,
    duration,
    seats,
    category,
    isFull,
  } = workshop;

  return (
    <article className="workshop-card" id={`workshop-card-${id}`}>
      <div className="workshop-card__header">
        <span className="workshop-card__category">{category}</span>
        {isFull && <span className="workshop-card__badge">Full</span>}
      </div>

      <h2 className="workshop-card__title">{title}</h2>
      <p className="workshop-card__description">{description}</p>

      <ul className="workshop-card__meta" aria-label="Workshop details">
        <li className="workshop-card__meta-item">
          <span className="meta-icon" aria-hidden="true">📅</span>
          <span>{date}</span>
        </li>
        <li className="workshop-card__meta-item">
          <span className="meta-icon" aria-hidden="true">⏱️</span>
          <span>{duration}</span>
        </li>
        <li className="workshop-card__meta-item">
          <span className="meta-icon" aria-hidden="true">🪑</span>
          <span>{isFull ? 'No seats left' : `${seats} seats left`}</span>
        </li>
      </ul>

      <div className="workshop-card__footer">
        <Button
          id={`book-btn-${id}`}
          variant={isFull ? 'secondary' : 'primary'}
          size="md"
          fullWidth
          disabled={isFull}
          onClick={() => onBook(workshop)}
        >
          {isFull ? 'Join Waitlist' : 'Book Now'}
        </Button>
      </div>
    </article>
  );
};

export default WorkshopCard;
