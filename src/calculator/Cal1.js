import React from 'react';
import "./cal.css"

const Cal1=({btn1,onpress})=>
{
    return(
        <form>
        <div className='butn'>
            <button onClick={onpress} className='btn1'>{btn1}</button>
        </div>
        </form>
    )
} 

export default Cal1
