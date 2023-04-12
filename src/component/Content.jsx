import React from 'react'
import { Users } from './Users'

export const Content = (props) => {
const user = {
    name:'Namra',
    age:22,
}
    return (
    <div>
        <h1>{props.payload}</h1>
    <Users userData = {user}/>
    </div>
  )
}
