import { motion, AnimatePresence } from "framer-motion";

export default function CompanyForm({ setShowForm }) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('company-form-overlay')) {
      setShowForm(false);
    }
  };

  return (
    <AnimatePresence>
        <motion.div
          className="company-form-overlay"
          onClick={handleOverlayClick}
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

            <form className="company-form">
              <h2 className="company-form-title">Formulário da Empresa</h2>

              <div className="company-form-group">
                <label htmlFor="companyName" className="company-form-label">
                  Nome da Empresa
                </label>
                <input type="text" id="companyName" className="company-form-input" placeholder="Insere o nome" />
              </div>

              <div className="company-form-group">
                <label htmlFor="companyEmail" className="company-form-label">
                  Email de Contacto
                </label>
                <input type="email" id="companyEmail" className="company-form-input" placeholder="empresa@email.com" />
              </div>

              <div className="company-form-group">
                <label htmlFor="companyDescription" className="company-form-label">
                  Descrição
                </label>
                <textarea id="companyDescription" className="company-form-textarea" rows="4" placeholder="Sobre a empresa..."></textarea>
              </div>

              <button type="submit" className="company-form-button">
                Submeter
              </button>
            </form>
          </div>
        </motion.div>
    </AnimatePresence>
  );
}