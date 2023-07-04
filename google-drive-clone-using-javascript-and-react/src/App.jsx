import Main from "./components/Main";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";

const react = require("react");
const ReactDOM = require("react-dom");

function App() {
  return (
    <div>
      <Navbar />
      <SideMenu />
      <Main />
    </div>
  );
}

export default App;
