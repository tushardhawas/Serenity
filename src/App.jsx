// App.js

import MainBox from "./component/body/Mainbox";
import Navbar from "./component/navbar/Navbar";
import '../src/App.css'

function App() {
  return (
    <>
      <Navbar />

      <div className="head">
        "Immerse Yourself in Sounds: Explore the <br/>Symphony of Nature"
      </div>
      <MainBox />
    
    </>
  );
}

export default App;
