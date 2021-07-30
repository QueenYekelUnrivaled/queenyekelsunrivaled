import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_LINKS } from '../../utils/routing';
import PublicContainer from '../container/PublicContainer';

import colorBoxImage1 from '../../assets/service/colorbox1.png';
import colorBoxImage2 from '../../assets/service/colorbox2.png';
import colorBoxImage4 from '../../assets/service/colorbox4.png';

import interactiveTeachingImage from '../../assets/gallery/DSC_5098.jpg';
import infotechImage from '../../assets/gallery/untitled-42710144.jpg';
import dormitoryImage from '../../assets/gallery/Dormitory.jpg';
import languagesImage from '../../assets/gallery/untitled-42551296.jpg';
import playgroundImage from '../../assets/gallery/Playground.jpg';
import musicAndDanceImage from '../../assets/gallery/musicAndDance.jpg';

import '../../css/pages/service.css';

const Service = () => {
    return (
        <PublicContainer footer footer_image>
            <div className='service'>
                {/* --------------- Service Page Banner --------------- */}
                <div className='page-banner-area'>
                    <div className='page-banner-content'>
                        <h2>Services</h2>
                        <ul>
                            <li>
                                <Link to={ROUTE_LINKS.HOME}>Home</Link>
                            </li>
                            <li>Servies</li>
                        </ul>
                    </div>
                </div>

                {/* --------------- Color Boxes Section --------------- */}
                <section>
                    <div className='color-boxes'>
                        <div className='color-box one'>
                            <h4>Level 1</h4>
                            <img src={colorBoxImage1} alt='' />
                            <p>For children between the ages of 06 months and 11 months</p>
                        </div>
                        <div className='color-box two'>
                            <h4>Level 2</h4>
                            <img src={colorBoxImage2} alt='' />
                            <p>For children between the ages of 1 year and 2 years</p>
                        </div>
                        <div className='color-box three'>
                            <h4>Level 3</h4>
                            <img src={colorBoxImage4} alt='' />
                            <p>For 3 year olds</p>
                        </div>
                    </div>
                </section>

                {/* --------------- Activities Section --------------- */}
                <section className='activities'>
                    <div className='background-image'>
                        <div className='service-container'>
                            <div className='heading'>
                                <h1>Our Courses and Activities</h1>
                                <p>At Queen Yekel's... Unrivaled, your kids will be engaged in a long list of courses and activities.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class='figure-container'>
                        <figure class='image-block'>
                            <img src={interactiveTeachingImage} alt='' />
                            <figcaption>
                                <h3>Interactive Teaching</h3>
                                <p>With state of the art devices like tablets and other colorful interactive tools for developing communication skills, social and emotional skills, early reading and writing skills, identification of colors, shapes and numbers..</p>
                            </figcaption>
                        </figure>
                        <figure class='image-block'>
                            <img src={infotechImage} alt='' />
                            <figcaption>
                                <h3>Information Technology (Computer Awareness)</h3>
                                <p>At Queen Yekel’s Unrivaled, pupils are exposed to the computer and its functions, setting a solid foundation which will permit them to grow into tech savvy individuals.</p>
                            </figcaption>
                        </figure>
                        <figure class='image-block'>
                            <img src={languagesImage} alt='' />
                            <figcaption>
                                <h3>Languages</h3>
                                <p>We train kids to be able to communicate adequately in several languages. They will be trained in English, French and Chinese, making them multilingual individuals.</p>
                            </figcaption>
                        </figure>
                        <figure class='image-block'>
                            <img src={playgroundImage} alt='' />
                            <figcaption>
                                <h3>Playground</h3>
                                <p>Games are part and parcel of the healthy development of every child. Cognizant of this fact, We have put in place an exciting playground where kids can play and express themselves in the most exciting of ways.!</p>
                            </figcaption>
                        </figure>
                        <figure class='image-block'>
                            <img src={dormitoryImage} alt='' />
                            <figcaption>
                                <h3>Dormitory</h3>
                                <p>Our dormitory service provides a clean space where kids can rest comfortably. The toilets are also very clean and good hygiene is maintained perpetually</p>
                            </figcaption>
                        </figure>
                        <figure class='image-block'>
                            <img src={musicAndDanceImage} alt='' />
                            <figcaption>
                                <h3>Music and Dance</h3>
                                <p>Queen Yekel’s Unrivaled trains kids and in music and dance. This builds their creative talents, skills which are very important in today’s world.</p>
                            </figcaption>
                        </figure>
                    </div>
                </section>

                {/* --------------- Join Us Section --------------- */}
                <section className='join-us'>
                    <div className='join-us-container'>
                        <div className='left-side'>
                            <h1>Dumping Ground</h1>
                            <h4>An Extra Service</h4>
                            <p>Every Saturday, Queen Yekel's Unrivaled becomes a dumping ground and is open to all children who are ten (10) years old and below. Even if they are not registered pupils of the school, kids within this age group can benefit from all the amenities which the shcool offers. Parents will have to pay a fee of 10000 XAF per Saturday for their kids to benefit from this service.</p>
                        </div>
                        <div className='right-side'></div>
                    </div>
                </section>

                {/* --------------- Newsletter Section --------------- */}
                <div className='newsletter-area'>
                    <div className='service-container'>
                        <div className='newsletter-content'>
                            <h3>Do You Wish To Get Updates On What’s Upcoming?</h3>
                        </div>
                        <div className='newsletter-form-content'>
                            <form action='' className='flex newsletter-form'>
                                <input type='email' className='input-newsletter' name='email' placeholder='Enter Email Address' />
                                <button type='submit'>Subscribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </PublicContainer>
    );
};

export default Service;
