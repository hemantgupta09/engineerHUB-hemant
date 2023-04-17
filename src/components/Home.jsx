import React from 'react';
import "./styles/Home.css"
import $ from "jquery"
import { useState } from 'react';
const Home = () => {
  let [offset, setoffset] = useState(0);
  let words = ['Students', 'Campus', 'Industries'],
    part,
    i = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
  let wordflick = function () {
    setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count === skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = words[i].substring(0, offset);
      if (skip_count === 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
      $('.word').text(part + "|");
    }, speed);
  };
  wordflick();

  return (
    <div className='container-fluid'>
      <div className='row bg-clr'>
        <div className='col-xl-6'>
          <h1 className="mt-xl-5 txt-clr text-center txt-large">engineerHUB</h1>
          <div id='body' className="word txt-clr"></div>
          <div className='row ms-xl-5 mt-xl-5'>
            <div className='col-xl-4'>
              <img src="images/customer.png" className='png' alt="noimg" />
              <h1 className='tag'>50K +</h1>
              <label>Students</label>
            </div>
            <div className='col-xl-4'>
              <img src="images/students.png" className='png' alt="noimg" />
              <h1 className='tag'>800K +</h1>
              <label >Campus</label>
            </div>
            <div className='col-xl-4'>
              <img src="images/office.png" className='png' alt="noimg" />
              <h1 className='tag' >18+ </h1>
              <label>Industries</label>
            </div>
          </div>
        </div>
        <div className='col-xl-6'>
          <img className='img-gif' src="images/Animation.gif" alt="noimg" />
        </div>
      </div>
      <div className='row bg-clr'>
        <h1 className='text-center txt-clr' id='h1'>Our Students Comes From</h1>
      </div>
      <div id="carouselExampleControls" className="carousel slide container-fluid text-center bg-clr" data-bs-ride="carousel">
        <div className="carousel-inner container">
          <div className="carousel-item active">
            <div className="row mt-xl-5  ms-xl-5">
              <div className='col-xl-4'>
                <div className="card shadow-lg" style={{ width: "16rem", cursor: "pointer" }}>
                  <img src="images/Iitroorkee.png" class="card-img-top" />
                  <div className="card-body">
                    <h2 className="card-title">IIT Roorkee</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card shadow-lg" style={{ width: "18rem", cursor: "pointer" }}>
                  <img src="images/Iitbombay.png" className="card-img-top h-60 w-50" style={{ marginLeft: "70px" }} />
                  <div className="card-body">
                    <h2 className="card-title">IIT Bombay</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card shadow-lg" style={{ width: "18rem", cursor: "pointer" }}>
                  <img src="images/Iitmadras.png" className="card-img-top h-60 w-50" style={{ marginLeft: "70px" }} />
                  <div className="card-body">
                    <h2 className="card-title">IIT Madras</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-xl-5 ms-xl-5 bg-clr">
              <div className='col-xl-4'>
                <div className="card shadow-lg" style={{ width: "18rem", cursor: "pointer" }} onClick={() => { window.alert("clicked on NIT Calicut") }}>
                  <img src="images/NIT-Calicut.png" class="card-img-top h-60 w-50" style={{ marginLeft: "70px" }} />
                  <div className="card-body">
                    <h2 className="card-title">NIT Calicut</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card shadow-lg" style={{ width: "18rem", cursor: "pointer" }} onClick={() => { window.alert("clicked on IIT kahargpur") }}>
                  <img src="images/iit-kharagpur.png" class="card-img-top h-60 w-50" style={{ marginLeft: "70px" }} />
                  <div className="card-body">
                    <h2 className="card-title">IIT Kharagpur</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card shadow-lg" style={{ width: "18rem", cursor: "pointer" }} onClick={() => { window.alert("clickced on NIT Trichy") }}>
                  <img src="images/nittrichy.png" class="card-img-top h-60 w-50" style={{ marginLeft: "70px" }} />
                  <div className="card-body">
                    <h2 className="card-title">NIT Trichy</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row mt-xl-5 ms-xl-3">
              <div className='col-xl-4'>
                <div className="card shadow-lg" style={{ width: "16rem", cursor: "pointer" }} onClick={() => { window.alert("clicked on IIT kanpur") }}>
                  <img src="images/iitkanpur.png" className="card-img-top h-60 w-50" style={{ marginLeft: "70px" }} />
                  <div className="card-body">
                    <h2 className="card-title">IIT Kanpur</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card shadow-lg" style={{ width: "18rem", cursor: "pointer" }} onClick={() => { window.alert("clicked on IIT delhi") }}>
                  <img src="images/iitdelhi.png" className="card-img-top h-60 w-50" style={{ marginLeft: "70px" }} />
                  <div className="card-body">
                    <h2 className="card-title">IIT Delhi</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card shadow-lg" style={{ width: "18rem", cursor: "pointer" }} onClick={() => { window.alert("clicked on VIT vellor") }} >
                  <img src="images/vit.png" className="card-img-top h-60 w-50" style={{ marginLeft: "70px" }} />
                  <div className="card-body">
                    <h2 className="card-title">VIT vellor</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-xl-5 ms-xl-3">
              <div className='col-xl-4'>
                <div className="card shadow-lg" style={{ width: "18rem", cursor: "pointer" }} onClick={() => { window.alert("clicked on AKTU") }}>
                  <img src="images/uptu.png" class="card-img-top h-60 w-50" style={{ marginLeft: "70px" }} />
                  <div className="card-body">
                    <h2 className="card-title">AKTU</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card shadow-lg" style={{ width: "18rem", cursor: "pointer" }} onClick={() => {
                  window.alert("clicked on IIT patna")
                }}>
                  <img src="images/iitpatna.png" class="card-img-top h-60 w-50" style={{ marginLeft: "70px" }} />
                  <div className="card-body">
                    <h2 className="card-title">IIT Patna</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card shadow-lg" style={{ width: "18rem", cursor: "pointer" }} onClick={() => {
                  window.alert("clicked on IIT BHU")
                }}>
                  <img src="images/iitbhu.png" class="card-img-top h-60 w-50" style={{ marginLeft: "70px" }} />
                  <div className="card-body">
                    <h2 className="card-title">IIT BHU</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" style={{ marginRight: "160px" }} aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div class="container-fluid bg-clr">
        <div class="row">
          <div class="col-xl-12 text-center">
            <h3 class="animate-charcter">Companies we Collaborate</h3>
          </div>
        </div>
      </div>
      <div className="row shadow-lg">
        <div className='col-xl-10 container'>
          <marquee scrollamount="10" >
            <img src="images/eduuncle.png" style={{ height: "10vh", width: "40vh", marginLeft: "20px" }} alt="" />
            <img src="images/Cre8Gre8-Logo-1.png" style={{ height: "20vh", width: "30vh", marginLeft: "60px" }} alt="" />
            <img src="images/Tronix.png" style={{ height: "10vh", width: "30vh", marginLeft: "60px" }} alt="" />
            <img src="images/The-Knowledge-Academy.png" style={{ height: "10vh", width: "40vh", marginLeft: "60px" }} alt="" />
          </marquee>
        </div>
      </div>
      <div className="row bg-clr">
        <div className="col-xl-10 container">
          <h1 className='txt-clr mt-xl-3'>About us</h1>
          <p className='fw-bolder txt-clr'>engineerHUB is INDIA's leading community of engineers where students <br />  or alumni from IITs, NITs, IIITs andstate colleges unite together to<br />  develop and nurture the skills of students all over India.
            Our goal <br />  is to counsel beginners in the field by providing them with basic<br />  guidelines about how and where to start their learning.</p>
        </div>
      </div>
      <div className="row bg-clr">
        <div className='col-xl-4 container'>
          <img className='h-140 w-100' src="https://www.engineerhub.in/static/media/Group.6dd638e54db8a78e2840afc8061cc3d8.svg" alt="" />
        </div>
        <div className='col-xl-4 container'>
          <ul className='fs-5 fw-bold txt-clr'>
            <li style={{ marginTop: "80px" }}>Providing students valuable content and personal assistance.</li>
            <li style={{ marginTop: "20px" }}>Conducting regular webinars by our leading industriallists & mentors who map out the basic blueprint expanding from their learning to placement experience.</li>
            <li style={{ marginTop: "20px" }}>Special attention is given to the students that help them enhance their programming skills, manage projects and provide them with internship opportunities.</li>
          </ul>
        </div>
      </div>
      <div className="row bg-green">
        <div className="col-xl-10 mt-xl-5 container">
          <div id="carouselExampleControls2" class="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <h1 className='text-warning ms-xl-5'>What we do ?</h1>
              <div className="carousel-item active ">
                <div className="row">
                  <div className="col-xl-5 container">
                    <h1 className='text-warning'>Internship & Job Updates</h1>
                    <p className='fw-large fs-5 mt-xl-5'>We regularly notify students about appropriate <br /> internships & job updates based on their keen interests<br /> which helps them sort their priorities, manage <br /> time & get updates from verified resources.</p>
                  </div>
                  <div className="col-xl-5 container">
                    <img className='ms-xl-5 pb-xl-3' style={{ height: "50vh", width: "30vh" }} src="https://www.engineerhub.in/static/media/Phoneimg.70bb1327de4c75fa4b045bc3612a34b0.svg" alt="noimg" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-xl-5 container">
                    <h1 className='text-warning'>Campus Connectivity</h1>
                    <p className="fw-large fs-5 mt-xl-5">
                      At engineeHUB , we connect all the IITs, NITs & State Colleges to facilitate students with a competitive environment to allow them productive discussions about their respective fields of knowledge.
                    </p>
                  </div>
                  <div className="col-xl-5 container">
                    <img className='ms-xl-5 pb-xl-3' style={{ height: "50vh", width: "30vh" }} src="https://www.engineerhub.in/static/media/Phoneimg.70bb1327de4c75fa4b045bc3612a34b0.svg" alt="noimg" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-xl-5 container">
                    <h1 className='text-warning'>Live Courses</h1>
                    <p className="fw-large fs-5 mt-xl-5">
                      We provide live sessions of various courses of major importance in the field of engineering. In addition to doubt clearing facilities with our mentors, students can avail themselves lifetime access to these sessions to help them in future.
                    </p>
                  </div>
                  <div className="col-xl-5 container">
                    <img className='ms-xl-5 pb-xl-3' style={{ height: "50vh", width: "30vh" }} src="https://www.engineerhub.in/static/media/Phoneimg.70bb1327de4c75fa4b045bc3612a34b0.svg" alt="noimg" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-xl-5 container">
                    <h1 className='text-warning'>Magzines & Handbooks</h1>
                    <p className="fw-large fs-5 mt-xl-5">
                      We issue various magazines & handbooks regularly that contribute to expanding students' knowledge & learning. These magazines & handbooks are provided by trustworthy resources for the benefit of students.
                    </p>
                  </div>
                  <div className="col-xl-5 container">
                    <img className='ms-xl-5 pb-xl-3' style={{ height: "50vh", width: "30vh" }} src="https://www.engineerhub.in/static/media/Phoneimg.70bb1327de4c75fa4b045bc3612a34b0.svg" alt="noimg" />
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" style={{ marginRight: "160px" }} aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row bg-clr-dark">
        <div className="col-xl-12 mt-xl-4" >
          <h3 className="text-warning text-center">Join our Community & let’s grow together !</h3>
        </div>
      </div>
      <div className="row bg-clr-dark">
        <div className="col-xl-2 container mt-xl-4 mb-xl-4">
          <button onClick={() => { alert("Join Discord clicked") }} className='button-blue'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-android2 me-xl-2" viewBox="0 0 16 16">
              <path d="m10.213 1.471.691-1.26c.046-.083.03-.147-.048-.192-.085-.038-.15-.019-.195.058l-.7 1.27A4.832 4.832 0 0 0 8.005.941c-.688 0-1.34.135-1.956.404l-.7-1.27C5.303 0 5.239-.018 5.154.02c-.078.046-.094.11-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.697 3.697 0 0 0 3.5 5.02h9c0-.75-.208-1.44-.623-2.072a4.266 4.266 0 0 0-1.664-1.476ZM6.22 3.303a.367.367 0 0 1-.267.11.35.35 0 0 1-.263-.11.366.366 0 0 1-.107-.264.37.37 0 0 1 .107-.265.351.351 0 0 1 .263-.11c.103 0 .193.037.267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264Zm4.101 0a.351.351 0 0 1-.262.11.366.366 0 0 1-.268-.11.358.358 0 0 1-.112-.264c0-.103.037-.191.112-.265a.367.367 0 0 1 .268-.11c.104 0 .19.037.262.11a.367.367 0 0 1 .107.265c0 .102-.035.19-.107.264ZM3.5 11.77c0 .294.104.544.311.75.208.204.46.307.76.307h.758l.01 2.182c0 .276.097.51.292.703a.961.961 0 0 0 .7.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182c0 .276.097.51.292.703a.972.972 0 0 0 .71.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76c.291 0 .54-.103.749-.308.207-.205.311-.455.311-.75V5.365h-9v6.404Zm10.495-6.587a.983.983 0 0 0-.702.278.91.91 0 0 0-.293.685v4.063c0 .271.098.501.293.69a.97.97 0 0 0 .702.284c.28 0 .517-.095.712-.284a.924.924 0 0 0 .293-.69V6.146a.91.91 0 0 0-.293-.685.995.995 0 0 0-.712-.278Zm-12.702.283a.985.985 0 0 1 .712-.283c.273 0 .507.094.702.283a.913.913 0 0 1 .293.68v4.063a.932.932 0 0 1-.288.69.97.97 0 0 1-.707.284.986.986 0 0 1-.712-.284.924.924 0 0 1-.293-.69V6.146c0-.264.098-.491.293-.68Z" /></svg>
            Join Discord</button>
        </div>
        <div className="col-xl-2 container mt-xl-4 mb-xl-4">
          <button onClick={() => { alert("Join whatsApp clicked") }} className='button-green'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-whatsapp me-xl-2" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>Join WhatsApp
          </button>
        </div>
      </div>
      <div className="row">
        <div style={{ height: "40px", width: "100%" }}></div>
      </div>
      <div className="row bg-clr">
        <div className="col-xl-10 container">
          <h1 className='text-danger fw-bolder'>Magazines & Hand-Book</h1>
        </div>
      </div>
      <div className="row bg-clr">
        <div className="col-xl-10 container mt-xl-4">
          <h4>Engineerhub issues various magazines & handbooks regularly that contribute to expanding knowledge for the benefit of students.</h4>
        </div>
      </div>
      <div className="row bg-clr">
        <section>
          <div class="contain">
            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/handbooks/bookImage/ai.webp" />
                </div>
                <div class="contentBx">
                  <h3>Touch of Machine Learning</h3>
                </div>
              </div>
              <button onClick={() => { alert("button clicked") }} className="btn-open">Open</button>
            </div>
            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/handbooks/bookImage/webd.webp" />
                </div>
                <div class="contentBx">
                  <h3>Begineres Guid to web Developmenmt</h3>
                </div>
              </div>
              <button onClick={() => { alert("button clicked") }} className="btn-open">Open</button>
            </div>
            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/handbooks/bookImage/devops.webp" />
                </div>
                <div class="contentBx">
                  <h3>A complete RoadMap for App Developmenmt</h3>
                </div>
              </div>
              <button onClick={() => { alert("button clicked") }} className='btn-open'>Open</button>
            </div>
            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/handbooks/bookImage/devops.webp" />
                </div>
                <div class="contentBx">
                  <h3>A complete RoadMap for App Developmenmt</h3>
                </div>
              </div>
              <button onClick={() => { alert("button clicked") }} className='btn-open'>Open</button>
            </div>
          </div>
        </section>
      </div>
      <div className="row bg-clr">
        <div className="col-xl-10 container">
          <h1 className='text-danger fw-bolder'>Events</h1>
        </div>
      </div>
      <div className="row bg-clr">
        <div className="col-xl-10 container mt-xl-4">
          <h4>We organize numerous events to impart knowledge to students and provide them with an appropriate platform to showcase their skills.</h4>
        </div>
      </div>
      <div className="row bg-clr">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="row mt-xl-4">
                <div className="col-xl-2 container">
                  <div className="card shadow-lg info" style={{ width: "16rem", cursor: "pointer" }}>
                    <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/events/poster/sb2pb.jpg" className="card-img-top h-80 w-80" />
                    <div className="card-body bg-clr-dark">
                      <h4 className="card-title text-light text-center">Product based to Service Based </h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 container">
                  <div className="card shadow-lg info" style={{ width: "16rem", cursor: "pointer" }}>
                    <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/events/poster/java.jpg" className="card-img-top h-80 w-80" />
                    <div className="card-body bg-clr-dark">
                      <h4 className="card-title text-light text-center">JAVA Developer Road Map</h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 container">
                  <div className="card shadow-lg info" style={{ width: "16rem", cursor: "pointer" }}>
                    <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/events/poster/microsoft.png" className="card-img-top h-80 w-80" />
                    <div className="card-body bg-clr-dark">
                      <h4 className="card-title text-light text-center">How to crack Microsoft</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="row mt-xl-4">
                <div className="col-xl-2 container">
                  <div className="card shadow-lg info" style={{ width: "16rem", cursor: "pointer" }}>
                    <img src="https://nearyou.imeche.org/images/default-source/IMechE-Uniten-SC/python-workshop-2-0-poster.png?sfvrsn=0" className="card-img-top h-80 w-80" />
                    <div className="card-body bg-clr-dark">
                      <h4 className="card-title text-light text-center">Python Data Science</h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 container">
                  <div className="card shadow-lg info" style={{ width: "16rem", cursor: "pointer" }}>
                    <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/events/poster/dsa.jpg" className="card-img-top h-80 w-80" />
                    <div className="card-body bg-clr-dark">
                      <h4 className="card-title text-light text-center">A Beginer Guide to DSA !</h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 container">
                  <div className="card shadow-lg info" style={{ width: "16rem", cursor: "pointer" }}>
                    <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/events/poster/eda.jpg" className="card-img-top h-80 w-80" />
                    <div className="card-body bg-clr-dark">
                      <h4 className="card-title text-light text-center">Exploratory Data Analyis</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
            <span class="visually-hidden">Next</span>
          </button>
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
                  <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/coursePoster/cyber.png" />
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
                  <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/coursePoster/app.jpg" />
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
                  <img src="https://ehubtestbucket.s3.ap-south-1.amazonaws.com/image/coursePoster/web.png" />
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
      <div className="row bg-clr-dark">
        <div className="col-xl-6 container mt-xl-4">
          <h1 className='text-center text-light pb-xl-3'>We will be on <span className='text-warning'>PlayStore</span> soon.</h1>
        </div>
      </div>
      <div className="row bg-clr-dark">
        <div className="col-xl-6 container mt-xl-4">
          <h3 className='text-center text-light pb-xl-3'>Try our new App anytime and anywhere you like</h3>
        </div>
      </div>
      <div className="row bg-clr-dark">
        <div className="col-xl-6 container text-center">
          <button onClick={() => { alert("button clicked") }} className='button-white mb-xl-3'><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google-play" viewBox="0 0 16 16">
            <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z" />
          </svg></span>Get the App</button>
        </div>
      </div>
      <div className="row bg-clr">
        <div className="col-xl-6 container mt-xl-5">
          <h1 className="text-center">What our Members think about us</h1>
        </div>
      </div>
      <div className="row bg-clr">
        <div className="col-xl-10 container">
          <section>
            <div class="contain">
              <div class="card bg-primary">
                <div class="content">
                  <div class="imgBx">
                    <img style={{borderRadius:"40px"}} className='h-100 w-100' src="images/i1.jpeg" />
                  </div>
                </div>
              </div>
              <div class="card bg-primary">
                <div class="content">
                  <div class="imgBx">
                    <img style={{borderRadius:"40px"}} className='h-100 w-100' src="images/i2.jpeg" />
                  </div>
                </div>
              </div>
              <div class="card bg-primary">
                <div class="content">
                  <div class="imgBx">
                    <img style={{borderRadius:"40px"}} className='h-100 w-100' src="images/i3.jpeg" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home