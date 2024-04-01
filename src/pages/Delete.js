import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Delete = () => {
    return (
        <div>
            <Header></Header>


            <section class="section-padding-150" id="about">
                <div class="container">


                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-5">
                            <div class="about-us-content">
                                <h1 style={{ color: "darkred" }}>DELETE METHOD</h1><br></br>
                                <p>The DELETE method is used to delete a specific resource in a REST API. It is performed by sending a DELETE request to the URL of the resource to be deleted, and the API will remove the resource if it exists.</p>
                            </div>
                            <div className='api-function'>
                                <center><h4 style={{ color: "darkred", paddingBottom: 25 }}>DELETE the data from the database using DELETE Method</h4>
                                </center>

                                <div class="card" style={{ width: "28rem", marginTop: 20 }}>
                                    <div class="card-body">
                                        <h3 class="card-title">DELETE METHOD</h3>

                                        <p class="card-text">The content is displayed from database</p>
                                        <button className='btn btn-danger'>DELETE</button>
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

export default Delete;