import React,  { useState, useEffect } from 'react';
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import Link from "react-router-dom";

import ReactDOM from 'react-dom/client';

import logo from './logo.svg';
import './assets/css/style.min.css';
// import SignUpApp from './SignUp';
import $, { event } from 'jquery';
import axios from 'axios';

var globalSession =0;



function App() {

 const IsSession =  localStorage.getItem( 'IsLogin' ) || 0;//SessionManage();
  globalSession=IsSession;


// return(<><CoursesList/></>);
  return (
    <div class="main-wrapper">

    <Header/>
    
    <MobileMenu/>


    <div class="overlay"></div>
    <Slider/>
    {/* <Courses /> */}
    <Extra/>
    <Footer/>

        <a href="#" class="back-to-top">
            <i class="icofont-simple-up"></i>
        </a>

    </div>



  );
 }

function addCourse(){
    //event.preventDefault();
    console.log($('#title').val());
    $.ajax({
        url: 'http://localhost:8080/addCourse?title=' + $('#title').val() + '&description=' + $('#description').val() + '&link=' + $('#link').val(),
        method: 'POST',
        data: {},
        headers: {
            'Access-Control-Allow-Origin': '*',
          },
        // contentType: "application/json",
        // dataType: "json",
        success: function (response) { console.log(response); alert('Success.');window.location.reload(); },
        error: function (xhr, status, error) {console.log(error); }
    });
}

function AdminURL()
{
    return(<div class="main-wrapper">
    
        <div class="overlay"></div>
        <div class="section page-banner">

            <img class="shape-1 animation-round" src="./assets/images/shape/shape-8.png" alt="Shape"/>

            <img class="shape-2" src="./assets/images/shape/shape-23.png" alt="Shape"/>

            <div class="container">
                <div class="page-banner-content">
                    {/* <ul class="breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li class="active">Register</li>
                    </ul> */}
                    <h2 class="title">Add <span>Course</span></h2>
                </div>
            </div>

            <div class="shape-icon-box">

                <img class="icon-shape-1 animation-left" src="./assets/images/shape/shape-5.png" alt="Shape"/>

                <div class="box-content">
                    <div class="box-wrapper">
                        <i class="flaticon-badge"></i>
                    </div>
                </div>

                <img class="icon-shape-2" src="./assets/images/shape/shape-6.png" alt="Shape"/>

            </div>

            <img class="shape-3" src="./assets/images/shape/shape-24.png" alt="Shape"/>

            <img class="shape-author" src="./assets/images/author/author-11.jpg" alt="Shape"/>

        </div>
        <div class="section section-padding">
            <div class="container">

                <div class="register-login-wrapper">
                    <div class="row align-items-center">
                        <div class="col-lg-6">

                            <div class="register-login-images">
                                <div class="shape-1">
                                    <img src="./assets/images/shape/shape-26.png" alt="Shape"/>
                                </div>


                                <div class="images">
                                    <img src="./assets/images/register-login.png" alt="Register Login"/>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-6">

                            <div class="register-login-form">
                                <h3 class="title">Add <span>Course</span></h3>

                                <div class="form-wrapper">
                                    <form action="Register">
                                        <div class="single-form">
                                            <input type="text" placeholder="CourseName" name="name" id="title"/>
                                        </div>
                                        <div class="single-form">
                                            <textarea type="text" placeholder="CourseDetail" name="email" id="description"/>
                                        </div>
                                        <div class="single-form">
                                            <input type="text" placeholder="VideoLink" name="password" id="link"/>
                                        </div>

                                        <div class="single-form">
                                            <button type="button" onClick={()=>{addCourse()}} class="btn btn-primary btn-hover-dark w-100">Add Course</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="section footer-section">

            <div class="footer-widget-section">

                <img class="shape-1 animation-down" src="./assets/images/shape/shape-21.png" alt="Shape"/>

                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 order-md-1 order-lg-1">

                            <div class="footer-widget">
                                <div class="widget-logo">
                                    <a href="#"><img src="./assets/images/logo.png" alt="Logo"/></a>
                                </div>

                                <div class="widget-address">
                                    <h4 class="footer-widget-title">Noida</h4>
                                    <p>India</p>
                                </div>

                                <ul class="widget-info">
                                    <li>
                                        <p> <i class="flaticon-email"></i> <a href="mailto:address@gmail.com">address@gmail.com</a> </p>
                                    </li>
                                    <li>
                                        <p> <i class="flaticon-phone-call"></i> <a href="tel:9702621413">(970) 262-1413</a> </p>
                                    </li>
                                </ul>

                                <ul class="widget-social">
                                    <li><a href="#"><i class="flaticon-facebook"></i></a></li>
                                    <li><a href="#"><i class="flaticon-twitter"></i></a></li>
                                    <li><a href="#"><i class="flaticon-skype"></i></a></li>
                                    <li><a href="#"><i class="flaticon-instagram"></i></a></li>
                                </ul>
                            </div>

                        </div>
                        <div class="col-lg-6 order-md-3 order-lg-2">

                            <div class="footer-widget-link">

                                <div class="footer-widget">
                                    <h4 class="footer-widget-title">Category</h4>

                                    <ul class="widget-link">
                                        <li><a href="#">Creative Writing</a></li>
                                        <li><a href="#">Film & Video</a></li>
                                        <li><a href="#">Graphic Design</a></li>
                                        <li><a href="#">UI/UX Design</a></li>
                                        <li><a href="#">Business Analytics</a></li>
                                        <li><a href="#">Marketing</a></li>
                                    </ul>

                                </div>
                                <div class="footer-widget">
                                    <h4 class="footer-widget-title">Quick Links</h4>

                                    <ul class="widget-link">
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Discussion</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Customer Support</a></li>
                                        <li><a href="#">Course FAQ’s</a></li>
                                    </ul>

                                </div>

                            </div>

                        </div>
                        <div class="col-lg-3 col-md-6 order-md-2 order-lg-3">

                            <div class="footer-widget">
                                <h4 class="footer-widget-title">Subscribe</h4>

                                <div class="widget-subscribe">
                                    <p>Lorem Ipsum has been them an industry printer took a galley make book.</p>

                                    <div class="widget-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email here"/>
                                            <button class="btn btn-primary btn-hover-dark">Subscribe Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <img class="shape-2 animation-left" src="./assets/images/shape/shape-22.png" alt="Shape"/>

            </div>
            <div class="footer-copyright">
                <div class="container">

                    <div class="copyright-wrapper">
                        <div class="copyright-link">
                            <a href="#">Terms of Service</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Sitemap</a>
                            <a href="#">Security</a>
                        </div>
                        <div class="copyright-text">
                            <p>&copy; 2021 <span> Edule </span> Made with <i class="icofont-heart-alt"></i> by <a href="#">Codecarnival</a></p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <a href="#" class="back-to-top">
            <i class="icofont-simple-up"></i>
        </a>

    </div>

);
}




function Header()
{
  return(<div class="header-section">

  <div class="header-main">
      <div class="container">

          <div class="header-main-wrapper">

              <div class="header-logo">
                  <a href="index.html"><img src="assets/images/logo.png" alt="Logo"/></a>
              </div>
              <div class="header-menu header-sign-in-up d-none d-lg-block">
                  <ul class="nav-menu">
                  <li><a href="index.html">Home</a></li>
                      < Extrra />
                  </ul>

              </div>
              <div class="header-toggle d-lg-none">
                  <a class="menu-toggle" href="javascript:void(0)">
                      <span></span>
                      <span></span>
                      <span></span>
                  </a>
              </div>

          </div>

      </div>
  </div>

</div>);


}

// function Courses(){
//   return (<div class="section section-padding-02">
//   <div class="container">

//       <div class="courses-top">

//           <div class="section-title shape-01">
//               <h2 class="main-title">All <span>Courses</span> of Online Learning</h2>
//           </div>


//       </div>

//       <div class="tab-content courses-tab-content">
//           <div class="tab-pane fade show active" id="tabs1">

//               <div class="courses-wrapper">
//                   {/* <div class="row">
//                       @foreach (OnlineLearning.Models.CourseDetails dr in Model)
//                       { */}
//                           <div class="col-lg-4 col-md-6" onclick="window.location.href='\\home\\CourseDetails?i='+@dr.Id">
//                               <div class="single-courses">
//                                   <div class="courses-images">
//                                       <a href="#"><img src="@dr.Name" alt="Courses" /></a>
//                                   </div>
//                                   <div class="courses-content">
                                     

//                                       <h4 class="title"><a href="courses-details.html">@dr.title</a></h4>
//                                       <div class="courses-meta">
//                                           <span> <i class="icofont-clock-time"></i> 08 hr 15 mins</span>
//                                           <span> <i class="icofont-read-book"></i> 29 Lectures </span>
//                                       </div>
//                                       <div class="courses-price-review">
//                                           <div class="courses-price">
//                                               <span class="sale-parice">Rs385.00</span>
//                                               <span class="old-parice">Rs440.00</span>
//                                           </div>
//                                           <div class="courses-review">
//                                               <span class="rating-count">4.9</span>
//                                               <span class="rating-star">
//                                                   {/* <span class="rating-bar" ></span> */}
//                                               </span>
//                                           </div>
//                                       </div>
//                                   </div>
//                               </div>
//                           </div>
//                       {/* } */}
//                       </div>
//               </div>

//           </div>
//       </div>

//       <div class="courses-btn text-center">
//           <a href="courses.html" class="btn btn-secondary btn-hover-primary">Other Course</a>
//       </div>

//   </div>);
// }

