// import logo from './logo.svg';
// import './assets/css/style.min.css';
// import {Link} from "react-router-dom";



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// function SignUpApp()
// {
//     return(<div class="main-wrapper">
    
//             <div class="overlay"></div>
//             <div class="section page-banner">
    
//                 <img class="shape-1 animation-round" src="~/Content/assets/images/shape/shape-8.png" alt="Shape"/>
    
//                 <img class="shape-2" src="~/Content/assets/images/shape/shape-23.png" alt="Shape"/>
    
//                 <div class="container">
//                     <div class="page-banner-content">
//                         <ul class="breadcrumb">
//                             <li><a href="#">Home</a></li>
//                             <li class="active">Register</li>
//                         </ul>
//                         <h2 class="title">Registration <span>Form</span></h2>
//                     </div>
//                 </div>
    
//                 <div class="shape-icon-box">
    
//                     <img class="icon-shape-1 animation-left" src="~/Content/assets/images/shape/shape-5.png" alt="Shape"/>
    
//                     <div class="box-content">
//                         <div class="box-wrapper">
//                             <i class="flaticon-badge"></i>
//                         </div>
//                     </div>
    
//                     <img class="icon-shape-2" src="~/Content/assets/images/shape/shape-6.png" alt="Shape"/>
    
//                 </div>
    
//                 <img class="shape-3" src="~/Content/assets/images/shape/shape-24.png" alt="Shape"/>
    
//                 <img class="shape-author" src="~/Content/assets/images/author/author-11.jpg" alt="Shape"/>
    
//             </div>
//             <div class="section section-padding">
//                 <div class="container">
    
//                     <div class="register-login-wrapper">
//                         <div class="row align-items-center">
//                             <div class="col-lg-6">
    
//                                 <div class="register-login-images">
//                                     <div class="shape-1">
//                                         <img src="~/Content/assets/images/shape/shape-26.png" alt="Shape"/>
//                                     </div>
    
    
//                                     <div class="images">
//                                         <img src="~/Content/assets/images/register-login.png" alt="Register Login"/>
//                                     </div>
//                                 </div>
    
//                             </div>
//                             <div class="col-lg-6">
    
//                                 <div class="register-login-form">
//                                     <h3 class="title">Registration <span>Now</span></h3>
    
//                                     <div class="form-wrapper">
//                                         <form action="Register">
//                                             <div class="single-form">
//                                                 <input type="text" placeholder="Name" name="name"/>
//                                             </div>
//                                             <div class="single-form">
//                                                 <input type="email" placeholder="Email" name="email"/>
//                                             </div>
//                                             <div class="single-form">
//                                                 <input type="password" placeholder="Password" name="password"/>
//                                             </div>
    
//                                             <div class="single-form">
//                                                 <button type="submit" class="btn btn-primary btn-hover-dark w-100">Create an account</button>
//                                                 <button type="submit" class="btn btn-primary btn-hover-dark w-100">Create an account</button>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
    
//                             </div>
//                         </div>
//                     </div>
    
//                 </div>
//             </div>
    
//             <div class="section footer-section">
    
//                 <div class="footer-widget-section">
    
//                     <img class="shape-1 animation-down" src="~/Content/assets/images/shape/shape-21.png" alt="Shape"/>
    
//                     <div class="container">
//                         <div class="row">
//                             <div class="col-lg-3 col-md-6 order-md-1 order-lg-1">
    
//                                 <div class="footer-widget">
//                                     <div class="widget-logo">
//                                         <a href="#"><img src="~/Content/assets/images/logo.png" alt="Logo"/></a>
//                                     </div>
    
//                                     <div class="widget-address">
//                                         <h4 class="footer-widget-title">Noida</h4>
//                                         <p>India</p>
//                                     </div>
    
