import React from 'react';
import  Cal  from './calculator/Cal'; 
import Cal1  from './calculator/Cal1'; 
export const App=()=>
{
  const cards=[
    {
      p1:"Enter Name"
    },
    {
      p1:"Enter Email"
    },
    {
      p1:"Enter phone"
    },
    {
      p1:"Enter Address"
    }
  ]
  
  cards.map((item)=>
  {
    return(
      <Cal
      p1={item?.p1}/>
    )
  }
  )
  
  return(
    <>
    <div className='c1'>
      Registration Form
    </div>
<div className='main'>
      <Cal p1="Enter Name:-" />
      <Cal p1="Enter Email:-" />
      <Cal p1="Enter phone:-" /> 
      <Cal p1="Enter Address:-" />
      <div>
      <Cal1 onpress={()=>{alert("Register successfully")}} btn1="Register" />
      </div>
      </div>
      </>     
      
  )
}
