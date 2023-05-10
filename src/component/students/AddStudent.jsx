import axios from 'axios';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const AddStudent = () => {
  
  const addStudent = async () =>{

    var student ={
        "name":"Aryan",
        "email":"ar@gmail.com",
        "age":25,
    }

    const res = await axios.post("https://node5.onrender.com/user/user",student)
    if (res.status === 201) {
       alert("Data Posted Successfully");
      toast.success("Added Successfully!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(res.data);
    }
  };


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
        <button onClick={addStudent}>Add Student</button>
    </div>
  );
};
