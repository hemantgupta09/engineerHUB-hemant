import React from 'react'
import "../components/styles/Magazine.css"
const Magazine = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row bg-clr'>
          <div className="col-xl-10 container mt-xl-3 mb-xl-3">
            <h1 style={{ color: "navyblue" }}>Magazines & HandBook</h1>
          </div>
        </div>
        <div className='row bg-clr'>
          <div className="col-xl-10 container mt-xl-3 mb-xl-3">
            <p className='fs-5'>Engineerhub issues various magazines & handbooks regularly that contribute to expanding knowledge for the benefit of students</p>
          </div>
        </div>
      </div>
      <div className='row bg-clr'>
        <div className='col-xl-4 container'>
          <div class="container1 container">
            <div class="box">
              <div class="imgBox shadow-lg">
                <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/handbooks/bookImage/ux.webp" alt="noimg" />
              </div>
              <div class="content">
                <h2>Karan Singh<br />
                  <span className='fw-bolder'>Graphic Designer</span></h2>
              </div>
            </div>
            <div class="box">
              <div class="imgBox shadow-lg">
                <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/handbooks/bookImage/ai.webp" alt="npimg" />
              </div>
              <div class="content">
                <h2>Dolly Seth<br />
                  <span className='fw-bolder'>Digital Marketing</span></h2>
              </div>
            </div>
            <div class="box">
              <div class="imgBox shadow-lg">
                <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/handbooks/bookImage/devops.webp" alt="noimg" />
              </div>
              <div class="content">
                <h2>DevOPS<br />
                  <span className='fw-bolder'>Beginers in Automation Field</span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Magazine