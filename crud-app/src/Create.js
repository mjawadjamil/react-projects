import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Create() {
    const [my_name , setname] = useState('');
    const [my_age , setage] = useState('');
    const [my_email , setemail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://657d818a853beeefdb9ad381.mockapi.io/crud",{
            name : my_name,
            age : my_age,
            email : my_email
        }).then(() => {
            navigate('/');
        }).catch((err) => {
          console.log(err);
      })
        // console.log(my_name);
        // console.log(my_age);
        // console.log(my_email);
    }
  return (
    <>
      
      <div className="row">
        <div className="col-md-4 mx-auto">
        <div className="bg-primary text-white text-center p-4">
            <h1>Create Data - CRUD App</h1>
        </div>
          <form border p-3 onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1">Name:</label>
              <input type="text" className="form-control" value={my_name} placeholder="Enter name" onChange={(e) => setname(e.target.value)}/>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Age</label>
              <input type="number" className="form-control" value={my_age} placeholder="Enter Age" onChange={(e) => setage(e.target.value)}/>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Email</label>
              <input type="email" className="form-control" value={my_email} placeholder="Email" onChange={(e) => setemail(e.target.value)}/>
            </div>
            
            <br />
            {/* <button type="submit" class="btn btn-primary"> Submit </button> */}
            <div className="d-grid">
                <input type="submit" value='Submit' className="btn btn-primary"/>
            </div>
          </form>
          {my_name}
          <br />
          {my_age}
          <br />
          {my_email}
          {/* Here we just create the crud application   */}
        </div>
      </div>
    </>
  );
}

export default Create;
