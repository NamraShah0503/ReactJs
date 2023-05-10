import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

export const UpdateStudent = () => {
  
const id = useParams().id

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async ()=>{
        
        const res = await axios.get("https://node5.onrender.com/user/user/"+id)
        console.log(res.data.data)
        return(
            {
                name:res.data.data.name,
                email:res.data.data.email,
                age:res.data.data.age,
            }
        )
    }
  });
  
  const updateStudent = async(data) =>{

    var user =
    {
        name:data.name,
        email:data.email,
        age:data.age
    }
    const res = await axios.put("https://node5.onrender.com/user/user/"+id,user)
    
  }


    return (
        <div>
        EditUser
        <form onSubmit={handleSubmit(updateStudent)}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" {...register("name")}></input>
          </div>
          <div>
            <label htmlFor="name">age</label>
            <input type="text" {...register("age")}></input>
          </div>
  
          <div>
            <label htmlFor="name">email</label>
            <input type="text" {...register("email")}></input>
          </div>
         
          <div>
            <input type="submit" value="Update User" />
          </div>
        </form>
      </div>
  )
}
