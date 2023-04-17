import React from 'react'

const Hiring = () => {
  return (
      <div className="container-fluid">
        <div className="row bg-clr">
          <div className="col-xl-10 container pt-xl-4">
            <h1>We are Hiring !!</h1>
          </div>
        </div>
        <div className="row bg-clr">
          <div className="col-xl-10 container pt-xl-4">
            <p className='fs-5'>engineerhub is hiring students to encourage their efforts & help them excel in the following domains.</p>
          </div>
        </div>
        <div className="row bg-clr pb-xl-4 container-fluid">
          <div className='col-xl-3'>
            <div className="card" style={{ width: "18rem", height: "27rem" }}>
              <div className="card-body">
                <img src="https://www.engineerhub.in/static/media/ehub.99144aebaead2e0600fcb59d8331eda3.svg" alt="" />
                <p>@engineerHUB</p>
                <h5 className="card-title">Hiring for Backend developer</h5>
                <p className="card-text">TechStack: Node.js</p>
                <p>Experience: 0-2 years</p>
                <p>Eligibility: Min 60% in 10th and 12th class</p>
                <h6>Location : Ghaziabad</h6>
                <h6>Last Date: 25-02-2023</h6>
                <button onClick={() => { alert("applied") }} className='btn btn-dark'>Apply</button>
              </div>
            </div>
          </div>
          <div className='col-xl-3'>
            <div className="card" style={{ width: "18rem", height: "27rem" }}>
              <div className="card-body">
                <img src="https://www.engineerhub.in/static/media/ehub.99144aebaead2e0600fcb59d8331eda3.svg" alt="" />
                <p>@engineerHUB</p>
                <h5 className="card-title">Hiring for Node.js Developer Intern</h5>
                <p className="card-text">TechStack: Express.js Node.js MongoDB</p>
                <p>Experience: 0-2 years</p>
                <p>Eligibility: Min 6 CGPA</p>
                <h6>Location : Ghaziabad</h6>
                <h6>Last Date: 02-10-2023</h6>
                <button onClick={() => { alert("applied") }} className='btn btn-dark'>Apply</button>
              </div>
            </div>
          </div>
          <div className='col-xl-3'>
            <div className="card" style={{ width: "18rem", height: "27rem" }}>
              <div className="card-body">
                <img src="https://www.engineerhub.in/static/media/ehub.99144aebaead2e0600fcb59d8331eda3.svg" alt="" />
                <p>@engineerHUB</p>
                <h5 className="card-title">Hiring for Campus Ambassador</h5>
                <p className="card-text">TechStack: Leadership, Team Work</p>
                <p>Experience: 0-1 years</p>
                <p>Eligibility: Min 5 CGPA</p>
                <h6>Location : Ghaziabad</h6>
                <h6>Last Date: 10-01-2023</h6>
                <button onClick={() => { alert("applied") }} className='btn btn-dark'>Apply</button>
              </div>
            </div>
          </div>
          <div className='col-xl-3'>
            <div className="card" style={{ width: "18rem", height: "27rem" }}>
              <div className="card-body">
                <img src="https://www.engineerhub.in/static/media/ehub.99144aebaead2e0600fcb59d8331eda3.svg" alt="" />
                <p>@engineerHUB</p>
                <h5 className="card-title">Hiring for DevOps Mentor</h5>
                <p className="card-text">TechStack: Docker, Kubernetes</p>
                <p>Experience: 0-1 years</p>
                <p>Eligibility: Min 6 CGPA</p>
                <h6>Location : Ghaziabad</h6>
                <h6>Last Date: 05-01-2023</h6>
                <button onClick={() => { alert("applied") }} className='btn btn-dark'>Apply</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-clr">
          <div className="col-xl-3 container pb-xl-4">
            <div className="card" style={{ width: "18rem", height: "27rem" }}>
              <div className="card-body">
                <img src="https://www.engineerhub.in/static/media/ehub.99144aebaead2e0600fcb59d8331eda3.svg" alt="" />
                <p>@engineerHUB</p>
                <h5 className="card-title">Node.js Developer Intern</h5>
                <p className="card-text">TechStack: Express.js Node.js MongoDB</p>
                <p>Experience: 0-2 years</p>
                <p>Eligibility: Min 6 CGPA</p>
                <h6>Work From Home</h6>
                <h6>Last Date: 10-02-2023</h6>
                <button onClick={() => { alert("applied") }} className='btn btn-dark'>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hiring