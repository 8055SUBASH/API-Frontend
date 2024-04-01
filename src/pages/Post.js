import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Post = () => {
    return (
        <div>
            <Header></Header>

            <section class="section-padding-150" id="about">
                <div class="container">


                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-5">
                            <div class="about-us-content">
                                <h1 style={{ color: "darkred" }}>POST METHOD</h1><br></br>
                                <p>The POST method is one of the most commonly used HTTP methods in REST APIs and is used to create a new resource on the server. Unlike the GET method, which is used to retrieve resources, the POST method is used to submit data to the server for processing.</p>
                            </div>
                            <div className='api-function'>
                                <center><h4 style={{ color: "darkred", paddingBottom: 25 }}>CREATE data using POST Method</h4>
                                    <button style={{ width: 150 }} className='btn btn-success'>POST METHOD</button></center>

                                <div class="card" style={{ width: "28rem", marginTop: 20 }}>
                                    <div class="card-body">
                                        <h3 class="card-title">POST METHOD</h3>

                                        <p class="card-text">The content is displayed from database</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class=" col-md-6 ml-md-auto">

                            <div className='success-part'></div><br></br>
                            <div className='error-part'></div>

                        </div>
                    </div>

                </div>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default Post;