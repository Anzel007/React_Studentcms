import React from "react";

const HomePage= () =>{
    const totalStudents=20;
    const totalCourses=3;

    return (
        <div style={pageStyle}>
          <h2>Home Page</h2>
          <p className="">Total Students: {totalStudents}</p>
          <p>Total Courses: {totalCourses}</p>
        </div>
      );
    }
    
    // Styles
    const pageStyle = {
      textAlign: 'center',
      padding: '20px',
    };
    export default HomePage;