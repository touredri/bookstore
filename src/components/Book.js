/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getBooks, removeBook } from '../redux/books/bookSlice';
import './book.css';

export default function Book({
  category, title, author, id,
}) {
  const dispatch = useDispatch();
  const percentage = Math.floor(Math.random() * 51) + 30;
  return (
    <div className="bookCard">
      <div className="book">
        <div className="book-info">
          <p className="book-category">{category}</p>
          <h2 className="book-title">{title}</h2>
          <p className="book-author">{author}</p>
        </div>

        <div className="interaction">
          <button type="button" className="Comments">Comments</button>
          <button
            type="button"
            className="Comments"
            onClick={() => {
              dispatch(removeBook(id));
              dispatch(getBooks());
            }}
          >
            Remove
          </button>
          <button type="button" className="Comments">Edit</button>
        </div>
      </div>
      <div className="middle">
        <div className="progress">
          <CircularProgressbar
            className="progres"
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={5} // Width of the progress bar stroke
            styles={buildStyles({
              rotation: 0.25, // Rotate the progress bar to start from the top (0.25 = 90 degrees)
              strokeLinecap: 'butt', // Define the shape of the progress bar ends
              textSize: '16px', // Size of the percentage text
              pathTransitionDuration: 0.5, // Animation duration for the progress path
              pathColor: `rgba(62, 152, 199, ${percentage / 100})`, // Color of the progress bar
              textColor: '#f88', // Color of the percentage text
              trailColor: '#d6d6d6', // Color of the progress bar trail
              backgroundColor: '#3e98c7', // Background color of the progress bar
            })}
          />
        </div>
        <div>
          <p style={{
            color: '#121212', fontSize: '16px',
          }}
          >
            {`${percentage}%`}
          </p>
          <p className="Completed">Complete</p>
        </div>
      </div>
      <div className="chapter">
        <p className="Current-Chapter">Current Chapter</p>
        <p className="Current-Lesson">Chapter 17</p>
        <button type="button" className="Update-progress">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