function MobileMenu()
{
  return(<div class="mobile-menu">

  <a class="menu-close" href="javascript:void(0)">
      <i class="icofont-close-line"></i>
  </a>
  <div class="mobile-top">
      <p><i class="flaticon-phone-call"></i> <a href="tel:9702621413">(970) 262-1413</a></p>
      <p><i class="flaticon-email"></i> <a href="mailto:address@gmail.com">address@gmail.com</a></p>
  </div>
  <div class="mobile-sign-in-up">
      <ul>
          <li><a class="sign-in" href="login.html">Sign In</a></li>
          <li><a class="sign-up" href="register.html">Sign Up</a></li>
      </ul>
  </div>
  <div class="mobile-menu-items">
      <ul class="nav-menu">
          <li><a href="index.html">Home</a></li>
          <li>
              <a href="#">All Course</a>
              <ul class="sub-menu">
                  <li><a href="courses.html">Courses</a></li>
                  <li><a href="courses-details.html">Courses Details</a></li>
              </ul>
          </li>
          <li>
              <a href="#">Pages </a>
              <ul class="sub-menu">
                  <li><a href="about.html">About</a></li>
                  <li><a href="register.html">Register</a></li>
                  <li><a href="login.html">Login</a></li>
                  <li><a href="faq.html">FAQ</a></li>
                  <li><a href="404-error.html">404 Error</a></li>
                  <li><a href="after-enroll.html">After Enroll</a></li>
                  <li><a href="courses-admin.html">Instructor Dashboard (Course List)</a></li>
                  <li><a href="overview.html">Instructor Dashboard (Performance)</a></li>
                  <li><a href="students.html">Students</a></li>
                  <li><a href="reviews.html">Reviews</a></li>
                  <li><a href="engagement.html">Course engagement</a></li>
                  <li><a href="traffic-conversion.html">Traffic & conversion</a></li>
                  <li><a href="messages.html">Messages</a></li>
              </ul>
          </li>
          <li>
              <a href="#">Blog</a>
              <ul class="sub-menu">
                  <li>
                      <a href="#">Blog</a>
                      <ul class="sub-menu">
                          <li><a href="blog-grid.html">Blog</a></li>
                          <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                          <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                      </ul>
                  </li>
                  <li>
                      <a href="#">Blog Details</a>
                      <ul class="sub-menu">
                          <li><a href="blog-details-left-sidebar.html">Blog Details Left Sidebar</a></li>
                          <li><a href="blog-details-right-sidebar.html">Blog Details Right Sidebar</a></li>
                      </ul>
                  </li>
              </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
      </ul>

  </div>
  <div class="mobile-social">
      <ul class="social">
          <li><a href="#"><i class="flaticon-facebook"></i></a></li>
          <li><a href="#"><i class="flaticon-twitter"></i></a></li>
          <li><a href="#"><i class="flaticon-skype"></i></a></li>
          <li><a href="#"><i class="flaticon-instagram"></i></a></li>
      </ul>
  </div>

</div>);
}

function Extra()
{
  return(        <div class="section section-padding mt-n1">
  <div class="container">

      <div class="section-title shape-03 text-center">
          <h5 class="sub-title">Over 1,235+ Course</h5>
          <h2 class="main-title">How It <span> Work?</span></h2>
      </div>
      <div class="how-it-work-wrapper">

          <div class="single-work">
              <img class="shape-1" src="./assets/images/shape/shape-15.png" alt="Shape"/>

              <div class="work-icon">
                  <i class="flaticon-transparency"></i>
              </div>
              <div class="work-content">
                  <h3 class="title">Find Your Course</h3>
                  <p>Search through almost thousands of different cources</p>
              </div>
          </div>
          <div class="work-arrow">
              <img class="arrow" src="./assets/images/shape/shape-17.png" alt="Shape"/>
          </div>
          <div class="single-work">
              <img class="shape-2" src="./assets/images/shape/shape-15.png" alt="Shape"/>

              <div class="work-icon">
                  <i class="flaticon-forms"></i>
              </div>
              <div class="work-content">
                  <h3 class="title">Enroll</h3>
                  <p>Enroll and get access to a large variety of courses</p>
              </div>
          </div>
          <div class="work-arrow">
              <img class="arrow" src="./assets/images/shape/shape-17.png" alt="Shape"/>
          </div>
          <div class="single-work">
              <img class="shape-3" src="./assets/images/shape/shape-16.png" alt="Shape"/>

              <div class="work-icon">
                  <i class="flaticon-badge"></i>
              </div>
              <div class="work-content">
                  <h3 class="title">Get Tutorial</h3>
                  <p>Watch knowlegeful and easy to understand tutorials.</p>
              </div>
          </div>

      </div>

  </div>
</div>);
}

function Extrra(id)
{
//console.log(globalSession);


  if(parseInt(localStorage.getItem("IsLogin")) == 0)
    {
      return(
  
      <>
        <li><a class="sign-in" onClick={()=>{Login(1)}}>Sign In</a></li>
        <li><a class="sign-up" onClick={()=>{SignUp2(1)}}>Sign Up</a></li></>
    );
    }
    else
    {
      return(<>
        
        <li><a class="sign-in" onClick={()=>{CoursesList()}}>Courses</a></li>
        <li><a class="sign-up" onClick={()=>{Logout()}}>Logout</a></li>
      
        </>);
    }

}

function Slider()
{
  return(    <div class="section slider-section">

  <div class="slider-shape">
      <img class="shape-1 animation-round" src="./assets/images/shape/shape-8.png" alt="Shape" />
  </div>

  <div class="container">

      <div class="slider-content">
          <h4 class="sub-title">Start your favourite course</h4>
          <h2 class="main-title">Now learning from anywhere, and build your <span>bright career.</span></h2>
          <p>It has survived not only five centuries but also the leap into electronic typesetting.</p>
          <a class="btn btn-primary btn-hover-dark" href="#">Start A Course</a>
      </div>

  </div>

  <div class="slider-courses-box">

      <img class="shape-1 animation-left" src="./assets/images/shape/shape-5.png" alt="Shape" />

      <div class="box-content">
          <div class="box-wrapper">
              <i class="flaticon-open-book"></i>
              <span class="count">1,235</span>
              <p>courses</p>
          </div>
      </div>

      <img class="shape-2" src="./assets/images/shape/shape-6.png" alt="Shape" />

  </div>
  <div class="slider-rating-box">

      <div class="box-rating">
          <div class="box-wrapper">
              <span class="count">4.8 <i class="flaticon-star"></i></span>
              <p>Rating (86K)</p>
          </div>
      </div>

      <img class="shape animation-up" src="./assets/images/shape/shape-7.png" alt="Shape"/>

  </div>
  <div class="slider-images">
      <div class="images">
          <img src="./assets/images/slider/slider-1.png" alt="Slider"/>
      </div>
  </div>
  <div class="slider-video">
      <img class="shape-1" src="./assets/images/shape/shape-9.png" alt="Shape"/>

      <div class="video-play">
          <img src="./assets/images/shape/shape-10.png" alt="Shape"/>
          <a href="https://www.youtube.com/watch?v=BRvyWfuxGuU" class="play video-popup">
          {/* <i class="flaticon-play"></i> */}
          
          </a>
      </div>
  </div>

</div>);
}

function Footer()
{
  return(        <div class="section footer-section">

  <div class="footer-widget-section">

      <img class="shape-1 animation-down" src="./assets/images/shape/shape-21.png" alt="Shape"/>

      <div class="container">
          <div class="row">
              <div class="col-lg-3 col-md-6 order-md-1 order-lg-1">

                  <div class="footer-widget">
                      <div class="widget-logo">
                          <a href="#"><img src="./assets/images/logo.png" alt="Logo"/></a>
                      </div>

                      <div class="widget-address">
                          <h4 class="footer-widget-title">Noida</h4>
                          <p>India</p>
                      </div>

                      <ul class="widget-info">
                          <li>
                              <p> <i class="flaticon-email"></i> <a href="mailto:address@gmail.com">address@gmail.com</a> </p>
                          </li>
                          <li>
                              <p> <i class="flaticon-phone-call"></i> <a href="tel:9702621413">(970) 262-1413</a> </p>
                          </li>
                      </ul>

                      <ul class="widget-social">
                          <li><a href="#"><i class="flaticon-facebook"></i></a></li>
                          <li><a href="#"><i class="flaticon-twitter"></i></a></li>
                          <li><a href="#"><i class="flaticon-skype"></i></a></li>
                          <li><a href="#"><i class="flaticon-instagram"></i></a></li>
                      </ul>
                  </div>

              </div>
              <div class="col-lg-6 order-md-3 order-lg-2">

                  <div class="footer-widget-link">

                      <div class="footer-widget">
                          <h4 class="footer-widget-title">Category</h4>

                          <ul class="widget-link">
                              <li><a href="#">Creative Writing</a></li>
                              <li><a href="#">Film & Video</a></li>
                              <li><a href="#">Graphic Design</a></li>
                              <li><a href="#">UI/UX Design</a></li>
                              <li><a href="#">Business Analytics</a></li>
                              <li><a href="#">Marketing</a></li>
                          </ul>

                      </div>
                      <div class="footer-widget">
                          <h4 class="footer-widget-title">Quick Links</h4>

                          <ul class="widget-link">
                              <li><a href="#">Privacy Policy</a></li>
                              <li><a href="#">Discussion</a></li>
                              <li><a href="#">Terms & Conditions</a></li>
                              <li><a href="#">Customer Support</a></li>
                              <li><a href="#">Course FAQ’s</a></li>
                          </ul>

                      </div>

                  </div>

              </div>
              <div class="col-lg-3 col-md-6 order-md-2 order-lg-3">

                  <div class="footer-widget">
                      <h4 class="footer-widget-title">Subscribe</h4>

                      <div class="widget-subscribe">
                          <p>Lorem Ipsum has been them an industry printer took a galley make book.</p>

                          <div class="widget-form">
                              <form action="#">
                                  <input type="text" placeholder="Email here"/>
                                  <button class="btn btn-primary btn-hover-dark">Subscribe Now</button>
                              </form>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>

      <img class="shape-2 animation-left" src="./assets/images/shape/shape-22.png" alt="Shape"/>

  </div>
  <div class="footer-copyright">
      <div class="container">

          <div class="copyright-wrapper">
              <div class="copyright-link">
                  <a href="#">Terms of Service</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Sitemap</a>
                  <a href="#">Security</a>
              </div>

          </div>

      </div>
  </div>

</div>);
}

