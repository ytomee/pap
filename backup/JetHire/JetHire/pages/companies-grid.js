/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";

export default function CompaniesGrid() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box-2">
                        <div className="container">
                            <div className="banner-hero banner-single banner-single-bg">
                                <div className="block-banner text-center">
                                    <h3 className="wow animate__animated animate__fadeInUp">
                                        <span className="job-list-number"> 4 </span> empresas disponíveis
                                    </h3>
                                    <div className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, <br className="d-none d-xl-block" />
                                        atque delectus molestias quis?
                                    </div>
                                    <div className="form-find text-start mt-40 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                        <form>
                                            <input className="form-input input-keysearch mr-10" type="text" placeholder="Palavras-chave... " />
                                            <button className="btn btn-default btn-find font-sm">Procurar</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-30">
                        <div className="container">
                            <div className="row flex-row-reverse">
                                <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
                                    <div className="content-page">
                                        <div className="box-filters-job">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-5">
                                                    <span className="text-small text-showing">
                                                        A mostrar <strong>41-60 </strong>de <strong>944 </strong>empresas
                                                    </span>
                                                </div>
                                                <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                                                    <div className="display-flex2">
                                                        <div className="box-border">
                                                            <span className="text-sortby">Ordenar por:</span>
                                                            <div className="dropdown dropdown-sort">
                                                                <button className="btn dropdown-toggle" id="dropdownSort2" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
                                                                    <span>Qualificação</span>
                                                                    <i className="fi-rr-angle-small-down" />
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort2">
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item active">Qualificação</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item">Vagas <i className="fa-solid fa-arrow-up ml-5"></i></a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item">Vagas <i className="fa-solid fa-arrow-down ml-5"></i></a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Car Toys</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>66</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">New York, US</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>12 Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Carols Daughter</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>18</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">London, UK</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>25</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-3.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Amazon</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>52</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">Tokyo,Japan</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>54</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Baseball Savings</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>85</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">Chicago, US</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>6</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-5.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Ashford</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>25</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">Toronto, Italia</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>67</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-6.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Callaway Golf</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>34</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">San Francisco, US</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>45</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-7.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Percepta</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>97</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">Chinatown, Singpore</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>64</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-8.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Exela Movers</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>67</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">New York, US</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>87</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-9.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Ibotta, Inc</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>45</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">New York, US</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>23</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Wanderu </a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>08</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">New York, US</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>45</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Aceable, Inc.</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>54</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">New York, US</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>67</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-3.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Intrepid Travel</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>123</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">New York, US</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>53</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Defendify </a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>64</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">New York, US</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>56</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-5.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Twisters </a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>34</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">New York, US</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>66</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-6.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Fireworks</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>12</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">New York, US</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>12</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-1.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Car Toys</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>66</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">New York, US</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>12</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-2.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Carols Daughter</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>18</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">London, UK</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>25</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-3.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Amazon</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>52</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">Tokyo,Japan</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>54</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-4.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Baseball Savings</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>85</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">Chicago, US</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>6</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-5.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Ashford</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>25</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">Toronto, Italia</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>67</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                                                    <div className="image-box">
                                                        <Link legacyBehavior href="/company-details">
                                                            <a>
                                                                <img src="assets/imgs/brands/brand-6.png" alt="jobBox" />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="info-text mt-10">
                                                        <h5 className="font-bold">
                                                            <Link legacyBehavior href="/company-details">
                                                                <a>Callaway Golf</a>
                                                            </Link>
                                                        </h5>
                                                        <div className="mt-5">
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <img alt="jobBox" src="assets/imgs/template/icons/star.svg" />
                                                            <span className="font-xs color-text-mutted ml-10">
                                                                <span>(</span>
                                                                <span>34</span>
                                                                <span>)</span>
                                                            </span>
                                                        </div>
                                                        <span className="card-location">San Francisco, US</span>
                                                        <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-big">
                                                                    <span>45</span>
                                                                    <span> Jobs Open</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="paginations">
                                        <ul className="pager">
                                            <li>
                                                <a className="pager-prev" href="#" />
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">1</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">2</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">3</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">4</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">5</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number active">6</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="#">
                                                    <a className="pager-number">7</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <a className="pager-next" href="#" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                                    <div className="sidebar-shadow none-shadow mb-30">
                                        <div className="sidebar-filters">
                                            <div className="filter-block head-border mb-30">
                                                <h5>
                                                    Filtros avançados
                                                    <Link legacyBehavior href="#">
                                                        <a className="link-reset"><i className="fa-solid fa-rotate-right mr-5"></i> Repor</a>
                                                    </Link>
                                                </h5>
                                            </div>
                                            <div className="filter-block mb-20">
                                                <h5 className="medium-heading mb-15">Indústria</h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Tecnologia</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">12</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Criatividade</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">23</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Ciências</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">43</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Atendimento</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">65</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Gestão</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">76</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Operador</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">76</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-block mb-20">
                                                <h5 className="medium-heading mb-25">Salário</h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">$0k - $20k</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">56</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">$20k - $40k</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">37</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">$40k - $60k</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">75</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">$60k - $80k</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">98</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">$80k - $100k</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">14</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">$100k - $200k</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">25</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-block mb-30">
                                                <h5 className="medium-heading mb-10">Experiência</h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small"> {'<'} 1 ano</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">56</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">1-2 anos</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">87</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="text-small">2-3 anos</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">24</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">3-4 anos</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">45</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">4-5 anos</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">76</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small"> {'>'} 5 anos </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">89</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-block mb-30">
                                                <h5 className="medium-heading mb-10">Modalidade</h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Presencial</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">12</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="text-small">Remoto</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">65</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Híbrido</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">58</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-block mb-30">
                                                <h5 className="medium-heading mb-10">Oferta publicada</h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="text-small">All</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">78</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">1 dia</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">65</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">7 dias</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">24</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">30 dias</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">56</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-block mb-20">
                                                <h5 className="medium-heading mb-15">Tipo de trabalho</h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Tempo inteiro</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">25</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="text-small">Part-time</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">64</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Trabalhos remotos</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">78</span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">Freelancer</span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">97</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50 mb-20">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="box-newsletter">
                                        <div className="text-md-newsletter text-center">
                                            Quer trabalhar connosco?  Registe a sua empresa!
                                        </div>
                                        <div className="box-register-company mt-40">
                                            <div className="form-register-company">Preencha o formulário com os dados necessários! <i className="fa-solid fa-arrow-right ml-10"></i></div>
                                            <div className="form-register-company"><a><i className="fa-solid fa-clipboard-list mr-10"></i><span>Formulário</span></a></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-lg-4 col-12">
                                    <div className="box-newsletter">
                                        <div className="text-md-newsletter text-center">
                                            teste
                                        </div>
                                        <div className="mt-40 d-flex justify-content-center">
                                            <a href="mailto:tomealmeida@gmail.com" className="btn btn-email-company font-heading"><i className="fa-regular fa-envelope mr-5"></i> Email</a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
