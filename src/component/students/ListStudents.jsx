import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


export const ListStudents = () => {

const [users, setusers] = useState([]);

const listStudents = async () =>{

const res = await axios.get("https://node5.onrender.com/user/user ")
setusers(res.data.data)
    if(res.status == 200){
        toast.success("List Successfully Available!", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log(res.data)
    }

};

const deleteStudent = async (id) =>{

  const res = await axios.delete("https://node5.onrender.com/user/user/"+id)  
  if(res.status==204){
      toast.success("Deleted Successfully!", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
  }
}


// useEffect(() => {
//   listStudents();
// }, []);
  return (
    <div>
             <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
        <button onClick={listStudents}>List Students</button>

        <table border={3}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>EMAIL</th>
            <th>Age</th>
            <th>Action</th>
           
        
          </tr>
        </thead>
        <tbody>
        {users?.map((s)=>{
            return(
                <tr>
                <td>{s._id}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.age}</td>
              <td><button onClick={()=> deleteStudent(s._id)}>Delete</button>
              <Link to={`/updateStudent/${s._id}`} > Update</Link></td>
                
              </tr>  
            );
        })}


        </tbody>
    </table>


    </div>
  )
}
