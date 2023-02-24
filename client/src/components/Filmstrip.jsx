import React from 'react'
import FilmCard from '../components/FilmCard.jsx';

const Filmstrip = ({ data, onHandleNext, onHandlePrevious, hasNextDisabled, hasPreviousDisabled }) => {

  const handleNext = (e) => {
    e.preventDefault();
    if (hasNextDisabled) {
      return;
    }
    onHandleNext();
  }

  const handlePrevious = (e) => {
    e.preventDefault();
    if (hasPreviousDisabled) {
      return;
    }
    onHandlePrevious();
  }

  const hasPreviousButtonDisabled = hasPreviousDisabled ? 'disabled' : '';
  const hasNextButtonDisabled = hasNextDisabled ? 'disabled' : '';


  return (
    <div className="Filmstrip thumbnails">
      <div className="Filmstrip__container group">
        {data.map((item, index) => (
            <FilmCard key={index} {...item} />
          ))}
        <a 
          className={`previous ${hasPreviousButtonDisabled}`} 
          title="Previous"
          onClick={handlePrevious}
          >
            Previous
          </a>
				<a 
          className={`next ${hasNextButtonDisabled}`} 
          title="Next"
          onClick={handleNext}
          >
            Next
          </a>
      </div>
    </div>
  )
}

export default Filmstrip