import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_LINKS } from '../../utils/routing';
import PublicContainer from '../container/PublicContainer';

import '../../css/pages/news.css';

const News = () => {
    return (
        <PublicContainer footer footer_image>
            <div className='news'>
                <div className='news-banner'>
                    <div className='news-banner-heading'>
                        <h1>News</h1>
                    </div>
                </div>
                <div className='news container'>
                    <div className='news-row'>
                        <div className='left-side'>
                            <article className='news-item'>
                                <div className='news-item-img'>
                                    <img src='' alt='' />
                                    <Link to={ROUTE_LINKS} className='news-item-date'>
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </Link>
                                </div>
                                <div className='news-item-details'>
                                    <Link to={ROUTE_LINKS}>
                                        <h2>Google inks pact for new 35-storey office</h2>
                                    </Link>
                                    <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying</p>
                                    <ul className='news-info-link'>
                                        <li>
                                            <Link to={ROUTE_LINKS}>Travel</Link>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            <article className='news-item'>
                                <div className='news-item-img'>
                                    <img src='' alt='' />
                                    <Link to={ROUTE_LINKS} className='news-item-date'>
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </Link>
                                </div>
                                <div className='news-item-details'>
                                    <Link to={ROUTE_LINKS}>
                                        <h2>Google inks pact for new 35-storey office</h2>
                                    </Link>
                                    <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying</p>
                                    <ul className='news-info-link'>
                                        <li>
                                            <Link to={ROUTE_LINKS}>Travel</Link>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            <article className='news-item'>
                                <div className='news-item-img'>
                                    <img src='' alt='' />
                                    <Link to={ROUTE_LINKS} className='news-item-date'>
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </Link>
                                </div>
                                <div className='news-item-details'>
                                    <Link to={ROUTE_LINKS}>
                                        <h2>Google inks pact for new 35-storey office</h2>
                                    </Link>
                                    <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying</p>
                                    <ul className='news-info-link'>
                                        <li>
                                            <Link to={ROUTE_LINKS}>Travel</Link>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            <article className='news-item'>
                                <div className='news-item-img'>
                                    <img src='' alt='' />
                                    <Link to={ROUTE_LINKS} className='news-item-date'>
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </Link>
                                </div>
                                <div className='news-item-details'>
                                    <Link to={ROUTE_LINKS}>
                                        <h2>Google inks pact for new 35-storey office</h2>
                                    </Link>
                                    <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying</p>
                                    <ul className='news-info-link'>
                                        <li>
                                            <Link to={ROUTE_LINKS}>Travel</Link>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                        <div className='right-side'>
                            <div className='single-sidebar search-widget'>
                                <form action=''>
                                    <div className='form-group'>
                                        <div className='input-group'>
                                            <input type='text' className='form-control' placeholder='Search Key' />
                                        </div>
                                    </div>
                                    <button className='main-search-btn'>Search</button>
                                </form>
                            </div>

                            <aside className='single-sidebar post'>
                                <h4 className='widget-title'>Category</h4>
                                <ul className='cat-list'>
                                    <li>
                                        <Link to={ROUTE_LINKS}>Kitchen food</Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTE_LINKS}>Travel News</Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTE_LINKS}>Product</Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTE_LINKS}>Inspiration</Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTE_LINKS}>Healthcare</Link>
                                    </li>
                                </ul>
                            </aside>

                            <aside className='single-sidebar popular-post'>
                                <h4 className='widget-title'>Recent Post</h4>
                                <div className='post-item'>
                                    <div className='post-item-image'>
                                        <img src='' alt='' />
                                    </div>
                                    <div className='media-body'>
                                        <Link to={ROUTE_LINKS}>
                                            <h3>From Life was you fish...</h3>
                                        </Link>
                                        <p>Jan 12, 2021</p>
                                    </div>
                                </div>
                                <div className='post-item'>
                                    <div className='post-item-image'>
                                        <img src='' alt='' />
                                    </div>
                                    <div className='media-body'>
                                        <Link to={ROUTE_LINKS}>
                                            <h3>From Life was you fish...</h3>
                                        </Link>
                                        <p>Jan 12, 2021</p>
                                    </div>
                                </div>
                                <div className='post-item'>
                                    <div className='post-item-image'>
                                        <img src='' alt='' />
                                    </div>
                                    <div className='media-body'>
                                        <Link to={ROUTE_LINKS}>
                                            <h3>From Life was you fish...</h3>
                                        </Link>
                                        <p>Jan 12, 2021</p>
                                    </div>
                                </div>
                                <div className='post-item'>
                                    <div className='post-item-image'>
                                        <img src='' alt='' />
                                    </div>
                                    <div className='media-body'>
                                        <Link to={ROUTE_LINKS}>
                                            <h3>From Life was you fish...</h3>
                                        </Link>
                                        <p>Jan 12, 2021</p>
                                    </div>
                                </div>
                            </aside>

                            <aside className='single-sidebar tag-widget'>
                                <h4 className='widget-title'>Tag Clouds</h4>
                                <ul className='list'>
                                    <li>
                                        <Link to={ROUTE_LINKS}>Project</Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTE_LINKS}>Love</Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTE_LINKS}>Technology</Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTE_LINKS}>Travel</Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTE_LINKS}>Kitchen</Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTE_LINKS}>Lifestyle</Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTE_LINKS}>Design</Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTE_LINKS}>illustration</Link>
                                    </li>
                                </ul>
                            </aside>

                            <aside className='single-sidebar gallery-widget'>
                                <h4 className='widget-title'>Gallery Feeds</h4>
                                <ul className='gallery-row'>
                                    <li>
                                        <Link to={ROUTE_LINKS}>
                                            <img src='' alt='' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTE_LINKS}>
                                            <img src='' alt='' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTE_LINKS}>
                                            <img src='' alt='' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTE_LINKS}>
                                            <img src='' alt='' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTE_LINKS}>
                                            <img src='' alt='' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTE_LINKS}>
                                            <img src='' alt='' />
                                        </Link>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </PublicContainer>
    );
};

export default News;
