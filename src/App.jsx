import Global from "./Global";
import Index from "./page/index";
import Privacy from "./page/Privacy";
import Form from "./page/Formpage";
import Notfound from "./page/Notfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Global />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/form" element={<Form />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
