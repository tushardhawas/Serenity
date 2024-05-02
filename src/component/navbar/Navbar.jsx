import './Navbar.css';

const nav = () => {
  return (
    <>
      <div className="navbar">
        <div className=" logo">Serenity</div>
        <div className="nav-link">
          <ul>
            <li>Features</li>
            <li>How it works</li>
          </ul>
        </div>
        <div className="nav-button"><button className="button">Toogle</button></div>
      </div>
    </>
  );
};

export default nav;