import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/morph/bootstrap.min.css';
import reportWebVitals from "./reportWebVitals";



ReactDOM.render(
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>,
    document.getElementById("root")
  );

  reportWebVitals();
