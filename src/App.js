import Banner from "components/Banner";
import Menu from "components/Menu";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Banner />

    </BrowserRouter>
  );
}

export default App;
