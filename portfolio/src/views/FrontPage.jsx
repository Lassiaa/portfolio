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
    console.log(`Smooth Scroll Called for ${linkId}`);
    const scrollLink = document.getElementById(linkId);

    if (scrollLink) {
      console.log(`Found Scroll Link`);
      scrollLink.addEventListener("click", (event) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          console.log(`Found Target Element`);
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

  const images = ["./assets/img/240girl.jpg"];

  const emailToCopy = "lassi.antero.aaltonen@gmail.com";

  const handleIconClick = () => {
    const tempInput = document.createElement("input");
    tempInput.value = emailToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    const message = `Sähköpostiosoite "${emailToCopy}" kopioitu leikepöytään`;
    setAlertMessage(message);

    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  };

  return (
    <body className={style.body} id="top">
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
                Tietoa minusta
              </a>
              <a
                className={contrast ? style.headerAContrast : style.headerA}
                id="contacts-link"
              >
                Yhteystiedot
              </a>
              <a
                className={contrast ? style.headerAContrast : style.headerA}
                id="project-link"
              >
                Projektit
              </a>
              <a
                className={contrast ? style.headerAContrast : style.headerA}
                id="studies-link"
              >
                Koulutus
              </a>
            </div>
          </div>
        </div>
      </header>

      <div
        className={style.bannerImage}
        style={{
          backgroundImage: "url('./assets/img/lassijaporsche.jpeg')",
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
                  backgroundImage: "url('')",
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
          <h2 className={style.teamHeading}>Tietoa minusta</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className={style.infoContainer}>
              <div
                className={style.infoImg}
                style={{
                  backgroundImage: "url('')",
                }}
              >
                <div className={style.imgDarken}></div>
              </div>
            </div>
            <div className={style.infoText}>
              <h2 className={style.infoH2}>21-vuotias nuori Keravalta.</h2>
              <p>
                Pidän haasteita ja uuden oppimista. Olen sosiaalinen ja tulen
                hyvin toimeen erilaisten ihmisten kanssa. Vapaa-ajallani nautin
                urheilusta, piirtämisestä/animoinnista, pelaamisesta,
                ohjelmoinnista, 3D-mallinnuksesta ja tulostamisesta, elokuvien
                katselusta sekä ajanvietosta ystävien ja perheen parissa.
              </p>
              <div>
                <h3 className={style.infoH3}>Yhteystiedot</h3>
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

      <section className={style.teamSection} id="project">
        <div className={style.teamContainer}>
          <h2 className={style.teamHeading}>Projektit</h2>
          <h3 className={style.projectH31}>Nettisivut</h3>
          <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3">
            <div className={style.memberContainer}>
              <div
                className={style.teamImg}
                style={{
                  backgroundImage: "url('')",
                }}
              >
                <div className={style.imgDarken}></div>
              </div>

              <div className="py-6">
                <h2 className={style.name}>Webweave</h2>
                <p className={style.email}>
                  OpenAI pohjainen AI-sivukone, jonka avulla käyttäjä voi luoda
                  omat kotisivut.
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
                  backgroundImage: "url('')",
                }}
              >
                <div className={style.imgDarken}></div>
              </div>
              <div className="py-6">
                <h2 className={style.name}>Yritys sivut</h2>
                <p className={style.email}>
                  Rakennus- ja remontointipalvelu Velling yrityksen kotisivut.
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
          <h3 className={style.projectH3}>Mobiilisiovellukset</h3>

          <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3">
            <div className={style.memberContainer}>
              <div
                className={style.teamImg}
                style={{
                  backgroundImage: "url('')",
                }}
              >
                <div className={style.imgDarken}></div>
              </div>
              <div className="py-6">
                <h2 className={style.name}>BAC-Buddy</h2>
                <p className={style.email}>
                  Android-sovellus, jonka avulla käyttäjä voi mitata veren
                  alkopholipitoisuuden.
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
          <h3 className={style.projectH3}>Piirustukset</h3>
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

      <section className={style.teamSection} id="studies">
        <div className={style.teamContainer}>
          <h2 className={style.teamHeading}>Koulutus</h2>
          <div className="grid gap-10 grid-cols-1 max-w-screen-md mx-auto">
            <div className={style.memberContainer}>
              <div
                className={style.teamImgM}
                style={{
                  backgroundImage:
                    "url('https://upload.wikimedia.org/wikipedia/fi/thumb/6/61/Metropolia_Ammattikorkeakoulu_logo.svg/2560px-Metropolia_Ammattikorkeakoulu_logo.svg.png')",
                }}
              ></div>

              <div className="py-6">
                <h2 className={style.name}>
                  Tieto- ja viestintätekniikan insinööri tutkinto 2024
                </h2>
                <p className={style.email}>
                  Olen viimeisen vuoden insinööriopiskelija (219op). Pääaineena
                  mediatekniikka.
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
                <h2 className={style.name}>Datanomi tutkinto 2020</h2>
                <p className={style.email}>
                  Valmistuin datanomiksi Helsinki Business Collegesta vuonna
                  2020 verkkokehityksen linjalta keskiarvolla 4.7.
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

      <section className={style.hobbySection} id="hobbies">
        <div className={style.teamContainer}>
          <h2 className={style.teamHeading}>Harrastukset</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className={style.hobbyContainer}>
              <div
                className={style.infoImg}
                style={{
                  backgroundImage: "url('')",
                }}
              >
                <div className={style.imgDarken}></div>
              </div>
            </div>
            <div className={style.infoText}>
              <h2 className={style.infoH2}>Kuntosali</h2>
              <p>Pyrin käymään kuntosalilla noin 2-3 kertaa viikossa.</p>
            </div>

            <div className={style.infoText}>
              <h2 className={style.infoH2}>Salibandy</h2>
              <p>
                Pelasin salibandyä nuorempana sekä kilpa-, että haastajatasolla
                yli 12 vuotta. Pelasin myös yhden kauden miesten 5. divarissa.
                Olin joukkueissa Blackbirdsis ja TusBy. Nykyään käyn
                satunnaisissa harjoitus peleissä.
              </p>
            </div>
            <div className={style.hobbyContainer}>
              <div
                className={style.infoImg}
                style={{
                  backgroundImage: "url('')",
                }}
              >
                <div className={style.imgDarken}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default FrontPage;
