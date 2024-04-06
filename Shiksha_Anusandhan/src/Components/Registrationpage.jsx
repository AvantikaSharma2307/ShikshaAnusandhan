import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';
import { NavLink } from 'react-router-dom';

const RegistrationForm = () => {
    
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        tenth_marks:"",
    });
    let name,value;
    const handleInputs=(e)=>{
       console.log(e);
       name=e.target.name;
       value=e.target.value; 
       setUser({...user,[name]:value});


    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', formData);
            console.log(response.data);
            alert('Registration successful!');
        } catch (error) {
            console.error('Registration failed:', error.response.data.error);
            alert('Registration failed! Please try again.');
        }
    };

    return (
        <div className="container">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={user.firstName} onChange={handleInputs} placeholder="FirstName" required />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={user.lastName} onChange={handleInputs}placeholder="lastname" required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={user.email} onChange={handleInputs} placeholder="email" required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={user.password} onChange={handleInputs} placeholder="password" required />
                </div><div>
                    <label htmlFor="tenth_marks">10th Marks</label>
                    <input type="text" id="10th" name="tenth_marks" value={user.tenth_marks} onChange={handleInputs} placeholder="10th" required />
                </div>
                <div>
                    <label htmlFor="board">Board of Education</label>
                    <input type="text" id="board" name="board" value={user.board} onChange={handleInputs} placeholder="Board" required />
                </div>
                

                <NavLink to="/dasboard"><button type="submit">Register</button></NavLink><br></br>
                <hr></hr>
                <p>Already have an account?</p>
                <NavLink to="/login"><button type="submit">Login</button></NavLink>

            </form>
        </div>
    );
};

export default RegistrationForm;
