import React from 'react'
import "../components/styles/Campus.css"
const Campus = () => {
  return (
      <div className='container-fluid'>
        <div className='row bg-clr pt-xl-4'>
          <div className="col-xl-10 container">
            <h1>Campus Activities</h1>
          </div>
        </div>
        <div className='row bg-clr pt-xl-4'>
          <div className="col-xl-10 container">
            <p className='fs-5'>Engineerhub offers a ton of regular updates on various colleges all over India & their various activities to help students learn about various opportunities to enhance their growth.</p>
          </div>
        </div>
        <div className='row bg-clr pt-xl-4'>
          <div className="col-xl-4 container1">
            <div class="box">
              <div class="imgBox shadow-lg">
                <img src="https://i1.wp.com/travelwisesr.com/wp-content/uploads/2020/01/BITS-Goa-3.jpg?resize=640%2C459&ssl=1" alt="noimg" />
              </div>
              <div class="content">
                <p><span className='fw-bolder text-danger'>BITS PILANI<br /></span><button onClick={() => { alert("BITS PILANI") }} className='btn btn-dark'>View More !</button></p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 container1">
            <div class="box">
              <div class="imgBox shadow-lg">
                <img src="https://th.bing.com/th/id/OIP.K7gcctin-LX34ers5OvqzQHaFj?pid=ImgDet&rs=1" alt="npimg" />
              </div>
              <div class="content">
                <p><span className='fw-bolder text-danger'>NIT Durgapur<br /></span><button onClick={() => { alert("NIT Durgapur") }} className='btn btn-dark'>View More !</button></p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 container1">
            <div class="box">
              <div class="imgBox shadow-lg">
                <img src="https://i.pinimg.com/originals/e1/0c/9a/e10c9a6cf80ef8163367de91ddbeb5b9.jpg" alt="noimg" />
              </div>
              <div class="content">
                <p><span className='fw-bolder text-danger'> Chandigarh University<br /></span><button onClick={() => { alert(" Chandigarh University") }} className='btn btn-dark'>View More !</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Campus