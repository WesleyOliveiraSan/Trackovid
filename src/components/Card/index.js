import React from 'react';

const Card = ({ title, content }) => (
    <div className="card card-trackovid">
        <div>
            <div className="card-body">
                <h5>{content}</h5>
                <p>{title}</p>
            </div>
        </div>
    </div>
);

export default Card;