import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {

  const [my_apidata, setapidata] = useState([]);

  const getdata = () => {
    axios.get('https://657d818a853beeefdb9ad381.mockapi.io/crud')
      .then((response) => {
        setapidata(response.data);
      }).catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getdata();
  }, [])

  // ***********************************************************************
  // Funcion for Deletion
  const HandleDelete = (id) => {
    axios.delete(`https://657d818a853beeefdb9ad381.mockapi.io/crud/${id}`)
      .then(() => {
        getdata();
      }).catch((err) => {
        console.log(err);
      })
  }

  // const setDataToStorage = (id, name, age, email) =>{
  // localStorage.setItem('id' , id);
  // localStorage.setItem('name' , name);
  // localStorage.setItem('age' , age);
  // localStorage.setItem('email' , email);
  // }


  // Function for Upgradation using local storage

  function setDataToStorage(id, name, age, email) {
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('email', email);
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="bg-primary text-white text-center p-4">
            <h1>Read Data - CRUD App</h1>
          </div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Email</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                my_apidata.map((apidata) => {
                  return (
                    <>
                      <tr>
                        <th scope="row">{apidata.id}</th>
                        <td>{apidata.name}</td>
                        <td>{apidata.age}</td>
                        <td>{apidata.email}</td>
                        <td>
                          <Link to='/edit'>
                            <button className="btn btn-primary" onClick={() => setDataToStorage(apidata.id, apidata.name, apidata.age, apidata.email)}>Edit</button>
                          </Link>
                        </td>
                        <td>
                          <button className="btn btn-danger" onClick={() => HandleDelete(apidata.id)}>Delete</button>
                        </td>
                      </tr>
                    </>
                  )
                })
              }
            </tbody>
          </table>
          <div className="">
            <Link to='/create'>
              <button className="btn btn-primary">Create New Data</button>
            </Link>
          </div>
          {/* <br /> */}
          {/* <div className=""> */}
          {/* <Link to='/create'> */}
          {/* <button className="btn btn-primary mt-2 mx-auto">Update Data</button> */}
          {/* </Link> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Read;


// When you make a request using Axios, you typically receive a response object in the form of a promise.
//  This response object contains various properties, and response.data is one of them.
//  It represents the actual data sent by the server in the response body.