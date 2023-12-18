import React, { useEffect, useState } from "react";
import { ToastContainer, toast} from 'react-toastify'
import {API_URL} from '../config';
import axios from 'axios';


const StudentPage = () => {
  
    const [students, setStudents] = useState([]);
    var [newStudent, setNewStudent] = useState({
      first_name:'',
      last_name: '',
      email: '',
      password: '',
      phone: ''
    })
    
    useEffect(() => {
      console.log("initialized.")

      
        const fetchData = async () => {
          try {
            const response = await axios.get(`${API_URL}student/`);
            // const response = await axios.get(`http://127.0.0.1:8000/api/student/`);

            console.log(response.data.data)
            setStudents(response.data.data);
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        
      fetchData();   
  
    }, [`${API_URL}`]);
    
    // const[students, setStudents]=useState(0);
    const handleAddStudent = (e) => {
      e.preventDefault()
      
  
   
    const AddStudent = async () =>{ 
      try{

        var headers = {
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6InJhbSJ9.ZlRJryXSibFMHwtWEPLCqXNjS3NGD415Gub0lQPt474',
          'Content-Type': 'application/json'
        }

        var payload = newStudent;
        var response = await axios.post(
            `${API_URL}student/`,
            payload,
            {headers: headers}
            )

            console.log(response)

            if(response.data.data == null){
              var error = "";
              let i = 0;
              for(i=0;i<response.data.messages.length;i++){
                error += response.data.messages[i] + '. ';
              }
              toast.success(error, {
                position: toast.POSITION.TOP_RIGHT
              });
            }
            
            else
            {
              toast.success("Student Added !", {
                position: toast.POSITION.TOP_RIGHT
              });
              setTimeout(() => {
                window.location.reload();
              }, 700);

            }
        
        console.log(response)
        

      }catch(err){
        console.log("Got error ", err)
      }
      
    }
      AddStudent()  


    

    
      
    }
   
    

    const handleInputChange = (e) => {
      var field_name = e.target.name;
      var field_value = e.target.value;
      console.log(field_name, field_value);
      setNewStudent((prevStudent)=> ({ ...prevStudent, [field_name]:field_value}));
      console.log(newStudent)

    }
    


      return (
        <div className="container mx-auto p-8 flex">
          <ToastContainer />
          <div className="w-1/2 mr-4">

            <h1 className="text-2xl font-bold mb-4">Student Information</h1>
            <table className="min-w-full border bg-white">
              <thead>
                <tr>
                  <th className="border p-1">ID</th>
                  <th className="border p-1">First Name</th>
                  <th className="border p-1">Last Name</th>
                  <th className="border p-1">Email</th>
                  <th className="border p-1">Phone Num.</th>

                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student.id}>
                    <td className="border p-1">{student.id}</td>
                    <td className="border p-1">{student.first_name}</td>
                    <td className="border p-1">{student.last_name}</td>
                    <td className="border p-1">{student.email}</td>
                    <td className="border p-1">{student.phone}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

  

  <form onSubmit={handleAddStudent} className="w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
  <h1 className="text-2xl text-center font-bold mb-4 bg-slate-100">Add Student?</h1>

    <label className="block text-gray-700 text-sm font-bold mb-2">
      First Name:
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="first_name"
        value={newStudent.first_name}
        onChange={handleInputChange}
        required
      />
    </label>
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Last Name:
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="last_name"
        value={newStudent.last_name}
        onChange={handleInputChange}
        required
      />
    </label>
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Email:
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="email"
        name="email"
        value={newStudent.email}
        onChange={handleInputChange}
        required
      />
    </label>
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Password:
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        name="password"
        value={newStudent.password}
        onChange={handleInputChange}
        required
      />
    </label>
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Phone:
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="number"
        name="phone"
        value={newStudent.phone}
        onChange={handleInputChange}
        required
      />
    </label>
  </div>
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="submit"
  >
    Add Student
  </button>
</form>

          </div>
        );
    };
export default StudentPage;