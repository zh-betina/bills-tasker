import { BrowserRouter } from "react-router-dom";

import Views from "./Views/Views";
import Bottom from "./Bottom/Bottom";
import Background from "./Background/Background";
//import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Background/>
        <Views />
        <Bottom />
      </div>
    </BrowserRouter>
  );
}

export default App;
