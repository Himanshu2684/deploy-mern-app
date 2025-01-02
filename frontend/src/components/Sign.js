import React, { useState } from "react"
import { Link , useNavigate} from "react-router-dom"

export default function Sign() {

    const [formData, setFormData] = useState({
        email:'',
        password: ''
    })
    // console.log("sign page")
    const navigate = useNavigate();

    const formHandler = (e) => {
        const { name, value } = e.target; 
        setFormData((prev) => ({
            ...prev, 
            [name]: value 
        }));
        console.log('form data', formData)
    };

    async function submitHandler(e) {    
        e.preventDefault();  // Prevent the default form submission behavior
    
        console.log("FORM DATA:", formData);  // Log the form data
    
        try {
            // Sending POST request to the server
            const response = await fetch('https://e-commerce-5avk.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });
    
            const data = await response.json();  // Await the response from the server
            console.log(data);  // Log the response from the server
    
            if (response.ok) {
                // If the login is successful, you can handle success here
                console.log("User logged in successfully!");
    
                // Save the token or user details to localStorage or a global state
                localStorage.setItem('jwtToken', data.jwtToken);
                navigate('/dashboard')
    
                // You can navigate the user to a protected route/dashboard here
                // Example: history.push('/dashboard');
            } else {
                // Handle any errors returned by the backend
                console.error("Failed to login:", data.message);
            }
    
        } catch (error) {
            // Catching and logging any error that occurs during the request
            console.error('Error:', error);
        }
    }
    
    

    // useEffect(()=>{
    //     submitHandler()
    // },[])
    return (
      <>
       
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={submitHandler} method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    onChange={formHandler}
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <p className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    onChange={formHandler}
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Not a member?{' '}
              <Link to={'/register'}>
                <span  className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Register here
                </span>
                </Link>
            </p>
          </div>
        </div>
      </>
    )
  }