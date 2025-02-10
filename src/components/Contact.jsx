
const Contact = () => {
  return (
    <section id="contact">
      <div className="imageaddition">
        <div className="contact-section">
          {/* Map Section (Contact Us text on the right side) */}
          <div className="map-container">
            <h1>Contact Me</h1>
            <p><i className="fas fa-phone-alt"></i> <a href="tel:+918495903845">+91 8495903845</a></p>
            <p><i className="fas fa-map-marker-alt"></i> Bangalore, India</p>
            <p><i className="fas fa-envelope"></i> <a href="mailto:shashankmahadev011@gmail.com">shashankmahadev011@gmail.com</a></p>

            {/* Social Media Icons */}
            <div className="social-icons_2">
              <a href="https://github.com" target="_blank" className="social-icon_2 github" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://instagram.com" target="_blank" className="social-icon_2 instagram" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank" className="social-icon_2 linkedin" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://twitter.com" target="_blank" className="social-icon_2 twitter" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          {/* Form Section (Positioned on the right) */}
          <div className="form-container">
            <form name="submit-to-google-sheet">
              <h2>Send a message</h2>
              <input type="text" name="Name" placeholder="Name" required />
              <input type="email" name="Email" placeholder="Email" required />
              <input type="tel" name="Phone" placeholder="Phone" />
              <textarea name="Message" placeholder="Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