function LoginURL()
{
  return( <div class="main-wrapper">


  <div class="overlay"></div>
  <div class="section page-banner">

      <img class="shape-1 animation-round" src="./assets/images/shape/shape-8.png" alt="Shape"/>

      <img class="shape-2" src="./assets/images/shape/shape-23.png" alt="Shape"/>

      <div class="container">
          <div class="page-banner-content">
              <ul class="breadcrumb">
              <li><a onClick={()=>{window.location.reload()}}>Home</a></li>
              <li class="active">Login</li>
              </ul>
              <h2 class="title">Login <span>Form</span></h2>
          </div>
      </div>

      <div class="shape-icon-box">

          <img class="icon-shape-1 animation-left" src="./assets/images/shape/shape-5.png" alt="Shape"/>

          <div class="box-content">
              <div class="box-wrapper">
                  <i class="flaticon-badge"></i>
              </div>
          </div>

          <img class="icon-shape-2" src="./assets/images/shape/shape-6.png" alt="Shape"/>

      </div>

      <img class="shape-3" src="./assets/images/shape/shape-24.png" alt="Shape"/>

      <img class="shape-author" src="./assets/images/author/author-11.jpg" alt="Shape"/>

  </div>
  <div class="section section-padding">
      <div class="container">

          <div class="register-login-wrapper">
              <div class="row align-items-center">
                  <div class="col-lg-6">

                      <div class="register-login-images">
                          <div class="shape-1">
                              <img src="./assets/images/shape/shape-26.png" alt="Shape"/>
                          </div>


                          <div class="images">
                              <img src="./assets/images/register-login.png" alt="Register Login"/>
                          </div>
                      </div>

                  </div>
                  <div class="col-lg-6">

                      <div class="register-login-form">
                          <h3 class="title">Login <span>Now</span></h3>

                          <div class="form-wrapper">
                              <form action="#">
                                  <div class="single-form">
                                      <input type="text" placeholder="Username" id="email1"/>
                                  </div>
                                  <div class="single-form">
                                      <input type="password" placeholder="Password" id="password1"/>
                                  </div>
                                  <div class="single-form">
                                      <button onClick={()=>{LoginAuthen()}} class="btn btn-primary btn-hover-dark w-100">Login</button>
                                  </div>
                              </form>
                          </div>
                      </div>

                  </div>
              </div>
          </div>

      </div>
  </div>
  <div class="section footer-section">

      <div class="footer-widget-section">

          <img class="shape-1 animation-down" src="./assets/images/shape/shape-21.png" alt="Shape"/>

          <div class="container">
              <div class="row">
                  <div class="col-lg-3 col-md-6 order-md-1 order-lg-1">

                      <div class="footer-widget">
                          <div class="widget-logo">
                              <a href="#"><img src="./assets/images/logo.png" alt="Logo"/></a>
                          </div>

                          <div class="widget-address">
                              <h4 class="footer-widget-title">Noida</h4>
                              <p>India</p>
                          </div>

                          <ul class="widget-info">
                              <li>
                                  <p> <i class="flaticon-email"></i> <a href="mailto:address@gmail.com">address@gmail.com</a> </p>
                              </li>
                              <li>
                                  <p> <i class="flaticon-phone-call"></i> <a href="tel:9702621413">(970) 262-1413</a> </p>
                              </li>
                          </ul>

                          <ul class="widget-social">
                              <li><a href="#"><i class="flaticon-facebook"></i></a></li>
                              <li><a href="#"><i class="flaticon-twitter"></i></a></li>
                              <li><a href="#"><i class="flaticon-skype"></i></a></li>
                              <li><a href="#"><i class="flaticon-instagram"></i></a></li>
                          </ul>
                      </div>

                  </div>
                  <div class="col-lg-6 order-md-3 order-lg-2">

                      <div class="footer-widget-link">

                          <div class="footer-widget">
                              <h4 class="footer-widget-title">Category</h4>

                              <ul class="widget-link">
                                  <li><a href="#">Creative Writing</a></li>
                                  <li><a href="#">Film & Video</a></li>
                                  <li><a href="#">Graphic Design</a></li>
                                  <li><a href="#">UI/UX Design</a></li>
                                  <li><a href="#">Business Analytics</a></li>
                                  <li><a href="#">Marketing</a></li>
                              </ul>

                          </div>
                          <div class="footer-widget">
                              <h4 class="footer-widget-title">Quick Links</h4>

                              <ul class="widget-link">
                                  <li><a href="#">Privacy Policy</a></li>
                                  <li><a href="#">Discussion</a></li>
                                  <li><a href="#">Terms & Conditions</a></li>
                                  <li><a href="#">Customer Support</a></li>
                                  <li><a href="#">Course FAQ’s</a></li>
                              </ul>

                          </div>

                      </div>

                  </div>
                  <div class="col-lg-3 col-md-6 order-md-2 order-lg-3">

                      <div class="footer-widget">
                          <h4 class="footer-widget-title">Subscribe</h4>

                          <div class="widget-subscribe">
                              <p>Lorem Ipsum has been them an industry printer took a galley make book.</p>

                              <div class="widget-form">
                                  <form action="#">
                                      <input type="text" placeholder="Email here"/>
                                      <button class="btn btn-primary btn-hover-dark">Subscribe Now</button>
                                  </form>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>

          <img class="shape-2 animation-left" src="./assets/images/shape/shape-22.png" alt="Shape"/>

      </div>
      <div class="footer-copyright">
          <div class="container">

              <div class="copyright-wrapper">
                  <div class="copyright-link">
                      <a href="#">Terms of Service</a>
                      <a href="#">Privacy Policy</a>
                      <a href="#">Sitemap</a>
                      <a href="#">Security</a>
                  </div>
                  <div class="copyright-text">
                      <p>&copy; 2021 <span> Edule </span> Made with <i class="icofont-heart-alt"></i> by <a href="#">Codecarnival</a></p>
                  </div>
              </div>

          </div>
      </div>

  </div>
  <a href="#" class="back-to-top">
      <i class="icofont-simple-up"></i>
  </a>

</div>

);
}

function CourseDetails(id)
{
  if(!isNaN(id)){
    console.log(id);
    const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  
      <CourseDetailsURL id={id}/>
  );
  }
}


function EnrollNow(id)
{
    $.ajax({
        url: 'http://localhost:8080/enrolling?courseId=' + id+'&userId='+String(localStorage.getItem("userID")),
        method: 'POST',
        data: {},
        headers: {
            'Access-Control-Allow-Origin': '*',
          },
        // contentType: "application/json",
        // dataType: "json",
        success: function (response) { console.log(response); alert('Enrolled.');window.location.reload(); },
        error: function (xhr, status, error) {console.log(error); }
    });
}


function EnrollDiv(isEnrolledinp)
{
    console.log('EnrollDIv');
    console.log(isEnrolledinp.isEnrolled);
    // console.log(isEnrolled.id);
    if (!isEnrolledinp.isEnrolled){
return (

    <div class="col-lg-12 text-center">
   
        <div class="section-heading"  onClick={()=>{EnrollNow(isEnrolledinp.id)}}>
            {/* @*<h6>Our Courses</h6>*@ */}
            <h2>Click Here To enroll</h2>
        </div>
        </div>);
    }
    else
    {
        return(
        <div class="col-lg-12 text-center">
   
        <div class="section-heading" >
            {/* @*<h6>Our Courses</h6>*@ */}
            <h4>You are Already enrolled for this course.<br />Please watch tutorial and start studying.</h4>
</div>
</div>
        );
    }




}


// function CourseDetailsURL(id)
// {


