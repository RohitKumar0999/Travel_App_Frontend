// import "./navbar.css";
export const Navbar = () => {
  return (
    <header className="heading d-flex gap-large align-center fixed">
      <h1 className="heading-1 cursor-pointer">
        <a className="link" href="/">
          TravelO
        </a>
      </h1>
      <div className="form-container d-flex  align-center cusor-pointer">
        <span className="form-option">Any Where</span>
        <span className=" border-right-1px"></span>
        <span className="form-option">Any Week</span>
        <span className=" border-right-1px"></span>
        <span className="form-option">Add Guests</span>
        <span className="material-icons-outlined  search">search</span>
      </div>
      <nav className="d-flex align-center gap-large cusor-pointer">
        <div className="nav d-flex gap-large align-center ">
          <span className="material-icons-outlined profile-option menu">
            menu
          </span>
          <span className="material-icons-outlined profile-option person ">
            person_2
          </span>
        </div>
      </nav>
    </header>
  );
};
