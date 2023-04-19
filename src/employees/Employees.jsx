import React ,{useState}from 'react'
import { EmployeeList } from './EmployeeList'

export const Employees = () => {
 
 var employees = [
    {
        id:1,
        firstName:"Namra",
        age:22
    },
    {
        id:2,
        firstName:"Aryan",
        age:24
    },
    {
        id:3,
        firstName:"Yash",
        age:20
    }    
]
 
const [employeeData, setemployeeData] = useState(employees)
    
function deleteEmployee(id){
    employees = employeeData.filter((e)=>{
        return e.id !== id
    })
    setemployeeData(employees)
}

return (
    <div>
        <EmployeeList emp ={employeeData} deleteEmployee={deleteEmployee}/>
    </div>
  )
}
