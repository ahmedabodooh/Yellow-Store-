import React from "react";
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'; // استيراد الأيقونات اللازمة

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div class="container">
                <div class="row">
                    <div className="col-3">
                        <h1>Yellow Store</h1>
                        <h5>social media</h5>
                        <div className="icon">
                        <a href="https://www.facebook.com/yellowstore34/mentions?locale=ar_AR" className="fac"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://www.instagram.com/yellow_store34?igsh=dDJlcWdwMWkwaXhs" className="ins"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="" className="tik"><FontAwesomeIcon icon={faTiktok} /></a>
                        </div>
                    </div>
                    <div className="col">
                        <h1>المتجر</h1>
                        <a href="" >المنتجات</a> <br/>
                        <a href="" >ملخص</a><br/>
                        <a href="" >تعليقات</a><br/>
                    </div>
                    <div className="col">
                        <h1>الشركة</h1>
                        <a href="" >معلومات عنا</a><br/>
                        <a href="" >اتصال</a><br/>
                        <a href="" >اخبار</a><br/>
                    </div>
                    <div className="col-5">
                        <div className="form">
                        <input placeholder="ادخل الايميل"></input>
                        <button>سجل</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
