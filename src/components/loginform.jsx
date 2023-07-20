import React, { useEffect, useState } from 'react'

const LoginForm = () => {
    const data = {name:"",email:"",password:""}

    const [inputData,SetInputData] = useState(data);
    const [flag,setFlag]= useState(false)

    useEffect(()=>{
        console.log("Registered");
    },[flag])

    const handleData = (e)=>{
        SetInputData({...inputData , [e.target.name]:e.target.value})

        console.log(inputData);
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All Fields Are Mandatory")
        }
        else{
            setFlag(true)
        }
    }

  return (
    <>
    <pre className='text-center bg-red-500 text-white'>{(flag)?<h2>Hello {inputData.name}, you've Registered Successfully</h2>:""}</pre>
    <div className="w-screen h-screen bg-emerald-500  flex justify-center items-center">
      <div className="w-[32rem] bg-white rounded-lg ">
        <form className="flex justify-center items-center flex-col gap-2" onSubmit={handleSubmit}>
          <div className=" text-blue-800 text-2xl font-bold px-2 p-2">
            <h2>Register Form</h2>
          </div>
          <div>
            <label htmlFor="Name" className="flex">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={inputData.name}
              onChange={handleData}
              className="border-2 border-blue-200 rounded-lg outline-none"
            />
          </div>
          <div>
            <label htmlFor="Email" className="flex">
              Email
            </label>
            <input
              type="Email"
              placeholder="Enter Your Email"
              name="email"
              value={inputData.email}
              onChange={handleData}
              className="border-2 border-blue-200 rounded-lg outline-none"
            />
          </div>
          <div>
            <label htmlFor="Password" className="flex">
              Password
            </label>
            <input
              type="Password"
              placeholder="Enter Your Password"
              name="password"
              value={inputData.password}
              onChange={handleData}
              className="border-2 border-blue-200 rounded-lg outline-none"
            />
          </div>
          <div>
            <button className="bg-emerald-500 text-white p-2 px-2 m-2 rounded-md" type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default LoginForm;

