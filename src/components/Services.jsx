import { useState } from 'react';
import './styles.css';

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  // Open Modal
  const openModal = (index) => {
    setActiveModal(index);
  };

  // Close Modal
  const closeModal = () => {
    setActiveModal(null);
  };

  // Close modal when clicking outside the modal content
  const handleOutsideClick = (event) => {
    if (event.target.classList.contains("services__modal")) {
      closeModal();
    }
  };

  const services = [
    {
      title: "UI/UX Designer",
      icon: "uil uil-web-grid",
      details: [
        "I develop the user interface.",
        "Web page development.",
        "I create UX element interactions.",
        "I position your company brand."
      ]
    },
    {
      title: "Frontend Developer",
      icon: "uil uil-brackets-curly",
      details: [
        "I develop the user interface.",
        "Web page development.",
        "I create UX element interactions.",
        "I position your company brand."
      ]
    },
    {
      title: "Branding Designer",
      icon: "uil uil-pen",
      details: [
        "I develop the user interface.",
        "Web page development.",
        "I create UX element interactions.",
        "I position your company brand."
      ]
    }
  ];

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="services__container container grid" data-aos="fade-right">
        {services.map((service, index) => (
          <div className="services__content" key={index}>
            <div>
              <i className={`${service.icon} services__icon`}></i>
              <h3 className="services__title">{service.title}</h3>
            </div>
            <span
              className="button button--flex button--small button--link services__button"
              onClick={() => openModal(index)}
            >
              View More <i className="uil uil-arrow-right button__icon"></i>
            </span>

            {/* Modal */}
            {activeModal === index && (
              <div className="services__modal active-modal" onClick={handleOutsideClick}>
                <div className="services__modal-content">
                  <h4 className="services__modal-title">{service.title}</h4>
                  <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
                  <ul className="services__modal-services grid">
                    {service.details.map((detail, i) => (
                      <li key={i}>
                        <i className="uil uil-check-circle services__modal-icon"></i> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
