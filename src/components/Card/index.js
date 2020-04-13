import React from 'react';

const Card = (props) => (
    <div className="card card-trackovid">
        <div>
            <div className="card-header">
                {
                    props.title
                }
            </div>
            <div className="card-body">
                {
                    props.content
                }
            </div>
        </div>
    </div>
);

export default Card;