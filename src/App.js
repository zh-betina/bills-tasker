import { BrowserRouter } from "react-router-dom";

import Views from "./Views/Views";
import Background from "./Background/Background";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Background/>
        <Views />
      </div>
    </BrowserRouter>
  );
}

export default App;
