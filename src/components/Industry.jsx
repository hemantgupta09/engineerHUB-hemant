import React from 'react'

const Industry = () => {
  return (
      <div className='container-fluid'>
        <div className='row bg-clr'>
          <div className='col-xl-10 container pt-xl-4'>
            <h1 style={{ color: "darkblue" }}>Industry Personalities</h1>
          </div>
        </div>
        <div className='row bg-clr pt-xl-3 pb-xl-5'>
          <div className='col-xl-1 container text-center'>
            <div className="card bg-light" style={{ width: "18rem", height: "18rem" }}>
              <div className="card-body">
                <img style={{ height: "10rem", width: "10rem" }} src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/IndustryPersonalities/Anjali+Priya.png" alt="noimg" />
                <h3 className="card-title">Anjali Priya</h3>
                <p className="card-text">Software Developer</p>
                <button onClick={() => { alert("clicked") }} className='btn btn-dark'>connect</button>
              </div>
            </div>
          </div>
          <div className='col-xl-1 container text-center'>
            <div className="card bg-light" style={{ width: "18rem", height: "18rem" }}>
              <div className="card-body">
                <img style={{ height: "10rem", width: "10rem" }} src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/IndustryPersonalities/Shivam+Saraf.png" alt="noimg" />
                <h3 className="card-title">Shivam Saraf</h3>
                <p className="card-text">Software Developer</p>
                <button onClick={() => { alert("clicked") }} className='btn btn-dark'>connect</button>
              </div>
            </div>
          </div>
          <div className='col-xl-1 container text-center'>
            <div className="card bg-light" style={{ width: "18rem", height: "18rem" }}>
              <div className="card-body">
                <img style={{ height: "10rem", width: "10rem" }} src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/IndustryPersonalities/Deepak+Sharma.png" alt="noimg" />
                <h3 className="card-title">Deepak Sharma</h3>
                <p className="card-text">SDE</p>
                <button onClick={() => { alert("clicked") }} className='btn btn-dark'>connect</button>
              </div>
            </div>
          </div>
          <div className="col-xl-1 container"></div>
        </div>
        <div className='row bg-clr pt-xl-3 pb-xl-5'>
          <div className='col-xl-1 container text-center'>
            <div className="card bg-light" style={{ width: "18rem", height: "18rem" }}>
              <div className="card-body">
                <img style={{ height: "10rem", width: "10rem" }} src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/IndustryPersonalities/shambhavi.jpg" alt="noimg" />
                <h3 className="card-title">Shambhavi Gupta</h3>
                <p className="card-text">Youngest Data Science Educator</p>
                <button onClick={() => { alert("clicked") }} className='btn btn-dark'>connect</button>
              </div>
            </div>
          </div>
          <div className='col-xl-1 container text-center'>
            <div className="card bg-light" style={{ width: "18rem", height: "18rem" }}>
              <div className="card-body">
                <img style={{ height: "10rem", width: "10rem" }} src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/IndustryPersonalities/ragha.jpg" alt="noimg" />
                <h3 className="card-title">Raghawendra Singh</h3>
                <p className="card-text">SDE2</p>
                <button onClick={() => { alert("clicked") }} className='btn btn-dark'>connect</button>
              </div>
            </div>
          </div>
          <div className='col-xl-1 container text-center'>
            <div className="card bg-light" style={{ width: "18rem", height: "18rem" }}>
              <div className="card-body">
                <img style={{ height: "10rem", width: "10rem" }} src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/IndustryPersonalities/muskan.jpg" alt="noimg" />
                <h3 className="card-title">Muskan Kalra</h3>
                <p className="card-text">SDE2</p>
                <button onClick={() => { alert("clicked") }} className='btn btn-dark'>connect</button>
              </div>
            </div>
          </div>
          <div className="col-xl-1 container"></div>
        </div>
      </div>
  )
}

export default Industry