//                                     <ul class="widget-info">
//                                         <li>
//                                             <p> <i class="flaticon-email"></i> <a href="mailto:address@gmail.com">address@gmail.com</a> </p>
//                                         </li>
//                                         <li>
//                                             <p> <i class="flaticon-phone-call"></i> <a href="tel:9702621413">(970) 262-1413</a> </p>
//                                         </li>
//                                     </ul>
    
//                                     <ul class="widget-social">
//                                         <li><a href="#"><i class="flaticon-facebook"></i></a></li>
//                                         <li><a href="#"><i class="flaticon-twitter"></i></a></li>
//                                         <li><a href="#"><i class="flaticon-skype"></i></a></li>
//                                         <li><a href="#"><i class="flaticon-instagram"></i></a></li>
//                                     </ul>
//                                 </div>
    
//                             </div>
//                             <div class="col-lg-6 order-md-3 order-lg-2">
    
//                                 <div class="footer-widget-link">
    
//                                     <div class="footer-widget">
//                                         <h4 class="footer-widget-title">Category</h4>
    
//                                         <ul class="widget-link">
//                                             <li><a href="#">Creative Writing</a></li>
//                                             <li><a href="#">Film & Video</a></li>
//                                             <li><a href="#">Graphic Design</a></li>
//                                             <li><a href="#">UI/UX Design</a></li>
//                                             <li><a href="#">Business Analytics</a></li>
//                                             <li><a href="#">Marketing</a></li>
//                                         </ul>
    
//                                     </div>
//                                     <div class="footer-widget">
//                                         <h4 class="footer-widget-title">Quick Links</h4>
    
//                                         <ul class="widget-link">
//                                             <li><a href="#">Privacy Policy</a></li>
//                                             <li><a href="#">Discussion</a></li>
//                                             <li><a href="#">Terms & Conditions</a></li>
//                                             <li><a href="#">Customer Support</a></li>
//                                             <li><a href="#">Course FAQ’s</a></li>
//                                         </ul>
    
//                                     </div>
    
//                                 </div>
    
//                             </div>
//                             <div class="col-lg-3 col-md-6 order-md-2 order-lg-3">
    
//                                 <div class="footer-widget">
//                                     <h4 class="footer-widget-title">Subscribe</h4>
    
//                                     <div class="widget-subscribe">
//                                         <p>Lorem Ipsum has been them an industry printer took a galley make book.</p>
    
//                                         <div class="widget-form">
//                                             <form action="#">
//                                                 <input type="text" placeholder="Email here"/>
//                                                 <button class="btn btn-primary btn-hover-dark">Subscribe Now</button>
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
    
//                             </div>
//                         </div>
//                     </div>
    
//                     <img class="shape-2 animation-left" src="~/Content/assets/images/shape/shape-22.png" alt="Shape"/>
    
//                 </div>
//                 <div class="footer-copyright">
//                     <div class="container">
    
//                         <div class="copyright-wrapper">
//                             <div class="copyright-link">
//                                 <a href="#">Terms of Service</a>
//                                 <a href="#">Privacy Policy</a>
//                                 <a href="#">Sitemap</a>
//                                 <a href="#">Security</a>
//                             </div>
//                             <div class="copyright-text">
//                                 <p>&copy; 2021 <span> Edule </span> Made with <i class="icofont-heart-alt"></i> by <a href="#">Codecarnival</a></p>
//                             </div>
//                         </div>
    
//                     </div>
//                 </div>
    
//             </div>
//             <a href="#" class="back-to-top">
//                 <i class="icofont-simple-up"></i>
//             </a>
    
//         </div>

//     );
// }



    
// // function login() {
// //             $.ajax({
// //                 url: 'Login?uname=' + $('#email1').val() + '&pw=' + $('#password1').val(),
// //                 method: 'GET',
// //                 data: {},
// //                 success: function () { },
// //                 error: function () { }
// //             });
// // }


// // function logout() {
// //     window.location.href = "Logout";
// // }
    
// export default SignUpApp;