import React from 'react'

function CardHome({ img, title = "", link = "", text, desc = "" }) {
    return (
        <div className="card border-0">
            <div className="card-body p-0 m-2">
                {link === "" ?
                <img className="card-img-top rounded-circle img-fluid mx-auto d-block" src={img} alt={title ? title:text}/>
                :
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top rounded-circle img-fluid mx-auto d-block" src={img} alt={title ? title:text}/>
                </a>
                }
                <p className="card-title text-center font-weight-bold">{title}</p>
                <p className="card-text text-center font-weight-bold mt-2">{text}</p>
                <p className="card-text text-center mt-n3" style={{fontSize:"12px"}}>{desc}</p>
            </div>
        </div>
    )
}

export default CardHome
