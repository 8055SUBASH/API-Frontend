import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>

            <section class="caviar-hero-area" id="home">
                {/* <!-- Welcome Slides --> */}
                <div class="caviar-hero-slides owl-carousel">
                    {/* <!-- Single Slides --> */}
                    <div class="single-hero-slides bg-img" style={{ backgroundImage: `url(${require("../img/bg-img/hero-1.jpg")})` }}>
                        <div class="container h-100">
                            <div class="row h-100 align-items-center">
                                <div class="col-11 col-md-6 col-lg-4">
                                    <div class="hero-content">
                                        <h2>What is API?</h2>
                                        <p>API stands for Application Programming Interface. An API is an process of sending a request to a web API from within React, which allows your application to interact and exchange information with other systems.</p>
                                        <a href="#" class="btn caviar-btn"><span></span> Methods in API</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Slider Nav --> */}
                    </div>
                </div>
            </section>

            <section class="caviar-about-us-area section-padding-150" id="about">
                <div class="container">
                    {/* <!-- About Us Single Area --> */}
                    <div class="row align-items-center">
                        <div class="col-12 col-md-6">
                            <div class="about-us-thumbnail wow fadeInUp" data-wow-delay="0.5s">
                                <img src={require("../img/read.jpg")} alt="API"></img>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-5 ml-md-auto">
                            <div class="section-heading">
                                <h2>What are API Methods?</h2>
                            </div>
                            <div class="about-us-content">
                                <span>GET API</span>
                                <p>GET is used to request data from a specified resource. It can retrieve any visible data to a client, such as HTML documents, images, and videos: To send a GET request, a client needs to specify the URL of the resource it wants to retrieve.</p>
                            </div>
                        </div>
                    </div><br></br><hr></hr><br></br>


                    <div class="row align-items-center">
                        <div class="col-12 col-md-6 col-lg-5">
                            <div class="about-us-content">
                                <span>POST API</span>
                                <p>The POST method is one of the most commonly used HTTP methods in REST APIs and is used to create a new resource on the server. Unlike the GET method, which is used to retrieve resources, the POST method is used to submit data to the server for processing.</p>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 ml-md-auto">
                            <div class="about-us-thumbnail wow fadeInUp" >
                                <img src={require("../img/create.jpg")} alt="API"></img>
                            </div>
                        </div>
                    </div><br></br><hr></hr><br></br>

                    <div class="row align-items-center">
                        <div class="col-12 col-md-6">
                            <div class="about-us-thumbnail wow fadeInUp" >
                                <img src={require("../img/update.jpg")} alt="API"></img>                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-5 ml-md-auto">
                            <div class="about-us-content">
                                <span>PUT API</span>
                                <p>PUT is a HTTP method most often used in RESTful APIs. Traditionally, PUT is used to update an existing resource with new data or create a resource if it doesn't already exist.</p>
                            </div>
                        </div>
                    </div><br></br><hr></hr><br></br>


                    <div class="row align-items-center">
                        <div class="col-12 col-md-6 col-lg-5">
                            <div class="about-us-content">
                                <span>DELETE API</span>
                                <p>The DELETE method is used to delete a specific resource in a REST API. It is performed by sending a DELETE request to the URL of the resource to be deleted, and the API will remove the resource if it exists.</p>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 ml-md-auto">
                            <div class="about-us-thumbnail wow fadeInUp" >
                                <img src={require("../img/delete.jpg")} alt="API"></img>
                            </div>
                        </div>
                    </div><br></br><hr></hr><br></br>

                </div>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default Home;