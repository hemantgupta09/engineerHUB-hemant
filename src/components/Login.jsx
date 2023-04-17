import React from 'react'

const Login = () => {
  return (
    <div className='container-fluid'>
      <div className="col-xl-5 pt-xl-4 pb-xl-3 container text-center">
        <img src="https://www.engineerhub.in/static/media/Ehub.0739abbdd210159a6623099094a85b70.svg" alt="noimg" />
      </div>
      <div className="col-xl-5 pt-xl-4 pb-xl-3 container text-center">
        <h1>Let's you in</h1>
        <p className='fs-5'>or</p>
      </div>
      <div className="col-xl-5 pb-xl-3 container text-center">
        <button onClick={()=>{alert("clicked")}} className='btn btn-danger btn-lg'>Sign In with Password</button>
      </div>
      <div className="col-xl-5 pt-xl-4 pb-xl-3 container text-center">
        <h6>Didn't have an account? Sign up</h6>
      </div>
    </div>
  )
}

export default Login