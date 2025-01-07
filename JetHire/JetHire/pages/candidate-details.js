import Link from "next/link";
import Layout from "../components/Layout/Layout";
import React, { useState } from "react";

export default function CandidateDetails() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            <Layout>
                <section className="section-box-2">
                    <div className="container">
                        <div className="banner-hero banner-image-single">
                            <img src="assets/imgs/page/candidates/img.png" alt="jobbox" />
                        </div>
                        <div className="box-company-profile">
                            <div className="image-company">
                                <img src="assets/imgs/page/candidates/candidate-profile.jpg" alt="jobbox" />
                            </div>
                            <div className="row">
                                <div className="col-lg-8 col-md-12">
                                    <h3>
                                        Tomé Almeida <span className="card-location font-regular"><i className="fa-solid fa-location-dot mr-5"></i>Cantanhede, PT</span>
                                    </h3>
                                    <p className="mt-5 font-md color-text-paragraph-2 mb-15">Front-End Developer</p>
                                </div>
                                <div className="col-lg-4 col-md-12 text-lg-end">
                                    <Link legacyBehavior href="page-contact">
                                        <a className="btn btn-apply-big"><i className="fa-regular fa-circle-down mr-5"></i>Curriculum Vitae</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box-nav-tabs mt-10 mb-5">
                            <ul className="nav" role="tablist">
                                <li>
                                    <a className="btn btn-border aboutus-icon mr-15 mb-5 active" onClick={() => handleOnClick(1)}>
                                        Short Bio
                                    </a>
                                </li>
                                <li>
                                    <a className="btn btn-border recruitment-icon mr-15 mb-5" onClick={() => handleOnClick(2)}>
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a className="btn btn-border people-icon mb-5" onClick={() => handleOnClick(3)}>
                                        Working Experience
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="border-bottom pt-10 pb-10" />
                    </div>
                </section>
                <section className="section-box mt-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="content-single">
                                    <div className="tab-content">
                                        <div className={`tab-pane fade ${activeIndex === 1 && "show active"}`}>
                                            <h4>About Me</h4>
                                            <p>Hello there! My name is Alan Walker. I am a graphic designer, and I’m very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!</p>
                                            <h4>Professional Skills</h4>
                                            <div className="row mb-40">
                                                <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
                                                    <h6 className="color-text-paragraph-2">Programming</h6>
                                                    <div className="box-progress-bar mt-20">
                                                        <p className="font-xs color-text-paragraph-2 mb-10">HTML &amp; CSS</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "78%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>78%</span>
                                                            </div>
                                                        </div>
                                                        <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Javascript</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-brand-2" role="progressbar" style={{ width: "88%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>88%</span>
                                                            </div>
                                                        </div>
                                                        <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Database</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "62%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>62%</span>
                                                            </div>
                                                        </div>
                                                        <p className="font-xs color-text-paragraph-2 mb-10 mt-30">React JS</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "92%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>92%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
                                                    <h6 className="color-text-paragraph-2">Design</h6>
                                                    <div className="box-progress-bar mt-20">
                                                        <p className="font-xs color-text-paragraph-2 mb-10">Photoshop</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "29%" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>29%</span>
                                                            </div>
                                                        </div>
                                                        <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Figma</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "20%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>20%</span>
                                                            </div>
                                                        </div>
                                                        <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Illustrator</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "65%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>65%</span>
                                                            </div>
                                                        </div>
                                                        <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Sketch</p>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{ width: "82%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                                                                <span>82%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p />
                                            <h4>Work Experience</h4>
                                            <ul>
                                                <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                                                <li>5+ years of industry experience in interactive design and / or visual design</li>
                                                <li>Excellent interpersonal skills</li>
                                                <li>Aware of trends in mobile, communications, and collaboration</li>
                                                <li>Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                                                <li>The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                                                <li>History of impacting shipping products with your work</li>
                                                <li>A Bachelor’s Degree in Design (or related field) or equivalent professional experience</li>
                                                <li>Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
                                            </ul>
                                            <h4>Education</h4>
                                            <ul>
                                                <li>Necessitatibus quibusdam facilis</li>
                                                <li>Velit unde aliquam et voluptas reiciendis non sapiente labore</li>
                                                <li>Commodi quae ipsum quas est itaque</li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                                                <li>Deleniti asperiores blanditiis nihil quia officiis dolor</li>
                                            </ul>
                                        </div>
                                        <div className={`tab-pane fade ${activeIndex === 2 && "show active"}`}>
                                            <h4>Skills</h4>
                                            <p />
                                            Hello there! My name is Alan Walker. I am a graphic designer, and I’m very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.
                                            <p />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!
                                        </div>
                                        <div className={`tab-pane fade ${activeIndex === 3 && "show active"}`}>
                                            <h4>Work Experiences</h4>
                                            <p />
                                            Hello there! My name is Alan Walker. I am a graphic designer, and I’m very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.
                                            <p />
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                                <div className="sidebar-border">
                                    <h5 className="f-18">Visão geral</h5>
                                    <div className="sidebar-list-job">
                                        <ul>
                                            <li>
                                                <div className="sidebar-icon-item">
                                                    <i className="fi-rr-briefcase" />
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="text-description">Experiência</span>
                                                    <strong className="small-heading">12 years</strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-icon-item">
                                                    <i className="fi-rr-marker" />
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="text-description">Línguas</span>
                                                    <strong className="small-heading">English, German</strong>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar-icon-item">
                                                    <i className="fi-rr-time-fast" />
                                                </div>
                                                <div className="sidebar-text-info">
                                                    <span className="text-description">Nível de educação</span>
                                                    <strong className="small-heading">Master Degree</strong>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar-list-job">
                                        <ul className="ul-disc">
                                            <li>205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</li>
                                            <li>Phone: (123) 456-7890</li>
                                            <li>Email: contact@Evara.com</li>
                                        </ul>
                                        <div className="mt-30">
                                            <Link legacyBehavior href="page-contact">
                                                <a className="btn btn-send-message">Entrar em contacto</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
