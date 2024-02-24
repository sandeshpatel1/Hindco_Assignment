import React from "react";
import './About.css'; // Import CSS for styling
import about1 from "../../Assets/about1.jpg"
import about2 from "../../Assets/about2.jpg"
import about3 from "../../Assets/about3.jpg"

const About = () => {
    return (
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img src={about1} alt="About" />
          </div>
          <div className="about-info">
            <div className="about-title">
            <h6 className="extra">Lorem ipsum dolor</h6>
            <h2>Watch Application</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima commodi consequuntur autem? Voluptas ducimus impedit mollitia quas modi minima debitis necessitatibus nam, repellendus, provident fuga quod, architecto quae non! Nam!
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan odio vitae varius molestie.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit numquam qui, eaque dolorum magnam inventore ut explicabo illum debitis? Sit, impedit labore. Libero a, asperiores ipsam recusandae unde excepturi totam?
                 Nullam accumsan odio vitae varius molestie. Duis sed orci eget arcu lobortis cursus ut non ipsum.</p>
            <div className="about-buttons">
              <button className="about-button">Learn More</button>
              <button className="about-button btn2">Begin With Us</button>
              </div>
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="about-info">
            <div className="about-title">
            <h6 className="extra">Lorem ipsum dolor</h6>
            <h2>Meet the Team</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus in quod odio. Illo aspernatur
                 ipsum nesciunt minus excepturi velit ipsa, fugit corporis sed tempore quo laboriosam ex nisi facere? Nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan odio vitae varius molestie.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quibusdam aperiam dignissimos?
                Nullam accumsan odio vitae varius molestie. Duis sed orci eget arcu lobortis cursus ut non ipsum.</p>
            <div className="about-buttons">
              <button className="about-button">Learn More</button>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={about2} alt="About" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src={about3} alt="About" />
          </div>
          <div className="about-info">
            <div className="about-title">
            <h6 className="extra">Lorem ipsum dolor</h6>
            <h2>What We Do</h2>
            <div className="about-text">
            <div className="about-item">
                <h4 className="about-text-title">Interface Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet, consectetur . Nullam accumsan odio vitae varius molestie.</p>
            <h4 className="about-text-title">User Exreience</h4>
            <p>Lorem ipsum dolor sit amet consectetur.Nullam accumsan odio . Duis sed orci eget arcu lobortis cursus ut non ipsum.</p>
            </div>
            <div>
            <h4 className="about-text-title">development</h4>
            <p>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan odio vitae varius molestie.</p>
            <h4 className="about-text-title">Product stratergy</h4>
            <p>Lorem ipsum dolor sit amet consectetur.Nullam accumsan odio vitae varius molestie. Duist arcu lobortis cursus ut non ipsum.</p>
            </div>
            </div>
            <div className="about-buttons">
              <button className="about-button">Begin With Us</button>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  };
  
  export default About;
  