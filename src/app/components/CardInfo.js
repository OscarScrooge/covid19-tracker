import React from 'react';
import './styles/CardInfo.css';

function CardInfo({title,cases,icon}) {

    return (
        <div className="card-info">
            <div className="card-info-title">
                <h5>{title}</h5>
            </div>

            <div className="card-info-cases">
                <h5>{cases}</h5>
                {icon}
            </div>

        </div>
    );
}

export default CardInfo;
