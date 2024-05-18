import React from "react";
import { Link } from 'react-router-dom';
import './Products'
import './Products.css'
import Photo111 from '../../img/best1.jpg'
import Photo22 from '../../img/best2.jpg'
import Photo33 from '../../img/best3.jpg'
import Photo1 from '../../img/1.jpg'
import Photo2 from '../../img/2.jpg'
import Photo3 from '../../img/3.jpg'
import Photo4 from '../../img/4.jpg'
import Photo5 from '../../img/5.jpg'
import Photo6 from '../../img/6.jpg'
import Photo7 from '../../img/7.jpg'
import Photo8 from '../../img/8.jpg'
import Photo9 from '../../img/9.jpg'
import Photo10 from '../../img/10.jpg'
import Photo11 from '../../img/11.jpg'
import Photo12 from '../../img/12.jpg'
import Photo13 from '../../img/13.jpg'
import Photo14 from '../../img/14.jpg'
import Photo15 from '../../img/15.jpg'
import Photo16 from '../../img/10-removebg-preview.png'
import Photo17 from '../../img/20.jpg'
import Photo18 from '../../img/21.jpg'
import Photo19 from '../../img/22.jpg'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import CardGroup from 'react-bootstrap/CardGroup';

const Products = () => {
    return (
        <>
        <div className="products" id="product">
            <div className="container ">
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6 mt-5">
                        <h1>أفضل مبيعات</h1>
                        <h5 className=" mt-5">احصل على أحدث الاتجاهات مع مجموعتنا المختارة من الأنماط الأكثر مبيعًا.</h5>
                    </div>
                </div>
                <div className="row  mt-5">
                    <div className="col-md-4 text-center justify-content-md-center">
                        <Card style={{ width: '18rem', }} >
                            <Card.Img variant="top" src={Photo22} />
                            <Card.Body>
                                <Card.Title>صنية شبكة</Card.Title>
                                <Card.Text>
                                    $60.5 &nbsp;&nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;&nbsp;   4.9   <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 text-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Photo111} />
                            <Card.Body>
                                <Card.Title>صنية شبكة</Card.Title>
                                <Card.Text>
                                    $50.99  &nbsp;&nbsp;&nbsp;&nbsp;   | &nbsp;&nbsp;&nbsp;&nbsp;  5.0    <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 text-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Photo33} />
                            <Card.Body>
                                <Card.Title>صنية فاتحة</Card.Title>
                                <Card.Text>
                                    $45.99 &nbsp;&nbsp;&nbsp;&nbsp; |  &nbsp;&nbsp;&nbsp;&nbsp; 4.5     <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6 mt-5">
                    {/* <Link to="../deatails/Deatails.js">Go to Second Page</Link> */}
                    <Button variant="outline-warning" > المزيد <span>&rarr;</span></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6 mt-5">
                        <h1>منتجاتنا &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                </div>
                <div className="row  mt-5">
                    <div className="col-md-4 text-center justify-content-md-center">
                        <Card style={{ width: '18rem', }} >
                            <Card.Img variant="top" src={Photo1} />
                            <Card.Body>
                                <Card.Title>صنية شبكة</Card.Title>
                                <Card.Text>
                                    $60.5 &nbsp;&nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;&nbsp;   4.9   <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 text-center justify-content-md-center">
                        <Card style={{ width: '18rem', }} >
                            <Card.Img variant="top" src={Photo2} />
                            <Card.Body>
                                <Card.Title>صنية شبكة</Card.Title>
                                <Card.Text>
                                    $60.5 &nbsp;&nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;&nbsp;   4.9   <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 text-center justify-content-md-center">
                        <Card style={{ width: '18rem', }} >
                            <Card.Img variant="top" src={Photo3} />
                            <Card.Body>
                                <Card.Title>صنية شبكة</Card.Title>
                                <Card.Text>
                                    $60.5 &nbsp;&nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;&nbsp;   4.9   <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5 text-center justify-content-md-center">
                        <Card style={{ width: '18rem', }} >
                            <Card.Img variant="top" src={Photo4} />
                            <Card.Body>
                                <Card.Title>صنية شبكة</Card.Title>
                                <Card.Text>
                                    $60.5 &nbsp;&nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;&nbsp;   4.9   <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5 text-center justify-content-md-center">
                        <Card style={{ width: '18rem', }} >
                            <Card.Img variant="top" src={Photo5} />
                            <Card.Body>
                                <Card.Title>صنية شبكة</Card.Title>
                                <Card.Text>
                                    $60.5 &nbsp;&nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;&nbsp;   4.9   <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5 text-center justify-content-md-center">
                        <Card style={{ width: '18rem', }} >
                            <Card.Img variant="top" src={Photo6} />
                            <Card.Body>
                                <Card.Title>صنية شبكة</Card.Title>
                                <Card.Text>
                                    $60.5 &nbsp;&nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;&nbsp;   4.9   <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5 text-center justify-content-md-center">
                        <Card style={{ width: '18rem', }} >
                            <Card.Img variant="top" src={Photo7} />
                            <Card.Body>
                                <Card.Title>صنية شبكة</Card.Title>
                                <Card.Text>
                                    $60.5 &nbsp;&nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;&nbsp;   4.9   <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5 text-center justify-content-md-center">
                        <Card style={{ width: '18rem', }} >
                            <Card.Img variant="top" src={Photo8} />
                            <Card.Body>
                                <Card.Title>صنية شبكة</Card.Title>
                                <Card.Text>
                                    $60.5 &nbsp;&nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;&nbsp;   4.9   <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5 text-center justify-content-md-center">
                        <Card style={{ width: '18rem', }} >
                            <Card.Img variant="top" src={Photo9} />
                            <Card.Body>
                                <Card.Title>صنية شبكة</Card.Title>
                                <Card.Text>
                                    $60.5 &nbsp;&nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;&nbsp;   4.9   <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5 text-center justify-content-md-center">
                        <Card style={{ width: '18rem', }} >
                            <Card.Img variant="top" src={Photo10} />
                            <Card.Body>
                                <Card.Title>صنية شبكة</Card.Title>
                                <Card.Text>
                                    $60.5 &nbsp;&nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;&nbsp;   4.9   <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5 text-center justify-content-md-center">
                        <Card style={{ width: '18rem', }} >
                            <Card.Img variant="top" src={Photo11} />
                            <Card.Body>
                                <Card.Title>صنية شبكة</Card.Title>
                                <Card.Text>
                                    $60.5 &nbsp;&nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;&nbsp;   4.9   <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5 text-center justify-content-md-center">
                        <Card style={{ width: '18rem', }} >
                            <Card.Img variant="top" src={Photo12} />
                            <Card.Body>
                                <Card.Title>صنية شبكة</Card.Title>
                                <Card.Text>
                                    $60.5 &nbsp;&nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;&nbsp;   4.9   <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5 text-center justify-content-md-center">
                        <Card style={{ width: '18rem', }} >
                            <Card.Img variant="top" src={Photo13} />
                            <Card.Body>
                                <Card.Title>صنية شبكة</Card.Title>
                                <Card.Text>
                                    $60.5 &nbsp;&nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;&nbsp;   4.9   <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5 text-center justify-content-md-center">
                        <Card style={{ width: '18rem', }} >
                            <Card.Img variant="top" src={Photo14} />
                            <Card.Body>
                                <Card.Title>صنية شبكة</Card.Title>
                                <Card.Text>
                                    $60.5 &nbsp;&nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;&nbsp;   4.9   <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-5 text-center justify-content-md-center">
                        <Card style={{ width: '18rem', }} >
                            <Card.Img variant="top" src={Photo15} />
                            <Card.Body>
                                <Card.Title>صنية شبكة</Card.Title>
                                <Card.Text>
                                    $60.5 &nbsp;&nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;&nbsp;   4.9   <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    </div>
                    <div className="offer mt-5" id="about">
                        <div className="row row d-flex justify-content-center align-items-center">
                            <div className="col-md-5">
                                <img src={Photo16} alt="photo offer"/>
                            </div>
                            <div className="col-md-5">
                        <h1>عرض حصري</h1>
                        <h5>اطلق العنان للترقية النهائية للاسلوب مع عرضنا الحصري  <br/> واستمتع بخصم يصل الي 40% علي احدث التصميمات </h5>
                        <a href="#product"><button>اشتري الان</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="flower">
                    <div className="row justify-content-md-center text-center">
                    <div className="col-md-6 mt-5">
                        <h1>تصميم ورود لك</h1>
                        <h5 className=" mt-5">.تجميعات فنية من الزهور المتنوعة، مُرتبة بشكل جمالي داخل حاوية معينة</h5>
                    </div>
                </div>
                <div className="row  mt-5">
                    <div className="col-md-4 text-center justify-content-md-center mt-5">
                        <Card style={{ width: '18rem', }} >
                            <Card.Img variant="top" src={Photo18} />
                            <Card.Body>
                                <Card.Title> بوكية ورد احمر</Card.Title>
                                <Card.Text>
                                    $60.5 &nbsp;&nbsp;&nbsp;&nbsp;  | &nbsp;&nbsp;&nbsp;&nbsp;   3.9   <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 text-center mt-5">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Photo17} />
                            <Card.Body>
                                <Card.Title>بوكية ورد ابيض </Card.Title>
                                <Card.Text>
                                    $50.99  &nbsp;&nbsp;&nbsp;&nbsp;   | &nbsp;&nbsp;&nbsp;&nbsp;  4.4    <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 text-center mt-5">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Photo19} />
                            <Card.Body>
                                <Card.Title>بوكية ورد ازرق</Card.Title>
                                <Card.Text>
                                    $45.99 &nbsp;&nbsp;&nbsp;&nbsp; |  &nbsp;&nbsp;&nbsp;&nbsp; 4.5     <FontAwesomeIcon icon={faStar} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="feedback ">              
                    <div className="row justify-content-md-center text-center">
                    <div className="col-md-6 mt-5">
                        <h1>تعليقات الجماهير &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-4 mt-5">
                    <Card border="primary" style={{ width: '18rem' }} className="">
        <Card.Header>تعليق</Card.Header>
        <Card.Body>
            <Card.Title>.............</Card.Title>
            <Card.Text>
            حرفيا تسلم ايدك بجد<br/>
        جميله جدا والله هى والبوكيه     
            </Card.Text>
        </Card.Body>
        </Card>
                    </div>
                    <div className="col-md-4 mt-5">
                    <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>تعليق</Card.Header>
        <Card.Body>
            <Card.Title>.............</Card.Title>
            <Card.Text>
            ماشاء الله جميله جدا<br/>
            تسلم ايديك      
            </Card.Text>
        </Card.Body>
            </Card>
                    </div>
                    <div className="col-md-4 mt-5">
                    <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>تعليق</Card.Header>
        <Card.Body>
            <Card.Title>.............</Card.Title>
            <Card.Text>
            اللهم بارك،<br/>
            تحفههه
            </Card.Text>
        </Card.Body>
            </Card>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}
export default Products;
