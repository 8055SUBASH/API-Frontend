import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Put = () => {
    return (
        <div>
            <Header></Header>

            <section class="section-padding-150" id="about">
                <div class="container">


                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-5">
                            <div class="about-us-content">
                                <h1 style={{ color: "darkred" }}>PUT METHOD</h1><br></br>
                                <p>PUT is a HTTP method most often used in RESTful APIs. Traditionally, PUT is used to update an existing resource with new data or create a resource if it doesn't already exist.</p>
                            </div>
                            <div className='api-function'>
                                <center><h4 style={{ color: "darkred", paddingBottom: 25 }}>UPDATE the existing data from the database using PUT Method</h4>
                                    <button style={{ width: 150 }} className='btn btn-success'>PUT METHOD</button></center>

                                <div class="card" style={{ width: "28rem", marginTop: 20 }}>
                                    <div class="card-body">
                                        <h3 class="card-title">PUT METHOD</h3>

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

export default Put;