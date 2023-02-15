import "./TestPage.css";

const TestPage = () => {
  return (
    <div className="test-page">
      <div className="about-us-page">
        <img className="ss-1-icon" alt="" src="../ss-1@2x.png" />
        <div className="about-us-page-child" />
        <div className="top-nav">
          <b className="about-us">About Us</b>
        </div>
        <div className="i-am-an-undergraduate-student-wrapper">
          <sub className="i-am-an-container">
            <p className="i-am-an">{`I am an undergraduate student of the department of Electrical and Electronics Engineering,enthusiastic towards coding and mathematics. `}</p>
            <p className="technology-has-an">
              Technology has an extensive range in our society, and I am
              actively looking and exploring things to find new developments and
              to explore new interests.
            </p>
          </sub>
        </div>
        <img className="line-icon" alt="" src="../line.svg" />
        <div className="samridhi-sinha-wrapper">
          <h1 className="samridhi-sinha">
            <p className="i-am-an">Samridhi</p>
            <p className="technology-has-an">Sinha</p>
          </h1>
        </div>
        <img className="image-icon" alt="" src="../image.svg" />
        <img className="blur-effects-icon" alt="" src="../blur-effects.svg" />
        <img className="about-us-page-item" alt="" src="../vector-209.svg" />
        <h2 className="title">Engage 2022</h2>
        <img className="design-icon" alt="" src="../design.svg" />
        <img className="vector-icon" alt="" src="../vector.svg" />
      </div>
    </div>
  );
};

export default TestPage;
