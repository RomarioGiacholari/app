function Navbar() {
  return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbar" className="navbar-menu">
            <div className="navbar-end">
                <a className="navbar-item" href="https://giacholari.com">home</a>
                <a className="navbar-item" href="https://assets.giacholari.com/pdf/cv.pdf">resume</a>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
