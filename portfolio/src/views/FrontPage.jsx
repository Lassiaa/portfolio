import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Modal from "react-modal";

import style from "../assets/style";
import "../index.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";

const FrontPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [scrolled, setScrolled] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const mobile = useMediaQuery({ query: "(min-width: 780px)" });

  const openImageModal = (image) => {
    if (mobile) {
      setSelectedImage(image);
      setIsModalOpen(true);
    }
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fullHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(scrollPosition > 80);
      setScrolled(`${(scrollPosition / fullHeight) * 100}%`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleContrast = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      setContrast(scrollPosition > screenHeight);
    };

    window.addEventListener("scroll", handleContrast);
    return () => {
      window.removeEventListener("scroll", handleContrast);
    };
  }, []);

  const smoothScroll = (linkId, targetId) => {
    // console.log(`Smooth Scroll Called for ${linkId}`);
    const scrollLink = document.getElementById(linkId);

    if (scrollLink) {
      // console.log(`Found Scroll Link`);
      scrollLink.addEventListener("click", (event) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // console.log(`Found Target Element`);
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    }
  };

  useEffect(() => {
    smoothScroll("top-link", "top");
    smoothScroll("aboutme-link", "info");
    smoothScroll("down-button", "info");
    smoothScroll("contacts-link", "info");
    smoothScroll("project-link", "project");
    smoothScroll("hobby-link", "hobby");
    smoothScroll("studies-link", "studies");
  }, []);

  const progressContainerStyle = {
    background: "#baa98c",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    height: "5px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    zIndex: 99,
  };

  const progressBarStyle = {
    height: "5px",
    background: "#87775a",
    width: scrolled,
  };

  const images = [
    "/images/drawings/240girl.jpg",
    "/images/drawings/Baby-Yoda.png",
    "/images/drawings/city-night-time.png",
    "/images/drawings/Concept-One.png",
    "/images/drawings/Donut.png",
    "/images/drawings/Guy-With-Lantern.png",
    "/images/drawings/Guy-With-Pitchfork.png",
    "/images/drawings/porsche992gt3.png",
    "/images/drawings/r34_v2.png",
    "/images/drawings/Silvia-S15.png",
    "/images/drawings/Untitled_Artwork.png",
    "/images/drawings/Wizard.png",
    "/images/drawings/apple.jpg",
  ];

  const emailToCopy = "lassi.antero.aaltonen@gmail.com";

  const handleIconClick = () => {
    const tempInput = document.createElement("input");
    tempInput.value = emailToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    const message = `Email address "${emailToCopy}" copied to clipboard!`;
    setAlertMessage(message);

    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  };

  return (
    <div className={style.body} id="top">
      <div className="progress-container" style={progressContainerStyle}>
        <div className="progress-bar" style={progressBarStyle} />
      </div>

      <header className={isScrolled ? style.headerSticky : style.headerHidden}>
        <div className={style.hamburgerContainer}>
          <div
            className={
              contrast ? style.headerContentContrast : style.headerContent
            }
          >
            <h1
              className={contrast ? style.headerH1Contrast : style.headerH1}
              id="top-link"
              style={{ cursor: "pointer" }}
            >
              Lassi Aaltonen
            </h1>

            <div className={style.headerContents}>
              <a
                className={contrast ? style.headerAContrast : style.headerA}
                id="aboutme-link"
              >
                About me
              </a>
              <a
                className={contrast ? style.headerAContrast : style.headerA}
                id="contacts-link"
              >
                Contact info
              </a>
              <a
                className={contrast ? style.headerAContrast : style.headerA}
                id="studies-link"
              >
                Education
              </a>
              <a
                className={contrast ? style.headerAContrast : style.headerA}
                id="project-link"
              >
                Projects
              </a>
              <a
                className={contrast ? style.headerAContrast : style.headerA}
                id="hobby-link"
              >
                Hobbies
              </a>
            </div>
          </div>
        </div>
      </header>

      <div
        className={style.bannerImage}
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/021/583/370/non_2x/aesthetic-background-illustrations-of-clouds-stars-and-sky-with-purple-gradations-suitable-for-wallpapers-presentation-backgrounds-and-various-other-design-needs-free-vector.jpg')",
        }}
      >
        <div className={style.bannerContent}>
          <div className={style.bannerTitle}>
            <h2>Portfolio</h2>
          </div>

          <div className={style.bannerInfo}>
            <div className={style.bannerLassi}>
              <div
                className={style.lassiImg}
                style={{
                  backgroundImage: "url('/images/lassijaporsche.jpeg')",
                }}
              >
                <div className={style.lassiDarken}></div>
              </div>
            </div>
            <h3 className={style.bannerName}>Lassi Aaltonen</h3>
            <div className="flex flex-row justify-center gap-1">
              <a
                className={style.bannerIcon}
                href="https://www.instagram.com/lassiaa_/"
              >
                <InstagramIcon />
              </a>
              <a
                className={style.bannerIcon}
                href="https://www.linkedin.com/in/lassi-aaltonen-033042298"
              >
                <LinkedInIcon />
              </a>
              <a className={style.bannerIcon} onClick={handleIconClick}>
                <EmailIcon />
              </a>
            </div>

            {alertMessage && (
              <p className={style.alert} id="alert">
                {alertMessage}
              </p>
            )}
          </div>
          <div className={style.bannerArrowContainer}>
            <a
              className={`${style.bannerArrow} animate-bounce`}
              id="down-button"
            >
              <KeyboardArrowDownIcon className="scale-175" />
            </a>
          </div>
        </div>
      </div>

      <section className={style.infoSection} id="info">
        <div className={style.teamContainer}>
          <h2 className={style.teamHeading}>About me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className={style.infoContainer}>
              <div
                className={style.infoImg}
                style={{
                  backgroundImage: "url('/images/drinks.jpeg')",
                }}
              >
                <div className={style.imgDarken}></div>
              </div>
            </div>
            <div className={style.infoText}>
              <h2 className={style.infoH2}>22-year-old from Kerava</h2>
              <p>
                I am currently in my final year of studying Information and
                Communication Technology Engineering at Metropolia University of
                Applied Sciences. I am proactive, positive, and eager to learn
                new things. I hope to utilize my fresh skills and knowledge in
                the field of programming. I enjoy challenges and learning new
                things.
              </p>
              <div>
                <h3 className={style.infoH3}>Contact Information</h3>
                <div>
                  <PhoneIcon /> 044 033 7675
                </div>
                <div>
                  <EmailIcon /> lassi.antero.aaltonen@gmail.com
                </div>
                <div>
                  <LinkedInIcon />{" "}
                  <a href="https://linkedin.com/in/lassi-aaltonen-033042298">
                    Lassi Aaltonen
                  </a>
                </div>
                <div>
                  <GitHubIcon /> <a href="github.com/Lassiaa">Lassiaa</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.teamSection} id="studies">
        <div className={style.teamContainer}>
          <h2 className={style.teamHeading}>Education</h2>
          <div className="grid gap-10 grid-cols-1 max-w-screen-md mx-auto">
            <div className={style.memberContainer}>
              <div
                className={style.teamImgM}
                style={{
                  width: "50%",
                  backgroundImage:
                    "url('https://upload.wikimedia.org/wikipedia/fi/thumb/6/61/Metropolia_Ammattikorkeakoulu_logo.svg/2560px-Metropolia_Ammattikorkeakoulu_logo.svg.png')",
                }}
              ></div>

              <div className="py-6">
                <h2 className={style.name}>
                  Bachelor's Degree in Information and Communication Technology,
                  Metropolia, 2025
                </h2>
                <p className={style.email}>
                  Final year engineering student at Metropolia University of
                  Applied Sciences. I am studying Information and Communication
                  Technology. <br />
                  (Currently 239 ECTS)
                </p>

                <div className="flex flex-row justify-center gap-1">
                  <a
                    className={style.icon}
                    href="https://www.metropolia.fi/fi/opiskelu-metropoliassa/amk-tutkinnot/tieto-ja-viestintatekniikka"
                  >
                    <WebIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className={style.memberContainer}>
              <div
                className={style.teamImg}
                style={{
                  backgroundImage: "url('https://tickets.bc.fi/logo.php')",
                }}
              ></div>

              <div className="py-6">
                <h2 className={style.name}>
                  Vocational Qualification in Business Information Technology,
                  Helsinki Business College, 2020
                </h2>
                <p className={style.email}>
                  I graduated from Helsinki Business College 2020 with the final
                  grade of 4.7. I studied Business Information Technology
                  oriented towards programming.
                </p>

                <div className="flex flex-row justify-center gap-1">
                  <a
                    className={style.icon}
                    href="https://www.bc.fi/koulutukset/datanomi/"
                  >
                    <WebIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.teamSection} id="project">
        <div className={style.teamContainer}>
          <h2 className={style.teamHeading}>Projects</h2>
          <h3 className={style.projectH31}>Websites</h3>
          <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3">
            <div className={style.memberContainer}>
              <div
                className={style.teamImg}
                style={{
                  backgroundImage: "url('/images/projects/webweave.png')",
                }}
              >
                <div className={style.imgDarken}></div>
              </div>

              <div className="py-6">
                <h2 className={style.name}>Webweave</h2>
                <p className={style.email}>
                  OpenAI based AI website generator, that generates websites
                  based on users input.
                </p>

                <div className="flex flex-row justify-center gap-1">
                  <a
                    className={style.icon}
                    href="https://github.com/ofisch/WebWeave.git"
                  >
                    <GitHubIcon />
                  </a>
                  <a className={style.icon} href="https://webweave.fi">
                    <WebIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className={style.memberContainer}>
              <div
                className={style.teamImg}
                style={{
                  backgroundImage: "url('/images/projects/velling.png')",
                }}
              >
                <div className={style.imgDarken}></div>
              </div>
              <div className="py-6">
                <h2 className={style.name}>Company Website</h2>
                <p className={style.email}>
                  Rakennus- ja remontointipalvelu Velling homepage.
                </p>

                <div className="flex flex-row justify-center gap-1">
                  <a
                    className={style.icon}
                    href="https://www.rakennusvelling.com/"
                  >
                    <WebIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h3 className={style.projectH3}>Mobile Applications</h3>

          <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3">
            <div className={style.memberContainer}>
              <div
                className={style.teamImg}
                style={{
                  backgroundImage: "url('/images/projects/Bac-Buddy.png')",
                }}
              >
                <div className={style.imgDarken}></div>
              </div>
              <div className="py-6">
                <h2 className={style.name}>BAC-Buddy</h2>
                <p className={style.email}>
                  Android-application, that lets user measure their blood
                  alcohol level.
                </p>

                <div className="flex flex-row justify-center gap-1">
                  <a
                    className={style.icon}
                    href="https://github.com/JamiJJokinen/loppuprojekti.git"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h3 className={style.projectH3}>Drawings</h3>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
          >
            <Masonry>
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  style={{ width: "100%", display: "block", cursor: "pointer" }}
                  onClick={() => openImageModal(image)}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>

          {isModalOpen && (
            <>
              <Modal
                isOpen={selectedImage !== null}
                onRequestClose={closeImageModal}
                contentLabel="Selected Image"
                className={style.modalStyle}
              >
                <img
                  src={selectedImage}
                  alt="Selected Image"
                  className={style.modalImg}
                  style={{ maxHeight: "90%", objectFit: "contain" }}
                />
                <div className={style.modalBtnContainer}>
                  <button onClick={closeImageModal} className={style.modalBtn}>
                    Close
                  </button>
                </div>
              </Modal>
              <div className="fixed top-0 left-0 w-full h-full bg-black opacity-80"></div>
            </>
          )}
        </div>
      </section>

      <section className={style.hobbySection} id="hobby">
        <div className={style.teamContainer}>
          <h2 className={style.teamHeading}>Hobbies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div
              className={
                "order-0 sm:order-2 h-full w-full mx-auto border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
              }
            >
              <div
                className={style.infoImg}
                style={{
                  backgroundImage:
                    "url('/images/drawings/Guy-With-Lantern.png')",
                }}
              >
                <div className={style.imgDarken}></div>
              </div>
            </div>

            <div
              className={
                "order-1 sm:order-1 text-left text-md font-inter pb-20"
              }
            >
              <h2 className={style.infoH2}>Drawing</h2>
              <p>
                I have been drawing since I was a kid. Nowadays I draw on my
                Ipad using Procreate.
              </p>
            </div>

            <div
              className={
                "order-2 sm:order-2 h-full w-full mx-auto border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
              }
            >
              <div
                className={style.infoImg}
                style={{
                  backgroundImage: "url('/images/hobbies/3dprint.jpg')",
                }}
              >
                <div className={style.imgDarken}></div>
              </div>
            </div>
            <div
              className={
                "order-3 sm:order-3 text-left text-md font-inter pb-20"
              }
            >
              <h2 className={style.infoH2}>3D Printing</h2>
              <p>I strated 3D printing as a hobby in 2022.</p>
            </div>

            <div
              className={
                "order-4 sm:order-5 h-full w-full mx-auto border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
              }
            >
              <div
                className={style.infoImg}
                style={{
                  backgroundImage: "url('/images/hobbies/floorball.jpg')",
                }}
              >
                <div className={style.imgDarken}></div>
              </div>
            </div>

            <div
              className={
                "order-5 sm:order-4 text-left text-md font-inter pb-20"
              }
            >
              <h2 className={style.infoH2}>Floorball</h2>
              <p>
                I played floorball competitively and at the challenger level for
                over 12 years when I was younger. I also played one season in
                the men's 5th division. I was on teams Blackbirds and TusBy.
                Nowadays, I play occasionally just for fun.
              </p>
            </div>

            <div
              className={
                "order-6 sm:order-5 h-full w-full mx-auto border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
              }
            >
              <div
                className={style.infoImg}
                style={{
                  backgroundImage: "url('/images/hobbies/gym.jpg')",
                }}
              >
                <div className={style.imgDarken}></div>
              </div>
            </div>
            <div
              className={
                "order-7 sm:order-6 text-left text-md font-inter pb-20"
              }
            >
              <h2 className={style.infoH2}>Gym</h2>
              <p>
                I've been consistently going to the gym for two years, aiming to
                work out three times a week.
              </p>
            </div>

            <div
              className={
                "order-8 sm:order-9 h-full w-full mx-auto border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
              }
            >
              <div
                className={style.infoImg}
                style={{
                  backgroundImage: "url('/images/hobbies/golf.jpg')",
                }}
              >
                <div className={style.imgDarken}></div>
              </div>
            </div>

            <div
              className={
                "order-9 sm:order-8 text-left text-md font-inter pb-20"
              }
            >
              <h2 className={style.infoH2}>Golf</h2>
              <p>
                I strated to Golf this summer and fell in love with the sport. I
                completed the Green Card course at Virvik Golf. Golf Pro
                Christine Blomqwist was my instructor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrontPage;
