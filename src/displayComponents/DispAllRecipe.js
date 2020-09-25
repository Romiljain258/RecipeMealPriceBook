import React from 'react';
import {checkbox } from '../components/Main';

const DispAllRecipe = (props) => {
    return (
        <>
            <div class="table-responsive ">
                <table class="table table-striped">
                    <thead>
                        <tr className="col-text1">
                            <input className="checkbox" type="checkbox" />
                            <th scope="col">NAME</th>
                            <th scope="col">LAST UPDATED</th>
                            <th scope="col">CORG</th>
                            <th scope="col">COST PRICE</th>
                            <th scope="col">SALE PRICE</th>
                            <th scope="col">GROSS MARGIN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.arr.length <= 0 ? <tr>
                            <input className="checkbox" type="checkbox" />
                            <td className="text">No data</td>
                            <td>No data</td>
                            <td>No data</td>
                            <td>No data</td>
                            <td>No data</td>
                            <td>No data</td>
                        </tr> :
                            props.arr.map((val, id) => (<>
                                <tr className="col-text2">
                                    <input className="checkbox" type="checkbox" />
                                    <td className="text">{val.name}</td>
                                    <td>{parseInt(val.last_updated.date)}</td>
                                    <td>{val.cogs}%</td>
                                    <td>{parseInt(val.cost_price)}</td>
                                    <td>{parseInt(val.sale_price)}</td>
                                    <td>{parseInt(val.gross_margin)}%</td>
                                </tr>
                            </>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default DispAllRecipe;