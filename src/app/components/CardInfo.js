import React from 'react';
import './styles/CardInfo.css';

function CardInfo({title,cases,icon,icon2}) {

    return (
        <div className="card-info">
            <div className="card-info-title">
                <h5>{title}</h5>
            </div>

            <div className="card-info-cases">
                <h5>{cases}</h5>
                <div className="card-info-icons">
                    {icon}
                    {icon2}
                </div>
            </div>

        </div>
    );
}

export default CardInfo;
