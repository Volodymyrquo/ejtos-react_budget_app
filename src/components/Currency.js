import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);
const [target, setTarget]=useState('$ Dollar')
const handleOnClick=(e)=>{
const val = e.target.textContent.charAt(0)
dispatch({
    type: 'CHG_CURRENCY',
    payload: val,
})
    setTarget(e.target.textContent)
}

  return (

<div className="dropdown">
  <button className="btn  dropdown-toggle"  style={{backgroundColor:'lightgreen',color:"#fff"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Currency ( {target} )
  </button>
  <ul className="dropdown-menu" style={{backgroundColor:'lightgreen',border:'1px solid green'}} aria-labelledby="dropdownMenuButton1">
    <li><a onClick={handleOnClick} className="dropdown-item" href="#">$ Dollar</a></li>
    <li><a onClick={handleOnClick} className="dropdown-item" href="#">£ Pound</a></li>
    <li><a onClick={handleOnClick} className="dropdown-item" href="#">€ Euro</a></li>
    <li><a onClick={handleOnClick} className="dropdown-item" href="#">₹ Ruppee</a></li>

  </ul>
</div>

    );
};

export default Currency;