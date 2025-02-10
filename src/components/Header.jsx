
const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <nav>
          <img src="images/logo.jpg" className="logo" alt="Logo" style={{ width: '80px', height: 'auto' }} />
          <ul id="sidemenu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;