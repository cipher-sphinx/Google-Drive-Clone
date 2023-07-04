import Main from "./components/Main";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";

const react = require("react");
const ReactDOM = require("react-dom");

function App() {
  return (
    <div>
      <Navbar />
      {/* <div class="navbar-fixed">
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
                  <i class="material-icons grey-text text-darken-1">
                    view_list
                  </i>
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
      </div> */}

      {/* ------------------------------- */}
      <SideMenu />
      {/* <ul class="side-nav fixed floating transparent z-depth-0">
        <li class="active">
          <a href="#!">
            <i class="material-icons blue-text text-darken-1">dashboard</i>My
            Drive
          </a>
        </li>
        <li>
          <a href="#">
            <i class="material-icons">devices</i>Computers
          </a>
        </li>
        <li>
          <a href="#">
            <i class="material-icons">people</i>Shared with me
          </a>
        </li>
        <li>
          <a href="#">
            <i class="material-icons">access_time</i>Recent
          </a>
        </li>
        <li>
          <a href="#">
            <i class="material-icons">camera</i>Google Photos
          </a>
        </li>
        <li>
          <a href="#">
            <i class="material-icons">star</i>Starres
          </a>
        </li>
        <li>
          <a href="#">
            <i class="material-icons">delete</i>Trash
          </a>
        </li>
        <li>
          <div class="divider"></div>
        </li>
        <li>
          <a href="#">
            <i class="material-icons">cloud</i>Backup
          </a>
        </li>
        <li>
          <div class="divider"></div>
        </li>
        <li>
          <a href="#">
            <i class="material-icons">storage</i>Upgrade storage
          </a>
        </li>
      </ul> */}

      {/* ----------------------------------- */}

      <Main />

      {/* <div class="main">
        <div class="container-fluid">
          <p class="subheader">Folders</p>
          <div class="card-panel folder">
            <i class="material-icons left">folder</i>Folder
          </div>
          <div class="card-panel folder">
            <i class="material-icons left">folder</i>Folder
          </div>
          <div class="card-panel folder">
            <i class="material-icons left">folder</i>Folder
          </div>
          <div class="card-panel folder">
            <i class="material-icons left">folder</i>Folder
          </div>
        </div>
      </div> */}

      {/* ------------------------------- */}
    </div>
  );
}

export default App;