//     $.ajax({
//         url: 'http://localhost:8080/getcourseById',
//         method: 'POST',
//         data: {},
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//           },
//         // contentType: "application/json",
//         // dataType: "json",
//         success: function (response) {
//              console.log(response);
//              globalStr=''; 
//             //  response.courses.foreach[EachCourse] 
            

            // return (    <div class="main-wrapper">

            //     <div class="overlay"></div>
            //     <div class="section page-banner">
              
            //         <img class="shape-1 animation-round" src="./assets/images/shape/shape-8.png" alt="Shape"/>
              
            //         <img class="shape-2" src="~/Content/assets/images/shape/shape-23.png" alt="Shape"/>
              
            //         <div class="container">
            //             <div class="page-banner-content">
            //                 <ul class="breadcrumb">
            //                     <li><a href="#">Home</a></li>
            //                     <li class="active">Courses Details</li>
            //                 </ul>
            //                 <h2 class="title">Courses <span> Details</span></h2>
            //             </div>
            //         </div>
            //         <EnrollDiv isEnrolled={response.isEnrolled} id={response.courses[4]}/>
            //         <div class="shape-icon-box">
              
            //             <img class="icon-shape-1 animation-left" src="~/Content/assets/images/shape/shape-5.png" alt="Shape"/>
              
            //             <div class="box-content">
            //                 <div class="box-wrapper">
            //                     <i class="flaticon-badge"></i>
            //                 </div>
            //             </div>
              
            //             <img class="icon-shape-2" src="~/Content/assets/images/shape/shape-6.png" alt="Shape"/>
              
            //         </div>
              
            //         <img class="shape-3" src="~/Content/assets/images/shape/shape-24.png" alt="Shape"/>
              
            //         <img class="shape-author" src="~/Content/assets/images/author/author-11.jpg" alt="Shape"/>
              
            //     </div>
            //     <div class="section section-padding mt-n10">
            //         <div class="container">
            //             <div class="row gx-10">
            //                 <div class="col-lg-8">
              
            //                     <div class="courses-details">
              
            //                         <div class="courses-details-images">
            //                             <img src="~/Content/assets/images/courses/courses-details.jpg" alt="Courses Details"/>
            //                             <span class="tags">Finance</span>
              
            //                             <div class="courses-play">
            //                                 <img src="~/Content/assets/images/courses/circle-shape.png" alt="Play"/>
            //                                 <a class="play video-popup" href={response.courses[2]}><i class="flaticon-play"></i></a>
            //                             </div>
            //                         </div>
              
            //                         <h2 class="title">{response.courses[0]}</h2>
              
            //                         <div class="courses-details-admin">
            //                             <div class="admin-author">
            //                                 <div class="author-thumb">
            //                                     <img src="~/Content/assets/images/author/author-01.jpg" alt="Author"/>
            //                                 </div>
            //                                 <div class="author-content">
            //                                     <a class="name" href="#">Pamela Foster</a>
            //                                     <span class="Enroll">286 Enrolled Students</span>
            //                                 </div>
            //                             </div>
            //                             <div class="admin-rating">
            //                                 <span class="rating-count">4.9</span>
            //                                 <span class="rating-star">
            //                                     <span class="rating-bar" style="width: 80%;"></span>
            //                                 </span>
            //                                 <span class="rating-text">(5,764 Rating)</span>
            //                             </div>
            //                         </div>
              
            //                         <div class="courses-details-tab">
              
            //                             <div class="details-tab-menu">
            //                                 <ul class="nav justify-content-center">
            //                                     <li><button class="active" data-bs-toggle="tab" data-bs-target="#description">Description</button></li>
            //                                     <li><button data-bs-toggle="tab" data-bs-target="#instructors">Instructors</button></li>
            //                                     <li><button data-bs-toggle="tab" data-bs-target="#reviews">Reviews</button></li>
            //                                 </ul>
            //                             </div>
            //                             <div class="details-tab-content">
            //                                 <div class="tab-content">
            //                                     <div class="tab-pane fade show active" id="description">
              
            //                                         <div class="tab-description">
            //                                             <div class="description-wrapper">
            //                                                 <h3 class="tab-title">Description:</h3>
            //                                                 <p>{response.courses[1]}</p>
            //                                             </div>
              
            //                                         </div>
              
            //                                     </div>
            //                                     <div class="tab-pane fade" id="instructors">
              
            //                                         <div class="tab-instructors">
            //                                             <h3 class="tab-title">Course Instructor:</h3>
              
            //                                             <div class="row">
            //                                                 <div class="col-md-3 col-6">
            //                                                     <div class="single-team">
            //                                                         <div class="team-thumb">
            //                                                             <img src="~/Content/assets/images/author/author-01.jpg" alt="Author"/>
            //                                                         </div>
            //                                                         <div class="team-content">
            //                                                             <div class="rating">
            //                                                                 <span class="count">4.9</span>
            //                                                                 <i class="icofont-star"></i>
            //                                                                 <span class="text">(rating)</span>
            //                                                             </div>
            //                                                             <h4 class="name">Margarita James</h4>
            //                                                             <span class="designation">MSC, Instructor</span>
            //                                                         </div>
            //                                                     </div>
            //                                                 </div>
            //                                                 <div class="col-md-3 col-6">
            //                                                     <div class="single-team">
            //                                                         <div class="team-thumb">
            //                                                             <img src="~/Content/assets/images/author/author-02.jpg" alt="Author"/>
            //                                                         </div>
            //                                                         <div class="team-content">
            //                                                             <div class="rating">
            //                                                                 <span class="count">4.9</span>
            //                                                                 <i class="icofont-star"></i>
            //                                                                 <span class="text">(rating)</span>
            //                                                             </div>
            //                                                             <h4 class="name">Mitchell Colon</h4>
            //                                                             <span class="designation">BBA, Instructor</span>
            //                                                         </div>
            //                                                     </div>
            //                                                 </div>
            //                                                 <div class="col-md-3 col-6">
            //                                                     <div class="single-team">
            //                                                         <div class="team-thumb">
            //                                                             <img src="~/Content/assets/images/author/author-03.jpg" alt="Author"/>
            //                                                         </div>
            //                                                         <div class="team-content">
            //                                                             <div class="rating">
            //                                                                 <span class="count">4.9</span>
            //                                                                 <i class="icofont-star"></i>
            //                                                                 <span class="text">(rating)</span>
            //                                                             </div>
            //                                                             <h4 class="name">Sonya Gordon</h4>
            //                                                             <span class="designation">MBA, Instructor</span>
            //                                                         </div>
            //                                                     </div>
            //                                                 </div>
            //                                                 <div class="col-md-3 col-6">
            //                                                     <div class="single-team">
            //                                                         <div class="team-thumb">
            //                                                             <img src="~/Content/assets/images/author/author-04.jpg" alt="Author"/>
            //                                                         </div>
            //                                                         <div class="team-content">
            //                                                             <div class="rating">
            //                                                                 <span class="count">4.9</span>
            //                                                                 <i class="icofont-star"></i>
            //                                                                 <span class="text">(rating)</span>
            //                                                             </div>
            //                                                             <h4 class="name">Archie Neal</h4>
            //                                                             <span class="designation">BBS, Instructor</span>
            //                                                         </div>
            //                                                     </div>
            //                                                 </div>
            //                                             </div>
              
            //                                             <div class="row gx-10">
            //                                                 <div class="col-lg-6">
            //                                                     <div class="tab-rating-content">
            //                                                         <h3 class="tab-title">Rating:</h3>
            //                                                         <p>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the i dustry's standard dummy text ever since the 1500 unknown printer took a galley of type.</p>
            //                                                         <p>Lorem Ipsum is simply dummy text of printing and typesetting industry text ever since</p>
            //                                                         <p>Lorem Ipsum is simply dummy text of printing and dustry's standard dummy text ever since the 1500 unknown printer took a galley of type.</p>
            //                                                     </div>
            //                                                 </div>
            //                                                 <div class="col-lg-6">
            //                                                     <div class="tab-rating-box">
            //                                                         <span class="count">4.8 <i class="icofont-star"></i></span>
            //                                                         <p>Rating (86K+)</p>
              
            //                                                         <div class="rating-box-wrapper">
            //                                                             <div class="single-rating">
            //                                                                 <span class="rating-star">
            //                                                                     <span class="rating-bar" style="width: 100%;"></span>
            //                                                                 </span>
            //                                                                 <div class="rating-progress-bar">
            //                                                                     <div class="rating-line" style="width: 75%;"></div>
            //                                                                 </div>
            //                                                             </div>
              
            //                                                             <div class="single-rating">
            //                                                                 <span class="rating-star">
            //                                                                     <span class="rating-bar" style="width: 80%;"></span>
            //                                                                 </span>
            //                                                                 <div class="rating-progress-bar">
            //                                                                     <div class="rating-line" style="width: 90%;"></div>
            //                                                                 </div>
            //                                                             </div>
              
            //                                                             <div class="single-rating">
            //                                                                 <span class="rating-star">
            //                                                                     <span class="rating-bar" style="width: 60%;"></span>
            //                                                                 </span>
            //                                                                 <div class="rating-progress-bar">
            //                                                                     <div class="rating-line" style="width: 500%;"></div>
            //                                                                 </div>
            //                                                             </div>
              
            //                                                             <div class="single-rating">
            //                                                                 <span class="rating-star">
            //                                                                     <span class="rating-bar" style="width: 40%;"></span>
            //                                                                 </span>
            //                                                                 <div class="rating-progress-bar">
            //                                                                     <div class="rating-line" style="width: 80%;"></div>
            //                                                                 </div>
            //                                                             </div>
              
            //                                                             <div class="single-rating">
            //                                                                 <span class="rating-star">
            //                                                                     <span class="rating-bar" style="width: 20%;"></span>
            //                                                                 </span>
            //                                                                 <div class="rating-progress-bar">
            //                                                                     <div class="rating-line" style="width: 40%;"></div>
            //                                                                 </div>
            //                                                             </div>
            //                                                         </div>
            //                                                     </div>
            //                                                 </div>
            //                                             </div>
            //                                         </div>
              
            //                                     </div>
            //                                     <div class="tab-pane fade" id="reviews">
              
            //                                         <div class="tab-reviews">
            //                                             <h3 class="tab-title">Student Reviews:</h3>
              
            //                                             <div class="reviews-wrapper reviews-active">
            //                                                 <div class="swiper-container">
            //                                                     <div class="swiper-wrapper">
              
            //                                                         <div class="single-review swiper-slide">
            //                                                             <div class="review-author">
            //                                                                 <div class="author-thumb">
            //                                                                     <img src="~/Content/assets/images/author/author-06.jpg" alt="Author"/>
            //                                                                     <i class="icofont-quote-left"></i>
            //                                                                 </div>
            //                                                                 <div class="author-content">
            //                                                                     <h4 class="name">Sara Alexander</h4>
            //                                                                     <span class="designation">Product Designer, USA</span>
            //                                                                     <span class="rating-star">
            //                                                                         <span class="rating-bar" style="width: 100%;"></span>
            //                                                                     </span>
            //                                                                 </div>
            //                                                             </div>
            //                                                             <p>Lorem Ipsum has been the industry's standard dummy text since the 1500 when unknown printer took a galley of type and scrambled to make type specimen book has survived not five centuries but also the leap into electronic type and book.</p>
            //                                                         </div>
            //                                                         <div class="single-review swiper-slide">
            //                                                             <div class="review-author">
            //                                                                 <div class="author-thumb">
            //                                                                     <img src="~/Content/assets/images/author/author-07.jpg" alt="Author"/>
            //                                                                     <i class="icofont-quote-left"></i>
            //                                                                 </div>
            //                                                                 <div class="author-content">
            //                                                                     <h4 class="name">Karol Bachman</h4>
            //                                                                     <span class="designation">Product Designer, USA</span>
            //                                                                     <span class="rating-star">
            //                                                                         <span class="rating-bar" style="width: 100%;"></span>
            //                                                                     </span>
            //                                                                 </div>
            //                                                             </div>
            //                                                             <p>Lorem Ipsum has been the industry's standard dummy text since the 1500 when unknown printer took a galley of type and scrambled to make type specimen book has survived not five centuries but also the leap into electronic type and book.</p>
            //                                                         </div>
            //                                                         <div class="single-review swiper-slide">
            //                                                             <div class="review-author">
            //                                                                 <div class="author-thumb">
            //                                                                     <img src="~/Content/assets/images/author/author-03.jpg" alt="Author"/>
            //                                                                     <i class="icofont-quote-left"></i>
            //                                                                 </div>
            //                                                                 <div class="author-content">
            //                                                                     <h4 class="name">Gertude Culbertson</h4>
            //                                                                     <span class="designation">Product Designer, USA</span>
            //                                                                     <span class="rating-star">
            //                                                                         <span class="rating-bar" style="width: 100%;"></span>
            //                                                                     </span>
            //                                                                 </div>
            //                                                             </div>
            //                                                             <p>Lorem Ipsum has been the industry's standard dummy text since the 1500 when unknown printer took a galley of type and scrambled to make type specimen book has survived not five centuries but also the leap into electronic type and book.</p>
            //                                                         </div>
              
            //                                                     </div>
            //                                                     <div class="swiper-pagination"></div>
            //                                                 </div>
            //                                             </div>
              
            //                                             <div class="reviews-btn">
            //                                                 <button type="button" class="btn btn-primary btn-hover-dark" data-bs-toggle="modal" data-bs-target="#reviewsModal">Write A Review</button>
            //                                             </div>
              
            //                                             <div class="modal fade" id="reviewsModal">
            //                                                 <div class="modal-dialog modal-dialog-centered">
            //                                                     <div class="modal-content">
            //                                                         <div class="modal-header">
            //                                                             <h5 class="modal-title">Add a Review</h5>
            //                                                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            //                                                         </div>
              
            //                                                         <div class="modal-body reviews-form">
            //                                                             <form action="#">
            //                                                                 <div class="row">
            //                                                                     <div class="col-md-6">
            //                                                                         <div class="single-form">
            //                                                                             <input type="text" placeholder="Enter your name"/>
            //                                                                         </div>
            //                                                                     </div>
            //                                                                     <div class="col-md-6">
            //                                                                         <div class="single-form">
            //                                                                             <input type="text" placeholder="Enter your Email"/>
            //                                                                         </div>
            //                                                                     </div>
            //                                                                     <div class="col-md-12">
            //                                                                         <div class="reviews-rating">
            //                                                                             <label>Rating</label>
            //                                                                             <ul id="rating" class="rating">
            //                                                                                 <li class="star" title='Poor' data-value='1'><i class="icofont-star"></i></li>
            //                                                                                 <li class="star" title='Poor' data-value='2'><i class="icofont-star"></i></li>
            //                                                                                 <li class="star" title='Poor' data-value='3'><i class="icofont-star"></i></li>
            //                                                                                 <li class="star" title='Poor' data-value='4'><i class="icofont-star"></i></li>
            //                                                                                 <li class="star" title='Poor' data-value='5'><i class="icofont-star"></i></li>
            //                                                                             </ul>
            //                                                                         </div>
            //                                                                     </div>
            //                                                                     <div class="col-md-12">
            //                                                                         <div class="single-form">
            //                                                                             <textarea placeholder="Write your comments here"></textarea>
            //                                                                         </div>
            //                                                                     </div>
            //                                                                     <div class="col-md-12">
            //                                                                         <div class="single-form">
            //                                                                             <button class="btn btn-primary btn-hover-dark">Submit Review</button>
            //                                                                         </div>
            //                                                                     </div>
            //                                                                 </div>
            //                                                             </form>
            //                                                         </div>
            //                                                     </div>
            //                                                 </div>
            //                                             </div>
              
            //                                         </div>
              
            //                                     </div>
            //                                 </div>
            //                             </div>
              
            //                         </div>
              
            //                     </div>
              
            //                 </div>
            //                 <div class="col-lg-4">
            //                     <div class="sidebar">
              
            //                         <div class="sidebar-widget widget-information">
            //                             <div class="info-price">
            //                                 <span class="price">$420.38</span>
            //                             </div>
            //                             <div class="info-list">
            //                                 <ul>
            //                                     <li><i class="icofont-man-in-glasses"></i> <strong>Instructor</strong> <span>Pamela Foster</span></li>
            //                                     <li><i class="icofont-clock-time"></i> <strong>Duration</strong> <span>08 hr 15 mins</span></li>
            //                                     <li><i class="icofont-ui-video-play"></i> <strong>Lectures</strong> <span>29</span></li>
            //                                     <li><i class="icofont-bars"></i> <strong>Level</strong> <span>Secondary</span></li>
            //                                     <li><i class="icofont-book-alt"></i> <strong>Language</strong> <span>English</span></li>
            //                                     <li><i class="icofont-certificate-alt-1"></i> <strong>Certificate</strong> <span>Yes</span></li>
            //                                 </ul>
            //                             </div>
              
            //                         </div>
            //                         <div class="sidebar-widget">
            //                             <h4 class="widget-title">Share Course:</h4>
              
            //                             <ul class="social">
            //                                 <li><a href="#"><i class="flaticon-facebook"></i></a></li>
            //                                 <li><a href="#"><i class="flaticon-linkedin"></i></a></li>
            //                                 <li><a href="#"><i class="flaticon-twitter"></i></a></li>
            //                                 <li><a href="#"><i class="flaticon-skype"></i></a></li>
            //                                 <li><a href="#"><i class="flaticon-instagram"></i></a></li>
            //                             </ul>
            //                         </div>
              
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
              
            //     <div class="section footer-section">
              
            //         <div class="footer-widget-section">
              
            //             <img class="shape-1 animation-down" src="~/Content/assets/images/shape/shape-21.png" alt="Shape"/>
              
            //             <div class="container">
            //                 <div class="row">
            //                     <div class="col-lg-3 col-md-6 order-md-1 order-lg-1">
              
            //                         <div class="footer-widget">
            //                             <div class="widget-logo">
            //                                 <a href="#"><img src="~/Content/assets/images/logo.png" alt="Logo"/></a>
            //                             </div>
              
            //                             <div class="widget-address">
            //                                 <h4 class="footer-widget-title">Noida</h4>
            //                                 <p>India</p>
            //                             </div>
              
            //                             <ul class="widget-info">
            //                                 <li>
            //                                     <p> <i class="flaticon-email"></i> <a href="mailto:address@gmail.com">address@gmail.com</a> </p>
            //                                 </li>
            //                                 <li>
            //                                     <p> <i class="flaticon-phone-call"></i> <a href="tel:9702621413">(970) 262-1413</a> </p>
            //                                 </li>
            //                             </ul>
              
            //                             <ul class="widget-social">
            //                                 <li><a href="#"><i class="flaticon-facebook"></i></a></li>
            //                                 <li><a href="#"><i class="flaticon-twitter"></i></a></li>
            //                                 <li><a href="#"><i class="flaticon-skype"></i></a></li>
            //                                 <li><a href="#"><i class="flaticon-instagram"></i></a></li>
            //                             </ul>
            //                         </div>
              
            //                     </div>
            //                     <div class="col-lg-6 order-md-3 order-lg-2">
              
            //                         <div class="footer-widget-link">
              
            //                             <div class="footer-widget">
            //                                 <h4 class="footer-widget-title">Category</h4>
              
            //                                 <ul class="widget-link">
            //                                     <li><a href="#">Creative Writing</a></li>
            //                                     <li><a href="#">Film & Video</a></li>
            //                                     <li><a href="#">Graphic Design</a></li>
            //                                     <li><a href="#">UI/UX Design</a></li>
            //                                     <li><a href="#">Business Analytics</a></li>
            //                                     <li><a href="#">Marketing</a></li>
            //                                 </ul>
              
            //                             </div>
            //                             <div class="footer-widget">
            //                                 <h4 class="footer-widget-title">Quick Links</h4>
              
            //                                 <ul class="widget-link">
            //                                     <li><a href="#">Privacy Policy</a></li>
            //                                     <li><a href="#">Discussion</a></li>
            //                                     <li><a href="#">Terms & Conditions</a></li>
            //                                     <li><a href="#">Customer Support</a></li>
            //                                     <li><a href="#">Course FAQ’s</a></li>
            //                                 </ul>
              
            //                             </div>
              
            //                         </div>
              
            //                     </div>
            //                     <div class="col-lg-3 col-md-6 order-md-2 order-lg-3">
              
            //                         <div class="footer-widget">
            //                             <h4 class="footer-widget-title">Subscribe</h4>
              
            //                             <div class="widget-subscribe">
            //                                 <p>Lorem Ipsum has been them an industry printer took a galley make book.</p>
              
            //                                 <div class="widget-form">
            //                                     <form action="#">
            //                                         <input type="text" placeholder="Email here"/>
            //                                         <button class="btn btn-primary btn-hover-dark">Subscribe Now</button>
            //                                     </form>
            //                                 </div>
            //                             </div>
            //                         </div>
              
            //                     </div>
            //                 </div>
            //             </div>
              
            //             <img class="shape-2 animation-left" src="~/Content/assets/images/shape/shape-22.png" alt="Shape"/>
              
            //         </div>
            //         <div class="footer-copyright">
            //             <div class="container">
              
            //                 <div class="copyright-wrapper">
            //                     <div class="copyright-link">
            //                         <a href="#">Terms of Service</a>
            //                         <a href="#">Privacy Policy</a>
            //                         <a href="#">Sitemap</a>
            //                         <a href="#">Security</a>
            //                     </div>
            //                     <div class="copyright-text">
            //                         <p>&copy; 2021 <span> Edule </span> Made with <i class="icofont-heart-alt"></i> by <a href="#">Codecarnival</a></p>
            //                     </div>
            //                 </div>
              
            //             </div>
            //         </div>
              
            //     </div>
            //     <a href="#" class="back-to-top">
            //         <i class="icofont-simple-up"></i>
            //     </a>
              
            //   </div>
              
            //   );
            
