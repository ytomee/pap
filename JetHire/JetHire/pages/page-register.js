"use client";

import Layout from "../components/Layout/Layout";
import Link from "next/link";
import { signIn } from 'next-auth/react';

export default function Register() {
    return (
        <>
            <Layout>
                <section className="pt-20 login-register">
                    <div className="container">
                        <div className="row login-register-cover">
                            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                                <div className="text-center">
                                    <p className="font-sm text-brand-2">Registe-se </p>
                                    <h2 className="mt-10 mb-5 text-brand-1">Bem-Vindo!</h2>
                                    <p className="font-sm text-muted mb-30">Acesso a todas as funcionalidades. <br></br> Sem necessidade de cartão de crédito.</p>
                                    <div className="social-icons-group">
                                        <button onClick={() => signIn("google")} 
                                        className="btn social-login hover-up mb-20">
                                            <img src="assets/imgs/template/icons/icon-google.svg"/>
                                            <strong>Google</strong>
                                        </button>
                                        <button className="btn social-login hover-up mb-20">
                                            <img src="assets/imgs/template/icons/linkedin.svg"/>
                                            <strong>LinkedIn</strong>
                                        </button>
                                        <button className="btn social-login hover-up mb-20">
                                            <img src="assets/imgs/template/icons/github-mark.svg"/>
                                            <strong>GitHub</strong>
                                        </button>
                                    </div>
                                    <div className="divider-text-center">
                                        <span>ou continuar com</span>
                                    </div>
                                </div>
                                <form className="login-register text-start mt-20" action="#">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-1">
                                            Nome Completo *
                                        </label>
                                        <input className="form-control" id="input-1" type="text" required name="fullname" placeholder="Jet Hire" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-2">
                                            Email *
                                        </label>
                                        <input className="form-control" id="input-2" type="email" required name="emailaddress" placeholder="jethire@gmail.com" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-3">
                                            Nome de utilizador *
                                        </label>
                                        <input className="form-control" id="input-3" type="text" required name="username" placeholder="jethire" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-4">
                                            Palavra-passe *
                                        </label>
                                        <input className="form-control" id="input-4" type="password" required name="password" placeholder="••••••••" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-5">
                                            Repita a palavra-passe *
                                        </label>
                                        <input className="form-control" id="input-5" type="password" required name="re-password" placeholder="••••••••" />
                                    </div>
                                    <div className="login_footer form-group d-flex justify-content-between">
                                        <label className="cb-container">
                                            <input type="checkbox" />
                                            <span className="text-small">Concordo com os <a>Termos &amp; Condições</a></span>
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-brand-1 hover-up w-100" type="submit" name="login">
                                            Registar
                                        </button>
                                    </div>
                                    <div className="text-muted text-center">
                                        Já tem uma conta?
                                        <Link legacyBehavior href="/page-signin">
                                            <a href="page-signin"> Entrar</a>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                            <div className="img-1 d-none d-lg-block">
                                <img className="shape-1" src="assets/imgs/page/login-register/img-1.svg" alt="JobBox" />
                            </div>
                            <div className="img-2">
                                <img src="assets/imgs/page/login-register/img-2.svg" alt="JobBox" />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
