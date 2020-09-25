import React from 'react';
import AllButton from './AllButton';
import HighMarginR from '../varietyofRecipe/HighMarginR';
import TopFluctuatingR from '../varietyofRecipe/TopFluctuatingR';
import LowMarginR from '../varietyofRecipe/LowMarginR';
import DispAllRecipe from '../displayComponents/DispAllRecipe';

const Main = () => {
 
  return (
    <div>
      <div className="margin">
        <HighMarginR />
        <LowMarginR />
        <TopFluctuatingR/>
      </div>
      <AllButton />
    </div>)
}
export default Main;
