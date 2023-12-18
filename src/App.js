import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home_page';
import StudentPage from './pages/student_page';
import CoursePage from './pages/course_page';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
    <div className="app_container flex flex-col min-h-screen">
      <Header />
      
      <Body />
      <Footer />

      </div>

      </Router>
  );
}

export default App;
