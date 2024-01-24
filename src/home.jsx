 export default function Home(){
    return (
        <header id="home">
        <nav className="navbar"> 
          
          <div className="nav-center">
            <div >
              <h2 className="tle ">
            trip <span className="subtitle">advisor</span>
          </h2> 
            </div>
            <div className="nav-links" id="nav-links">
              <a href="#home" className="scroll-link nav-link">
                home
              </a>
              <a href="#about" className=" scroll-link nav-link">
                about
              </a>
              <a href="#services" className="nav-link scroll-link">
                services
              </a>
              <a href="#featured" className="nav-link scroll-link">
                featured
              </a>
              <a href="#gallery" className="nav-link scroll-link">
                gallery
              </a>
               
            </div>
            <div className="nav-icons">
              <form action="#" method="get">
                <div > 
              </div>
              </form>
             
            </div>
          </div>
        </nav>
        <div className="hero">
          
          <div className="hero-banner">
            
            <h1 className="hero-title">continue exploring</h1>
            <p className="hero-text">
              Where the journey begins! To the world of an incredible vacation.
              We make dreams come true!
            </p>
            
            <a href="#featured" className="btn btn-white scroll-link">
              explore tours
            </a>
            
          </div>
          
        </div>
      </header>
    );
}