import { getValue } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react'
import { useForm } from "react-hook-form";


export const Register = () => {
    const {register,handleSubmit} = useForm();
    const [userData, setuserData] = useState({})
   
    const submit = (data) => {
        setuserData(data);
      };

    var countries = ["INDIA","USA"]
      var INDIA = ["Guajrat","Maharastra"]
      var USA = ["California","Washington"]

    return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>First Name</label>
          <input type="text" {...register("fname")}></input>
        </div>
        
        <div>
            <label>Country</label>
            <select {...register("country")}>
                {
                    countries.map((c)=> {
                        return <option value={c}>{c}</option>
                    })
                }
            </select>
         </div>
        
        <div>
          <label>State</label>
          
          {/* <select {...register("state")}>
             {
                singleValue.map((s)=> {
                        return <option value={s}>{s}</option>
                    })
                }

            </select> */}
          
        </div>
     
        <button onClick={() => {var singleValue = getValue("country"); }}>Submit</button>
      </form>

    </div>
  )
};
