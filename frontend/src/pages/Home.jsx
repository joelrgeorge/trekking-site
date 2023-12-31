import React from "react";
import '../styles/home.css'
import { Container, Row ,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png';
import Subtitle from '../shared/Subtitle';

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MansonaryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";


const Home = () => {
    return (<>

{/*========= hero section starts ===========*/}
       <section>
        <Container>
            <Row>

                <Col lg='6'>
            <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center   ">
              <Subtitle subtitle={'Know Before You Go'}/>    
              <img src={worldImg} alt="" />  
            </div>
            <h1>Traveling Opens The Door To Creating {""}
            <span className="highlight">
                memories</span></h1>
                
                <p> Travel gives us our greatest stories, 
                    our most cherished memories and countless
                    irreplaceable learnings that we can choose to pay 
                    forward to others It is all those little steps that make the journey complete. 
                    The journey is a reward. Stay patient and trust your journey. 
                     </p>
            </div>
                </Col>

                <Col lg='2'>
                    <div className="hero__img">
                        <img src={heroImg} alt=""/>
                    </div>
                </Col>

                <Col lg='2'>
                    <div className="hero__img-box hero__video-box mt-4">
                        <video src={heroVideo} alt="" controls/>
                    </div>
                </Col>

                <Col lg='2'>
                    <div className="hero__img-box" mt-5 >
                        <img src={heroImg02} alt=""/>
                    </div>
                </Col>
                <SearchBar/>
                </Row>
            </Container>
            </section>
            {/*========= hero section starts ===========*/}
            <section>
                <Container> 
                    <Row>
                        <Col lg='3'>
                            <h5 className="services__subtitle">What we serve</h5>
                            <h2 className="services__title">We offer our best services</h2>
                        </Col>
                        <ServiceList/>
                    </Row>
                </Container>
            </section>

            {/*============ featured tour section ======*/}
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="mb-5">
                            <Subtitle subtitle={'Explore'} />
                            <h2 className="featured__tour-title">Our featured tour</h2>
                        </Col>
                        <FeaturedTourList />
                    </Row>
                </Container>
            </section>
            {/** ========== featured tour section end ========*/}
            {/* ========== experience section start ========= */}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="experience__content">
                                <Subtitle subtitle={'Experience'}/>

                                <h1>With our all experience <br /> we will serve you</h1>
                                <p>Travelling make me feel happy.
                                    <br />
                                    Ques aliquam, hic tempora inventore suscipit unde.
                                </p>
                            </div>

                            <div className="counter__wrapper d-flex align-item-center gap-5">
                                <div className="counter__box">
                                    <span>12k+</span>
                                    <h6>Successful Trip</h6>     
                                </div>
                                <div className="counter__box">
                                    <span>2k+</span>
                                    <h6>Regular Clients</h6>     
                                </div>
                                <div className="counter__box">
                                    <span>15k+</span>
                                    <h6>Years Experience</h6>     
                                </div>
                            </div>
                        </Col>
                        <Col lg='6'>
                            <div className="experience__img">
                                <img src={experienceImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>

                </section>  
             {/* ========== experience section end ========= */}
             {/* ======= gallery section start =======*/}
                <section>
                    <Container>
                        <Row>
                            <Col lg='12'>
                                <Subtitle subtitle={'Gallery'}/>
                                <h2 className="gallery__title">Visit Our Customers Tours
                                </h2>
                            </Col>
                            <Col lg='12'>
                            <MansonaryImagesGallery/>

                            </Col>
                        </Row>

                    </Container>
                </section>
             {/* ======= gallery section ends =======*/}
{/* ======= Testimonal Section Start =======*/}

<section>
    <Container>
        <Row>
            <Col lg='12'>
                <Subtitle subtitle={'Fans Love '}/>
                <h2 className="testimonial__title">What our fans say about us</h2>

            </Col>
            <Col lg='12'>
                <Testimonials/>
            </Col>
            
        </Row>
    </Container>
    </section>
{/* ======= Testimonal Section Ends =======*/}

<Newsletter/>

        </>
   );
};

export default Home;
