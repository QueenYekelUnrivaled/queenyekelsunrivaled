import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTE_LINKS } from '../../utils/routing';
import PublicContainer from '../container/PublicContainer';

import Button from '../utils/Button';
import colors from '../utils/colors';
import Icons from '../utils/Icons';

import Home1 from '../../assets/gallery/untitled-43049280.jpg';
import Home2 from '../../assets/gallery/DSC_5098.jpg';
import Home3 from '../../assets/gallery/DSC_5105.jpg';
import Home4 from '../../assets/gallery/untitled-42551296.jpg';

import teacher1 from '../../assets/about/teacher1.jpg';
import teacher2 from '../../assets/about/teacher2.jpg';
import teacher3 from '../../assets/about/teacher3.jpg';
import teacher4 from '../../assets/about/teacher4.jpg';

const Home = () => {
    return (
        <PublicContainer footer footer_image>
            <div className='main'>
                <section className='flex align-center slider-area'>
                    <div className='grid container'>
                        <div className='col-lg-6 col-md-6 col-sm-11 col-xs-12 pd-l-15 pd-r-15'>
                            <div className='hero__caption pd-100'>
                                <h1 className='__title'>
                                    Quality <br /> Learning
                                </h1>
                                <span className='__sub-title'>For Every Child</span>

                                <Button type='link' link={ROUTE_LINKS.REGISTERATION} className='btn btn-link circle enroll-now'>
                                    <span>Enroll Now</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='about-low-area wrapper pd-t-50 pd-b-50'>
                    <div className='grid container'>
                        <div className='__title-about col-lg-12 col-md-12 col-sm-12 col-xs-12 mg-b-20'>
                            <div className='section-title'>
                                <h2 className='mg-b-10'>
                                    welcome to <span style={{ color: colors.light_red }}>Queen Yekel's Unrivaled</span>
                                </h2>
                                <p className='mg-b-10'>A kindergarten and Nursery school, open to children between the ages of 06 months and 03 years. The complex was birthed out of the need to provide a school for children who are as young as 6 months old in a context where they are almost inexistent. </p>
                            </div>
                        </div>
                        <div className='__about-features __features-container grid col-lg-12 col-md-12 col-sm-12 col-xs-12 justify-center'>
                            <div className='features col-lg-5 col-md-5 col-sm-5 col-xs-12'>
                                <div className='flex about-caption align-center'>
                                    <div className='features-icon mg-r-20'>
                                        <Icons name='IconAbout1' color={colors.color_font_1} size={45} />
                                    </div>
                                    <div className='features-caption'>
                                        <h3 style={{ color: colors.color_font_1 }}>Foundation of God</h3>
                                        <p>A space where respect, moral rectitude and responsible behavior is inculcated from very tender ages.</p>
                                    </div>
                                </div>
                                <div className='flex about-caption align-center'>
                                    <div className='features-icon mg-r-20'>
                                        <Icons name='IconAbout2' color={colors.color_font_2} size={45} />
                                    </div>
                                    <div className='features-caption'>
                                        <h3 style={{ color: colors.color_font_2 }}>Friendly Environment</h3>
                                        <p>State of the art equipment and services which offers a clean and healthy campus.</p>
                                    </div>
                                </div>
                                <div className='flex about-caption align-center'>
                                    <div className='features-icon mg-r-20'>
                                        <Icons name='IconAbout3' color={colors.color_font_3} size={45} />
                                    </div>
                                    <div className='features-caption'>
                                        <h3 style={{ color: colors.color_font_3 }}>Academics</h3>
                                        <p>Queen Yekel’s Unrivaled packs a stellar lineup of academic programs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-7 col-md-7 col-sm-7 col-xs-12'>
                                <div className='about-img'>
                                    <img src={Home1} alt='img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='class-offer-area wrapper pd-t-50 pd-b-50'>
                    <div className='grid container mg-t-70'>
                        <div className='__title-about col-lg-12 col-md-12 col-sm-12 col-xs-12 mg-b-20'>
                            <div className='section-title'>
                                <h2 className='mg-b-10'>Courses We Offer</h2>
                                <p className='mg-b-10'>At Queen Yekel's... Unrivaled, we offer a line up of deeply thought courses geared towards norturing pupils into well rounded individuals</p>
                            </div>
                        </div>
                        <div className='__class-offer-activities __features-container col-lg-12 col-md-12 col-sm-12 col-xs-12 justify-center'>
                            <div className='features flex justify-space-between align-center'>
                                <div className='card pd-b-10'>
                                    <img src={Home2} alt='class' className='image-header' />
                                    <div className='card-content features-caption'>
                                        <Link to={ROUTE_LINKS.SERVICE}>
                                            <h3>Intelligence</h3>
                                        </Link>
                                        <p>Our academic programs aim to build communication skills, social and emotional skills, early reading and writing skills and motor skills in pupils. </p>
                                    </div>
                                </div>
                                <div className='card pd-b-10'>
                                    <img src={Home3} alt='class' className='image-header' />
                                    <div className='card-content features-caption'>
                                        <Link to={ROUTE_LINKS.SERVICE}>
                                            <h3>Communication</h3>
                                        </Link>
                                        <p>Languages (English, French and Chinese) and information technology (IT) skills will be developed in the children.</p>
                                    </div>
                                </div>
                                <div className='card pd-b-10'>
                                    <img src={Home4} alt='class' className='image-header' />
                                    <div className='card-content features-caption'>
                                        <Link to={ROUTE_LINKS.SERVICE}>
                                            <h3>A Solid Foundation</h3>
                                        </Link>
                                        <p>With a program like this, the children will have a solid foundation and will find little to no difficulties when they grow into different stages in life.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Button type='link' className='btn btn-link enroll-now circle mg-t-10 flex justify-center' link='/service'>
                                    View More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='date-events pd-t-80 pd-b-80'>
                    <div className='pd-r-20 pd-l-20'>
                        <div className='wrapper'>
                            <span style={{ color: colors.light_red, fontWeight: '600' }}>2021</span>
                            <div className='__title-about'>
                                <div className='section-title'>
                                    <h2 className='mg-b-10'>Enrollment is Ongoing</h2>
                                    <p className='mg-b-10'>Enrollment is currently going on at the school campus. Click on the button below to register your kid.</p>
                                </div>
                                <Button type='link' className='btn btn-link enroll-now circle mg-t-20 flex justify-center' link={ROUTE_LINKS.REGISTERATION}>
                                    Enroll Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='team-area wrapper pd-b-20'>
                    <div className='grid container mg-t-70'>
                        <div className='__title-about col-lg-12 col-md-12 col-sm-12 col-xs-12 mg-b-20'>
                            <div className='section-title'>
                                <h2 className='mg-b-10'>Expert Teachers</h2>
                                <p className='mg-b-10'>Our staff is made up of highly trained and experienced teachers who have been exposed to internationally recognised programs for kids.</p>
                            </div>
                        </div>
                        <div className='__team-active __features-container grid col-lg-12 col-md-12 col-sm-12 col-xs-12 justify-center'>
                            <div className='team col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                                <img src={teacher1} alt='team' />
                                <div className='__profile'>
                                    <h3>Dr. Bulu</h3>
                                    <p>Pediatrician</p>
                                    <div className='social-media flex justify-space-evenly'>
                                        <Link to=''>
                                            <Icons name='IconFacebook' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconTwitter' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconLinkedin' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconSnapchat' size={20} color={colors.dark} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='team col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                                <img src={teacher2} alt='team' />
                                <div className='__profile'>
                                    <h3>Mr. Harris</h3>
                                    <p>IT Department</p>
                                    <div className='social-media flex justify-space-evenly'>
                                        <Link to=''>
                                            <Icons name='IconFacebook' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconTwitter' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconLinkedin' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconSnapchat' size={20} color={colors.dark} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='team col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                                <img src={teacher3} alt='team' />
                                <div className='__profile'>
                                    <h3>Mr. Fridolin</h3>
                                    <p>Kitchen Department</p>
                                    <div className='social-media flex justify-space-evenly'>
                                        <Link to=''>
                                            <Icons name='IconFacebook' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconTwitter' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconLinkedin' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconSnapchat' size={20} color={colors.dark} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='team col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                                <img src={teacher4} alt='team' />
                                <div className='__profile'>
                                    <h3>Mr. Edwin</h3>
                                    <p>Hygiene Department</p>
                                    <div className='social-media flex justify-space-evenly'>
                                        <Link to=''>
                                            <Icons name='IconFacebook' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconTwitter' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconLinkedin' size={20} color={colors.dark} />
                                        </Link>
                                        <Link to=''>
                                            <Icons name='IconSnapchat' size={20} color={colors.dark} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='class-offer-area speech-wrapper wrapper pd-t-50'>
                    <div className='grid container mg-t-70'>
                        <div className='__title-about col-lg-12 col-md-12 col-sm-12 col-xs-12 mg-b-10'>
                            <div className='section-title'>
                                <div className='quote mg-b-10'>
                                    <img src='https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/xtestimonial.png.pagespeed.ic.U5crWWNOc7.webp' alt='quote' />
                                </div>
                                <p className='mg-t-20 mg-b-10'>The level of health awareness and sanitation which is upheld at Queen Yekel's... Unrivaled, is second to none within the country.</p>
                            </div>
                        </div>
                        <div className='flex align-center justify-center quote-details col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className='photo'>
                                <img src={teacher1} alt='img' />
                            </div>
                            <div className='desc'>
                                <p>Dr. Bulu</p>
                                <p>Pediatrician</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicContainer>
    );
};

export default Home;
