import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import countries from "/components/json/countries.json";

export default function CompanyForm({ setShowForm }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As palavras-passe não coincidem.");
      return;
    }
    console.log("Submitted data:", formData);
  };

  const generateYears = () => {
    const years = [];
    for (let year = 2025; year >= 1800; year--) {
      years.push(year);
    }
    return years;
  };
  const years = generateYears();

  return (
    <AnimatePresence>
      <motion.div
        className="company-form-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="company-form-wrapper">
          <button
            className="company-form-close"
            onClick={() => setShowForm(false)}
          >
            &times;
          </button>

          <form className="company-form" onSubmit={handleSubmit}>
            <h2 className="company-form-title">Formulário de registo de empresa</h2>

            <div className="row">
              <div className="col-12 col-md-5">
                <h5 className="mb-10">Nome da empresa</h5>
                <div className="input-style mb-20">
                  <input
                    name="companyName"
                    value={formData.companyName || ""}
                    onChange={handleChange}
                    placeholder="Jet Hire"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="col-12 col-md-4">
                <h5 className="mb-10">NIF</h5>
                <div className="input-style mb-20">
                  <input
                    name="nif"
                    value={formData.nif || ""}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="col-12 col-md-3">
                <h5 className="mb-10">Ano de fundação</h5>
                <div className="select-style mb-20">
                  <select
                    name="foundedYear"
                    value={formData.foundedYear || ""}
                    onChange={handleChange}
                  >
                    <option value="">Selec.</option>
                    {years.map((year) => (
                      <option key={`year-${year}`} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-3">
                <h5 className="mb-10">País</h5>
                <div className="select-style mb-20">
                  <select
                    name="country"
                    value={formData.country || ""}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selec.</option>
                    {countries.map((country) => (
                      <option key={country.value} value={country.value}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-3">
                <h5 className="mb-10">Cidade</h5>
                <div className="input-style mb-20">
                  <input
                    name="city"
                    value={formData.city || ""}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <h5 className="mb-10">Morada completa</h5>
                <div className="input-style mb-20">
                  <input
                    name="address"
                    value={formData.address || ""}
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>

              <div className="col-12 col-md-4">
                <h5 className="mb-10">Email geral</h5>
                <div className="input-style mb-20">
                  <input
                    name="generalEmail"
                    value={formData.generalEmail || ""}
                    onChange={handleChange}
                    type="email"
                    required
                  />
                </div>
              </div>

              <div className="col-12 col-md-4">
                <h5 className="mb-10">Telefone</h5>
                <div className="input-style mb-20">
                  <input
                    name="phone"
                    value={formData.phone || ""}
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>

              <div className="col-12 col-md-4">
                <h5 className="mb-10">Website</h5>
                <div className="input-style mb-20">
                  <input
                    name="website"
                    value={formData.website || ""}
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <h5 className="mb-10">Nome do responsável</h5>
                <div className="input-style mb-20">
                  <input
                    name="responsiblePerson"
                    value={formData.responsiblePerson || ""}
                    onChange={handleChange}
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <h5 className="mb-10">Email de login</h5>
                <div className="input-style mb-20">
                  <input
                    name="loginEmail"
                    value={formData.loginEmail || ""}
                    onChange={handleChange}
                    type="email"
                    required
                  />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <h5 className="mb-10">Palavra-passe</h5>
                <div className="input-style mb-20">
                  <input
                    name="password"
                    value={formData.password || ""}
                    onChange={handleChange}
                    type="password"
                    required
                  />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <h5 className="mb-10">Confirmar palavra-passe</h5>
                <div className="input-style mb-20">
                  <input
                    name="confirmPassword"
                    value={formData.confirmPassword || ""}
                    onChange={handleChange}
                    type="password"
                    required
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="company-form-button mt-4">
              Enviar
            </button>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
