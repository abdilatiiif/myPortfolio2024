import ProfilLogo from "./images/profile.png";
import profilePic from "./images/megPortfolio.png";
import x from "./images/x.png";
import linkedin from "./images/linkedin.png";
import facebook from "./images/facebook.png";
import github from "./images/github.png";

function Home() {
  return (
    <header className="header min-h-full min-w-full p-10 container mx-auto">
      <nav className="navbar  shadow-2xl flex md:flex-row justify-between items-center h-16 bg-white relative rounded-xl">
        <img className="nav--logo" src={ProfilLogo} alt="picLogo"></img>
        <ul className="nav--items gap-2 lg:gap-10  md:flex md:text-center justify-center md:text-xl lg:text-2xl items-center hidden  p-0 m-0 flex uppercase">
          <li className="uppercase font-light">About</li>
          <span>/</span>
          <li className="uppercase font-light">Skills</li>
          <span>/</span>
          <li className="uppercase font-light">Projects</li>
          <span>/</span>
          <li className="uppercase font-light">Contact</li>
        </ul>
        <button className="btn-31">
          <span className="text-container">
            <span className="text">Contact</span>
          </span>
        </button>
      </nav>
      <MainContent />
    </header>
  );
}

function MainContent() {
  return (
    <div className="min-w-full min-h-screen mx-auto flex flex-col justify-between relative h-full">
      <div className="absolute left-4 top-10">
        {" "}
        Freelance <br></br> Developer & Designer{" "}
      </div>{" "}
      <div className="flex flex-col md:flex-row">
        <img
          className=" w-6/12 max-w-xl rounded-full absolute top-20 right-5 md:right-6 md:top-4 shadow-2xl"
          src={profilePic}
          alt=""
        />
        <h1 className="text-4xl md:text-5xl md:absolute top-60 left-6 md:top-60 left-0">
          ABDILATIF M.A
        </h1>
        <Socials />
      </div>
      <button className="btn-scroll">Scroll down </button>
    </div>
  );
}

function Socials() {
  return (
    <div className="absolute bottom-2/4 left-10 w-72 h-20 flex justify-center items-center">
      <div className="card">
        <span>Social</span>
        <img className="social-link" src={x} alt="" />
        <img className="social-link" src={facebook} alt="" />
        <img className="social-link" src={linkedin} alt="" />
        <img className="social-link" src={github} alt="" />
      </div>
    </div>
  );
}

export default Home;
