import React from "react"
import { Link } from 'react-router-dom'
export default function Header(){
    return(
        <div>
            
            <nav className="w-full">
             <div className="w-full px-5 py-5 border border-b rounded-md ">
                <ul className="w-full flex justify-between items-center">
                    <div className="left-box flex items-center gap-5 px-2">
                    <Link to="/homepage">Home</Link>
                    <Link to="/students">Students</Link>                    
                    <Link to="/course">Courses</Link>                    
                    </div>
                    {/* <div className="right-box flex items-center gap-4 px-2">
                        <a href="/signup" className="bg-purple-800 px-4 py-0.5 rounded-lg">Sign Up</a>
                        <a href="/signin"className="bg-blue-800 px-4 py-0.5 rounded-lg">Sign In</a>
                    </div> */}
                </ul>
                </div>   
                
                
            </nav>

            
        </div>
        
    )
}