export default function Featured(){
    return (
        <section className="section featured-tours" id="featured">
        <div className="title-wrapper">
          <h2 className="title">
            featured <span className="subtitle">tours</span>
          </h2>
        </div>
        <div className="section-center featured-center ">
          <article className="tour-card"> 
              <div className="tour-img-container">
                <a href="/ooty"><img
                  src={require("../images/ooty.jpg")}
                  className="tour-img"
                  alt=""
                /></a>
              </div> 
            <div className="tour-footer">
              <h4 className="tour-title">Ooty - Queen Of Hills</h4>
              <div className="tour-info">
                <p className="tour-country">
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  Coimbatore,Tamil Nadu.
                </p>
              </div>
            </div>
          </article>
          <article className="tour-card">
            <a href="/valparai">
              <div className="tour-img-container">
                <img
                  src= "https://live.staticflickr.com/643/22146922258_4909743b45_b.jpg"
                  className="tour-img"
                  alt=""
                />
              </div>
            </a>
            <div className="tour-footer">
              <h4 className="tour-title">Valparai-Seventh Heaven</h4>
              <div className="tour-info">
                <p className="tour-country">
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  Coimbatore,Tamil Nadu.
                </p>
              </div>
            </div>
          </article>
          <article className="tour-card">
            <a href="valparai.html">
              <div className="tour-img-container">
                <img
                  src= "https://cdn.pixabay.com/photo/2017/09/01/13/07/kodaikanal-2704177_640.jpg"
                  className="tour-img"
                  alt=""
                />
              </div>
            </a>
            <div className="tour-footer">
              <h4 className="tour-title">Kodaikanal</h4>
              <div className="tour-info">
                <p className="tour-country">
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  Dindigul,Tamil Nadu.
                </p>
              </div>
            </div>
          </article>

        </div>
        <div className="tour-link">
          <a href="/alltour" className="btn-primary">
            all tours
          </a>
        </div>
      </section>
    );
}