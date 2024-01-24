export default function About(){
    return (
        <section className="section about" id="about">
        <div className="title-wrapper">
          <h2 className="title">
            about <span className="subtitle">us</span>
          </h2>
        </div>
        <div className="section-center about-center">
          <div className="about-img">
            <img
              src={require("./images/about.jpeg")}
              className="about-photo"
              alt="awesome beach"
            />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Many people tell us that they would love to travel like we do, but
              it just doesn’t fit with their lifestyle. We agree that our style
              of long term travel would not work for everyone. However, we also
              think that there are so many different types of travel out there
              that you are bound to find something that works for you.
            </p>
            <p>
              None of these types of travel are good or bad as they each have
              their own advantages and disadvantages. You will probably find
              that you will end up enjoying several different types of travel
              throughout your lifetime.
            </p>
            {/* <a href="#" className="btn-primary">
              read more
            </a> */}
          </article>
        </div>
      </section>
    );
}