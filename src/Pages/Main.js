import React from "react";
import GreyTee from "../Images/GreyTee.jpg";
import calculator from "../Images/calculator.png";
import Orebro from "../Images/Orebro.jpg";
import Starwars from "../Images/Starwars.png";
import Feedback from "../Images/Feedback.png";
import Sunshine from "../Images/sunshine.jpg";
import htmlLogo from "../../src/Images/htmlLogo.png";
import cssLogo from "../../src/Images/cssLogo.png";
import jsLogo from "../../src/Images/JavaScriptLogo.png";
import reactLogo from "../../src/Images/reactLogo.svg";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";

//done - setting the banner at top allows the top picture to go underneath the banner
//done - About section - greeting changes depending on time "Good morn/aft/eve etc"
//done - added logos under images
// done - Projects - make links to sites OR open a preview window
//Homepage - dynamic background
// About - Projects out of view when scrolled to the top

// Projects - make images zoom on hover
//
//Projects -
//Project - I want the BITs to animate into plac, into the center
//backgroud - after the about section, make it a stationary one
// About section - make imake left off-centre and text vertically center to image
//header titles justified to the left
//make the enter page slide up when clicking enter
//header links scroll to the right place
//COntact form - position cursor with placeholder
//contact form - add captcha
//contact form - add check for invalid email

