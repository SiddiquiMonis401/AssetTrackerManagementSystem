import React from 'react';

//styles
import './DashboardComponent.scss';
function StatisticsCard({withLogo, Title, Quanity, desc,...rest}) {
    return (
        <div className="statistics_card container">
            <div className="row">
            <div className="statistics_card_quantity_title">
            <h1>{Title}</h1>
            <h6>{Quanity}</h6>
            </div>
            <div className="statistics_card_link">{desc}</div>
            </div>
        </div>
    );
}

export default StatisticsCard;