function Navbar() {
  return (
    <div class="navbar-fixed">
      <nav class="nav-extended white">
        <div class="nav-wrapper white">
          <ul>
            <li>
              <a href="#!" class="title grey-text text-darken-1">
                Google Drive
              </a>
            </li>
          </ul>
          <div class="search-wrapper">
            <i class="material-icons">search</i>
            <input type="search" name="search" placeholder="Search Drive" />
          </div>
          <ul class="right">
            <li>
              <a href="#!">
                <i class="material-icons grey-text text-darken-1">apps</i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="material-icons grey-text text-darken-1">
                  notifications
                </i>
              </a>
            </li>
            <li>
              <a href="#!">
                <img
                  src="Bioman-Avatar-2-Green-icon.png"
                  alt="profile pic"
                  class="circle"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="nav-wrapper nav-2">
          <ul>
            <li>
              <a
                href="#!"
                class="waves-effect waves-light btn btn-flat white-text"
              >
                New
              </a>
            </li>
          </ul>
          <ul class="right">
            <li>
              <a href="#!">
                <i class="material-icons grey-text text-darken-1">view_list</i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="material-icons grey-text text-darken-1">info</i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="material-icons grey-text text-darken-1">settings</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
