import React, { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
const DispAllRecipe=React.lazy(()=>import('../displayComponents/DispAllRecipe'));

const Disabled = () => {
    let [arr,setArr]=useState([]);

    useEffect(() => {
        axios.get('https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?page=1&id_disabled=true')
            .then((json) => {
                setArr(json.data.results);
            })
            .catch(err=>err);
    },[]);

    return (
        <>
            <Suspense fallback={<h1>Loading...</h1>}>
            <DispAllRecipe  arr={arr}/>
            </Suspense>
        </>)
}
export default Disabled;