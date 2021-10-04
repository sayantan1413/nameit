import React from 'react';
import './NameCard.css';

const nameCheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain=%27%3B';

const NameCard = ({eachSuggestedName}) => {
    return (
        <a 
            className="card-link" href={`${nameCheapUrl}${eachSuggestedName}`}
            target="_blank"
            rel="noreferrer"
        >
            <div className="result-name-card">
                 <p className="result-name">{eachSuggestedName}</p>
            </div>
        </a>
    )
}

export default NameCard;