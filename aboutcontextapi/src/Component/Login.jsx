import React, { useContext,useState } from 'react'
import UserContext from '../Context/UserContext';

function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username,password});
    }
    return (
        <>
        {/* <h2>Login</h2> */}

        <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2  font-medium text-3xl text-white dark:text-white">username</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required
            value={username} 
            onChange={(e)=> setUsername(e.target.value)}
            />
        </div>

        <div>
            <label htmlFor="last_name" className="block mb-2  font-medium 
            text-3xl text-white
            dark:text-white">Last name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
        </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleSubmit}>
  Submit
</button>

            {/* <input type="text" placeholder="username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
            <input type="text" placeholder="password" value={password}  onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button> */}
        </div>
        </>
    )
}

export default Login
