import React from 'react';
import './styles/CardInfo.css';

function CardInfo({title,cases,icon,icon2}) {

    return (
        <div className="card-info">
            <div className="card-info-title">
                <h3>{title}</h3>
            </div>

            <div className="card-info-cases">
                <h3>{cases}</h3>
                <div className="card-info-icons">
                    {icon}
                    {icon2}
                </div>
            </div>

        </div>
    );
}

export default CardInfo;
