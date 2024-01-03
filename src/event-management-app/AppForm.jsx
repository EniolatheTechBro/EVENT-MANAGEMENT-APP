import React, { useState } from "react";
import CategoryTagInput from "./CategoryTagInput";
import Input from "./Input";
import { publicRequest, userRequest } from "./Request";
import { useNavigate } from "react-router-dom";

const AppForm = () => {

  const navigate = useNavigate()


  const [eventDetails,setEventDetails] = useState('')

      function handleChange(e){
        const name = e.target.name
        const val = e.target.value
        setEventDetails({...eventDetails,[name]:val})
      }


     async function handleSubmit(e){
        e.preventDefault()
        console.log(eventDetails);

        try {
          const {data} = await userRequest().post('/event/create',eventDetails)
          console.log(data);
          navigate('/events')
        } catch (error) {
          console.log(error);
        }
      }


  return (
    <div className="mt-[100px]">
        <div className="text-center text-6xl font-bold border-b w-[50%] mx-auto p-2 mb-7">UPLOAD EVENT</div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Event Title
          </label>
          <Input
            name={"eventTitle"}
            placeholder={"Event Title"}
            text={"Event Description"}
            id={"eventTitle"}
            type = {"text"}
            handleChange ={handleChange}
          />
         
        </div>
        <div className="mb-5">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Event Description
          </label>
          <Input
            name={"eventDescription"}
            placeholder={"Event Description"}
            id={"eventDescription"}
            type = {"text"}
            handleChange ={handleChange}
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Category/Tags
            </label>
            <Input name={'Category'} placeholder={'Category'} handleChange ={handleChange}/>
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            From:
          </label>
          <input type="date" name="StartDate" id="" onChange={handleChange}></input>
        </div>
        <div>
          <label className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">
            To:
          </label>
          <input type="date" name="EndDate" id="" onChange={handleChange}></input>
        </div>
        <div className="mb-5">
          <label
            for="venue"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
           Venue
          </label>
          <Input
            name={"Venue"}
            placeholder={"Venue"}
            id={"venue"}
            type = {"text"}
            handleChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

    
    </div>
  );
};

export default AppForm;
