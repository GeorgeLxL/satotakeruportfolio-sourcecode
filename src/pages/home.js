import React, { Component } from 'react';
import ScrollBanner from '../components/scroll';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Controller } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import ReasonImg1 from '../assets/image/home/reason.jpg';
import ReasonImg2 from '../assets/image/home/reason.webp';
import ReasonImg3 from '../assets/image/home/reason.jp2';
import CustomerImg11 from '../assets/image/home/customer1.png'
import CustomerImg12 from '../assets/image/home/customer1.webp'
import CustomerImg13 from '../assets/image/home/customer1.jp2'
import CustomerImg21 from '../assets/image/home/customer2.png'
import CustomerImg22 from '../assets/image/home/customer2.webp'
import CustomerImg23 from '../assets/image/home/customer2.jp2'
import CustomerImg31 from '../assets/image/home/customer3.png'
import CustomerImg32 from '../assets/image/home/customer3.webp'
import CustomerImg33 from '../assets/image/home/customer3.jp2'

SwiperCore.use([Navigation, Autoplay, Controller]);

const TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};
  
TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 300;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

class Home extends Component {
    state = {
        slidesPerView: 1
    }
    componentDidMount() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        window.scrollTo(0, 0);
        if (window.innerWidth > 1000) {
            this.setState({
                slidesPerView: 1.03
            })
        }
    }
    render() {
        return (
            <main>
                <section className="banner home-banner">
                    <div className="container">
                        <h1>BUSINESS ADMINISTRATOR</h1>
                        <h2>I am&nbsp;
                            <span
                            className="txt-rotate"
                            data-period="2000"
                            data-rotate='[ "business strategist & manager.",
                            "financial & revenue manager.",
                            "technical leader." ]'
                            >
                            </span>
                        </h2>
                        <ScrollBanner />
                    </div>
                </section>
                <section id="next">
                    <div className="container">
                        <h2>Why professionals needed?</h2>
                        <div className="reason">
                            <picture>
                                <source srcSet={ReasonImg2} type="image/webp" />
                                <source srcSet={ReasonImg3} type="image/jp2" />
                                <source srcSet={ReasonImg1} type="image/jpeg" />
                                <img src={ReasonImg1} alt="Top 20 Reasons Startups Fail" />
                            </picture>
                            <div>
                                <p><span>Success in business is what everyone wants, but not everyone achieves.</span><br />
                                    <span className="danger">75%</span> of startups fail.<br />
                                    One of the main reasons is not having the right team in place to make the company successful.<br />
                                    Most of the small business and solo professionals don’t have an assistant.<br />
                                    Whether they are an independent consultant, coach, professional speaker, writer, or even a startup founder, they consider an administrative assistant a waste of money.
                                </p>
                                <p className="speech-desc">Venture capitalist Mark Suster, 0n his blog <a target="_blank" rel="noreferrer" href="https://bothsidesofthetable.com/">"Both Sides of the Table"</a>, made a compelling case for the value of an admin.</p>
                                <p className="speech">
                                    While I’m passionate about being scrappy when you start and controlling your costs, I’m equally passionate about performance when you have a bit of cash. And I’ve seen way too many CEOs/founders get bogged down in minutiae because they were used to it from the scrappy phase. They’ve struggled to scale.<br />
                                    <br />
                                    Think about it. Your single most valuable asset in the early days is your senior team and presumably nobody is more valuable than the founding team. And you’re bogged down in expense claims, booking hotel rooms, scheduling meetings, dealing with a leaky toilet, processing payroll, ordering computers, etc.<br />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="offer">
                    <div>
                        <div className="container">
                            <h2>What can I offer?</h2>
                            <div className="offer-skill">
                                <h3>Innovative corporate strategy establishment</h3>
                                <h3>Implementation of short- and long-term plans</h3>
                                <h3>Operational and performance improvements</h3>
                                <h3>Building dynamic executive and development teams</h3>
                                <h3>Effective financial management</h3>
                                <h3>Technological project management</h3>
                            </div>
                            <div className="offer-more">
                                <Link to={'/about'}>More</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="voice">
                    <div className="container">
                        <h2>Customers' voice</h2>
                        <Swiper
                            spaceBetween={40}
                            slidesPerView={this.state.slidesPerView}
                            navigation
                            centeredSlides
                            autoplay={{delay: 3000, disableOnInteraction: false}}
                            loop={true}
                            // onSlideChange={() => console.log('slide change')}
                            // onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <picture>
                                    <source srcSet={CustomerImg12} type="image/webp" />
                                    <source srcSet={CustomerImg13} type="image/jp2" />
                                    <source srcSet={CustomerImg11} type="image/png" />
                                    <img src={CustomerImg11} alt="Ishimoto Keiko" />
                                </picture>
                                <h3>Ishimoto Keiko</h3>
                                <p>
                                    His management skills are amazing.<br />
                                    He built a talented team and lead it well so increased my company's revenue by more than 1.5 times.<br />
                                    I wish to work with him again after Corona.
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <picture>
                                    <source srcSet={CustomerImg22} type="image/webp" />
                                    <source srcSet={CustomerImg23} type="image/jp2" />
                                    <source srcSet={CustomerImg21} type="image/png" />
                                    <img src={CustomerImg21} alt="Miura Yoshiyuki" />
                                </picture>
                                <h3>Miura Yoshiyuki</h3>
                                <p>
                                    Thank you for everything.<br />
                                    Helped with everything like building, running our company system and recruiting staff.<br />
                                    Technical core skills are greate. Thank you again.
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <picture>
                                    <source srcSet={CustomerImg32} type="image/webp" />
                                    <source srcSet={CustomerImg33} type="image/jp2" />
                                    <source srcSet={CustomerImg31} type="image/png" />
                                    <img src={CustomerImg31} alt="Kano Takashi" />
                                </picture>
                                <h3>Kano Takashi</h3>
                                <p>
                                    Sato's advice was great.<br />
                                    He gave a lot of advice on establishing our unique business strategy.<br />
                                    He has greatly contributed to the growth of our company.
                                </p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </main>
        );
    }
    
}

export default Home;