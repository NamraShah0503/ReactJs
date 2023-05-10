import React,{useState} from 'react'

export const AddEmployee = (props) => {
    
    const [firstName, setfirstName] = useState("")
    const [age, setage] = useState("")
  
  const submitData =(e) => {
    e.preventDefault();

    var employeeData ={
        firstName:firstName,
        age:age,
    };
    props.addEmployees(employeeData);
  };
  
    return (
    <div>
        <h1>ADD EMPLOYEE</h1>
      <form onSubmit={(e) => {submitData(e);}}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text"  onChange={(e) => {setfirstName(e.target.value)}}/>
          {firstName}
        </div>
        <div>
          <label htmlFor="age">Age</label>
            <input type='"text' onChange={(e) => {setage(e.target.value)}}/>
        </div>
       <div>
          <input type="submit" value="Add Employee"></input>
        </div>
      </form>


    </div>
  )
}
