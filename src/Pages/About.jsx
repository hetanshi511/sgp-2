import aboutimage from "../Components/Images/about.webp";
import "./About.css";
const About = () => {
  return (
    <section className="about">
      <div className="heading">
        <h1>Career Development and Placement Cell</h1>
      </div>
      <div className="container">
        <div className="content">
          <h2>About CDPC</h2>
          <p>
            CDPC - Career Development and Placement Cell works for Building
            careers,Preparing for jobs,higher education,entrepreneurship and
            other career options.
          </p>
          <p>
            CDPC offers extensive resources to support our connection to a
            Career.It offers students expert Counselling,Training and
            Guidance.One to one guidance to each student to help them achieve
            their desired career. Free training to improve soft skills,
            technical skills, and personality as per the industry requirement
            through expert workshops.
          </p>
        </div>
        <div className="imagesection">
          <img src={aboutimage} alt="" className="about1"/>
        </div>
      </div>
    </section>
  );
};

export default About;
