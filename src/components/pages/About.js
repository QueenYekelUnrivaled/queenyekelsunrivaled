import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_LINKS } from '../../utils/routing';
import PublicContainer from '../container/PublicContainer';

import '../../css/pages/About.css';

import boss_img from '../../assets/about/bossyekel.png';

import teacher_1 from '../../assets/about/teacher1.jpg';
import teacher_2 from '../../assets/about/teacher2.jpg';
import teacher_3 from '../../assets/about/teacher3.jpg';
import teacher_4 from '../../assets/about/teacher4.jpg';
import teacher_5 from '../../assets/about/teacher5.jpg';
import { addSubscriber } from '../../api';
import useForm from '../../hooks/useForm';
import validate from '../../hooks/FormValidation';
import Spinner from '../utils/Spinner';
import Toast from '../utils/Toast';

const About = () => {
    const [showSpinner, setShowSpinner] = useState(false);
    const [toastState, setToastState] = useState({});
    const [toastType, setToastType] = useState({ type: '', icon: '' });

    const handleOnSubmit = async () => {
        setShowSpinner(true);

        if (!isSubmitting) return setShowSpinner(false);
        setIsSubmitting(false);

        const response = await addSubscriber(values);
        if (!response.ok) {
            console.log(response);
            if (!response.data) setErrors([response.problem.replace('_', ' ')]);
            else {
                const { data } = response.data;
                setErrors(data);
            }
        } else {
            const { data } = response.data;
            setToastState(data);
            setToastType({ type: 'success', icon: 'IconSuccess' });
        }

        return setShowSpinner(false);
    };

    const { handleChange, handleSubmit, values, errors, setErrors, isSubmitting, setIsSubmitting } = useForm(handleOnSubmit, validate, setShowSpinner, ['email']);

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setIsSubmitting(false);
            setShowSpinner(false);

            setToastState(errors);
            setToastType({ type: 'error', icon: 'IconError' });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors]);

    return (
        <Fragment>
            <Spinner visible={showSpinner} className='full-width' size={56} />
            <PublicContainer footer footer_image>
                <div className='toast-container'>{toastState && Object.keys(toastState).map((key, i) => <Fragment key={i}>{toastState[key] && <Toast message={toastState[key]} iconName={toastType.icon} className={`nth-${i}`} type={toastType.type} toast_key={key} state={toastState} setState={setToastState} />}</Fragment>)}</div>
                <Fragment>
                    <div className='about'>
                        {/* ABOUT PAGE BANNER */}
                        <div className='page-banner-area'>
                            <div className='page-banner-content'>
                                <h2>About</h2>
                                <ul>
                                    <li>
                                        <Link to={ROUTE_LINKS.HOME}>Home</Link>
                                    </li>
                                    <li>About</li>
                                </ul>
                            </div>
                        </div>

                        {/* SECTION ONE */}
                        <section className='who-we-are'>
                            <div className='about-container'>
                                <div className='who-we-are-container'>
                                    <div className='who-we-are-content'>
                                        <span>About</span>
                                        <h3>Learn About Our Work and Cultural Activities</h3>
                                        <p>Queen Yekel’s Unrivaled is the fruit of a vision which was birthed from a need. As working parents, my husband and I sought for an institution where our six months old child could learn and develop important skills while we were away at work. Unfortunately, despite our endless search, we did not find such a school. Every school we visited rejected our child because she was too young. </p>
                                        <p>From that instant, it dawned on me that there were other parents who had a similar problem. This therefore brought to live the vision to create a school where toddlers could be educated, nurtured and developed in the kind of place I will want for my child. QUEEN YEKEL’S UNRIVALED is a realization of that vision</p>
                                        <ul className='who-we-are-list'>
                                            <li>
                                                <span>
                                                    <p>1</p>
                                                </span>
                                                <p>Homelike Environment</p>
                                            </li>
                                            <li>
                                                <span>
                                                    <p>2</p>
                                                </span>
                                                <p>Quality Educators</p>
                                            </li>
                                            <li>
                                                <span>
                                                    <p>3</p>
                                                </span>
                                                <p>Safety and Security</p>
                                            </li>
                                            <li>
                                                <span>
                                                    <p>4</p>
                                                </span>
                                                <p>Play to Learn</p>
                                            </li>
                                        </ul>
                                        <div className='who-we-are-btn default-btn'>
                                            <Link to={ROUTE_LINKS.REGISTERATION}>Enroll Now</Link>
                                        </div>
                                    </div>

                                    <div className='who-we-are-image-wrap'>
                                        <img src={boss_img} alt='img' />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SECTION TWO */}
                        <section className='fun-facts-area'>
                            <div className='about-container'>
                                <div className='fun-fact-elements'>
                                    <div className='single-fun-fact'>
                                        <h3>100+</h3>
                                        <p>Students</p>
                                    </div>
                                    <div className='single-fun-fact bg-1'>
                                        <h3>10+</h3>
                                        <p>Teachers</p>
                                    </div>
                                    <div className='single-fun-fact bg-2'>
                                        <h3>A+</h3>
                                        <p>Classrooms</p>
                                    </div>
                                    <div className='single-fun-fact bg-3'>
                                        <h3>A+</h3>
                                        <p>Kitchen</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SECTION THREE */}
                        <section className='teacher-area'>
                            <div className='about-container'>
                                <div className='single-teacher-text-item info'>
                                    <span>Expert Teachers</span>
                                    <h3>And Proficient Instructors</h3>
                                    <p>We have a qualified team of experts in required domains necessary for proper upbringing of every kid</p>
                                </div>

                                <div className='single-teacher-item'>
                                    <div className='image'>
                                        <img src={teacher_1} alt='' />
                                        <div className='overlay'>
                                            <div className='content'>
                                                <h3>Dr. Bulu</h3>
                                                <span>Pediatrician</span>
                                                <ul className='social'>
                                                    <li>
                                                        <Link to={ROUTE_LINKS}>
                                                            <i className='bx bx1-facebook'></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={ROUTE_LINKS}>
                                                            <i className='bx bx1-twitter'></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={ROUTE_LINKS}>
                                                            <i className='bx bx1-google-plus'></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='single-teacher-item'>
                                    <div className='image'>
                                        <img src={teacher_5} alt='' />
                                        <div className='overlay'>
                                            <div className='content'>
                                                <h3>Mrs. Forbah</h3>
                                                <span>Teaching Department</span>
                                                <ul className='social'>
                                                    <li>
                                                        <Link to={ROUTE_LINKS}>
                                                            <i className='bx bx1-facebook'></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={ROUTE_LINKS}>
                                                            <i className='bx bx1-twitter'></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={ROUTE_LINKS}>
                                                            <i className='bx bx1-google-plus'></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='single-teacher-item'>
                                    <div className='image'>
                                        <img src={teacher_3} alt='' />
                                        <div className='overlay'>
                                            <div className='content'>
                                                <h3>Mr. Fridolin</h3>
                                                <span>Kitchen Department</span>
                                                <ul className='social'>
                                                    <li>
                                                        <Link to={ROUTE_LINKS}>
                                                            <i className='bx bx1-facebook'></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={ROUTE_LINKS}>
                                                            <i className='bx bx1-twitter'></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={ROUTE_LINKS}>
                                                            <i className='bx bx1-google-plus'></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='single-teacher-item'>
                                    <div className='image'>
                                        <img src={teacher_4} alt='' />
                                        <div className='overlay'>
                                            <div className='content'>
                                                <h3>Mr. Edwin</h3>
                                                <span>Hygiene Department</span>
                                                <ul className='social'>
                                                    <li>
                                                        <Link to={ROUTE_LINKS}>
                                                            <i className='bx bx1-facebook'></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={ROUTE_LINKS}>
                                                            <i className='bx bx1-twitter'></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={ROUTE_LINKS}>
                                                            <i className='bx bx1-google-plus'></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='single-teacher-item'>
                                    <div className='image'>
                                        <img src={teacher_2} alt='' />
                                        <div className='overlay'>
                                            <div className='content'>
                                                <h3>Mr. Harris</h3>
                                                <span>IT Department</span>
                                                <ul className='social'>
                                                    <li>
                                                        <Link to={ROUTE_LINKS}>
                                                            <i className='bx bx1-facebook'></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={ROUTE_LINKS}>
                                                            <i className='bx bx1-twitter'></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={ROUTE_LINKS}>
                                                            <i className='bx bx1-google-plus'></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* NEWSLETTER SECTION */}

                        <div className='newsletter-area'>
                            <div className='about-container'>
                                <div className='newsletter-content'>
                                    <h2>Do You Wish To Get Updates On What’s Upcoming?</h2>
                                </div>
                                <div className='newsletter-form-content'>
                                    <form action='' className='flex newsletter-form'>
                                        <input type='email' className='input-newsletter' onChange={handleChange} value={values.email || ''} name='email' placeholder='Enter Email Address' />
                                        <button type='submit' onClick={handleSubmit}>
                                            Subscribe Now
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            </PublicContainer>
        </Fragment>
    );
};

export default About;
