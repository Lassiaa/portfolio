const style = {
  body: "w-screen mx-auto text-white bg-gray-100",

  headerHidden: "hidden",
  headerSticky: "sticky top-0 left-0 font-inter mx-4 z-10 h-20",

  headerContent: "ease-in-out duration-300 rounded-b-md flex flex-row gap-4",
  headerContentContrast:
    "ease-in-out duration-300 bg-gray-100 rounded-b-md flex flex-row gap-4",

  headerH1:
    "ease-in-out duration-300 text-4xl text-left text-secondary font-abril p-4",
  headerH1Contrast:
    "ease-in-out duration-300 text-4xl text-left text-primary font-abril p-4",

  headerContents: "hidden sm:flex items-center text-left gap-10 p-4 text-sm",

  headerA:
    "text-white relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:rounded-md before:opacity-0 before:transition-all before:duration-500 before:bg-secondary hover:text-secondary hover:before:w-full hover:before:opacity-100",
  headerAContrast:
    "text-gray-700 relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:rounded-md before:opacity-0 before:transition-all before:duration-500 before:bg-primary hover:text-primary  hover:before:w-full hover:before:opacity-100",

  headerAMobile:
    "text-white relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:rounded-md before:opacity-0 before:transition-all before:duration-500 before:bg-secondary hover:text-secondary hover:before:w-full hover:before:opacity-100",

  mobileMenu:
    "absolute top-0 -left-4 items-center justify-center h-screen w-screen bg-secondary ",
  mobileMenuClose: "absolute top-4 left-4",
  mobileMenuContent:
    "flex flex-col gap-10 text-center align-center h-screen w-screen",

  bannerImage:
    "w-screen h-screen bg-cover bg-center bg-no-repeat font-playfair",

  bannerContent: "bg-black bg-opacity-50 h-screen grid grid-cols-1 gap-4",
  bannerTitle: "h-20 pt-20 text-6xl text-center text-secondary font-abril",

  bannerInfo: "text-center self-center pt-10",
  bannerLassi:
    "h-80 w-80 xs:h-96 xs:w-96  mx-auto border-2 border-secondary border-opacity-60 rounded-full",
  lassiImg: "bg-cover bg-top bg-no-repeat w-full h-full rounded-full",
  lassiDarken:
    "ease-in-out duration-300 bg-black bg-opacity-20 hover:bg-opacity-0 h-full w-full rounded-full",

  bannerName: "text-4xl font-bold text-secondary pt-4",
  bannerIcon:
    "text-secondary hover:text-primary transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110",
  alert:
    "ease-in-out duration-300 text-center text-secondary text-lg font-inter",

  bannerArrowContainer:
    "h-20 pb-20 self-end justify-self-center grid grid-cols-1 gap-4",
  bannerArrow:
    "text-secondary transition duration-500 ease-in-out transform hover:-translate-y-1",

  infoSection: "w-full sm:max-w-5xl mx-auto text-gray-700",
  infoContainer:
    "h-fit w-full mx-auto border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden",
  infoImg: "bg-cover bg-center bg-no-repeat w-full h-96",

  infoText: "text-left text-md font-inter",
  infoH2: "text-3xl font-bold font-josefin text-secondary pb-4",
  infoH3: "text-2xl font-bold font-josefin text-secondary py-4",

  teamSection: "max-w-full sm:max-w-5xl mx-auto text-gray-700",
  teamContainer: "container px-5 py-24 mx-auto",
  teamHeading: "text-3xl p-12 pb-20 text-primary font-abril",
  projectH31: "text-xl pb-10 text-secondary text-left",
  projectH3: "text-xl py-10 text-secondary text-left",
  memberContainer:
    "h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:border-secondary transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110",
  teamImg:
    "bg-cover bg-center bg-no-repeat w-full lg:h-48 md:h-36 w-full object-cover object-center",
  teamImgM:
    "bg-cover bg-bottom mx-auto bg-no-repeat w-1/2 lg:h-48 md:h-36 w-full object-cover object-center",
  name: "text-lg font-josefin text-gray-900 py-2",
  email: "leading-relaxed mb-3 text-sm font-inter",
  info: "leading-relaxed mb-3",
  icon: "text-primary hover:text-secondary transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110",

  imgDarken:
    "ease-in-out duration-300 bg-black bg-opacity-20 hover:bg-opacity-0 h-full w-full",

  modalStyle:
    "w-3/5 h-4/5 m-20 align-center mx-auto bg-white rounded-lg border-2 border-gray-200 border-opacity-60 box-shadow-2xl z-20 focus:outline-none",
  modalImg: "bg-cover bg-center bg-no-repeat w-full rounded-md p-2",
  modalBtnContainer: "w-full h-20 flex flex-row justify-center gap-4",
  modalBtn:
    "ease-in-out duration-300 text-white bg-secondary h-12 my-2 py-2 px-6 focus:outline-none hover:bg-primary rounded text-md justify-self-center",

  hobbySection: "max-w-5xl mx-auto text-gray-700",
  hobbyContainer:
    "h-full w-full mx-auto border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden",
};

export default style;
