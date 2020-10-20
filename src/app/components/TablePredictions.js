import React from 'react';
import './styles/TablePredictions.css';

function TablePredictions(props) {
    return (
        <div className="table-predictions">
            <div className="predictions-title">
                <h5>14 Days Prediction</h5>
            </div>
            <table>
                <tbody>
                <tr>
                    <th scope="row">Date</th>
                    {
                        props.predictions.map(({date})=>
                          <td className="table-date">{date}</td>
                        )
                    }
                </tr>
                <tr>
                    <th scope="row">Cases</th>
                    {
                        props.predictions.map(({cases})=>
                            <td className="table-cases">{cases}</td>
                        )
                    }
                </tr>

                </tbody>
            </table>
        </div>
    );
}

export default TablePredictions;
