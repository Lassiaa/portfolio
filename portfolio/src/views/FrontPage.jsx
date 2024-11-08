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

  const images = [
    "https://cdn.discordapp.com/attachments/571697001826222096/1194190654000070676/IMG_2964.PNG?ex=65af73b6&is=659cfeb6&hm=d51997d5e3e90f63ed8fa8a54537e693216e22fa837be27ef765834df4c43887&",
    "https://cdn.discordapp.com/attachments/571697001826222096/1194185564694511676/Silvia-S15.png?ex=65af6ef9&is=659cf9f9&hm=5c2296f374b5a5d4ce105de38af4d4e4dc55d739387cb68ccd8ca4df78ce5854&",
    "https://cdn.discordapp.com/attachments/571697001826222096/1194185477897588826/Guy-With-Lantern.png?ex=65af6ee4&is=659cf9e4&hm=153e7c4af84556230b107839164652e6fd75f99bbf9290267568e3e7e50220b4&",
    "https://cdn.discordapp.com/attachments/571697001826222096/1194185527331655690/Kossi-painting.png?ex=65af6ef0&is=659cf9f0&hm=9147fe730ce68a3b17fefa03c8df5509f44499354c7f548c443cccc14d2dff5e&",
    "https://cdn.discordapp.com/attachments/571697001826222096/1194185529357520936/Guy-With-Pitchfork.png?ex=65af6ef1&is=659cf9f1&hm=740e46c004d1237a217480c746aaf3284bdcb8085ef39aa0b6acfb3f4912e5db&",
    "https://cdn.discordapp.com/attachments/571697001826222096/1194185475813015602/Concept-One.png?ex=65af6ee4&is=659cf9e4&hm=786210a9315330788f6f376d4cc78bd8bfa9855bbe4d9eb54c25882ebc0afc39&",
    "https://cdn.discordapp.com/attachments/571697001826222096/1194185565709541477/Wizard.png?ex=65af6ef9&is=659cf9f9&hm=c8ca4403ddd93a08aa42f8ecde7e661aaafb2a48e24cfa917d3a8b257fa8b691&",
    "https://cdn.discordapp.com/attachments/571697001826222096/1194185528304730122/r34_v2.png?ex=65af6ef0&is=659cf9f0&hm=07261bc61cfaee85557501dbccc6b6192ae7c229c56d7148e028278689143484&",
    "https://cdn.discordapp.com/attachments/571697001826222096/1194185447988019240/240girl.jpg?ex=65af6edd&is=659cf9dd&hm=20f53221faa1a118e7e973d985715713e3eca794464096e97ed110974f49cb72&",
    "https://cdn.discordapp.com/attachments/571697001826222096/1194190940345212938/Untitled_Artwork.png?ex=65af73fb&is=659cfefb&hm=dbc5167ab52319d28b858093522eb0deb4f02cc14d2c70b5f79bdf3f286a9462&",
    "https://cdn.discordapp.com/attachments/571697001826222096/1194185448461971476/Baby-Yoda.png?ex=65af6edd&is=659cf9dd&hm=50cf8251ccf22c2b35f2527946bc1206d781701f823064c964f4d0d00ab7bc5d&",
    "https://cdn.discordapp.com/attachments/571697001826222096/1194185476576399430/Donut.png?ex=65af6ee4&is=659cf9e4&hm=c872400e610fc2556c557e7a1811e472e0a56ba470633c9f990e26b851368b78&",
    "https://cdn.discordapp.com/attachments/571697001826222096/1194185449212756080/city-night-time.png?ex=65af6edd&is=659cf9dd&hm=eea60bae50b9d31f09cef2242ea83730914ef3d685e36917e36f3140cb3cc935&",
  ];

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
                  backgroundImage:
                    "url('https://cdn.discordapp.com/attachments/571697001826222096/1194003037602189412/cachedImage.PNG?ex=65aec4fb&is=659c4ffb&hm=06f7a2edd998f1eafc5328f0734416b037f3371d202b7c2ad3f75f0f6b1676cd&')",
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
                  backgroundImage:
                    "url('https://cdn.discordapp.com/attachments/1104847004686897245/1194272959670534294/46e204e0-6cd0-4637-a557-a08012d02279.JPG?ex=65afc05e&is=659d4b5e&hm=40e6d03126de3a381d2169f4649dc372221ca55b231fd767d5319f8a139f7c90&')",
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
                  backgroundImage:
                    "url('https://cdn.discordapp.com/attachments/1104847004686897245/1194181504570507314/image.png?ex=65af6b31&is=659cf631&hm=33331e3ee973fd772cd8f4eb05604f76d4c22823c755b6c72564544acc9d863c&')",
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
                  backgroundImage:
                    "url('https://cdn.discordapp.com/attachments/1104847004686897245/1194181879885213766/image.png?ex=65af6b8a&is=659cf68a&hm=ff882eda679bdb0091670b2aa101a479777faee8d1d85b31ce03b57b8b29b523&')",
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
                  backgroundImage:
                    "url('https://cdn.discordapp.com/attachments/1104847004686897245/1194182284916576317/Bac-Buddy.png?ex=65af6beb&is=659cf6eb&hm=e2f892b4686b5f698979362c42a7b51abe597a234abc5875f70901a3ca5d92f6&')",
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
