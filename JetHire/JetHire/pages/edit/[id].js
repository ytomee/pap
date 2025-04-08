/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import countries from "../../components/json/countries.json"
import educationLevels from "../../components/json/education.json"
import yearsExperienceJson from "../../components/json/years.json"

//COMPONENTS
import Languages from "../../components/elements/edit/languages";

//DATABASE & SESSION
import connectMongoDB from "../../lib/mongodb";
import User from "../../models/user";
import { getSession } from "next-auth/react";

export default function EditProfile({ user }) {

    const [formData, setFormData] = useState(user);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            profile: {
                ...prevFormData.profile,
                [name]: value,
            },
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                window.location.href = "/";
            } else {
                setError(data.message || "Erro ao atualizar perfil.");
            }
        } catch (err) {
            setError("Erro de comunicação com o servidor.");
        }
    };

    const handleDebug = (e) => {
        e.preventDefault();
        console.log("Dados a enviar:", JSON.stringify(formData, null, 2));
    };    

    //FORM CODE
    const [charCount, setCharCount] = useState(0);
    const [charCountSmall, setCharCountSmall] = useState(0);

    const handleTextChange = (e) => {
        setCharCount(e.target.value.length);
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            profile: {
                ...prevFormData.profile,
                [name]: value,
            },
        }));
    };

    const handleTextChangeSmall = (e) => {
        setCharCountSmall(e.target.value.length);
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            profile: {
                ...prevFormData.profile,
                [name]: value,
            },
        }));
    };

    const handlePFPChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result.split(",")[1];
            setFormData((prev) => ({
            ...prev,
            pfp: base64String,
            }));
        };
        reader.readAsDataURL(file);
    };

    const handleBannerChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result.split(",")[1];
            setFormData((prev) => ({
            ...prev,
            banner: base64String,
            }));
        };
        reader.readAsDataURL(file);
    };

    const generateYears = () => {
        const years = [];
        for (let year = 2025; year >= 1950; year--) {
            years.push(year);
        }
        return years;
    };

    const years = generateYears();

    //EDUCATION SCHEMA
    const [educations, setEducations] = useState([]);
    const [newEducation, setNewEducation] = useState({
        role: "",
        company: "",
        startYear: "",
        endYear: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEducation({ ...newEducation, [name]: value });
    };

    const addEducation = (e) => {
        e.preventDefault();
        const { role, company, startYear, endYear } = newEducation;

        if (!role || !company || !startYear || (!endYear && endYear !== "Atual")) {
            alert("Preencha todos os campos.");
            return;
        }

        if (startYear !== "Atual" && endYear !== "Atual" && parseInt(startYear) > parseInt(endYear)) {
            alert("A data de início deve ser anterior à data de fim.");
            return;
        }

        setEducations([...educations, newEducation]);
        setNewEducation({ role: "", company: "", startYear: "", endYear: "" });
    };

    const removeEducation = (index) => {
        setEducations(educations.filter((_, i) => i !== index));
    };

    //EXPERIENCE SCHEMA
    const [experiences, setExperiences] = useState([]);
    const [newExperience, setNewExperience] = useState({
        role: "",
        company: "",
        startYear: "",
        endYear: "",
    });

    const handleExperienceChange = (e) => {
        const { name, value } = e.target;
        setNewExperience({ ...newExperience, [name]: value });
    };

    const addExperience = (e) => {
        e.preventDefault();
        const { role, company, startYear, endYear } = newExperience;

        if (!role || !company || !startYear || (!endYear && endYear !== "Atual")) {
            alert("Preencha todos os campos.");
            return;
        }

        if (startYear !== "Atual" && endYear !== "Atual" && parseInt(startYear) > parseInt(endYear)) {
            alert("A data de início deve ser anterior à data de fim.");
            return;
        }

        setExperiences([...experiences, newExperience]);
        setNewExperience({ role: "", company: "", startYear: "", endYear: "" });
    };

    const removeExperience = (index) => {
        setExperiences(experiences.filter((_, i) => i !== index));
    };

    return (
        <>
            <Layout>
                <section>
                    <div className="container">
                        <div>
                            <span className="font-md color-brand-2 mt-20 d-inline-block">Criação de perfil</span>
                            <h2 className="mt-5 mb-10">Olá, vamos melhorar o seu perfil!</h2>
                            <p className="font-md color-text-paragraph-2">
                                Para se dar a conhecer melhor, e encontrar mais eficazmente a sua oportunidade de trabalho, preencha os seguintes dados.
                            </p>
                            <form 
                                className="contact-form-style mt-30" 
                                id="profile-form" 
                                action="#" 
                                method="POST"
                                onSubmit={handleSubmit}
                                //onSubmit={handleDebug}
                            >
                                <div className="row wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                    <div className="col-lg-10">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-5 mb-10">
                                                <h4 className="mb-10">Cidade</h4>
                                                <div className="input-style mb-20">
                                                    <input 
                                                        className="font-sm color-text-paragraph-2" 
                                                        name="city"
                                                        placeholder="ex: Cantanhede" 
                                                        type="text" 
                                                        onChange={handleChange}
                                                        value={formData?.profile?.city || ""}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 mb-10">
                                                <h4 className="mb-10">País</h4>
                                                <div className="select-style mb-20">
                                                <select
                                                    name="country"
                                                    value={formData.country}
                                                    onChange={handleChange}
                                                    >
                                                    {formData?.profile?.country && (
                                                        <option key={formData?.profile?.country} value={formData?.profile?.country}>
                                                        {formData?.profile?.country}
                                                        </option>
                                                    )}
                                                    {countries.map((country) => (
                                                        <option key={country.name} value={country.name}>
                                                        {country.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 mb-10">
                                                <h4 className="mb-10">Telemóvel</h4>
                                                <div className="input-style mb-20">
                                                    <input 
                                                        className="font-sm color-text-paragraph-2" 
                                                        name="phone"
                                                        placeholder="ex: 918273878" 
                                                        type="text"
                                                        onChange={handleChange}
                                                        value={formData?.profile?.phone || ""}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mb-10">
                                                <h4 className="mb-10">Profissão atual</h4>
                                                <div className="input-style mb-20">
                                                    <input 
                                                        className="font-sm color-text-paragraph-2" 
                                                        name="role" 
                                                        placeholder="(Se aplicável)" 
                                                        type="text"
                                                        onChange={handleChange}
                                                        value={formData?.profile?.role || ""} 
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 mb-10">
                                                <h4 className="mb-10">Email de contactos</h4>
                                                <div className="input-style mb-20">
                                                    <input 
                                                        className="font-sm color-text-paragraph-2" 
                                                        name="contactEmail" 
                                                        placeholder="(Deixar vazio se quiser manter o da conta)" 
                                                        type="text"
                                                        onChange={handleChange}
                                                        value={formData?.profile?.contactEmail || ""} 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <h4 className="mb-10">Foto de perfil</h4>
                                        <div className="input-style mb-20">
                                            <input 
                                                id="pfp-upload" 
                                                className="file-input" 
                                                name="pfp" 
                                                type="file" 
                                                accept="image/*" 
                                                onChange={handlePFPChange}
                                                style={{ display: "none" }} 
                                            />

                                            <label htmlFor="pfp-upload" className="upload-label-pfp">
                                            {formData.profile?.pfp || formData.pfp ? (
                                                <img
                                                src={
                                                    formData.pfp
                                                    ? formData.pfp.startsWith("data:") || formData.pfp.startsWith("http")
                                                        ? formData.pfp
                                                        : `data:image/jpeg;base64,${formData.pfp}`
                                                    : formData.profile.pfp
                                                }
                                                alt="Foto de perfil"
                                                className="upload-label-image"
                                                />
                                            ) : (
                                                <div className="font-sm color-text-paragraph-2 d-flex align-items-center justify-content-center">
                                                <i className="fa-solid fa-plus mr-5"></i> Fazer upload
                                                </div>
                                            )}
                                            </label>

                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <h4 className="mb-10">Foto de fundo</h4>
                                        <div className="input-style mb-20">
                                            <input 
                                                id="banner-upload" 
                                                className="file-input" 
                                                name="banner" 
                                                type="file" 
                                                accept="image/*" 
                                                onChange={handleBannerChange}
                                                style={{ display: "none" }} 
                                            />

                                            <label 
                                                htmlFor="banner-upload"
                                                className="upload-label-pfp text-sm color-text-paragraph-2 d-flex align-items-center justify-content-center"
                                            >
                                            {formData.profile?.banner || formData.banner ? (
                                                <img
                                                src={
                                                    formData.banner
                                                    ? formData.banner.startsWith("data:") || formData.banner.startsWith("http")
                                                        ? formData.banner
                                                        : `data:image/jpeg;base64,${formData.banner}`
                                                    : formData.profile.banner
                                                }
                                                alt="Foto de fundo"
                                                className="upload-label-image"
                                                />
                                            ) : (
                                                <>
                                                    <i className="fa-solid fa-plus mr-5"></i> Fazer upload
                                                </>
                                            )}
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <h4 className="mb-10">Sobre mim</h4>
                                        <div className="textarea-style">
                                            <textarea 
                                                className="font-sm color-text-paragraph-2" 
                                                name="aboutMe" 
                                                placeholder="Conte-nos um pouco sobre si." 
                                                maxLength="3000"
                                                onChange={handleTextChange}
                                                value={formData?.profile?.aboutMe || ""}
                                            />
                                        </div>
                                        <p className="char-number">{charCount}/3000</p>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <h4 className="mb-10">Agora resuma em poucas palavras</h4>
                                        <div className="textarea-style">
                                            <textarea 
                                                className="font-sm color-text-paragraph-2" 
                                                name="aboutMeShort" 
                                                placeholder="Diga-nos resumidamente o que disse antes." 
                                                maxLength="500"
                                                style={{ minHeight: "100px" }} 
                                                onChange={handleTextChangeSmall}
                                                value={formData?.profile?.aboutMeShort || ""}
                                            />
                                        </div>
                                        <p className="char-number">{charCountSmall}/500</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 mb-10">
                                        <h4 className="mb-10">Nível de educação</h4>
                                        <div className="select-style mb-20">
                                            <select
                                                name="educationLevel"
                                                value={formData.educationLevel}
                                                onChange={handleChange}
                                            >
                                            {formData?.profile?.educationLevel && (
                                                <option key={formData?.profile?.educationLevel} value={formData?.profile?.educationLevel}>
                                                    {formData?.profile?.educationLevel}
                                                </option>
                                            )}
                                            {educationLevels.map((education) => (
                                                <option key={education.name} value={education.name}>
                                                {education.name}
                                                </option>
                                            ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 mb-10">
                                        <h4 className="mb-10">Anos de experiência</h4>
                                        <div className="select-style mb-20">
                                            <select
                                                name="yearsExperience"
                                                value={formData.yearsExperience}
                                                onChange={handleChange}
                                            >
                                            {formData?.profile?.yearsExperience && (
                                                <option key={formData?.profile?.yearsExperience} value={formData?.profile?.yearsExperience}>
                                                    {formData?.profile?.yearsExperience}
                                                </option>
                                            )}
                                            {yearsExperienceJson.map((year) => (
                                                <option key={year.name} value={year.name}>
                                                {year.name}
                                                </option>
                                            ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-10">
                                        <h4 className="mb-10">Línguas</h4>
                                        <Languages setFormData={setFormData}></Languages>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <h4 className="mb-10">Educação</h4>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h6 className="mb-5">Curso</h6>
                                            </div>
                                            <div className="col-lg-3">
                                                <h6 className="mb-5">Instituto</h6>
                                            </div>
                                            <div className="col-lg-1">
                                                <h6 className="mb-5">Início</h6>
                                            </div>
                                            <div className="col-lg-1">
                                                <h6 className="mb-5">Fim</h6>
                                            </div>
                                            <div className="col-lg-1"></div>
                                        </div>
                                        {educations.length === 0 ? (
                                            <div className="mb-20">Sem nenhum registo.</div>
                                        ) : (
                                            educations.map((edu, index) => (
                                                <div className="row mb-10" key={index}>
                                                    <div className="col-lg-6">
                                                        <div className="input-style">{edu.role}</div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="input-style">{edu.company}</div>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <div>{edu.startYear}</div>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <div>{edu.endYear}</div>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <button
                                                            className="remove-button-profile"
                                                            onClick={() => removeEducation(index)}
                                                            type="button"
                                                        >
                                                            <strong>Remover</strong>
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        )}

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h6 className="mb-10">Curso</h6>
                                                <div className="input-style mb-20">
                                                    <input
                                                        className="font-sm color-text-paragraph-2"
                                                        name="role"
                                                        value={newEducation.role}
                                                        placeholder="ex: Engenheiro Informático"
                                                        onChange={handleInputChange}
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <h6 className="mb-10">Instituto</h6>
                                                <div className="input-style mb-20">
                                                    <input
                                                        className="font-sm color-text-paragraph-2"
                                                        name="company"
                                                        value={newEducation.company}
                                                        placeholder="ex: ISEC"
                                                        onChange={handleInputChange}
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-1">
                                                <h6 className="mb-10">Ínicio</h6>
                                                <div className="select-style mb-20">
                                                    <select name="startYear" value={newEducation.startYear} onChange={handleInputChange}>
                                                        <option>Selec.</option>
                                                        {years.map((year) => (
                                                            <option key={year} value={year}>
                                                                {year}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-1">
                                                <h6 className="mb-10">Fim</h6>
                                                <div className="select-style mb-20">
                                                    <select name="endYear" value={newEducation.endYear} onChange={handleInputChange}>
                                                        <option>Selec.</option>
                                                        <option value="Atual">Atual</option>
                                                        {years.map((year) => (
                                                            <option key={year} value={year}>
                                                                {year}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-1 mb-20">
                                                <h6 className="mb-10">Adicionar</h6>
                                                <div className="mb-20">
                                                    <button className="btn-submit-register-form" onClick={addEducation}>
                                                    <i className="fa-solid fa-plus mr-5"></i> Adic.
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <h4 className="mb-10">Experiência</h4>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h6 className="mb-5">Curso</h6>
                                            </div>
                                            <div className="col-lg-3">
                                                <h6 className="mb-5">Instituto</h6>
                                            </div>
                                            <div className="col-lg-1">
                                                <h6 className="mb-5">Início</h6>
                                            </div>
                                            <div className="col-lg-1">
                                                <h6 className="mb-5">Fim</h6>
                                            </div>
                                            <div className="col-lg-1"></div>
                                        </div>
                                        {experiences.length === 0 ? (
                                            <div className="mb-20">Sem nenhum registo.</div>
                                        ) : (
                                            experiences.map((exp, index) => (
                                                <div className="row mb-10" key={index}>
                                                    <div className="col-lg-6">
                                                        <div className="input-style">{exp.role}</div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="input-style">{exp.company}</div>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <div>{exp.startYear}</div>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <div>{exp.endYear}</div>
                                                    </div>
                                                    <div className="col-lg-1">
                                                        <button
                                                            className="remove-button-profile"
                                                            onClick={() => removeExperience(index)}
                                                            type="button"
                                                        >
                                                        Remover
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        )}

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h6 className="mb-10">Função</h6>
                                                <div className="input-style mb-20">
                                                    <input
                                                        className="font-sm color-text-paragraph-2"
                                                        name="role"
                                                        value={newExperience.role}
                                                        placeholder="ex: Desenvolvedor Front-End"
                                                        onChange={handleExperienceChange}
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <h6 className="mb-10">Empresa</h6>
                                                <div className="input-style mb-20">
                                                    <input
                                                        className="font-sm color-text-paragraph-2"
                                                        name="company"
                                                        value={newExperience.company}
                                                        placeholder="ex: Jet Hire"
                                                        onChange={handleExperienceChange}
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-1">
                                                <h6 className="mb-10">Ínicio</h6>
                                                <div className="select-style mb-20">
                                                    <select name="startYear" value={newExperience.startYear} onChange={handleExperienceChange}>
                                                        <option>Selec.</option>
                                                        {years.map((year) => (
                                                            <option key={year} value={year}>
                                                                {year}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-1">
                                                <h6 className="mb-10">Fim</h6>
                                                <div className="select-style mb-20">
                                                    <select name="endYear" value={newExperience.endYear} onChange={handleExperienceChange}>
                                                        <option>Selec.</option>
                                                        <option value="Atual">Atual</option>
                                                        {years.map((year) => (
                                                            <option key={year} value={year}>
                                                                {year}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-1 mb-20">
                                                <h6 className="mb-10">Adicionar</h6>
                                                <div className="mb-20">
                                                    <button className="btn-submit-register-form" onClick={addExperience}>
                                                        <i className="fa-solid fa-plus mr-5"></i> Adic.
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mb-20">
                                        <h4 className="mb-10">Site pessoal</h4>
                                        <div className="input-style mb-20">
                                            <input 
                                                className="font-sm color-text-paragraph-2" 
                                                name="site" 
                                                placeholder="jethire.pt" 
                                                type="text"
                                                onChange={handleChange}
                                                value={formData?.profile?.site || ""}  
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <h4 className="mb-10">GitHub</h4>
                                        <div className="input-style mb-20">
                                            <input 
                                                className="font-sm color-text-paragraph-2" 
                                                name="github"
                                                placeholder="www.github.com" 
                                                type="text" 
                                                onChange={handleChange}
                                                value={formData?.profile?.github || ""} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <h4 className="mb-10">LinkedIn</h4>
                                        <div className="input-style mb-20">
                                            <input 
                                                className="font-sm color-text-paragraph-2" 
                                                name="linkedin" 
                                                placeholder="www.linkedin.com" 
                                                type="text" 
                                                onChange={handleChange}
                                                value={formData?.profile?.linkedin || ""} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <h4 className="mb-10">Curriculum Vitae</h4>
                                        <div className="input-style mb-20">
                                            <input 
                                                id="cv-upload" 
                                                className="file-input" 
                                                name="cv" 
                                                type="file" 
                                                style={{ display: "none" }} 
                                            />
                                            <label 
                                                htmlFor="cv-upload" 
                                                className="upload-label font-sm color-text-paragraph-2 d-flex align-items-center justify-content-center"
                                            >
                                                <i className="fa-solid fa-plus mr-5"></i> Fazer upload
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <button 
                                            className="btn-submit btn" 
                                            type="submit"
                                        >
                                            Confirmar
                                        </button>
                                        <label className="ml-20">
                                            <input required className="float-start mr-5 mt-6" type="checkbox" /> Ao confirmar esta caixa, está a concordar com os nossos <a className="terms-conditions">Termos & Condições</a>.
                                        </label>
                                    </div>
                                    {error && <p>{error}</p>}
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );

}

export async function getServerSideProps(context) {
    const { id } = context.params;
    const session = await getSession({ req: context.req });

    if (!session || !session.user || session.user.id !== id) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    try {
        await connectMongoDB();
        const user = await User.findById(id).lean();

        if (!user) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            };
        }

        return {
            props: {
                user: JSON.parse(JSON.stringify(user)),
                session,
            },
        };
    } catch (error) {
        console.error(error);
        return { props: { user: null } };
    }
}
