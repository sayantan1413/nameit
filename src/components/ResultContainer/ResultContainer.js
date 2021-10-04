import React from 'react';
import './ResultContainer.css'
import NameCard from '../NameCard/NameCard'
const ResultContainer = ({suggestedNames}) => {
    const suggestedNameJsx = suggestedNames.map(eachSuggestedName => {
        return <NameCard key={eachSuggestedName} eachSuggestedName={eachSuggestedName}/>
    });

    return (
        <div className="result-container">
            {suggestedNameJsx}
        </div>
    );
};

export default ResultContainer;