import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home_page';
import StudentPage from '../pages/student_page';
import AssignmentPage from '../pages/course_page';

export default function Body(){
    return(
        <div className="w-full flex-grow bg-blue-100">
            {/* <table className="table-fixed border-separate rounded items-center bg-blue-300 mr-5 py=1">
                <tr>
                    <th>
                        <button className=" border-0 font-semibold bg-violet- 700 text-violet-700">
                                    Student Name
                        </button>
                    </th>
                    <th className="">Address</th>
                    <th className="">Course</th>
                </tr>
                <tr>
                    <td>anz</td>
                    <td>chitwan</td>
                    <td>react</td>
                </tr>
            </table> */}
        <Routes>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/students" element={<StudentPage/>}/>
        <Route path="/course" element={<AssignmentPage/>}/>

        </Routes>
            
            

        </div>
       )
}