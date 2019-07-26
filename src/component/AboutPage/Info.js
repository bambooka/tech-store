import React from 'react';
import Title from '../Title';
import AboutBg from '../../images/aboutBcg.jpeg'


export default function Info (){
    return(
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img
                            src={AboutBg}
                            className="img-fluid img-thumbnail"
                            alt="about" />
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title='about us' />
                        <p className="text-lead text-muted my-3">
                            Our company provides to you services by searching different devices. You could to buy directly some of it on our site.
                        </p>
                        <button type="button" className="main-link" style={{marginTop: '2rem'}}>more info</button>
                    </div>
                </div>
            </div>

        </section>
    )
}