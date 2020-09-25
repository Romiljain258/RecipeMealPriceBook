import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HighMarginR = () => {
    let [arr, setArr] = useState([]);
    useEffect(() => {
        axios.get('https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=top')
            .then((json) => {
                setArr(json.data.results);
            })
            .catch(err => err);
    }, []);

    return (
        <div className="f">
            <div class="card border-primary mb-3">
                <div class="card-header col-text2">High Margin Recipe</div>
                {arr.map((val, i) => (<div key={i} className="parent">
                    <p>{val.name}</p>
                    {val.margin > 40 ?
                        <h6 className="text2">{val.margin}</h6>
                        :
                        <h6 className="text1">{val.margin}</h6>}
                </div>
                ))}
            </div>
        </div>
    );
}
export default HighMarginR;