import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ROUTE_LINKS } from '../../utils/routing';
import PublicContainer from '../container/PublicContainer';

import '../../css/pages/Contact.css';
import Spinner from '../utils/Spinner';
import Toast from '../utils/Toast';
import useForm from '../../hooks/useForm';
import validate from '../../hooks/FormValidation';
import { forwardMail } from '../../api';

import Icons from '../utils/Icons'
import colors from '../utils/colors';

const ContactUs = () => {
    const [showSpinner, setShowSpinner] = useState(false);
    const [toastState, setToastState] = useState({});
    const [toastType, setToastType] = useState({ type: '', icon: '' });

    const handleOnSubmit = async () => {
        setShowSpinner(true);

        if (!isSubmitting) return setShowSpinner(false);
        setIsSubmitting(false);

        const response = await forwardMail(values);
        if (!response.ok) setErrors([response.problem.replace('_', ' ')]);
        else {
            const { data } = response.data;
            setToastType({ type: 'success', icon: 'IconSuccess' });
            setToastState({ ...data });
        }

        return setShowSpinner(false);
    };

    const { handleChange, handleSubmit, values, errors, setErrors, isSubmitting, setIsSubmitting } = useForm(handleOnSubmit, validate, setShowSpinner, ['name', 'phone', 'email', 'subject', 'message']);

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
                    <div className='contact'>
                        {/* CONTACT PAGE BANNER */}
                        <div className='page-banner-area'>
                            <div className='page-banner-content'>
                                <h2>Contact</h2>
                                <ul>
                                    <li>
                                        <Link to={ROUTE_LINKS.HOME}>Home</Link>
                                    </li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>

                        {/* SECTION ONE */}
                        <section className='contact-area'>
                            <div className='container'>
                                <div className='align-items-center'>
                                    <div className='contact-form'>
                                        <h3>To Contact Us,<br /> fill and submit the form below</h3>
                                        <form action='' id='contactForm'>
                                            <div className='row'>
                                                <div className='form-item'>
                                                    <div className='form-group'>
                                                        <input type='text' name='name' onChange={handleChange} value={values.name || ''} id='name' className='form-control' required='' data-error='Please enter your name' placeholder='Your name' />
                                                        <div className='help-block with-errors'></div>
                                                    </div>
                                                </div>

                                                <div className='form-item'>
                                                    <div className='form-group'>
                                                        <input type='email' name='email' onChange={handleChange} value={values.email || ''} id='email' className='form-control' required='' data-error='Please enter your email' placeholder='Your email address' />
                                                        <div className='help-block with-errors'></div>
                                                    </div>
                                                </div>

                                                <div className='form-item'>
                                                    <div className='form-group'>
                                                        <input type='text' name='phone' onChange={handleChange} value={values.phone || ''} id='phone_number' className='form-control' required='' data-error='Please enter your phone number' placeholder='Your phone number' />
                                                        <div className='help-block with-errors'></div>
                                                    </div>
                                                </div>

                                                <div className='form-item'>
                                                    <div className='form-group'>
                                                        <input type='text' name='subject' onChange={handleChange} value={values.subject || ''} id='subjects' className='form-control' required='' data-error='Please enter your subjects' placeholder='Subjects' />
                                                        <div className='help-block with-errors'></div>
                                                    </div>
                                                </div>

                                                <div className='form-item'>
                                                    <div className='form-group'>
                                                        <textarea name='message' onChange={handleChange} value={values.message || ''} id='message' cols='30' rows='5' required='' data-error='Please enter your message' className='form-control' placeholder='Write your message...'></textarea>
                                                        <div className='help-block with-errors'></div>
                                                    </div>
                                                </div>

                                                <div className='form-item'>
                                                    <button type='submit' onClick={handleSubmit} link={ROUTE_LINKS} className='default-btn'>
                                                        Send Message
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div className='contact-information'>
                                        <h3>Here to Help</h3>
                                        <div className='contact-list'>
                                            <li>
                                                <div>
                                                    <Icons name='IconLocation' size={39} color={colors.light_red} />
                                                    <p>
                                                        location: <span>Bonamoussadi, Douala, Cameroon. <br />200 METERS FROM
                                                            ALIMENTATION FRAICHEUR AND GOVERNMENT ENGLISH PRIMARY SCHOOL.</span>

                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <Icons name='IconCall' size={39} color={colors.light_red} />
                                                    <p>
                                                        Call Us: <span>(+237) 679285216 | 659357249</span>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <Icons name='IconMail' size={39} color={colors.light_red} />
                                                    <p>
                                                        Email Us: <span>queenyekels@gmail.com</span>
                                                    </p>
                                                </div>
                                            </li>
                                        </div>
                                        <h3>Day Care Time</h3>
                                        <div className='opening-hours'>
                                            <li>
                                                <p>
                                                    <span>Monday - Friday </span>8AM - 5PM
                                                </p>
                                            </li>
                                        </div>
                                        <h3>Learning Time</h3>
                                        <div className='opening-hours'>
                                            <li>
                                                <p>
                                                    <span>Monday - Friday </span>8AM - 1PM
                                                </p>
                                            </li>
                                        </div>
                                        <h3>Dumping Ground</h3>
                                        <div className='opening-hours'>
                                            <li>
                                                <p>
                                                    <span>Saturday: </span>8AM - 5PM
                                                </p>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SECTION TWO */}

                        <div className='map'></div>
                    </div>
                </Fragment>
            </PublicContainer>
        </Fragment>
    );
};

export default ContactUs;
