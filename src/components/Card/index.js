import React from 'react';

const Card = ({ title, content, chart, bgColor="white", color = "black" }) => (
    <div className="card card-trackovid">
        <div>
            <div className="card-body" style={{ backgroundColor: bgColor, color: color }}>
                {chart && chart}
                {content && <h5>{content}</h5>}
                {title && <p>{title}</p>}
            </div>
        </div>
    </div>
);

export default Card;