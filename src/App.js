import logo from './logo.svg';
import "../src/style.css"
import './App.css';
import imageInSrc from "../src/imageInSrc.jpg"

function App() {
  const style = { border: "solid 1px black", maxWidth: "100vw" };
  return (
    <div className="App">
      <div style={style}>
        <h1 className="title red">Karima Sassi</h1>
        <img src={imageInSrc} style={{maxWidth:'100px'}}/>
        <img src="/imageInPublic.jpg" style={{maxWidth:'179px'}} />
      </div>
      <video
        src="myVideo.mp4"
        type="video/mp4"
        width="320"
        height="240"
        controls
      />
    </div>
  );
}

export default App;
