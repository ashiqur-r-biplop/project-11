import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState('')
    const {login, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // console.log(location)
    // useTitle('Login')
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        
        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                icon: 'success',
                title: 'Wow!',
                text: 'Login Successfully'
              })
              
            navigate(from, {replace: true});
        })
        .catch(error => {
            setError(error)
        })

    }
    const handleGoogle = () =>{
      setError('')
      googleSignIn()
      .then(result=>{
          const user = result.user;
          console.log(user)
          Swal.fire({
              icon: 'success',
              title: 'Wow!',
              text: 'Register Successfully'
            })
          navigate(from, {replace: true});
      })
      .catch(error=>setError(error.message))
  }
  return (
    <>
    
      <div className="hero min-h-screen bg-base-200">
<div>
  <h1 className="text-5xl font-bold mb-8 text-center text-sky-500 mt-10 md:-mt-32">Login now!</h1>
<div className="hero-content flex-col lg:gap-x-20 lg:flex-row">
  <div className="text-center lg:text-left">
    <img className="md:h-[380px] md:w-[500px]" src='https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=626&ext=jpg&uid=R76180397&ga=GA1.1.110381157.1659454590&semt=ais' alt="" />
  </div>
  <div className="card flex-shrink-0 w-full max-w-sm  ">
    
  
  <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg -mt-5">Email:</span>
          </label>
          <input type="email" placeholder="email" name='email' className=" input input-bordered border-sky-500 input-info" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Password:</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered border-sky-500 input-info" />
          
        </div>
        <p className="text-red-600 mt-2">{error.message}</p>
        <div className="form-control mt-4">
          <input className="btn btn-block bg-sky-500 hover:bg-sky-700 text-white" type="submit" value='Login' name="" id="" />
        </div>
        </form>
        <p>New in this site!!! Please <Link to="/register" className="btn btn-active btn-link pl-0 lowercase text-lg ">Register...</Link></p>
        <p className='font-bold mb-2'>Else register with_</p>
         <button onClick={handleGoogle} className=""><img className="w-full h-14 hover:w-[98%] hover:mx-auto" src="https://i.ibb.co/nrqk8p1/google-Button.png" alt="" /></button>
  </div>
</div>
</div>
</div>
    </>
  )
};

export default Login;
