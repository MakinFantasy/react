import "./App.css";
import Data from "./components/Data";
import Navbar from "./components/Navbar";
import MainRouter from "./components/MainRouter";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Navbar />
      <MainRouter />
      <Data />
      <Form />
    </>
  );
}

export default App;
