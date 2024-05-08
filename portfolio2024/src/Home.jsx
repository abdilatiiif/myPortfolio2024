import ProfilLogo from "./images/profile.png";
import profilePic from "./images/megPortfolio.png";
import x from "./images/x.png";
import linkedin from "./images/linkedin.png";
import facebook from "./images/facebook.png";
import github from "./images/github.png";

function Home() {
  return (
    <>
      <header className="header overflow-hidden min-w-full min-h-screen p-10 container mx-auto">
        <nav className="navbar  shadow-2xl flex md:flex-row justify-between items-center h-16 bg-white rounded-xl">
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
    </>
  );
}

function MainContent() {
  return (
    <div className=" flex flex-col justify-evenly items-center min-h-screen">
      <div className="p-5 bg-green-300 md:-translate-x-64 text-3xl">
        {" "}
        Freelance <br></br> Developer & Designer{" "}
      </div>{" "}
      <div className="card2">
        <div className="card2-inner">
          <div className="card2-front">
            <img
              className="max-w-full max-w-xl rounded-full shadow-2xl"
              src={profilePic}
              alt="meg"
            />
          </div>
          <div className="card2-back flex flex-col">
            <div>Age: 28</div>
            <div>Addresse: Hamar, 2316</div>
            <div>Telefon: 47 47707***</div>
            <div>Hobby: Gym, Football + Cooking </div>
          </div>
        </div>
      </div>
      <button className="btn-scroll absolute bottom-20 border md:right-10">
        Scroll down{" "}
      </button>
      <Socials />
    </div>
  );
}

function Socials() {
  return (
    <div className=" mt-10 bottom-2/4 w-72 h-20 flex justify-center items-center">
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
