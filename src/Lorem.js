import React from 'react'

const Lorem = ({list}) => {
  return (
    <div className='lorem-div' >
      {list.map((item,index)=>{
          return(
              <p key={index} >{item}</p>
          )
      })}
    </div>
  )
}

export default Lorem
