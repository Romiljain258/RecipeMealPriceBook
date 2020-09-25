import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopFluctuatingR = () => {
    let [arr, setArr] = useState([]);
    useEffect(() => {
        axios.get('https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/fluctuation-group/?order=top')
            .then((json) => {
                setArr(json.data.results);
            })
            .catch(err => err);
    }, []);

    return (           
        <div className="f">
        <div class="card border-primary mb-3">
            <div class="card-header col-text2">Top Fluctuating Recipe</div>
            {arr.map((val, i) => (<div key={i} className="parent">
                <p>{val.name}</p>
                {val.fluctuation>40?
                <h6 className="text2">{val.fluctuation}</h6>
                :
                <h6 className="text1">{val.fluctuation}</h6>}
            </div>
            ))}
        </div>
    </div>
    );
}
export default TopFluctuatingR;