//             },
//         error: function (xhr, status, error) {console.log(error); }
//     });

// }

const CourseDetailsURL = ({ id }) => {
    const [courseDetails, setCourseDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourseDetails = async () => {
            try {
                console.log('heyy');
                console.log(id);
                const response = await axios.post('http://localhost:8080/getcourseById?userId='+String(localStorage.getItem("userID"))+"&courseId="+String(id), {
                    // Include the id in the request body or as a URL parameter
                    courseId: String(id),userId:String(localStorage.getItem("userID"))
                }, {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    },
                    // Uncomment and adjust if necessary
                    // contentType: "application/json",
                    // dataType: "json"
                });

                setCourseDetails(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchCourseDetails();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!courseDetails) {
        return <div>Loading...</div>;
    }

    // return (
    //     <div>
    //         <h1>Course Details</h1>
    //         {/* Render course details here */}
    //         <pre>{JSON.stringify(courseDetails, null, 2)}</pre>
    //     </div>
    // );

    console.log(courseDetails);
    if(!courseDetails.isEnrolled)
        {
            courseDetails.courses[3]='javascript:void(0)';
        }
    return (    <div class="main-wrapper">

        <div class="overlay"></div>
        <div class="section page-banner">
      
            <img class="shape-1 animation-round" src="./assets/images/shape/shape-8.png" alt="Shape"/>
      
            <img class="shape-2" src="./assets/images/shape/shape-23.png" alt="Shape"/>
      
            <div class="container">
                <div class="page-banner-content">
                    <ul class="breadcrumb">
                        <li><a onClick={()=>{window.location.reload();}}>Home</a></li>
                        <li class="active">Courses Details</li>
                    </ul>
                    <h2 class="title">Courses <span> Details</span></h2>
                </div>
            </div>
            <div class="shape-icon-box">
      
                <img class="icon-shape-1 animation-left" src="./assets/images/shape/shape-5.png" alt="Shape"/>
      
                <div class="box-content">
                    <div class="box-wrapper">
                        <i class="flaticon-badge"></i>
                    </div>
                </div>
      
                <img class="icon-shape-2" src="./assets/images/shape/shape-6.png" alt="Shape"/>
      
            </div>
      
            <img class="shape-3" src="./assets/images/shape/shape-24.png" alt="Shape"/>
      
            <img class="shape-author" src="./assets/images/author/author-11.jpg" alt="Shape"/>
      
        </div>
        <EnrollDiv isEnrolled={courseDetails.isEnrolled} id={courseDetails.courses[4]}/>

        <div class="section section-padding mt-n10">
            <div class="container">
                <div class="row gx-10">
                    <div class="col-lg-8">
      
                        <div class="courses-details">
      
                            <div class="courses-details-images">
                                <img src="./assets/images/courses/courses-details.jpg" alt="Courses Details"/>
                                <span class="tags">{courseDetails.courses[0]}</span>
      
                                <div class="courses-play">
                                    <img src="./assets/images/courses/circle-shape.png" alt="Play"/>
                                    <a class="play video-popup" target="_blank" href={courseDetails.courses[3]}><h1>play</h1></a>
                                </div>
                            </div>
      
                            <h2 class="title">{courseDetails.courses[0]}</h2>
      
                            
      
                            <div class="courses-details-tab">
      
                                
                                <div class="details-tab-content">
                                    <div class="tab-content">
                                        <div class="tab-pane fade show active" id="description">
      
                                            <div class="tab-description">
                                                <div class="description-wrapper">
                                                    <h3 class="tab-title">Description:</h3>
                                                    <p>{courseDetails.courses[1]}</p>
                                                </div>
      
                                            </div>
      
                                        </div>
                                        <div class="tab-pane fade" id="instructors">
      
                                            <div class="tab-instructors">
                                                <h3 class="tab-title">Course Instructor:</h3>
      
                                                <div class="row">
                                                    <div class="col-md-3 col-6">
                                                        <div class="single-team">
                                                            <div class="team-thumb">
                                                                <img src="./assets/images/author/author-01.jpg" alt="Author"/>
                                                            </div>
                                                            <div class="team-content">
                                                                <div class="rating">
                                                                    <span class="count">4.9</span>
                                                                    <i class="icofont-star"></i>
                                                                    <span class="text">(rating)</span>
                                                                </div>
                                                                <h4 class="name">Margarita James</h4>
                                                                <span class="designation">MSC, Instructor</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-6">
                                                        <div class="single-team">
                                                            <div class="team-thumb">
                                                                <img src="./assets/images/author/author-02.jpg" alt="Author"/>
                                                            </div>
                                                            <div class="team-content">
                                                                <div class="rating">
                                                                    <span class="count">4.9</span>
                                                                    <i class="icofont-star"></i>
                                                                    <span class="text">(rating)</span>
                                                                </div>
                                                                <h4 class="name">Mitchell Colon</h4>
                                                                <span class="designation">BBA, Instructor</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-6">
                                                        <div class="single-team">
                                                            <div class="team-thumb">
                                                                <img src="./assets/images/author/author-03.jpg" alt="Author"/>
                                                            </div>
                                                            <div class="team-content">
                                                                <div class="rating">
                                                                    <span class="count">4.9</span>
                                                                    <i class="icofont-star"></i>
                                                                    <span class="text">(rating)</span>
                                                                </div>
                                                                <h4 class="name">Sonya Gordon</h4>
                                                                <span class="designation">MBA, Instructor</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-6">
                                                        <div class="single-team">
                                                            <div class="team-thumb">
                                                                <img src="./assets/images/author/author-04.jpg" alt="Author"/>
                                                            </div>
                                                            <div class="team-content">
                                                                <div class="rating">
                                                                    <span class="count">4.9</span>
                                                                    <i class="icofont-star"></i>
                                                                    <span class="text">(rating)</span>
                                                                </div>
                                                                <h4 class="name">Archie Neal</h4>
                                                                <span class="designation">BBS, Instructor</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
      
                                                <div class="row gx-10">
                                                    <div class="col-lg-6">
                                                        <div class="tab-rating-content">
                                                            <h3 class="tab-title">Rating:</h3>
                                                            <p>Lorem Ipsum is simply dummy text of printing and typesetting industry. Lorem Ipsum has been the i dustry's standard dummy text ever since the 1500 unknown printer took a galley of type.</p>
                                                            <p>Lorem Ipsum is simply dummy text of printing and typesetting industry text ever since</p>
                                                            <p>Lorem Ipsum is simply dummy text of printing and dustry's standard dummy text ever since the 1500 unknown printer took a galley of type.</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="tab-rating-box">
                                                            <span class="count">4.8 <i class="icofont-star"></i></span>
                                                            <p>Rating (86K+)</p>
      
                                                            <div class="rating-box-wrapper">
                                                                <div class="single-rating">
                                                                    <span class="rating-star">
                                                                        {/* <span class="rating-bar" style="width: 100%;"></span> */}
                                                                    </span>
                                                                    <div class="rating-progress-bar">
                                                                        {/* <div class="rating-line" style="width: 75%;"></div> */}
                                                                    </div>
                                                                </div>
      
                                                                <div class="single-rating">
                                                                    <span class="rating-star">
                                                                        {/* <span class="rating-bar" style="width: 80%;"></span> */}
                                                                    </span>
                                                                    <div class="rating-progress-bar">
                                                                        {/* <div class="rating-line" style="width: 90%;"></div> */}
                                                                    </div>
                                                                </div>
      
                                                                <div class="single-rating">
                                                                    <span class="rating-star">
                                                                        {/* <span class="rating-bar" style="width: 60%;"></span> */}
                                                                    </span>
                                                                    <div class="rating-progress-bar">
                                                                        {/* <div class="rating-line" style="width: 500%;"></div> */}
                                                                    </div>
                                                                </div>
      
                                                                <div class="single-rating">
                                                                    <span class="rating-star">
                                                                        {/* <span class="rating-bar" style="width: 40%;"></span> */}
                                                                    </span>
                                                                    <div class="rating-progress-bar">
                                                                        {/* <div class="rating-line" style="width: 80%;"></div> */}
                                                                    </div>
                                                                </div>
      
                                                                <div class="single-rating">
                                                                    <span class="rating-star">
                                                                        {/* <span class="rating-bar" style="width: 20%;"></span> */}
                                                                    </span>
                                                                    <div class="rating-progress-bar">
                                                                        {/* <div class="rating-line" style="width: 40%;"></div> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
      
                                        </div>
                                        <div class="tab-pane fade" id="reviews">
      
                                            <div class="tab-reviews">
                                                <h3 class="tab-title">Student Reviews:</h3>
      
                                                <div class="reviews-wrapper reviews-active">
                                                    <div class="swiper-container">
                                                        <div class="swiper-wrapper">
      
                                                            <div class="single-review swiper-slide">
                                                                <div class="review-author">
                                                                    <div class="author-thumb">
                                                                        <img src="./assets/images/author/author-06.jpg" alt="Author"/>
                                                                        <i class="icofont-quote-left"></i>
                                                                    </div>
                                                                    <div class="author-content">
                                                                        <h4 class="name">Sara Alexander</h4>
                                                                        <span class="designation">Product Designer, USA</span>
                                                                        <span class="rating-star">
                                                                            {/* <span class="rating-bar" style="width: 100%;"></span> */}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <p>Lorem Ipsum has been the industry's standard dummy text since the 1500 when unknown printer took a galley of type and scrambled to make type specimen book has survived not five centuries but also the leap into electronic type and book.</p>
                                                            </div>
                                                            <div class="single-review swiper-slide">
                                                                <div class="review-author">
                                                                    <div class="author-thumb">
                                                                        <img src="./assets/images/author/author-07.jpg" alt="Author"/>
                                                                        <i class="icofont-quote-left"></i>
                                                                    </div>
                                                                    <div class="author-content">
                                                                        <h4 class="name">Karol Bachman</h4>
                                                                        <span class="designation">Product Designer, USA</span>
                                                                        <span class="rating-star">
                                                                            {/* <span class="rating-bar" style="width: 100%;"></span> */}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <p>Lorem Ipsum has been the industry's standard dummy text since the 1500 when unknown printer took a galley of type and scrambled to make type specimen book has survived not five centuries but also the leap into electronic type and book.</p>
                                                            </div>
                                                            <div class="single-review swiper-slide">
                                                                <div class="review-author">
                                                                    <div class="author-thumb">
                                                                        <img src="./assets/images/author/author-03.jpg" alt="Author"/>
                                                                        <i class="icofont-quote-left"></i>
                                                                    </div>
                                                                    <div class="author-content">
                                                                        <h4 class="name">Gertude Culbertson</h4>
                                                                        <span class="designation">Product Designer, USA</span>
                                                                        <span class="rating-star">
                                                                            {/* <span class="rating-bar" style="width: 100%;"></span> */}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <p>Lorem Ipsum has been the industry's standard dummy text since the 1500 when unknown printer took a galley of type and scrambled to make type specimen book has survived not five centuries but also the leap into electronic type and book.</p>
                                                            </div>
      
                                                        </div>
                                                        <div class="swiper-pagination"></div>
                                                    </div>
                                                </div>
      
                                                <div class="reviews-btn">
                                                    <button type="button" class="btn btn-primary btn-hover-dark" data-bs-toggle="modal" data-bs-target="#reviewsModal">Write A Review</button>
                                                </div>
      
                                                <div class="modal fade" id="reviewsModal">
                                                    <div class="modal-dialog modal-dialog-centered">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title">Add a Review</h5>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
      
                                                            <div class="modal-body reviews-form">
                                                                <form action="#">
                                                                    <div class="row">
                                                                        <div class="col-md-6">
                                                                            <div class="single-form">
                                                                                <input type="text" placeholder="Enter your name"/>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <div class="single-form">
                                                                                <input type="text" placeholder="Enter your Email"/>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-12">
                                                                            <div class="reviews-rating">
                                                                                <label>Rating</label>
                                                                                <ul id="rating" class="rating">
                                                                                    <li class="star" title='Poor' data-value='1'><i class="icofont-star"></i></li>
                                                                                    <li class="star" title='Poor' data-value='2'><i class="icofont-star"></i></li>
                                                                                    <li class="star" title='Poor' data-value='3'><i class="icofont-star"></i></li>
                                                                                    <li class="star" title='Poor' data-value='4'><i class="icofont-star"></i></li>
                                                                                    <li class="star" title='Poor' data-value='5'><i class="icofont-star"></i></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-12">
                                                                            <div class="single-form">
                                                                                <textarea placeholder="Write your comments here"></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-12">
                                                                            <div class="single-form">
                                                                                <button class="btn btn-primary btn-hover-dark">Submit Review</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
      
                                            </div>
      
                                        </div>
                                    </div>
                                </div>
      
                            </div>
      
                        </div>
      
                    </div>
                    <div class="col-lg-4">
                        <div class="sidebar">
      
                            <div class="sidebar-widget widget-information">
                                <div class="info-price">
                                    <span class="price">$420.38</span>
                                </div>
                                <div class="info-list">
                                    <ul>
                                        <li><i class="icofont-man-in-glasses"></i> <strong>Instructor</strong> <span>Pamela Foster</span></li>
                                        <li><i class="icofont-clock-time"></i> <strong>Duration</strong> <span>08 hr 15 mins</span></li>
                                        <li><i class="icofont-ui-video-play"></i> <strong>Lectures</strong> <span>29</span></li>
                                        <li><i class="icofont-bars"></i> <strong>Level</strong> <span>Secondary</span></li>
                                        <li><i class="icofont-book-alt"></i> <strong>Language</strong> <span>English</span></li>
                                        <li><i class="icofont-certificate-alt-1"></i> <strong>Certificate</strong> <span>Yes</span></li>
                                    </ul>
                                </div>
      
                            </div>
                            {/* <div class="sidebar-widget">
                                <h4 class="widget-title">Share Course:</h4>
      
                                <ul class="social">
                                    <li><a href="#"><i class="flaticon-facebook"></i></a></li>
                                    <li><a href="#"><i class="flaticon-linkedin"></i></a></li>
                                    <li><a href="#"><i class="flaticon-twitter"></i></a></li>
                                    <li><a href="#"><i class="flaticon-skype"></i></a></li>
                                    <li><a href="#"><i class="flaticon-instagram"></i></a></li>
                                </ul>
                            </div> */}
      
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div class="section footer-section">
      
            <div class="footer-widget-section">
      
                <img class="shape-1 animation-down" src="./assets/images/shape/shape-21.png" alt="Shape"/>
      
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 order-md-1 order-lg-1">
      
                            <div class="footer-widget">
                                <div class="widget-logo">
                                    <a href="#"><img src="./assets/images/logo.png" alt="Logo"/></a>
                                </div>
      
                                <div class="widget-address">
                                    <h4 class="footer-widget-title">Noida</h4>
                                    <p>India</p>
                                </div>
      
                                <ul class="widget-info">
                                    <li>
                                        <p> <i class="flaticon-email"></i> <a href="mailto:address@gmail.com">address@gmail.com</a> </p>
                                    </li>
                                    <li>
                                        <p> <i class="flaticon-phone-call"></i> <a href="tel:9702621413">(970) 262-1413</a> </p>
                                    </li>
                                </ul>
      
                                <ul class="widget-social">
                                    <li><a href="#"><i class="flaticon-facebook"></i></a></li>
                                    <li><a href="#"><i class="flaticon-twitter"></i></a></li>
                                    <li><a href="#"><i class="flaticon-skype"></i></a></li>
                                    <li><a href="#"><i class="flaticon-instagram"></i></a></li>
                                </ul>
                            </div>
      
                        </div>
                        <div class="col-lg-6 order-md-3 order-lg-2">
      
                            <div class="footer-widget-link">
      
                                <div class="footer-widget">
                                    <h4 class="footer-widget-title">Category</h4>
      
                                    <ul class="widget-link">
                                        <li><a href="#">Creative Writing</a></li>
                                        <li><a href="#">Film & Video</a></li>
                                        <li><a href="#">Graphic Design</a></li>
                                        <li><a href="#">UI/UX Design</a></li>
                                        <li><a href="#">Business Analytics</a></li>
                                        <li><a href="#">Marketing</a></li>
                                    </ul>
      
                                </div>
                                <div class="footer-widget">
                                    <h4 class="footer-widget-title">Quick Links</h4>
      
                                    <ul class="widget-link">
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Discussion</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Customer Support</a></li>
                                        <li><a href="#">Course FAQ’s</a></li>
                                    </ul>
      
                                </div>
      
                            </div>
      
                        </div>
                        <div class="col-lg-3 col-md-6 order-md-2 order-lg-3">
      
                            <div class="footer-widget">
                                <h4 class="footer-widget-title">Subscribe</h4>
      
                                <div class="widget-subscribe">
                                    <p>Lorem Ipsum has been them an industry printer took a galley make book.</p>
      
                                    <div class="widget-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email here"/>
                                            <button class="btn btn-primary btn-hover-dark">Subscribe Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
      
                        </div>
                    </div>
                </div>
      
                <img class="shape-2 animation-left" src="./assets/images/shape/shape-22.png" alt="Shape"/>
      
            </div>
            <div class="footer-copyright">
                <div class="container">
      
                    <div class="copyright-wrapper">
                        <div class="copyright-link">
                            <a href="#">Terms of Service</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Sitemap</a>
                            <a href="#">Security</a>
                        </div>
                        <div class="copyright-text">
                            <p>&copy; 2021 <span> Edule </span> Made with <i class="icofont-heart-alt"></i> by <a href="#">Codecarnival</a></p>
                        </div>
                    </div>
      
                </div>
            </div>
      
        </div>
        <a href="#" class="back-to-top">
            <i class="icofont-simple-up"></i>
        </a>
      
      </div>
      
      );
};

function CoursesList(id)
{

    id=1;
  if(!isNaN(id)){
    console.log(id);
    const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  
      <CoursesURL />
  );
  }
}

function Admin(id)
{

    id=1;
  if(!isNaN(id)){
    console.log(id);
    const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  
      <AdminURL />
  );
  }
}

