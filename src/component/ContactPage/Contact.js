import React from 'react';
import Title from '../Title';

export default function Contact(){
    return(
        <section className="py-5">
            <div className="row">
                <div className="col-10 col-md-6 mx-auto my-3">
                    <Title title="contact us" style={{marginBottom: '2rem'}}/>
                    <form className="form-group" action="https://formspree.io/sumkina.ol@yandex.ru" method="POST">
                        <input type="text" className="form-control my-2" name="firstName" placeholder="John Smith"/>
                        <input type="email" className="form-control my-2" name="email" placeholder="example@email.com"/>
                        <input type="text" className="form-control my-2" name="subject" placeholder="Type your subject"/>
                        <textarea name="message" className="form-control my-2" rows="5" placeholder="type your message"/>
                        <div className="form-group mt-3">
                            <input type="submit" className="form-control bg-primary text-white" value="Send"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}