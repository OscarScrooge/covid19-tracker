import React from 'react';
import CardInfo from "../components/CardInfo";
import {connect} from "react-redux";
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import RoomIcon from '@material-ui/icons/Room';
import "../components/styles/Card.css";

function Card(props) {
    const {status} = props;
    {
       return Object.keys(status).length === 0
            ?
            <div/>
            :
            <div className="card">
                <div className="country">
                    <h4>{status.country}</h4>
                </div>
                <CardInfo
                    title={"Cases"}
                    cases={status.cases}
                    icon={<RoomIcon className="cases-icon"/>}
                />

                <CardInfo
                    title={"Recovered"}
                    cases={status.recovered}
                    icon={<MoodIcon className="recovered-icon"/>}
                />

                <CardInfo
                    title={"Deaths"}
                    cases={status.deaths}
                    icon={<MoodBadIcon className="deaths-icon"/>}
                />
            </div>
    }

}

const mapStateProps = (state)=>{
    return{
        status: state.status,
    }
};

export default connect(mapStateProps)(Card);