function CoursesURL()
{
  return (
    <div class="main-wrapper">
<Header/>

<div class="section section-padding-02">
<div class="container">

    <div class="courses-top">

        <div class="section-title shape-01">
            <h2 class="main-title">All <span>Courses</span> of Online Learning</h2>
        </div>


    </div>
    <div class="courses-tabs-menu courses-active">
</div>
    <div class="tab-content courses-tab-content">
        <div class="tab-pane fade show active" id="tabs1">

            <div class="courses-wrapper">
                <div class="row" id="homePage">
                    <ForEachCourse/>
                    
                    </div>
            </div>

        </div>
    </div>

    <div class="courses-btn text-center">
        <a href="courses.html" class="btn btn-secondary btn-hover-primary">Other Course</a>
    </div>


</div>
</div>
<Footer/>
</div>



  );
}



function SignUpURL()
{
    return(<div class="main-wrapper">
    
            <div class="overlay"></div>
            <div class="section page-banner">
    
                <img class="shape-1 animation-round" src="./assets/images/shape/shape-8.png" alt="Shape"/>
    
                <img class="shape-2" src="./assets/images/shape/shape-23.png" alt="Shape"/>
    
                <div class="container">
                    <div class="page-banner-content">
                        <ul class="breadcrumb">
                            <li><a onClick={()=>{window.location.reload()}}>Home</a></li>
                            <li class="active">Register</li>
                        </ul>
                        <h2 class="title">Registration <span>Form</span></h2>
                    </div>
                </div>
    
                <div class="shape-icon-box">
    
                    <img class="icon-shape-1 animation-left" src="./assets/images/shape/shape-5.png" alt="Shape"/>
    
                    <div class="box-content">
                        <div class="box-wrapper">
                            <i class="flaticon-badge"></i>
                        </div>
                    </div>
    
                    <img class="icon-shape-2" src="./assets/images/shape/shape-6.png" alt="Shape"/>
    
                </div>
    
                <img class="shape-3" src="./assets/images/shape/shape-24.png" alt="Shape"/>
    
                <img class="shape-author" src="./assets/images/author/author-11.jpg" alt="Shape"/>
    
            </div>
            <div class="section section-padding">
                <div class="container">
    
                    <div class="register-login-wrapper">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
    
                                <div class="register-login-images">
                                    <div class="shape-1">
                                        <img src="./assets/images/shape/shape-26.png" alt="Shape"/>
                                    </div>
    
    
                                    <div class="images">
                                        <img src="./assets/images/register-login.png" alt="Register Login"/>
                                    </div>
                                </div>
    
                            </div>
                            <div class="col-lg-6">
    
                                <div class="register-login-form">
                                    <h3 class="title">Registration <span>Now</span></h3>
    
                                    <div class="form-wrapper">
                                        <form >
                                            <div class="single-form">
                                                <input type="text" placeholder="Name" id="userName2"/>
                                            </div>
                                            <div class="single-form">
                                                <input type="email" placeholder="Email" id="email2"/>
                                            </div>
                                            <div class="single-form">
                                                <input type="password" placeholder="Password" id="password2"/>
                                            </div>
    
                                            <div class="single-form">
                                                <button type="button" onClick={()=>{Register(1)}} class="btn btn-primary btn-hover-dark w-100">Create an account</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
    
            <div class="section footer-section">
    
                <div class="footer-widget-section">
    
                    <img class="shape-1 animation-down" src="./assets/images/shape/shape-21.png" alt="Shape"/>
    
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 order-md-1 order-lg-1">
    
                                <div class="footer-widget">
                                    <div class="widget-logo">
                                        <a href="#"><img src="./assets/images/logo.png" alt="Logo"/></a>
                                    </div>
    
                                    <div class="widget-address">
                                        <h4 class="footer-widget-title">Noida</h4>
                                        <p>India</p>
                                    </div>
    
                                    <ul class="widget-info">
                                        <li>
                                            <p> <i class="flaticon-email"></i> <a href="mailto:address@gmail.com">address@gmail.com</a> </p>
                                        </li>
                                        <li>
                                            <p> <i class="flaticon-phone-call"></i> <a href="tel:9702621413">(970) 262-1413</a> </p>
                                        </li>
                                    </ul>
    
                                    <ul class="widget-social">
                                        <li><a href="#"><i class="flaticon-facebook"></i></a></li>
                                        <li><a href="#"><i class="flaticon-twitter"></i></a></li>
                                        <li><a href="#"><i class="flaticon-skype"></i></a></li>
                                        <li><a href="#"><i class="flaticon-instagram"></i></a></li>
                                    </ul>
                                </div>
    
                            </div>
                            <div class="col-lg-6 order-md-3 order-lg-2">
    
                                <div class="footer-widget-link">
    
                                    <div class="footer-widget">
                                        <h4 class="footer-widget-title">Category</h4>
    
                                        <ul class="widget-link">
                                            <li><a href="#">Creative Writing</a></li>
                                            <li><a href="#">Film & Video</a></li>
                                            <li><a href="#">Graphic Design</a></li>
                                            <li><a href="#">UI/UX Design</a></li>
                                            <li><a href="#">Business Analytics</a></li>
                                            <li><a href="#">Marketing</a></li>
                                        </ul>
    
                                    </div>
                                    <div class="footer-widget">
                                        <h4 class="footer-widget-title">Quick Links</h4>
    
                                        <ul class="widget-link">
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Discussion</a></li>
                                            <li><a href="#">Terms & Conditions</a></li>
                                            <li><a href="#">Customer Support</a></li>
                                            <li><a href="#">Course FAQ’s</a></li>
                                        </ul>
    
                                    </div>
    
                                </div>
    
                            </div>
                            <div class="col-lg-3 col-md-6 order-md-2 order-lg-3">
    
                                <div class="footer-widget">
                                    <h4 class="footer-widget-title">Subscribe</h4>
    
                                    <div class="widget-subscribe">
                                        <p>Lorem Ipsum has been them an industry printer took a galley make book.</p>
    
                                        <div class="widget-form">
                                            <form action="#">
                                                <input type="text" placeholder="Email here"/>
                                                <button class="btn btn-primary btn-hover-dark">Subscribe Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
    
                    <img class="shape-2 animation-left" src="./assets/images/shape/shape-22.png" alt="Shape"/>
    
                </div>
                <div class="footer-copyright">
                    <div class="container">
    
                        <div class="copyright-wrapper">
                            <div class="copyright-link">
                                <a href="#">Terms of Service</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Sitemap</a>
                                <a href="#">Security</a>
                            </div>
                            <div class="copyright-text">
                                <p>&copy; 2021 <span> Edule </span> Made with <i class="icofont-heart-alt"></i> by <a href="#">Codecarnival</a></p>
                            </div>
                        </div>
    
                    </div>
                </div>
    
            </div>
            <a href="#" class="back-to-top">
                <i class="icofont-simple-up"></i>
            </a>
    
        </div>

    );
}

