import React from 'react'

export const Users = (props) => {
    console.log(props.user)
    return (
    <div>
        <h1>Name = {props.name}</h1>
        <h1>Age = {props.age}</h1>
        <p>{props.name}</p>
    </div>
  )
}
