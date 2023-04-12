import React from 'react'
import { Users } from './Users'

export const Content = (props) => {
const user = {
    name:'Namra',
    age:22,
}

const test = () =>{
    alert("hello user")
}
    return (
    <div>
        <h1>{props.payload}</h1>
    <Users userData = {user} testFunc={test}/>
    </div>
  )
}
