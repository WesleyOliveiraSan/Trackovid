import React from 'react';

const Card = ({ title, content, color = "white" }) => (
    <div className="card card-trackovid">
        <div>
            <div className="card-body" style={{backgroundColor: color,color: color === 'white' ? '#304153' : 'white'}}>
                <h5>{content}</h5>
                <p>{title}</p>
            </div>
        </div>
    </div>
);

export default Card;