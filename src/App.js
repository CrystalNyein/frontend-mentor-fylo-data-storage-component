import "./App.css";
import logo from "./assets/images/logo.svg";
import document from "./assets/images/icon-document.svg";
import folder from "./assets/images/icon-folder.svg";
import upload from "./assets/images/icon-upload.svg";

function App() {
  return (
    <main className="App">
      <div className="container">
        <div className="fylo">
          <h1></h1>
          <img id="logo" src={logo} alt="Fylo Logo" />
          <div className="actions">
            <div className="img-div">
              <img src={document} alt="Document Icon" />
            </div>
            <div className="img-div">
              <img src={folder} alt="Folder Icon" />
            </div>
            <div className="img-div">
              <img src={upload} alt="Upload Icon" />
            </div>
          </div>
        </div>
        <div className="data-usage">
          <h4>
            You've used <span>815GB</span> of your storage
          </h4>
          <div className="slider">
            <div className="progress-bar" />
            <div className="gb-reminder">
              185 <span>Gb left</span>
            </div>
          </div>
          <div className="value">
            <p>0 GB</p>
            <p>1000 GB</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
