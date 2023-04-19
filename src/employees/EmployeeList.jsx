import React from 'react'

export const EmployeeList = (props) => {
  console.log(props.emp)
  return (
    <div>
      <h1>EMPLOYEE LIST</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">FirstName</th>
            <th scope="col">Age</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          
          {props.emp?.map((e) => {
            return(
            <tr>
              <th scope="row">{e.id}</th>
              <td>{e.firstName}</td>
              <td>{e.age}</td>
              <td><button onClick={() => { props.deleteEmployee(e.id) }} className='btn btn-danger'>DELETE</button></td>
            </tr>
            )


          })}
        </tbody>
      </table>
    </div>
  );
};

