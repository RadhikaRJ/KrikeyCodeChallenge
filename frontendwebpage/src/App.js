import "./App.css";
import WebPage from "./components/AuthorsWebPage/WebPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App-container">
      <NavBar />
      <div className="rectangle-container">
        <WebPage />
      </div>
    </div>
  );
}

export default App;
