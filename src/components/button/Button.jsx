import React from 'react';
import './button.css';

function Button({showMore, setShowMore}) {
    return (
        <div className="view-more">
          <button className="info__button" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "View More"}
          </button>
        </div>
      );
}

export default Button;
