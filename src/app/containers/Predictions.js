import React from 'react';
import {connect} from 'react-redux';
import TablePredictions from "../components/TablePredictions";


function Predictions(props) {
    const {predictions} = props;
    {
        return predictions.length===0
            ?
            <div/>
            :
            <TablePredictions predictions={predictions}/>
    }

}

const mapStatyeProps=(state)=>{
    return{
        predictions:state.predictions,
    }
};

export default connect(mapStatyeProps)(Predictions);
