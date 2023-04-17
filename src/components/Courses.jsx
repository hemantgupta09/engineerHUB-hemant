import React from 'react'
import "../components/styles/Courses.css"
const Courses = () => {
  return (
    <div className='row'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-12 pt-xl-4 gradient'>
            <h3 className='text-center text-warning'>50% off for first 10 registration</h3>
            <h3 className="text-center text-warning">Registration will start on 11 Feb at 11 am</h3>
            <div className="row">
              <div className="col-xl-6 container pb-xl-5">
                <h1 className='text-warning'>UDAAN</h1>
                <h1 className='text-light'>DSA Course</h1>
                <p className='text-light'>Ace the coding Interviews- Step by step guide for their toughest<br /> questions.</p>
                <p className='text-light'>Understand Data Structures inner mechanism and design decision effects<br /> + solve 180+ problems to enhance your problem solving.</p>
                <img className='img1' src="https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-man-6.png" alt="" /><span className='ms-xl-2 text-light'>By Righved Kumar</span>
              </div>
              <div className='col-xl-2 container'>
                <div class="card bg-dark text-light" style={{ width: "18rem" }}>
                  <img class="card-img-top" src="https://www.engineerhub.in/static/media/udaan.fdae18ae313a2a99191a.jpg" alt="Card image cap" />
                  <div class="card-body">
                    <ul style={{ listStyleType: "none" }}>
                      <li>Live sessions</li>
                      <li>Practise FAANG questions</li>
                      <li>Mock Coding Assessment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-clr">
          <div className="col-xl-8 container pt-xl-4">
            <h2 className="text-success">An Overview</h2>
            <ul className='fs-4'>
              <li className='pt-xl-3'>Weekly Live Classes on Friday, Saturday and Sunday</li>
              <li className='pt-xl-3'>Practice 180+ interview questions</li>
              <li className='pt-xl-3'>Get individual mentorship and support from the mentors</li>
              <li className='pt-xl-3'>Get individual mentorship and support from the mentors</li>
            </ul>
          </div>
        </div>
        <div className="row bg-clr">
          <div className="col-xl-10 container pt-xl-4">
            <h1 className='text-success'>About the Mentor</h1>
            <div class="card bg-light text-dark shadow-lg" style={{ width: "30rem" }}>
              <img class="card-img-top" src="https://www.engineerhub.in/static/media/mentor.c32c4ec5bd7bac8830c1.jpg" alt="Card image cap" />
              <div class="card-body">
                <ul style={{ listStyleType: "none" }}>
                  <li>Live sessions</li>
                  <li>Practise FAANG questions</li>
                  <li>Mock Coding Assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-clr pt-xl-5">
          <div className="col-xl-10 container">
            <h1 className='text-danger fw-bolder'>Free Courses</h1>
          </div>
        </div>
        <div className="row bg-clr pt-xl-5">
          <div className="col-xl-10 container mt-xl-4">
            <h4>Engineerhub aims to provide several free courses to students to provide necessary material with utmost ease.</h4>
          </div>
        </div>
        <div className="row bg-clr">
          <section>
            <div class="contain">
              <div class="card bg-primary">
                <div class="content">
                  <div class="imgBx">
                    <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/coursePoster/cyber.png" alt='noimg' />
                  </div>
                  <div class="contentBx">
                    <h3 className='text-dark'>DSA UDAAN</h3>
                  </div>
                </div>
                <button onClick={() => { alert("button clicked") }} className='btn-free'>Buy</button>
              </div>
              <div class="card bg-primary">
                <div class="content">
                  <div class="imgBx">
                    <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/coursePoster/app.jpg" alt='noimg' />
                  </div>
                  <div class="contentBx">
                    <h3 className='text-dark'>Data Structure Courses</h3>
                  </div>
                </div>
                <button onClick={() => { alert("button clicked") }} className='btn-free'>Buy</button>
              </div>
              <div class="card bg-primary">
                <div class="content">
                  <div class="imgBx">
                    <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/coursePoster/web.png" alt='noimg' />
                  </div>
                  <div class="contentBx">
                    <h3 className='text-dark'>Web Development</h3>
                  </div>
                </div>
                <button onClick={() => { alert("button clicked") }} className='btn-free'>Buy</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Courses