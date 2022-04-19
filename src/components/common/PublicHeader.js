import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_LINKS } from '../../utils/routing';
import colors from '../utils/colors';
import Icons from '../utils/Icons';
import Button from '../utils/Button';

import logo from '../../assets/logo.png';

const PublicHeader = () => {
    const [toggleMobileNavBar, setToggleMobileNavBar] = useState(false);
    const [isVisible, setIsVisible] = useState('');

    const hangleToggle = () => {
        setToggleMobileNavBar(!toggleMobileNavBar);
    };

    useEffect(() => {
        // Button is displayed after scrolling for 250 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 250) {
                setIsVisible('float-display');
            } else {
                setIsVisible('');
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <Fragment>
            <header className={`queen-header ${isVisible}`}>
                <div className='flex __sub-header-container align-center justify-space-between'>
                    <div className='flex info align-center justify-space-between'>
                        <div className='flex icon-container align-center mg-r-40'>
                            <Icons name='IconLocation' size={15} color={colors.white} />
                            <span className='mg-l-15'>BONAMOUSSADI, DOUALA, CMR</span>
                        </div>
                        <div className='flex icon-container align-center'>
                            <Icons name='IconCall' size={15} color={colors.white} />
                            <span className='mg-l-15'>(+237) 679285216 | 659357249</span>
                        </div>
                    </div>
                    <div className='flex social-media'>
                        <Link to='' className='flex icon-container align-center mg-r-20'>
                            <Icons name='IconFacebook' size={15} color={colors.white} />
                        </Link>
                        <Link to='' className='flex icon-container align-center mg-r-20'>
                            <Icons name='IconTwitter' size={15} color={colors.white} />
                        </Link>
                        <Link to='' className='flex icon-container align-center mg-r-20'>
                            <Icons name='IconLinkedin' size={15} color={colors.white} />
                        </Link>
                        <Link to='' className='flex icon-container align-center'>
                            <Icons name='IconSnapchat' size={15} color={colors.white} />
                        </Link>
                    </div>
                </div>
                <div className='flex __header-container align-center justify-space-between'>
                    <Link to={ROUTE_LINKS.HOME}>
                        <img src={logo} alt='' className='logo' />
                    </Link>
                    <nav className='nav-bar web-view'>
                        <ul className='flex align-center justify-center'>
                            <Button type='link' link={ROUTE_LINKS.HOME} className='btn btn-link mg-r-20'>
                                <span>Home</span>
                            </Button>
                            <Button type='link' link={ROUTE_LINKS.ABOUT} className='btn btn-link mg-r-20'>
                                <span>About</span>
                            </Button>
                            <Button type='link' link={ROUTE_LINKS.FAQ} className='btn btn-link mg-r-20'>
                                <span>FAQ</span>
                            </Button>
                            {/* <Button type='link' link={ROUTE_LINKS.NEWS} className='btn btn-link mg-r-20'>
                                <span>News</span>
                            </Button> */}
                            <Button type='link' link={ROUTE_LINKS.CONTACT_US} className='btn btn-link mg-r-20'>
                                <span>Contact</span>
                            </Button>
                            <Button type='link' link={ROUTE_LINKS.SERVICE} className='btn btn-link mg-r-20'>
                                <span>Service</span>
                            </Button>
                            <Button type='link' link={ROUTE_LINKS.REGISTERATION} className='btn btn-link enroll-now circle'>
                                <span>Enroll Now</span>
                            </Button>
                        </ul>
                    </nav>
                    <nav className='nav-bar mobile-view'>
                        <Icons name='IconMenu' size={30} color={colors.dark} onClick={hangleToggle} />
                        <ul className={`lex align-center justify-center ${toggleMobileNavBar && 'is-active'}`}>
                            <Button type='link' link={ROUTE_LINKS.HOME} className='btn btn-link'>
                                <span>Home</span>
                            </Button>
                            <Button type='link' link={ROUTE_LINKS.ABOUT} className='btn btn-link'>
                                <span>About</span>
                            </Button>
                            <Button type='link' link={ROUTE_LINKS.FAQ} className='btn btn-link'>
                                <span>Faq</span>
                            </Button>
                            {/* <Button type='link' link={ROUTE_LINKS.NEWS} className='btn btn-link'>
                                <span>News</span>
                            </Button> */}
                            <Button type='link' link={ROUTE_LINKS.CONTACT_US} className='btn btn-link'>
                                <span>Contact</span>
                            </Button>
                            <Button type='link' link={ROUTE_LINKS.SERVICE} className='btn btn-link'>
                                <span>Service</span>
                            </Button>
                            <Button type='link' link={ROUTE_LINKS.REGISTERATION} className='btn btn-link enroll-now circle'>
                                <span>Enroll Now</span>
                            </Button>
                        </ul>
                    </nav>
                </div>
            </header>
        </Fragment>
    );
};

export default PublicHeader;
