import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mynav from "./components/Mynav";
import Myfooter from "./components/Myfooter";
import Welcome from "./components/Welcome";
import Allthebooks from "./components/AlltheBooks";
function App() {
  return (
    <>
      <Mynav />
      <Welcome />
      <Allthebooks />
      <Myfooter />
    </>
  );
}

export default App;
