import Global from "./Global";
import Index from "./page/index";
import Form from "./page/formpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Global />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/form" element={<Form />} />
          {/* <Route path="/*" element={<Notfound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
