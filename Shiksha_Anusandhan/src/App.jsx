import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './Components/Registrationpage'
import Dashboard from './Components/Dashboard';
import LoginForm from './Components/Login';
import FileUploadButton from './Components/Fileupload';
import Userprofile from './Components/Userprofile';
function App() {
  const [userData, setUserData] = useState(null);

    const handleRegistration = (data) => {
        setUserData(data);
    };

   

  return (
    <Router>
      <Routes>
      <Route path="/" element={<RegistrationForm  onRegister={handleRegistration}/>}/>
      <Route path="/dasboard" element={<Dashboard userData={userData} />} />
      <Route path="/login" element={<LoginForm/>}/>
      <Route path='/resume'element={<FileUploadButton/>}/>
      <Route path='/profile'element={<Userprofile/>}/>
    
    </Routes>
    </Router>
  )
}

export default App