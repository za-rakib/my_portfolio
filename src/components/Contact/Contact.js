import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className='contactSection mt-5'>
            <div>
                <div className="row ">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <div>
                                    <h2>Contact with Me</h2>
                                </div>
                                <form className="p-5 " method="post" data-form-title="CONTACT US">
                                    <input type="hidden" data-form-email="true"></input>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="name" required="" placeholder="Name" data-form-field="Name"></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" required="" placeholder="Email Address" data-form-field="Email"></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" placeholder="Subject" data-form-field="Subject"></input>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" placeholder="Message" rows="7" data-form-field="Message"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-lg btn-danger">CONTACT US</button>
                                    </div>
                                </form>
                                {/* <form>
                                    <div className="row pt-5 mx-auto">

                                    </div>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;