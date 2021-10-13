import React, {Component} from 'react';
import ScrollBanner from '../components/scroll';
import Avatar1 from '../assets/image/about/avatar.jpg';
import Avatar2 from '../assets/image/about/avatar.webp';
import Avatar3 from '../assets/image/about/avatar.jp2';
import SkillImg11 from '../assets/image/about/skill1.jpg';
import SkillImg12 from '../assets/image/about/skill1.webp';
import SkillImg13 from '../assets/image/about/skill1.jp2';
import SkillImg21 from '../assets/image/about/skill2.jpg';
import SkillImg22 from '../assets/image/about/skill2.webp';
import SkillImg23 from '../assets/image/about/skill2.jp2';
import SkillImg31 from '../assets/image/about/skill3.jpg';
import SkillImg32 from '../assets/image/about/skill3.webp';
import SkillImg33 from '../assets/image/about/skill3.jp2';
import SkillImg41 from '../assets/image/about/skill4.jpg';
import SkillImg42 from '../assets/image/about/skill4.webp';
import SkillImg43 from '../assets/image/about/skill4.jp2';
import SkillImg51 from '../assets/image/about/skill5.jpg';
import SkillImg52 from '../assets/image/about/skill5.webp';
import SkillImg53 from '../assets/image/about/skill5.jp2';

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <main>
                <section className="banner about-banner">
                    <div className="container">
                        <h1>I am Sato Takeru, passionate business administrator, <br />strategy consultant, financial manager, and product leader.</h1>
                        <ScrollBanner />
                    </div>
                </section>
                <section id="next">
                    <div className="container">
                        <h2>Who am I?</h2>
                        <div className="intro">
                            <picture>
                                <source srcSet={Avatar2} type="image/webp" />
                                <source srcSet={Avatar3} type="image/jp2" />
                                <source srcSet={Avatar1} type="image/jpeg" />
                                <img src={Avatar1} alt="Sato Takeru" />
                            </picture>
                            <p>
                                My name is Sato Takeru.<br />
                                I am a passionate business administrator with an interest in blockchain and full-stack web development.<br />
                                I was awarded MBA degree in Graduate School of Management, Kyoto University and Bachelor's degree in computer science in Kyoto university.<br />
                                <br />
                                I am working as CTO at <a target="_blank" rel="noreferrer" href="https://invictaorg.herokuapp.com/">INVICTA</a> now.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="skill">
                    <h2>My skills</h2>
                    <div className="container">
                        <div className="skill-box">
                            <h3>Strategic planning & direction</h3>
                            <div className="skill-content">
                                <div className="skill-img">
                                    <picture>
                                        <source srcSet={SkillImg12} type="image/webp" />
                                        <source srcSet={SkillImg13} type="image/jp2" />
                                        <source srcSet={SkillImg11} type="image/jpeg" />
                                        <img src={SkillImg11} alt="Strategic planning & direction" />
                                    </picture>
                                </div>
                                <div className="skill-text">
                                    <div className="skill-text1">
                                        <h4>Develop true vision statement</h4>
                                        <p>
                                            Gather the facts, market trend and demand.<br />
                                            Identify business’ aspirations and set goals to measure progress toward achieving those aspirations.
                                        </p>
                                    </div>
                                    <div className="skill-text1">
                                        <h4>Define competitors and targets</h4>
                                        <p>
                                            Consider how can create space from competition in service offering, pricing model, delivery system and more.<br />
                                            Defining niches and specialties allows companies to focus resources.
                                        </p>
                                    </div>
                                    <div className="skill-text1">
                                        <h4>Look long-term, focus on systematic growth</h4>
                                        <p>
                                            Prepare a strategic plan that is long-term and realistic.<br />
                                            It is only through growth that companies can afford to invest in things like technology, the best people and new equipment.
                                        </p>
                                    </div>
                                    <div className="skill-text1">
                                        <h4>Measure results, execute excellently</h4>
                                        <p>
                                            It’s vital to continually review all objectives and action plans to make sure you’re still on track to achieve that overall goal.<br />
                                            Creating, managing and reviewing a strategy requires you to capture the relevant information, break down large chunks of information, plan, prioritize, capture the relevant information and have a clear strategic vision.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-box">
                            <h3>Business management</h3>
                            <div className="skill-content">
                                <div className="skill-img">
                                    <picture>
                                        <source srcSet={SkillImg22} type="image/webp" />
                                        <source srcSet={SkillImg23} type="image/jp2" />
                                        <source srcSet={SkillImg21} type="image/jpeg" />
                                        <img src={SkillImg21} alt="Business management" />
                                    </picture>
                                </div>
                                <div className="skill-text">
                                    <div className="skill-text1">
                                        <h4>Managerial decisions</h4>
                                        <p>
                                            Quality and speedy decisions elevate the productivity of an organization.<br />
                                            Make good judgments, facilitate decisions that support the corporate strategy.
                                        </p>
                                    </div>
                                    <div className="skill-text1">
                                        <h4>Build & lead the senior executive team</h4>
                                        <p>
                                            Conditions must establish to build great leadership teams are like these.<br />
                                            Enterprise purpose, Operating model, Management rhythm, Self awareness, Productive dialogue, and Accountability
                                        </p>
                                    </div>
                                    <div className="skill-text1">
                                        <h4>Manage operations and resources</h4>
                                        <p>
                                            Minimize the amount of time a job waits around in the process, and keep process simple.<br />
                                            Resource management is an ongoing process.
                                        </p>
                                    </div>
                                    <div className="skill-text1">
                                        <h4>Implementation of short- and long-term plans</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-box">
                            <h3>Finance & revenue management</h3>
                            <div className="skill-content">
                                <div className="skill-img">
                                    <picture>
                                        <source srcSet={SkillImg32} type="image/webp" />
                                        <source srcSet={SkillImg33} type="image/jp2" />
                                        <source srcSet={SkillImg31} type="image/jpeg" />
                                        <img src={SkillImg31} alt="Finance & revenue management" />
                                    </picture>
                                </div>
                                <div className="skill-text">
                                    <div className="skill-text1">
                                        <h4>Track cash flow and financial plan</h4>
                                        <p>
                                            The three main components of a cash flow statement are cash flow from operations, cash flow from investing, and cash flow from financing.
                                        </p>
                                    </div>
                                    <div className="skill-text1">
                                        <h4>Analyze financial strengths and weaknesses</h4>
                                        <p>
                                            Analyze financial strengths and weaknesses, suggest corrective actions to optimize strengths and  eliminate or reduce weaknesses.
                                        </p>
                                    </div>
                                    <div className="skill-text1">
                                        <h4>Determine best mix of debt, equity, and internal finance</h4>
                                        <p>
                                            Capital structure describes the mix of a firm's long-term capital, which consists of a combination of debt and equity.<br />
                                            Important ratios to analyze capital structure include the debt ratio, the debt-to-equity ratio, and the capitalization ratio.
                                        </p>
                                    </div>
                                    <div className="skill-text1">
                                        <h4>Generate maximum of revenue</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-box">
                            <h3>Technical product management</h3>
                            <div className="skill-content">
                                <div className="skill-img">
                                    <picture>
                                        <source srcSet={SkillImg42} type="image/webp" />
                                        <source srcSet={SkillImg43} type="image/jp2" />
                                        <source srcSet={SkillImg41} type="image/jpeg" />
                                        <img src={SkillImg41} alt="Technical Product management" />
                                    </picture>
                                </div>
                                <div className="skill-text">
                                    <div className="skill-text1">
                                        <h4>Building talent development team</h4>
                                        <p>
                                            Define technology stack.<br />
                                            Hire or include talent developer.
                                        </p>
                                    </div>
                                    <div className="skill-text1">
                                        <h4>Project management</h4>
                                        <p>
                                            Define project scope, timeline and create project plan.<br />
                                            Delegate work according to available members.<br />
                                            Document everything, and monitor the project progress.
                                        </p>
                                    </div>
                                    <div className="skill-text1">
                                        <h4>Maintain overall technical growth</h4>
                                        <p>
                                            Use LMS, mentoring and coaching.<br />
                                            Identify and develop soft skills, and continue to look for developmental opportunities.
                                        </p>
                                    </div>
                                    <div className="skill-text1">
                                        <h4>Management of technical roadmap</h4>
                                        <p>
                                            Identify strategic objectives.<br />
                                            Define functional needs and priorities.
                                        </p>
                                    </div>
                                    <div className="skill-text1">
                                        <h4>Create business model</h4>
                                        <p>
                                            Establish business processes.<br />
                                            Develop a strong value proposition.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skill-box">
                                <h3>Customer relationship management</h3>
                                <div className="skill-content">
                                    <div className="skill-img">
                                    <picture>
                                        <source srcSet={SkillImg52} type="image/webp" />
                                        <source srcSet={SkillImg53} type="image/jp2" />
                                        <source srcSet={SkillImg51} type="image/jpeg" />
                                        <img src={SkillImg51} alt="Customer relationship management" />
                                    </picture>
                                    </div>
                                    <div className="skill-text">
                                        <div className="skill-text1">
                                            <h4>Understand customers’ journey</h4>
                                            <p>
                                                Spread brand message to reach prospects on multiple channels.<br />
                                                Have a rich arsenal of tools, platforms, and technologies can use to do business.
                                            </p>
                                        </div>
                                        <div className="skill-text1">
                                            <h4>Focus on the user experience</h4>
                                            <p>
                                                Engage, nurture, and convert by offering unmatched user experience.<br />
                                                Focus on delivering a fast and personalized user experience across all your channels.
                                            </p>
                                        </div>
                                        <div className="skill-text1">
                                            <h4>Influencer Partnership</h4>
                                        </div>
                                        <div className="skill-text1">
                                            <h4>Data Security</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default About;