var globalStr ='';

// function EachCourse(item,index)
// {
//     globalStr +=
// }


// function ForEachCourse()
// {
    
//         const [courses, setCourses] = useState([]);
      
//         useEffect(() => {
//           fetch('http://localhost:8080/getHomePageData', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//               'Access-Control-Allow-Origin': '*',
//             },
//             body: JSON.stringify({}),
//           })
//             .then(response => response.text())
//             .then(data => {
//             //   console.log(data);
//               const mainArr = data.split('#####');
//               const coursesData = mainArr.map(courseStr => {
//                 const item = courseStr.split('~~');
//                 return {
//                   title: item[0],
//                   imgSrc: item[2],
//                   detailsUrl: item[4],
//                 };
//               });
//               setCourses(coursesData);
//             })
//             .catch(error => console.error('Error fetching data:', error));
//         }, []);
      
//         const handleRedirect = (url) => {
//           // Replace this with your actual redirect logic
//           console.log(`Redirecting to ${url}`);
//           window.location.href = url;
//         };
      
//         return (
//           <div id="homePage">
//             {courses.map((course, index) => (
//               <div className="col-lg-4 col-md-6" key={index} onClick={() => handleRedirect(course.detailsUrl)}>
//                 <div className="single-courses">
//                   <div className="courses-images">
//                     <a href="#"><img src={course.imgSrc} alt="Courses" /></a>
//                   </div>
//                   <div className="courses-content">
//                     <h4 className="title"><a href="courses-details.html">{course.title}</a></h4>
//                     <div className="courses-meta">
//                       <span><i className="icofont-clock-time"></i> 01 hr 15 mins</span>
//                       <span><i className="icofont-read-book"></i> 1 Lecture</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         );
//       }
      

