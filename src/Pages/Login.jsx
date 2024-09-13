import React from 'react'
import { useState } from 'react'
import { Await, useLocation, useNavigate } from 'react-router'
import { loginUser } from './Api'

const Login = () => {
    const [loginFormData, setLoginFormData]  = useState({email:'', password:''})
    const location = useLocation()
    const [status, setStatus] = useState('idle')
    const [error, setError] = useState(null)

    const navigate = useNavigate();
    const from = location.state?.from|| "/host"

    // async function loginCred() {
    //     const cred = await loginUser(loginFormData);
    //     return cred;
    // }

function handleSubmit(e) {
    e.preventDefault()
    // console.log(loginCred())
    setStatus("submitting")
    loginUser(loginFormData)
    
    .then(data => {
        setError(null)
        localStorage.setItem('loggedin',true)
        navigate(from, {replace: true})
        
    })
    /* REPLACE send users to the previous page they were if the clicked back in the browser, it avoids going 
    back to the login page if the were successful.   */
    .catch(err => setError(err))
    
    .finally(()=>{setStatus('idle')})
    
}

function handleChange(e) {
    const { name, value } = e.target
    setLoginFormData(prev => ({
        ...prev,
        [name]: value
    }))
}

return (
    <div className="login-container">
        {

       location.state?.message && <h3 className='login-first'>{location.state.message}</h3>

    }
        <h1>Sign in to your account</h1>
        {

            error?.message && <h3 className='login-error'>{error.message}</h3>

}
        <form onSubmit={handleSubmit} className="login-form">
            <input
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Email address"
                value={loginFormData.email}
            />
            <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Password"
                value={loginFormData.password}
            />
            <button disabled={status === 'submitting'}>{ status ===' submitting'? 'Logging in..' : 'Log in'}</button>
        </form>
    </div>
)
}

export default Login