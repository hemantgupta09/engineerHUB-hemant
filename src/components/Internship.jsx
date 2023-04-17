import React from 'react'

const Internship = () => {
  return (
      <div className="container-flud">
        <div className='row bg-clr'>
          <div className="col-xl-10 mt-xl-4 mb-xl-4 container">
            <h1 style={{ color: "darkgreen" }} className='fw-bold'>Internship & Jobs</h1>
          </div>
        </div>
        <div className='row bg-clr'>
          <div className="col-xl-10 pb-xl-4 container">
            <p className='fs-5' style={{ color: "darkgreen" }}>engineerhub offers tons of internships & job opportunities for our students & notify them regularly on various social platforms.</p>
          </div>
        </div>
        <div className="row bg-clr">
          <div className="col-xl-5 container mb-xl-4">
            <input type="text" placeholder='Search Internship & Jobs,.. Web Design, App Development' className="input-inner form-control text-xl-center" />
          </div>
        </div>
        <div className="row bg-clr">
          <div className="col-xl-6 container mb-xl-4">
            <div class="card bg-light text-dark shadow-lg" style={{ width: "45rem" }}>
              <div class="card-body">
                <h4>Graduate Trainee - Insurance | PhonePe <span><button onClick={()=>{alert("clicked on new button")}} className='btn btn-primary btn-sm'>new</button></span> </h4>
                <p>Full-time Delhi Paid</p>
                <p>On this post all jobs and internship opportunities can be found on weekly basis . This post is updated every new week with new job links relevant for that month . You can find all places to apply and referrals at a single place and you don't have to search anywhere else !</p>
                <span className='text-end'><button onClick={()=>{alert("clicked on apply button")}} className='btn btn-dark'>Apply Now</button></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-clr">
          <div className="col-xl-6 container mb-xl-4">
            <div class="card bg-light text-dark shadow-lg" style={{ width: "45rem" }}>
              <div class="card-body">
                <h4>Associate Software Engineer (GDS) | EY (Ernst & Young) <span><button onClick={()=>{alert("clicked on new button")}} className='btn btn-primary btn-sm'>new</button></span> </h4>
                <p>Full Time Onsite- Bengaluru Paid</p>
                <p>EY is a multinational professional services firm that has, over the years, become one of the Big Four accounting firms in the world. The history of the company can be traced back to 1903 when Ernst & Ernst was established in Cleveland by Alwin C. Ernst along with his brother Theodore and in 1906 Arthur Young & Co. was incorporated by the Scotsman Arthur Young in Chicago. In 1989, these two firms merged together to form EY.</p>
                <span className='text-end'><button onClick={()=>{alert("clicked on apply button")}} className='btn btn-dark'>Apply Now</button></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-clr">
          <div className="col-xl-6 container mb-xl-4">
            <div class="card bg-light text-dark shadow-lg" style={{ width: "45rem" }}>
              <div class="card-body">
                <h4>Java Intern | NatWest Group <span><button onClick={()=>{alert("clicked on new button")}} className='btn btn-primary btn-sm'>new</button></span> </h4>
                <p>Full Time Onsite- Gurgaon Paid</p>
                <p>The NatWest Accelerator supports and empowers UK entrepreneurs to scale their businesses to the next level. Our free Accelerator programme specialising in wrap around support provides: one-to-one coaching with our experienced Acceleration Managers a programme of thought leadership and events access to a network of like-minded peers, supported by our Ecosystem Managers focused support with access to experts from across your specialism use of our modern co-working spaces in one of our nationwide hubs.</p>
                <span className='text-end'><button onClick={()=>{alert("clicked on apply button")}} className='btn btn-dark'>Apply Now</button></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-clr">
          <div className="col-xl-6 container mb-xl-4">
            <div class="card bg-light text-dark shadow-lg" style={{ width: "45rem" }}>
              <div class="card-body">
                <h4>Intern - industrial Trainee | LSEG <span><button onClick={()=>{alert("clicked on new button")}} className='btn btn-primary btn-sm'>new</button></span> </h4>
                <p>Full Time Onsite- Bangalore Paid</p>
                <p>LSEG (London Stock Exchange Group) is a leading global financial markets infrastructure and data provider. Our purpose is driving financial stability, empowering economies and enabling customers to create sustainable growth. Our culture of connecting, creating opportunity and delivering excellence shapes how we think, how we do things and how we help our people fulfil their potential.</p>
                <span className='text-end'><button onClick={()=>{alert("clicked on apply button")}} className='btn btn-dark'>Apply Now</button></span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Internship