import React from 'react';

const CardHome = ({ title, description, type, template }) => (
    <div className={template + " item-data-panel template " + (type == "active" ? "item-data-panel-active" : "item-data-panel-small")}>
        <div className="h-100 position-relative">
            <div className="item-body">
                <div className="content">
                    <p className="title">
                        {title}
                    </p>
                    <p className="description">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default CardHome;