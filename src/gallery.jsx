export default function Gallery(){
    return (
        <section id="gallery" className="gallery">
        <div className="title-wrapper">
          <h2 className="title">
            our <span className="subtitle ">gallery</span>
          </h2>
        </div>

        <div className="gallery-center">
          <div className="gallery-img-container">
            <img
              src={require("./images/tour-1.jpeg")}
              className="gallery-img"
              alt=""
            />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("./images/tour-2.jpeg")}
              className="gallery-img"
              alt=""
            />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("./images/tour-3.jpeg")}
              className="gallery-img"
              alt=""
            />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("./images/tour-4.jpeg")}
              className="gallery-img"
              alt=""
            />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("./images/tour-5.jpeg")}
              className="gallery-img"
              alt=""
            />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <div className="gallery-img-container">
            <img
              src={require("./images/tour-6.jpeg")}
              className="gallery-img"
              alt=""
            />
            <span className="gallery-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      </section>
    );
}