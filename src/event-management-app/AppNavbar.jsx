import React, { useEffect, useState } from "react";
import AppButton from "./AppButton";
import { Link } from "react-router-dom";
import AppSearchBar from "./AppSearchBar";
import { userRequest } from "./Request";

const AppNavbar = () => {

  const [loggedIn,setLoggedIn]= useState(false);

  useEffect(()=>{
    getUser()
  },[])

 async function getUser(){
  const UserId = localStorage.getItem('EventuserId')
  
    try {
      const {data} = await userRequest().get('/' + UserId)
      console.log(data);
     localStorage.setItem('Username',data.name)
     localStorage.setItem('Useremail',data.email)
     setLoggedIn(true)
    } catch (error) {
      console.log(error);
    }
  }

  function logOut(){
    localStorage.clear();
  }

  return (
    <div>
      <nav className="flex items-center justify-between px-5 py-4 bg-slate-200 shadow-lg">
        <Link to={'/'}><div className="text-4xl font-bold text-green-500">LOGO</div></Link>
        <div>
          <ul className="flex items-center gap-8 text-slate-500 font-medium text-[1.1rem]">
            <li>
              <Link>Events</Link>
            </li>
            <li>
              <Link>Create Event</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
            <li>
              <Link>FAQs/Help</Link>
            </li>
          </ul>
        </div>
        <div className="w-[500px]">
          <AppSearchBar />
        </div>
        <div className="flex gap-2 mr-5">
          {loggedIn? '': <div>
          <Link to={'/login'}>
            <AppButton
              style={
                "bg-red-500 text-white font-semibold px-3 py-3 rounded-lg"
              }
              text={"Login"}
            />
          </Link>
          <Link to={'/register'}>
            <AppButton
              style={
                "bg-green-500 text-white font-semibold px-3 py-3 rounded-lg"
              }
              text={"SignUp"}
            />
          </Link></div>}
          <Link>
            <AppButton
              style={
                " text-blue-500 font-semibold px-3 py-3 rounded-lg border border-blue-500 transition hover:bg-blue-500 hover:text-white hover:border-none " 
              }
              text={"Explore Events"}
            />
          </Link>
          {loggedIn?<Link>
              <AppButton
                style={'bg-red-500 text-white font-semibold px-3 py-3 rounded-lg'}
                text={'LogOut'}
                handleClick={logOut}
              />
          </Link>:''}
        </div>
      </nav>
    </div>
  );
};

export default AppNavbar;
