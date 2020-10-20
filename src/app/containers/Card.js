import React from 'react';
import CardInfo from "../components/CardInfo";
import {connect} from "react-redux";
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import RoomIcon from '@material-ui/icons/Room';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import "../components/styles/Card.css";

function Card(props) {
    const {status,countryName} = props;
    {
       return Object.keys(status).length === 0
            ?
            <div/>
            :
            <div className="card">
                <div className="country">
                    <h4>{countryName}</h4>
                </div>
                <CardInfo
                    title={"Cases"}
                    cases={status.cases}
                    icon={<RoomIcon className="icon cases-icon"/>}
                />

                <CardInfo
                    title={"Recovered"}
                    cases={status.recovered}
                    icon={<MoodIcon className="icon recovered-icon"/>}
                    icon2 ={<SentimentSatisfiedIcon className="icon satisfied-icon"/>}
                />

                <CardInfo
                    title={"Deaths"}
                    cases={status.deaths}
                    icon={<MoodBadIcon className="icon deaths-icon"/>}
                    icon2={<SentimentVeryDissatisfiedIcon className="icon dissatisfied-icon"/>}
                />
            </div>
    }

}

const mapStateProps = (state)=>{
    return{
        status: state.status,
        countryName: state.countryName,
    }
};

export default connect(mapStateProps)(Card);
