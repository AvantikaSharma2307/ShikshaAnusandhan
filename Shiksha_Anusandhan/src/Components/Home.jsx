import React from 'react'
import { useLocation } from 'react-router-dom';
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
// import image from "";
import Piechart from './Piechart';
function Home({userData}) {
  // const location = useLocation();
  // const userData = location.state && location.state.userData;
    const data = [
        {
          name: 'ayush',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'aaditya',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'ayushi',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'ram',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'shyam',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'reems',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'shams',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>
        <div className='main-cards'>
          {/* <img src={image}></img> */}
          <h1 style={{fontSize:"60px"}}>AYUSHI</h1>
          
          <img src="https://freesvg.org/img/Female-Avatar-4.png" alt="user/ayushi" style={{height:"300px",border:"2px",borderEndEndRadius:"10px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",borderEndStartRadius:"10px"}}/>
        </div>
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>10th</h3>
                    {/* <BsFillArchiveFill className='card_icon'/> */}
                </div>
                <h1>80%</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>12th</h3>
                    {/* <BsFillGrid3X3GapFill className='card_icon'/> */}
                </div>
                <h1>85%</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Work Experience</h3>
                    {/* <BsPeopleFill className='card_icon'/> */}
                </div>
                <h1>NO</h1>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>Degree</h3>
                    <h2>BTech</h2>
                    {/* <BsFillBellFill className='card_icon'/> */}
                </div>
                <h1>8.8cgpa</h1>
            </div>
            <div style={{backgroundColor:"purple",border:"2px",padding:"14px",borderEndEndRadius:"10px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",borderEndStartRadius:"10px"}}>
                <div className='card-inner'>
                    <h3>Uniform_Marks</h3>
                    {/* <BsPeopleFill className='card_icon'/> */}
                </div>
                <h1>0.8</h1><h4>out of 1 scaling system</h4>
            </div>
        </div> 
        <h1>Skills</h1>
        <div className='main-cards' id="skills">
        <div className='card'>
                <div className='card-inner'>
                    <h3>WEB3.0</h3>
                    
                    {/* <BsFillBellFill className='card_icon'/> */}
                </div>
                <h1>Efficiency:4.5</h1>
            </div>
           
            <div style={{backgroundColor:"purple",border:"2px",padding:"14px",borderEndEndRadius:"10px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",borderEndStartRadius:"10px"}}>
                <div className='card-inner'>
                    <h3>AI/ML</h3>
                    {/* <BsPeopleFill className='card_icon'/> */}
                </div>
                <h1>Efficiency:3.5</h1>
            </div>
        </div>
        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
            
        </div>
        <div>{Piechart}</div>
     



        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
                {/* <div className="w-1/3">
                    {/* Display user's photo */}
                    {/* {userData && (
                        <img src={userData.photoUrl} alt="User" className="w-full h-auto rounded-full" />
                    )} */}
                {/* </div> */} 
                <div className="w-2/3 ml-4">
                    {/* Display user's information */}
                    {userData && (
                        <div>
                            <h2 className="text-2xl font-bold">{userData.firstName} {userData.lastName}</h2>
                            <p className="text-gray-600">{userData.email}</p>
                            {/* Additional user information */}
                            {/* Example: 10th Marks */}
                            {userData.tenth_marks && (
                                <p className="mt-2">10th Marks: {userData.tenth_marks}</p>
                            )}
                            {/* Example: Board of Education */}
                            {userData.board && (
                                <p className="mt-2">Board of Education: {userData.board}</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
  
</main>

)
}
export default Home