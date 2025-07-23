import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mynav from "./components/Mynav";
import Myfooter from "./components/Myfooter";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
import Generelibri from "./assets/horror.json";
import BookList from "./components/Booklist";
function App() {
  return (
    <>
      <Mynav />
      <Welcome />
      <BookList array={Generelibri} />
      <SingleBook
        copertina={Generelibri[0].img}
        titolo={Generelibri[0].title}
      />

      <Myfooter />
    </>
  );
}

export default App;
