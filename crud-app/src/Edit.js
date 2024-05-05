import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

function Edit() {

    const [my_id , setid] = useState(0);
    const [my_name , setname] = useState('');
    const [my_age , setage] = useState('');
    const [my_email , setemail] = useState('');

    useEffect(() => {
        setid(localStorage.getItem('id'));
        setname(localStorage.getItem('name'));
        setage(localStorage.getItem('age'));
        setemail(localStorage.getItem('email'));
    },[])

    const navigate = useNavigate();

    // Function for Handling Update(Event of Update button)
    const HandleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://657d818a853beeefdb9ad381.mockapi.io/crud/${my_id}`,{
            name : my_name,
            age : my_age,
            email : my_email
        }).then(() => {
            navigate('/');
        }).catch((err) => {
            console.log(err);
        })
    }

  return (
    <div>
      <>
      
      <div className="row">
        <div className="col-md-4 mx-auto">
        <div className="bg-primary text-white text-center p-4">
            <h1>Update Data - CRUD App</h1>
        </div>
          <form border p-3 onSubmit={HandleUpdate}> 
            <div className="form-group">
              <label for="exampleInputEmail1">Name:</label>
              <input type="text" className="form-control" value={my_name} onChange={(e) => setname(e.target.value)} placeholder="Enter name" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Age</label>
              <input type="number" className="form-control" value={my_age} onChange={(e) => setage(e.target.value)} placeholder="Enter Age" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Email</label>
              <input type="email" className="form-control" value={my_email} onChange={(e) => setemail(e.target.value)} placeholder="Email"/>
            </div>
            
            <br />
            {/* <button type="submit" class="btn btn-primary"> Submit </button> */}
            <div className="d-grid">
                <input type="submit" value='Update' className="btn btn-primary"/>
            </div>
          </form>
          <div className="mt-3">
            <Link to='/'>
                <button className="btn btn-primary">Read Data</button>
            </Link>
        </div>
        </div>
      </div>
    </>
    </div>
  )
}

export default Edit
