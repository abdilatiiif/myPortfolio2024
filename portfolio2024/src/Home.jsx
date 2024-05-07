import ProfilLogo from "./images/profile.png";

function Home() {
  return (
    <header className="header">
      <nav className="navbar">
        <img className="nav--logo" src={ProfilLogo} alt="picLogo"></img>
        <ul className="nav--items">
          <li>About</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
        <button>Contact me</button>
      </nav>
    </header>
  );
}

export default Home;