const Main = () => {
  const [timeOfDay, setTimeOfDay] = useState("day");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    const setTheTime = () => {
      const time = new Date();
      const hours = time.getHours();
      console.log(hours);

      if (hours >= 0 && hours <= 12) {
        console.log("morning");
        setTimeOfDay("morning");
      } else if (hours >= 12 && hours <= 16) {
        console.log("afternoon");
        setTimeOfDay("afternoon");
      } else {
        console.log("good evening");
        setTimeOfDay("evening");
      }
    };
    setTheTime();
  }, []);
  useEffect(() => {
    console.log(name);
  }, [name]);
  const updateName = () => {
    setName();
    //console.log(name.value);
  };
  const updateEmail = () => {
    setEmail();
  };
  const updateMessage = () => {
    setMessage();
  };

  // const goToSite = () => {
  //   window.location = "https://jonny5800.github.io/calculator/";
  // };

  const projectSection = document.querySelector("#projects");

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      projectSection.classList.add("hidden");
    } else {
      projectSection.classList.remove("hidden");
    }
  });

  return (
    <div>
      <div className="stickyBanner ">
        <h3 className="bannerLabels">
          {/* <a href="#Home"> Home</a> */}
          <Link to="/">Home</Link>
        </h3>
        <h3 className="bannerLabels">
          <a href="#aboutSectionHeader"> About</a>
        </h3>
        <h3 className="bannerLabels">
          <a href="#Projects"> Projects</a>
        </h3>
        <h3 className="bannerLabels">
          <a href="#contactSectionHeader"> Contact</a>
        </h3>
      </div>

      <section className="aboutSection">
        <div id="About"></div>
        <div>
          <h2 className="sectionHeader" id="aboutSectionHeader">
            About
          </h2>
        </div>
        <div className="sectionAbout animate-section-about">
          <div className="aboutPictureAndName">
            <img
              className="sectionAboutPicture"
              src={GreyTee}
              alt="greyTeePicture"
            />
            <div>Good {timeOfDay}, I'm Jonny Hall</div>
          </div>

          <div className="aboutText">
            I am a JS/React Web Developer. A graduate of Pharmaceutial and
            Chemical Sciences and since foud a much greater interest in web
            development. I enjoy spending time coding and finding solutions to
            new challenges.
          </div>
        </div>
        <div id="Projects"></div>
      </section>

      <section className="projectSection ">
        <div className="containerProjects"></div> {/*id="Projects" */}
        <div className="headerContainers">
          <h2 className="sectionHeader" id="projectSectionHeader">
            Projectzzz
          </h2>
        </div>
        <div className="sectionProjects ">
          {/* <div>
          <h2 className="SectionHeader">Projects</h2>
        </div> */}
          <div className="projectChild Star-Wars">
            Sunshine
            <div className="projectImageDiv">
              <img className="projectImage" src={Sunshine} alt="starwars" />
            </div>
            <div className="projectS+Description">
              <h4>
                Text about the project goes here. Text about the project goes
                here. Text about the project goes here.
              </h4>
              <div className="projectLogoDiv">
                <img className="projectLogos" src={htmlLogo} alt="htmlLogo" />
                <img className="projectLogos" src={cssLogo} alt="cssLogo" />
                <img className="projectLogos" src={jsLogo} alt="jsLogo" />
                <img className="projectLogos" src={reactLogo} alt="reactLogo" />
              </div>
            </div>
          </div>
          <div className="projectChild Calculator">
            Orebro
            <div className="projectImageDiv">
              <a
                href="https://jonny5800.github.io/orebro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="projectImage" src={Orebro} alt="orebro" />
              </a>
            </div>
            {/* https://www.google.com/imgres?imgurl=https%3A%2F%2Fpedestrianspace.org%2Fwp-content%2Fuploads%2F2021%2F01%2FABC_8205-copy-scaled.jpg&tbnid=Zx_psqiNYThGGM&vet=12ahUKEwilprXq4KL-AhXfsCcCHVNbA2wQMygZegUIARCbAg..i&imgrefurl=https%3A%2F%2Fpedestrianspace.org%2Fopenart-orebro-city-for-art%2F&docid=seQeuXikQTSXzM&w=2560&h=1711&q=orebro&ved=2ahUKEwilprXq4KL-AhXfsCcCHVNbA2wQMygZegUIARCbAg */}
            <div className="projectS+Description">
              <h4>
                Text about the project goes here. Text about the project goes
                here. Text about the project goes here.
              </h4>
              <div className="projectLogoDiv">
                <img className="projectLogos" src={htmlLogo} alt="htmlLogo" />
                <img className="projectLogos" src={cssLogo} alt="cssLogo" />
                <img className="projectLogos" src={jsLogo} alt="jsLogo" />
                <img className="projectLogos" src={reactLogo} alt="reactLogo" />
              </div>
            </div>
          </div>
          <div className="projectChild Orebro">
            Feedback
            <div className="projectImageDiv">
              <img className="projectImage" src={Feedback} alt="feedback" />
            </div>
            <div className="projectS+Description">
              <h4>
                Text about the project goes here. Text about the project goes
                here. Text about the project goes here.
              </h4>
              <div className="projectLogoDiv">
                <img className="projectLogos" src={htmlLogo} alt="htmlLogo" />
                <img className="projectLogos" src={cssLogo} alt="cssLogo" />
                <img className="projectLogos" src={jsLogo} alt="jsLogo" />
                <img className="projectLogos" src={reactLogo} alt="reactLogo" />
              </div>
            </div>
          </div>
          <div className="projectChild Feedback">
            Calculator
            <div className="projectImageDiv">
              <a
                href="https://jonny5800.github.io/calculator/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="projectImage"
                  src={calculator}
                  alt="calculator"
                  // onClick={goToSite}
                />
              </a>
            </div>
            <div className="projectS+Description">
              <h4>
                Text about the project goes here. Text about the project goes
                here. Text about the project goes here.
              </h4>
              <div className="projectLogoDiv">
                <img className="projectLogos" src={htmlLogo} alt="htmlLogo" />
                <img className="projectLogos" src={cssLogo} alt="cssLogo" />
                <img className="projectLogos" src={jsLogo} alt="jsLogo" />
              </div>
            </div>
          </div>
          <div className="projectChild Star-Wars">
            Star Wars2
            <div>
              <a
                href="https://media.istockphoto.com/id/185244309/photo/work-in-progress.jpg?s=612x612&w=0&k=20&c=ECQ9StWhFTfFjWg_yt8ITEyAuZpRLVV8akD20jagc-Y="
                rel="noopener noreferrer"
                target="_blank"
              >
                <img className="projectImage" src={Starwars} alt="starwars" />
              </a>
            </div>
            <div className="projectS+Description">
              <h4>
                Text about the project goes here. Text about the project goes
                here. Text about the project goes here.
              </h4>
              <div className="projectLogoDiv">
                <img className="projectLogos" src={htmlLogo} alt="htmlLogo" />
                <img className="projectLogos" src={cssLogo} alt="cssLogo" />
                <img className="projectLogos" src={jsLogo} alt="jsLogo" />
                <img className="projectLogos" src={reactLogo} alt="reactLogo" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contactSection">
        <div className="sectionContact">
          <div className="headerContainers">
            <h2 className="sectionHeader" id="contactSectionHeader">
              Contact
            </h2>
          </div>
          <div className="contactLogoDiv">
            {/* <FontAwesomeIcon icon={faGithub} /> */}
            <div className="contactIconDivs">
              <a href="mailto:jonathan.hall5800@gmail.com?subject=Your Portfolio">
                <i class="fa-solid fa-envelopes-bulk fa-2xl contactIcon"></i>
              </a>

              <h5 className="contactLogo" id="Contact">
                Email
              </h5>
            </div>
            <div className="contactIconDivs">
              <a
                href="https://github.com/Jonny5800"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fa-brands fa-github fa-2xl contactIcon"></i>
              </a>

              <h5 className="contactLogo">Github</h5>
            </div>

            <div className="contactIconDivs">
              <a
                href="https://www.linkedin.com/in/jonnny-hall-bsc-hons/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin fa-2xl contactIcon"></i>
              </a>
              <h5 className="contactLogo">LinkedIn</h5>
            </div>
          </div>
          <div className="contactForm">
            <h2 className="contactForm">Contact</h2>
            <h5 className="formHeadind">
              If you have any questions or suggetions please leave your details
              below. I will get back to you as soon as possible.{" "}
            </h5>

            <form id="enquiryForm">
              <textarea
                className="formName"
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <textarea
                className="formEmail"
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={updateEmail}
              />

              <textarea
                className="formMessage"
                type="text"
                name="message"
                placeholder="Message"
                value={message}
                onChange={updateMessage}
              />
              <button className="formSubmit">SUBMIT</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
