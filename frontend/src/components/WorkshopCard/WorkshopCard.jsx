import React from 'react';

const WorkshopCard = ({ workshop, onBook }) => {
  const { id, title, description, date, seats, isFull } = workshop;

  return (
    <div
      id={`workshop-card-${id}`}
      className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Title */}
      <h2 className="text-base font-semibold text-gray-800">{title}</h2>

      {/* Description */}
      <p className="mt-1 text-sm text-gray-500 leading-relaxed">{description}</p>

      {/* Meta */}
      <div className="mt-3 flex items-center gap-4 text-xs text-gray-400">
        <span>📅 {date}</span>
        <span>🪑 {isFull ? 'Full' : `${seats} seats`}</span>
      </div>

      {/* Action */}
      <div className="mt-4">
        <button
          id={`book-btn-${id}`}
          onClick={() => !isFull && onBook(workshop)}
          disabled={isFull}
          className={`w-full py-2 rounded text-sm font-medium transition-colors ${
            isFull
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isFull ? 'Fully Booked' : 'Register'}
        </button>
      </div>
    </div>
  );
};

export default React.memo(WorkshopCard);
