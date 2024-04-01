import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Get = () => {
    return (
        <div>
            <Header></Header>

            <section class="section-padding-150" id="about">
                <div class="container">


                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-5">
                            <div class="about-us-content">
                                <h1 style={{ color: "darkred" }}>GET METHOD</h1><br></br>
                                <p>GET is used to request data from a specified resource. It can retrieve any visible data to a client, such as HTML documents, images, and videos: To send a GET request, a client needs to specify the URL of the resource it wants to retrieve.</p>
                            </div>
                            <div className='api-function'>
                                <center><h4 style={{ color: "darkred", paddingBottom: 25 }}>Click the button to get data from database using GET Method</h4>
                                    <button style={{ width: 150 }} className='btn btn-success'>GET METHOD</button></center>

                                <div class="card" style={{ width: "28rem", marginTop: 20 }}>
                                    <div class="card-body">
                                        <h3 class="card-title">GET METHOD</h3>

                                        <p class="card-text">THhe content is displayed from database</p>
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

export default Get;