const ForEachCourse = () => {

    window.Redirect =(action) =>
    {
        console.log('inside');
        console.log(action);
        CourseDetails(action);
    
    }
    
    
    
    
        const [coursesHTML, setCoursesHTML] = useState(''); // State to store generated HTML
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get('http://localhost:8080/getHomePageData', {});
              console.log(response.data); // Log the response for debugging
              const mainArr = response.data.split("#####"); // Split the response into main array
      
              let htmlContent = ''; // Variable to accumulate HTML content
      
              mainArr.forEach(item => {
                const subArr = item.split("~~"); // Split each item into sub-array
      
                htmlContent += `
                  <div class="col-lg-4 col-md-6" onclick="Redirect('${subArr[4]}')">
                    <div class="single-courses">
                      <div class="courses-images">
                        <a href="#"><img src="${subArr[2]}" alt="Courses"/></a>
                      </div>
                      <div class="courses-content">
                        <h4 class="title"><a href="courses-details.html">${subArr[0]}</a></h4>
                        <div class="courses-meta">
                          <span> <i class="icofont-clock-time"></i> 01 hr 15 mins</span>
                          <span> <i class="icofont-read-book"></i> 1 Lectures </span>
                        </div>
                      </div>
                    </div>
                  </div>
                `;
              });
      
              htmlContent += `<script>function Redirect(action) { CourseDetails(action); }</script>`; // Add script for redirection
      
              setCoursesHTML(htmlContent); // Update state with generated HTML
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData(); // Call fetchData function on component mount
        }, []); // Empty dependency array ensures useEffect runs only once on mount
      
        return (
          <div id="homePage" dangerouslySetInnerHTML={{ __html: coursesHTML }}></div>
        );
      };
      


// function ForEachCourse(course)
// {
//     $.ajax({
//         url: 'http://localhost:8080/getHomePageData',
//         method: 'POST',
//         data: {},
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//           },
//         // contentType: "application/json",
//         // dataType: "json",
//         success: function (response) {
//              console.log(response);
//              globalStr=''; 
//             //  response=JSON.parse(response);
//             //  response.courses.foreach[EachCourse] 
//             // console.log(response);

//             var mainArr=response.split("#####");
//             var a="";
//             // console.log(mainArr);
//             for( var arr in mainArr){
//                 // console.log(arr);
//                 var item=mainArr[arr].split("~~");
               
//             //    {item.map(items=>(console.log(items)))}
               
//                 a += 
        

        
//             '<div class="col-lg-4 col-md-6" onclick=Redirect('+item[4]+')>'+
//             '<div class="single-courses">'+
//                 '<div class="courses-images">'+
//                     '<a href="#"><img src='+item[2]+' alt="Courses"/></a>'+
//                 '</div>'+
//                 '<div class="courses-content">'+
                   

//                    ' <h4 class="title"><a href="courses-details.html">'+item[0]+'</a></h4>'+
//                     '<div class="courses-meta">'+
//                         '<span> <i class="icofont-clock-time"></i> 01 hr 15 mins</span>'+
//                         '<span> <i class="icofont-read-book"></i> 1 Lectures </span>'+
//                     '</div>'+
                    
//                ' </div></div></div>'
           
            
            
            
//         }
//         // console.log(a);
//         a+="<script>function Redirect(action){ CourseDetails(action);}</script>";
//         document.getElementById("homePage").innerHTML=a;
//             // return(a)
            
//             },
//         error: function (xhr, status, error) {console.log(error); }
//     });
// }

function Redirect(action){ CourseDetails(action);}


function SignUp2(id)
{
if(!isNaN(id)){
  console.log(id);
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <SignUpURL />
);
}
}

function Login(id)
{
if(!isNaN(id)){
  console.log(id);
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <LoginURL />
);
}
}

function LoginAuthen() {
    console.log("hello world");
    // const MyComponent = withAxios({
    //     url: 'http://localhost:8080/doLogin?userName=' + $('#email1').val() + '&password=' + $('#password1').val(),
    //     params: {}
    //     })(class MyComponentRaw extends React.Component {
    //     render() {
    //     const {error, response, isLoading, makeRequest, axios} = this.props
    //     if(error) {
       
    //     return (<div>Something bad happened: {error.message}</div>)
    //     } else if(isLoading) {
    //     return (<div className="loader"></div>)
    //     } else if(response !== null) {
    //     return (<div>{response.data.message}</div>)
    //     }
    //     return null
    //     }
    //    })
            $.ajax({
                url: 'http://localhost:8080/doLogin?userName=' + $('#email1').val() + '&password=' + $('#password1').val(),
                method: 'POST',
                data: {},
                headers: {
                    'Access-Control-Allow-Origin': '*',
                  },
                // contentType: "application/json",
                // dataType: "json",
                success: function (response) { 
                    
                    console.log(response); 
                    var c= response.split('##');

                    localStorage.setItem( 'IsLogin',1 );
                    localStorage.setItem( 'UserName',c[2] );
                    localStorage.setItem( 'Role',c[0] );
                    localStorage.setItem( 'userID',c[1] );
                    console.log(String(c[0])=="admin");
                    if(String(c[0])=="admin")
                        {
                            Admin(1);
                        }
                        else{
                            CoursesList(1); 
                        }
                },
                error: function (xhr, status, error) {console.log(error); }
            });
}

function Logout() {
    // const sess = SessionManage();

    // $.ajax({
    //     url: 'http://localhost:8080/doLogout',
    //     method: 'POST',
    //     data: {},
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //       },
    //     // contentType: "application/json",
    //     // dataType: "json",
    //     success: function (response) { 
    //         console.log(response); 
    //         localStorage.setItem( 'IsLogin',0 ); 
    //         window.location.reload();

    //     },
    //     error: function (xhr, status, error) {console.log(error); }
    // });
    localStorage.setItem( 'IsLogin',0 ); 
    window.location.reload();
    // || 0;

    
}



function Register(event)
{
    //event.preventDefault();
    console.log($('#email2').val());
    $.ajax({
        url: 'http://localhost:8080/signUp?userName=' + $('#userName2').val() + '&email=' + $('#email2').val() + '&password=' + $('#password2').val()+ '&userRole=user',
        method: 'POST',
        data: {},
        headers: {
            'Access-Control-Allow-Origin': '*',
          },
        // contentType: "application/json",
        // dataType: "json",
        success: function (response) { console.log(response); alert('Success.');window.location.reload(); },
        error: function (xhr, status, error) {console.log(error); }
    });


}
    

export default App;
