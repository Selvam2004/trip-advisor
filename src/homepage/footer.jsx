export default function Footer(){
    return (
        <footer className="section footer">
        <div className="footer-links">
          <a href="#home" className="footer-link scroll-link">
            home
          </a>
          <a href="#about" className="footer-link scroll-link">
            about
          </a>
          <a href="#services" className="footer-link scroll-link">
            services
          </a>
          <a href="#featured" className="footer-link scroll-link">
            featured
          </a>
          <a href="#gallery" className="footer-link scroll-link" >
            gallery
          </a>
        </div>
        <div className="footer-icons">
          <a
            href="https://www.twitter.com"
            
            className="footer-icon"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.twitter.com"
             
            className="footer-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.twitter.com"
             
            className="footer-icon"
          >
            <i className="fab fa-squarespace"></i>
          </a>
        </div>
        <p className="copyright">
          &copy;<span id="date"></span>. all rights reserved
        </p>
      </footer>
    );
}