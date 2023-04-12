import React from 'react'

export const Users = (props) => {
    // console.log(props.user)
    return (
    <div>
        <h1>Name = {props.userData.name}</h1>
        <h1>Age = {props.userData.age}</h1>
      <button onClick={props.testFunc}>Click Me</button>
    </div>
  )
}
